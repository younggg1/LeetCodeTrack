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
    },
    {
        id: 389,
        title: "找不同",
        description: `给定两个字符串 s 和 t ，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。
示例 1：
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
示例 2：
输入：s = "", t = "y"
输出："y"
提示：
0 <= s.length <= 1000
t.length == s.length + 1
s 和 t 只包含小写字母`,
        difficulty: '简单',
        idea: [
            `
      计数法：
      1.用一个数组 count[26] 记录每个字母出现的次数。
      2.先扫描字符串 s，把每个字母出现的次数加1。
      3.再扫描字符串 t，把每个字母出现的次数减1。
      4.如果某个字母减到负数了，就说明这个字母是多出来的
       `,
            `
            ASCII求和法：
            1.把 t 的所有字符的 ASCII 编码值加起来。
            2.把 s 的所有字符的 ASCII 编码值加起来。
            3.(t的总和) - (s的总和) = 多出来的那个字母的ASCII码。
            4.返回这个 ASCII 码对应的字符。
            `


        ],
        code: [
            `class Solution {
    public char findTheDifference(String s, String t) {
        int[] count = new int[26];//26个字母
        //统计s中每个字母的数量
        for (char c : s.toCharArray()) {
            count[c - 'a']++;//本质上是ASCII码相减
        }
        // 在t中找多出来的字母
        for (char c : t.toCharArray()) {
            count[c - 'a']--;
            if (count[c - 'a'] < 0) {
                return c;
            }
        }
        return 0;
    }
}`,
`
public class Solution {
    public char findTheDifference(String s, String t) {
        int sumS = 0, sumT = 0;
        for (char c : s.toCharArray()) {
            sumS += c;
        }
        for (char c : t.toCharArray()) {
            sumT += c;
        }
        return (char)(sumT - sumS);
    }
}

`
        ],
        originalUrl: 'https://leetcode.cn/problems/find-the-difference/',
        tags: ["位运算", "哈希表", "字符串","排序"]
    }
]