const io = require('socket.io-client/dist/socket.io');
const serverUrl = process.env.NODE_ENV !== 'production'
  ? 'ws://localhost:3000'
  : '';

let api = {
  apiUrl: '/api',
  connection: null,
  requestTimeout: 10000,
  /**
   * Creates socket.io connection by the url
   * @param {String} [url] - url to connect.
   * @return {Promise}
   * */
  connect({ url = serverUrl } = { }) {
    return new Promise((resolve, reject) => {
      if (this.connection && this.connection.connected) {
        return resolve(this.connection);
      }

      this.connection = new io(url, { transports: ['websocket', 'polling'] });

      this.connection.once('connect', () => {
        return resolve(this.connection);
      });
    });
  },
  /**
   * Socket request
   * @param {String} url
   * @param {Object} query
   * @return {Promise}
   * */
  request(url = '', query = {}) {
    return new Promise((resolve, reject) => {
      let timeout = setTimeout(() => {
        let msg = 'Request Timeout';
        let err = new Error(msg);

        err.error = msg;
        err.statusCode = 408;

        timeout = null;
        return reject(err);
      }, this.requestTimeout);

      this.connection.emit(url, query, (error, data) => {
        if (timeout !== null) {
          clearTimeout(timeout);

          if (error) {
            let msg = error.error;
            let err = new Error(msg);

            err.error = msg;
            err.statusCode = error.statusCode;

            return reject(err);
          }

          return resolve(data);
        }
      });
    });
  },
  /**
   * Add additional methods to this object
   * @param {String} name - interface name
   * @param {Array} methods - interface methods array
   * */
  addInterface({ name, methods }) {
    this[name] = {};

    for (let method of methods) {
      let url = this.apiUrl + '/' + name + method;
      let nameOfMethod = method.split('/')[1];

      /**
       * Api method
       * @param {Object} query
       * @return {Promise}
      * */
      this[name][nameOfMethod] = this.request.bind(this, url);
    }
  }
};

import User from './interfaces/User';

api.addInterface({ name: 'User', methods: User });

export default api;
