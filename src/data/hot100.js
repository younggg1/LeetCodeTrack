export default [
  {
    id: 1,
    title: "两数之和",
    description: `给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
提示：
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案`,
    difficulty: '简单',
    idea: [
      '哈希表法：通过哈希表来存储已经遍历过的元素，并在遍历过程中检查当前元素与目标值之间的差值是否已经存在于哈希表中。',
      '暴力法：双重循环遍历所有可能的两数组合，找到符合条件的下标对。'
    ],
    code: [
      `// 哈希表法
import java.util.HashMap;
public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            map.put(nums[i], i);
        }
    }
}`,
      `// 暴力法
public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
    }
}`
    ],
    originalUrl: 'https://leetcode.cn/problems/two-sum/',
    tags: ["哈希表", "数组"]
  }
]