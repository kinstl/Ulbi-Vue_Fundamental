<template>
  <button class="btn" :type="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: burlywood;
  border: 1px solid burlywood;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  color: white;
  background: burlywood;
}
</style>
