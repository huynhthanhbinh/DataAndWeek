// Ctrl Alt N to runcode
var today = new Date();         console.log(today);
var dd = today.getDate();       console.log("day is", dd);
var mm = today.getMonth() + 1;  console.log("month is", mm);
var yyyy = today.getFullYear(); console.log("year is", yyyy);
var wday = today.getDay();      console.log("week date is", wday);
var hh = today.getHours();      console.log("hour is", hh);
var min = today.getMinutes();   console.log("minute is", min);
var ss = today.getSeconds();    console.log("second is", ss);
var lastday = new Date(yyyy,mm,0);console.log(lastday);
var lday = lastday.getDate();   console.log("last day of month", lday);

var mon = new Date();
var d,m,y;
switch (wday) {
    case 0: //Sunday
        
    case 1: 

    default:
        break;
}