import { defineStore } from 'pinia';

export const useQuestionBankStore = defineStore('questionBank', {
  state: () => ({
    hot100: [],
    interview150: [],
    zerotoone: [],
    interview75: [],
    sql50: [],
    dp: [],
    loaded: false
  }),
  actions: {
    async loadAll() {
      if (this.loaded) return Promise.resolve();
      this.hot100 = (await import('../data/hot100.js')).default;
      this.interview150 = (await import('../data/interview150.js')).default;
      this.zerotoone = (await import('../data/zerotoone.js')).default;
      this.interview75 = (await import('../data/interview75.js')).default;
      this.sql50 = (await import('../data/sql50.js')).default;
      this.dp = (await import('../data/dp.js')).default;
      this.loaded = true;
      return Promise.resolve();
    },
    getQuestion(category, id) {
      let arr = [];
      if (category === 'hot100') arr = this.hot100;
      else if (category === 'interview150') arr = this.interview150;
      else if (category === 'daily') arr = this.daily;
      else if (category === 'zerotoone') arr = this.zerotoone;
      else if (category === 'interview75') arr = this.interview75;
      else if (category === 'sql50') arr = this.sql50;
      else if (category === 'dp') arr = this.dp;
      return arr.find(q => String(q.id) === String(id));
    }
  }
});