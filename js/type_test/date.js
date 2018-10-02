// http://www.w3school.com.cn/js/js_obj_date.asp
var myDate = new Date();
console.log(myDate.getTime()); // 1970 年1月1日
console.log(myDate.getDate(), myDate.getDay(), myDate.getMonth(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds());
// 练习， 页面上输出当前时间， 更新
myDate.setDate(myDate.getDate()+5);
console.log( myDate.getMonth(), myDate.getDate());

var date1 = new Date();
date1.setFullYear(2008, 8, 9);
var today = new Date();
if (myDate > today) {
  console.log('today is before 9th August 2008');
} else {
  console.log('Today is after 9th August 2008');
}