<template>
  <RouterView />
</template>
<script setup>
import 'prismjs/themes/prism-tomorrow.css';
import { RouterView } from 'vue-router';
</script>
<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>