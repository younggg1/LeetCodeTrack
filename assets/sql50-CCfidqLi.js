const c=[{id:1757,title:"可回收且低脂的产品",description:`表：Products
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id 是该表的主键（具有唯一值的列）。
low_fats 是枚举类型，取值为以下两种 ('Y', 'N')，其中 'Y' 表示该产品是低脂产品，'N' 表示不是低脂产品。
recyclable 是枚举类型，取值为以下两种 ('Y', 'N')，其中 'Y' 表示该产品可回收，而 'N' 表示不可回收。
编写解决方案找出既是低脂又是可回收的产品编号。
返回结果 无顺序要求 。
返回结果格式如下例所示：
示例 1：
输入：
Products 表：
+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
输出：
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
解释：
只有产品 id 为 1 和 3 的产品，既是低脂又是可回收的产品。`,difficulty:"简单",idea:[`1.使用SELECT语句从Products表中选择product_id列。
        2.使用WHERE子句过滤出low_fats和recyclable都为'Y'的行，使用AND操作符连接两个条件。
        `],code:["SELECT product_id FROM Products WHERE low_fats = 'Y' AND recyclable = 'Y'"],originalUrl:"https://leetcode.cn/problems/recyclable-and-low-fat-products/",tags:["数据库"]}];export{c as default};
