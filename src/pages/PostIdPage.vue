<template>
  <div>
    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
    <user-slot v-slot="slotProps">
      <p>Имя: {{ slotProps.user.firstName }}</p>
      <p>Фамилия: {{ slotProps.user.lastName }}</p>
    </user-slot>
  </div>
</template>
<script>
import UserSlot from "@/components/UserSlot.vue";
export default {
  components: {
    UserSlot,
  },
};
</script>
<style></style>
