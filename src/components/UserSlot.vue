<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName: "John",
        lastName: "Doe",
      },
    };
  },
};
</script>
<style></style>
