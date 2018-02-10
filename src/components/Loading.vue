<template>
  <section id="loading">
    <div class="loader"/>
  </section>
</template>

<script>
  export default {
    name: 'loading',
  };
</script>

<style lang="scss">
  $size: 80px;
  $speed: 3s;
  $peakopacity: .5;
  $from-color: #000000;
  $to-color: #000000;

  @keyframes loader-animation {
    0% {
      border-color: rgba(0,0,0,0);
      transform:translate($size*4/-6,$size/-6)rotate(-135deg) ;
    }
    25% {
      border-color: rgba($from-color, $peakopacity);
    }
    50% {
      border-color: rgba($to-color, $peakopacity);
      transform:translate(0px,$size/-6)rotate(-135deg);
    }
    100% {
      border-color: rgba(0,0,0,0);
      transform:translate($size*4/6,$size/-6)rotate(-135deg) ;
    }
  }

  #loading {
    width: 100%;
    height: 100%;
    position: relative;

    .loader {
      position: absolute;
      left: 50%;
      top: 50%;
      width: $size;
      height: $size;
      transform:translate(-50%,-50%);

      &:before {
        content: '';
        position: absolute;
        width:100%;
        height:100%;
        border-left:$size/3 solid rgba(0,0,0,$peakopacity);
        border-bottom:$size/3 solid rgba(0,0,0,$peakopacity);
        transform:translate($size/3,$size*4/3)rotate(-135deg);
        animation: loader-animation $speed linear infinite;
      }

      &:after {
        content: '';
        position: absolute;
        width:100%;
        height:100%;
        border-left:$size/3 solid rgba(0,0,0,$peakopacity);
        border-bottom:$size/3 solid rgba(0,0,0,$peakopacity);
        transform:translate($size*2/3,0px)rotate(-135deg) ;
        animation: loader-animation $speed linear infinite $speed/-2;
      }
    }
  }
</style>
