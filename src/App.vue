<template>
  <div id="app">
    <Header />
    <ImageLeft img="/img/obermer.png" title="Barack Obama" />
    <ImageRight img="/img/yonce.png" title="Beyoncé Knowles-Carter" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ImageLeft from './components/ImageLeft.vue'
import ImageRight from './components/ImageRight.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    ImageLeft,
    ImageRight,
    Footer
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

@keyframes fade-in {
  0% {
    transform: translateY(250px);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fade-in-left {
  0% {
    transform: translateX(250px);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes fade-in-right {
  0% {
    transform: translateX(-250px);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

a {
  color: #a5a5a5;
  text-decoration: none;
  transition: color .25s ease-in-out;
}

a:hover {
  color: #eee;
}
</style>
