<template>
  <div class="image-right">
    <div class="left">
      <h2>{{ title }}</h2>
    </div>
    <div class="right">
      <img class="js-tilt" :src="img" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
require('tilt.js')

export default {
  name: 'ImageRight',
  props: ['img', 'title'],
  methods: {
    isInViewport() {
      if ($(this.$el).isInViewport())
        this.$el.classList.add('fade-in')
        
      requestAnimationFrame(this.isInViewport)
    }
  },
  mounted() {
    $.fn.isInViewport = function () {
      let elementTop = $(this).offset().top
      let elementBottom = elementTop + $(this).outerHeight()
      let viewportTop = $(window).scrollTop()
      let viewportBottom = viewportTop + $(window).height()

      return elementBottom > viewportTop && elementTop < viewportBottom
    }

    $('.js-tilt').tilt({
      perspective:  1500
    })

    requestAnimationFrame(this.isInViewport)
  }
}
</script>

<style lang="scss" scoped>
.image-right {
  padding: 100px 0;
  display: flex;

  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
  }

  &.fade-in {
    animation: fade-in-right 1s ease-in;
  }

  .right {
    width: 50%;

    @media screen and (max-width: 425px) {
      width: 100%;
    }

    @media screen and (min-width: 769px) {
      padding-right: 100px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    @media screen and (max-width: 425px) {
      align-self: flex-end;
    }

    h2 {
      font-size: 2em;
    }
  }
}
</style>
