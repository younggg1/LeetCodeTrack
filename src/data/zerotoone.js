export default [
    {
        id: 1768,
        title: "交替合并字符串",
        description: `给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
返回 合并后的字符串 。
示例 1：
输入：word1 = "abc", word2 = "pqr"
输出："apbqcr"
解释：字符串合并情况如下所示：
word1：  a   b   c
word2：    p   q   r
合并后：  a p b q c r
示例 2：
输入：word1 = "ab", word2 = "pqrs"
输出："apbqrs"
解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
word1：  a   b 
word2：    p   q   r   s
合并后：  a p b q   r   s
示例 3：
输入：word1 = "abcd", word2 = "pq"
输出："apbqcd"
解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
word1：  a   b   c   d
word2：    p   q 
合并后：  a p b q c   d
提示：
1 <= word1.length, word2.length <= 100
word1 和 word2 由小写英文字母组成`,
        difficulty: '简单',
        idea: [
            `
       1.初始化结果字符串：使用一个字符串 result 来存储最终合并的结果。
       2.用两个指针指向 word1 和 word2 的起始位置,使用while循环，分别将 word1 和 word2 的当前字符交替添加到 result 中，只要没有遍历完word1和word2就继续添加。
       3.返回结果：返回合并后的字符串 result。
       `,

        ],
        code: [
            `class Solution {
    public String mergeAlternately(String word1, String word2) {
    //用StringBuilder可以高效地拼接字符串，避免频繁的字符串拼接操作降低性能
        StringBuilder result = new StringBuilder();
        int w1 = word1.length();
        int w2 = word2.length();
        int i = 0, j = 0;
        while (i < w1 || j < w2) {
            if (i < w1) {
                result.append(word1.charAt(i));
                ++i;
            }
            if (j < w2) {
                result.append(word2.charAt(j));
                ++j;
            }

        }
        return result.toString();
    }
}`
        ],
        originalUrl: 'https://leetcode.cn/problems/merge-strings-alternately/',
        tags: ["字符串", "双指针"]
    }
]