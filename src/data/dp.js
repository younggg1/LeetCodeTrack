export default [
    {
      id: 70,
      title: "爬楼梯",
      description: `假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
示例 1：
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
提示：
1 <= n <= 45`,
      difficulty: '简单',
      idea: [
       `
       1.已知爬1阶=1种方法，爬2阶=2种方法(1次1阶，1次2阶)
       2.可得爬3阶=爬2阶方法数+爬1阶方法数
       3.爬前几阶的方法总数被记录，因此只要前两阶方法总数相加，就可以得到新的爬n阶楼梯的方法总数
       4.也就是说n阶楼梯的爬法=(n-1)阶楼梯的爬法+(n-2)阶楼梯的爬法
       `,

      ],
      code: [
        `class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;  // 如果只有 1 个台阶，只能有 1 种爬法
        }
        int first = 1, second = 2;
        // 计算从 3 到 n 的每一个台阶的方式数
        for (int i = 3; i <= n; i++) {
            int temp = first + second;  // 当前台阶的方式数
            first = second;  // 更新 first
            second = temp;  // 更新 second
        }
        return second;
    }
}`
      ],
      originalUrl: 'https://leetcode.cn/problems/climbing-stairs/',
      tags: ["记忆化搜索","数学","动态规划"]
    }
  ]