// +
1 + 1 // 2
'1' + '1' // '11'

// - * /

// % 求余
10 % 3 // 1
11 % 3 // 2
12 % 3 // 0

// ++ 自增
var loginCount = 0;
// loginCount = loginCount + 1;
loginCount++;

// -- 自减
loginCount = 1;
loginCount--;
console.log("loginCount:", loginCount);

// > < >= <=
console.log("1 > 2:", 1 > 2);
console.log("1 < 2:", 1 < 2);
console.log("1 >= 1:", 1 >= 1);
console.log("1 <= 1:", 1 <= 1);

// = 赋值
var a = 1;

// == 判断是否相等
console.log("1 == 2:", 1 == 2);
console.log("1 == 1:", 1 == 1);
console.log("'1' == 1:", '1' == 1);

// === 判断是否相等(严格模式)
console.log("'1' === 1:", '1' === 1);

// != 不等于
console.log("1 != 2:", 1 != 2);
console.log("1 != 1:", 1 != 1);

// += -= *= /=
loginCount = loginCount + 2;
loginCount += 2;

// && ||
// console.log("true && false:", true && false);
// console.log("true && true:", true && true);
// console.log("true || false:", true || false);
var 他是制单人 = false,
    他是审核员 = false;

if(他是制单人 || 他是审核员) {
  console.log('转账成功');
} else {
  console.log('转账失败，权限不足');
}
