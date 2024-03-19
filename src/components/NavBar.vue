<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('about')"
        >О сайте</my-button
      >
      <my-button style="margin-left: 20px" @click="navigatePostPage('posts')"
        >Посты на Option API</my-button
      >
      <my-button
        style="margin-left: 20px"
        @click="navigatePostPage('composition')"
        >Посты на Composition API</my-button
      >
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
    }),
    navigatePostPage(path) {
      this.setPage(1);
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
