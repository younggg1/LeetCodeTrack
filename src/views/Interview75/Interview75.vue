<template>
  <div>
    <div class="list-header">
      <h2 class="list-title" style="color: #1890ff;">面试精华75题-更新中(题号与原题保持一致)</h2>
      <div class="q-filter-bar">
        <label>按难度：</label>
        <select v-model="selectedDifficulty">
          <option value="">全部</option>
          <option value="简单">简单</option>
          <option value="中等">中等</option>
          <option value="困难">困难</option>
        </select>
        <label>题目搜索：</label>
        <input v-model="searchTitle" type="text" placeholder="输入题目关键字" style="width:140px;"/>
      </div>
    </div>
    <div v-if="loading" class="list-loading">加载中...</div>
    <div v-else-if="error" class="list-error">{{ error }}</div>
    <div v-else>
      <ul class="question-list">
        <li
          v-for="q in filteredQuestions"
          :key="q.id"
          class="question-card"
          @click="goDetail(q.id)"
          style="cursor:pointer"
        >
          <div class="q-title">
            <span class="q-id">#{{ q.id }}</span>
            <span class="q-name">{{ q.title }}</span>
            <span class="difficulty" :class="q.difficulty">{{ q.difficulty }}</span>
          </div>
          <div class="q-tags">
            <span v-for="tag in q.tags" :key="tag" class="q-tag">{{ tag }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuestionBankStore } from '@/stores/questionBank';

const store = useQuestionBankStore();
const router = useRouter();

const selectedDifficulty = ref('');
const searchTitle = ref('');

const questions = computed(() => store.interview75);

const filteredQuestions = computed(() => {
  let list = questions.value;
  if (selectedDifficulty.value) {
    list = list.filter(q => q.difficulty === selectedDifficulty.value);
  }
  if (searchTitle.value) {
    const kw = searchTitle.value.trim().toLowerCase();
    list = list.filter(q => q.title && q.title.toLowerCase().includes(kw));
  }
  return list;
});

const loading = ref(true);
const error = ref('');

onMounted(async () => {
  loading.value = true;
  try {
    if (!store.loaded) {
      await store.loadAll();
    }
    if (!store.hot100.length) {
      error.value = '题库加载失败';
    }
  } catch (e) {
    error.value = '题库加载失败';
  } finally {
    loading.value = false;
  }
});

function goDetail(id) {
  router.push(`/interview75/${id}`);
}
</script>
<style scoped>
.list-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 18px;
}
.list-title {
  font-size: 1.5em;
  color: #222;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 32px 0 32px 24px; /* 上 右 下 左 */
}
.q-filter-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8fafc;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1em;
}
.q-filter-bar label {
  color: #1890ff;
  font-weight: 500;
  margin: 0 2px 0 0;
}
.q-filter-bar select,
.q-filter-bar input {
  border: 1px solid #d1d5db;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 1em;
  outline: none;
  transition: border 0.2s;
}
.q-filter-bar select:focus,
.q-filter-bar input:focus {
  border: 1.5px solid #1890ff;
}
.difficulty {
  font-size: 1em;
  padding: 2px 10px;
  border-radius: 10px;
  margin-left: 8px;
  color: #fff;
}
.difficulty.简单 { background: #52c41a; }
.difficulty.中等 { background: #faad14; }
.difficulty.困难 { background: #ff4d4f; }
.list-loading, .list-error {
  color: #fa541c;
  font-size: 1.1em;
  margin: 28px 0;
}
.question-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.question-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 18px 22px 14px 22px;
  min-width: 270px;
  max-width: 360px;
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  position: relative;
  margin: 0px 0 0px 24px; /* 上 右 下 左 */
}
.question-card:hover {
  box-shadow: 0 4px 18px #dbeafe;
}
.q-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.q-id {
  background: #e6f7ff;
  color: #1890ff;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.95em;
  font-weight: bold;
}
.q-name {
  flex: 1;
  font-size: 1.08em;
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.q-link {
  color: #fff;
  background: #1890ff;
  border-radius: 4px;
  padding: 2px 10px;
  text-decoration: none;
  font-size: 0.98em;
  margin-left: 8px;
  transition: background 0.2s;
}
.q-link:hover {
  background: #fa541c;
}
.q-tags {
  margin-top: 4px;
}
.q-tag {
  display: inline-block;
  background: #f6f8fa;
  color: #666;
  border-radius: 3px;
  padding: 2px 8px;
  font-size: 0.93em;
  margin-right: 7px;
  margin-bottom: 2px;
}

</style>