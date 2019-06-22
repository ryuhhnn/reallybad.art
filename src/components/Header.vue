<template>
  <div class="header">
    <h1>
      Hello,
      <br>my name is
      <a href="https://www.ryuhhnn.com" target="_blank">@ryuhhnn</a>
      <br>and I make really bad art.
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;

  @media screen and (min-width: 436px) {
    padding-left: 50px;
  }

  @media screen and (min-width: 769px) {
    padding-left: 100px;
  }

  h1 {
    font-size: 2.5em;
    line-height: 0.95em;
    animation: fade-in 0.75s ease-in;

    @media screen and (min-width: 1025px) {
      font-size: 4.5em;
    }
  }
}
</style>
