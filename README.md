# LeetCodeTrack

## 项目简介
LeetCodeTrack 是一个基于 Vue 3 的刷题记录与复习平台，涵盖了 LeetCode 热题 100、面试经典 150、面试精华 75、高频 SQL 50、编程基础 0 到 1、动态规划基础等多个高频题库。项目支持题目检索、分类浏览、思路与代码高亮展示，用来记录本人的刷题的思路和代码实现。

## 功能特性
- **题库分类**：支持 热题100、面试150、面试75、SQL50、编程基础0到1、动态规划。
- **题目检索**：支持按题目名称模糊搜索和难度筛选。
- **题目详情**：展示题目描述、解题思路、代码实现、高亮显示。
- **数据维护**：所有题库数据均结构化存储于 `src/data/`，便于扩展和维护。
- **前端技术**：采用 Vue 3，Pinia，Prism.js 代码高亮。
- **代码与思路同步**：每道题均包含详细解题思路与代码实现，便于复习和分享。
- **Git 学习**：项目实践 Git 分支管理、协作开发等操作。

## 技术栈
- Vue 3  
- Vue Router
- Pinia 状态管理
- Prism.js 代码高亮

## 项目结构  
src/
  data/              # 题库数据，按分类存储  
  views/             # 各分类页面与详情页  
  stores/            # 题库状态管理  
  router/            # 路由配置  
  App.vue            # 根组件  
  main.js            # 入口文件  
README.md  

## 使用说明

1. **克隆仓库**
   ```bash
   git clone https://github.com/younggg1/LeetCodeTrack.git  
   cd LeetCodeTrack
   ```  
2. **安装依赖**
   ```bash
   npm install
   ```
3. **运行项目**
   ```bash
   npm run dev
   ```  
4. **构建项目**
   ```bash
   npm run build
   ```  
5. **在线访问**
   在线访问：https://younggg1.github.io/LeetCodeTrack/  
6. **扩展与自定义**
   - 题库数据可在 `src/data/` 下按需扩展，格式见现有文件。 
## 进度
- - [x] 热题100题目列表与详情
- - [x] 面试150题目列表与详情
- - [x] 面试75题目列表与详情
- - [x] SQL50题目列表与详情
- - [x] 编程基础0到1题目列表与详情
- - [x] 动态规划题目列表与详情
