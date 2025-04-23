import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Introduction from '@/views/Introduction.vue';


const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: Introduction }, // 简介页
      { path: 'hot100', component: () => import('@/views/Hot100/Hot100.vue') }, // 热题100列表
      { path: 'hot100/:id', component: () => import('@/views/Hot100/Hot100Detail.vue') }, // 热题100详情
      { path: 'interview150', component: () => import('@/views/Interview150/Interview150.vue') }, // 面试150题列表
      { path: 'interview150/:id', component: () => import('@/views/Interview150/Interview150Detail.vue') }, // 面试150题详情
      { path: 'zeroToOne', component: () => import('@/views/ZeroToOne/ZeroToOne.vue') }, // 编程基础0到1
      { path: 'zerotoone/:id',component: () => import('@/views/ZeroToOne/ZeroToOneDetail.vue') }, // 编程基础0到1详情
      { path: 'interview75', component: () => import('@/views/Interview75/Interview75.vue') }, // 面试75题列表
      { path: 'interview75/:id', component: () => import('@/views/Interview75/Interview75Detail.vue') }, // 面试75题详情
      { path: 'sql50', component: () => import('@/views/SQL50/SQL50.vue') }, // SQL50题列表
      { path: 'sql50/:id', component: () => import('@/views/SQL50/SQL50Detail.vue') }, // SQL50题详情
      { path: 'dp', component: () => import('@/views/DynamicPlan/DynamicPlan.vue') }, // 动态规划列表
      { path: 'dp/:id', component: () => import('@/views/DynamicPlan/DynamicPlanDetail.vue') } // 动态规划题目详情
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});