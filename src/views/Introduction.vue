<template>
  <div class="intro-container">
    <h1>LeetCode 刷题记录项目</h1>
    <p class="intro-desc">
      本项目是记录自己刷题的记录，思路以及代码，涵盖了<span class="highlight">热题100</span>、<span class="highlight">面试经典150题</span>、<span class="highlight">面试精华75题</span>、<span class="highlight">高频SQL50题(基础版)</span>、<span class="highlight">编程基础 0 到 1</span>
      、<span class="highlight">动态规划(基础版)</span>
    </p>
    <div class="intro-section">
      <h2>🌟 为什么要做这个项目？</h2>
      <ul>
        <li>刷题记录更系统，查找题目更方便</li>
        <li>整理高频面试题，提升刷题效率</li>
        <li>开源共享，方便更多人一起进步</li>
      </ul>
    </div>
    <div class="intro-section">
      <h2>为什么示例代码是Java而不是其他编程语言?</h2>
      <ul>
        <li>个人原因：本人主要使用的编程语言是Java，所以示例代码也是Java</li>
        <li>丰富的标准库：Java自带丰富的集合框架（如List、Set、Map等）</li>
        <li>职业相关：未来想从事Java方面的工作，所以算法题用Java实现，提升开发能力</li>
        <li>顺便提一下高频SQL50题(基础版)是用的MySQL</li>
      </ul>
    </div>
    <div class="intro-section">
      <h2>为什么题目不全？</h2>
      <ul>
        <li>因为没有力扣Plus会员，只会记录免费的题目</li>
        <li>题目是逐步更新的，正在努力更新中</li>
        <li>如果觉得对你有用，可以给个star</li>
      </ul>
    </div>
    <div class="intro-section">
      <h2>🔗 项目开源地址</h2>
      <a
        class="github-link"
        href="https://github.com/younggg1/LeetCodeTrack.git"
        target="_blank"
        rel="noopener"
      >点击跳转到 GitHub</a>
    </div>
  </div>
</template>

<style scoped>
.intro-container {
  padding: 18px 24px 24px 24px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  max-width: 100%;
  min-width: 0;
  /* 防止内容溢出导致滚动 */
  overflow: visible;
}
h1 {
  font-size: 2.3em;
  color: #1890ff;
  margin-bottom: 18px;
  letter-spacing: 2px;
  font-weight: 800;
}
.intro-desc {
  font-size: 1.15em;
  color: #444;
  margin-bottom: 24px;
  line-height: 1.9;
}
.highlight {
  color: #fa541c;
  font-weight: bold;
}
.intro-section {
  margin-bottom: 22px;
}
.intro-section h2 {
  font-size: 1.13em;
  color: #222;
  margin-bottom: 8px;
  font-weight: bold;
  letter-spacing: 1px;
}
.intro-section ul {
  padding-left: 22px;
  margin: 0;
  color: #555;
  font-size: 1.05em;
  line-height: 2.1;
}
.github-link {
  color: #fff;
  background: #24292f;
  padding: 10px 28px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.13em;
  transition: background 0.2s;
  display: inline-block;
  margin-top: 8px;
  box-shadow: 0 2px 8px #eee;
}
.github-link:hover {
  background: #0366d6;
}
</style>