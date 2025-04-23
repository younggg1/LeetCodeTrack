<template>
  <div class="layout">
    <nav class="side-nav">
      <ul>
        <li
          class="intro-item"
          :class="{active: route.path === '/' || route.path === ''}"
          @click="goNav('/')"
        >
          简介
        </li>
        <li
          v-for="item in navs.slice(1)"
          :key="item.path"
          :class="{active: route.path === item.path}"
          @click="goNav(item.path)"
        >
          {{ item.label }}
        </li>
      </ul>
    </nav>
    <div class="content-area">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const route = useRoute();
const navs = [
  { label: '简介', path: '/' },
  { label: '编程基础0到1', path: '/zeroToOne' },
  { label: '面试精华75题', path: '/interview75' },
  { label: '高频SQL50题(基础版)', path: '/sql50' },
  { label: '动态规划(基础版)', path: '/dp' },
  { label: '热题100', path: '/hot100' },
  { label: '面试经典150题', path: '/interview150' },
];
const activePath = ref(route.path === '/' ? '/' : route.path.replace(/^\//, ''));

watch(
  () => route.path,
  (val) => {
    activePath.value = val === '/' ? '/' : val.replace(/^\//, '');
  },
  { immediate: true }
);

function goNav(path) {
  router.push(path);
}
</script>
<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.side-nav {
  width: 200px;
  background: #f7f9fa;
  border-right: 1px solid #eee;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side-nav ul {
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-item {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 38px;
  margin-top: 12px;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
  color: #333;
  transition: background 0.2s, color 0.2s;
}
.side-nav li {
  padding: 14px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: #333;
  font-size: 1.1em;
  transition: background 0.2s, color 0.2s;
}
.side-nav li.active,
.side-nav li:hover,
.intro-item.active,
.intro-item:hover {
  background: #e6f7ff;
  color: #1890ff;
  font-weight: bold;
}
.content-area {
  flex: 1;
  background: #f6f8fa;
  padding: 0 0 0 0;
  overflow-y: auto;   /* 只让内容区垂直滚动 */
  min-height: 0;      /* 防止撑开父容器 */
  height: 100vh;      /* 或 100% 若父容器高度已撑满 */
  box-sizing: border-box;
}
</style>