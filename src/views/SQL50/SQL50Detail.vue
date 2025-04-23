

<template>
  <div class="detail-main">
    <button class="back-btn" @click="goBack">← 返回</button>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="question">
      <h2 class="title">
        #{{ question.id }} {{ question.title }}
        <span class="difficulty" :class="question.difficulty">{{ question.difficulty }}</span>
      </h2>
      <div class="section">
        <div class="section-label">题目描述：</div>
        <div class="description-block">{{ question.description }}</div>
      </div>
      <div v-if="Array.isArray(question.idea) && question.idea.length">
        <div v-for="(idea, idx) in question.idea" :key="idx" class="section">
          <div class="section-label">解题思路 {{ question.idea.length > 1 ? idx + 1 : '' }}</div>
          <div class="solution">{{ idea }}</div>
          <div v-if="Array.isArray(question.code) && question.code[idx]" class="section">
            <div class="section-label">
              示例代码(Mysql) {{ question.code.length > 1 ? idx + 1 : '' }}：
              <button class="copy-btn" @click="copyCode(idx)">复制</button>
              <span v-if="copiedIndex === idx && copied" class="copy-success">已复制！</span>
            </div>
            <pre class="code language-mysql" v-html="highlightCode(question.code[idx], idx)"></pre>
          </div>
        </div>
      </div>
      <div class="section" v-if="question.originalUrl">
        <div class="section-label">原题链接：</div>
        <div><a :href="question.originalUrl" target="_blank">{{ question.originalUrl }}</a></div>
      </div>
      <div class="section" v-if="question.tags && question.tags.length">
        <div class="section-label">标签：</div>
        <span class="tag" v-for="tag in question.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.js';
import { useQuestionBankStore } from '@/stores/questionBank';

const route = useRoute();
const router = useRouter();
const store = useQuestionBankStore();

const loading = ref(true);
const error = ref('');
const highlightedCode = ref([]); // 多代码高亮
const copiedIndex = ref(-1);
const copied = ref(false);

const question = computed(() => store.getQuestion('sql50', route.params.id));

// 多代码高亮
function highlightCode(code, idx) {
  if (!code) return '';
  return Prism.highlight(code, Prism.languages.java, 'java');
}

function copyCode(idx) {
  if (Array.isArray(question.value.code) && question.value.code[idx]) {
    navigator.clipboard.writeText(question.value.code[idx]).then(() => {
      copied.value = true;
      copiedIndex.value = idx;
      setTimeout(() => { copied.value = false; }, 1200);
    });
  }
}

onMounted(async () => {
  if (!store.loaded) {
    await store.loadAll();
  }
  loading.value = false;
  if (!question.value) {
    error.value = '未找到该题目';
  }
});

// 监听代码变化自动高亮，防止刷新丢失颜色
watch(
  () => question.value && question.value.code,
  (codes) => {
    if (Array.isArray(codes)) {
      codes.forEach((c, i) => {
        highlightedCode.value[i] = Prism.highlight(c, Prism.languages.java, 'java');
      });
    }
  },
  { immediate: true }
);

function goBack() {
  router.back();
}
</script>
<style>

.detail-main {
  padding: 32px 0 32px 24px; /* 上 右 下 左 */
  background: transparent;
  max-width: 100%;
  margin: 0;
}
.back-btn {
  background: none;
  color: #1890ff;
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0 10px 0 0;
}
.title {
  font-size: 1.5em;
  color: #222;
  margin-bottom: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
}
.difficulty {
  font-size: 0.85em;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 8px;
  color: #fff;
}
.difficulty.简单 { background: #52c41a; }
.difficulty.中等 { background: #faad14; }
.difficulty.困难 { background: #ff4d4f; }
.origin-link {
  color: #fff;
  background: #1890ff;
  border-radius: 4px;
  padding: 2px 12px;
  text-decoration: none;
  font-size: 0.98em;
  margin-left: 8px;
  transition: background 0.2s;
}
.origin-link:hover {
  background: #fa541c;
}
.section {
  margin-bottom: 18px;
}
.section-label {
  color: #1890ff;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.08em;
}
.desc, .solution {
  color: #444;
  line-height: 1.7;
  margin-top: 2px;
}
.description-block {
  background: none;
  border-radius: 0;
  padding: 0;
  font-size: 1.09em;
  line-height: 2.0;
  margin-top: 12px;
  margin-bottom: 22px;
  white-space: pre-line;
  word-break: break-word;
  box-shadow: none;
  color: #333;
}
.code {
  border-radius: 5px;
  padding: 14px;
  margin-top: 7px;
  font-size: 1em;
  overflow-x: auto;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  line-height: 1.7;
  max-width: 700px;
}
.copy-btn {
  background: #1890ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 2px 10px;
  margin-left: 10px;
  font-size: 0.95em;
  cursor: pointer;
  transition: background 0.2s;
}
.copy-btn:hover {
  background: #fa541c;
}
.tag {
  display: inline-block;
  background: #e6f7ff;
  color: #1890ff;
  border-radius: 3px;
  padding: 2px 10px;
  font-size: 0.97em;
  margin-right: 8px;
}
.loading, .error {
  color: #fa541c;
  font-size: 1.1em;
  margin: 30px 0;
}
.copy-success {
  color: #52c41a;
  margin-left: 12px;
  font-size: 0.97em;
  font-weight: bold;
}
</style>