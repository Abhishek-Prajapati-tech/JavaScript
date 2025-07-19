
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)

// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
const d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleString());
console.log(typeof(d));

let mycreatedate1 = new Date(2025 , 0, 23)
console.log(mycreatedate1.toDateString());
const dt = new Date("October 13, 2014 11:13:00");
console.log(dt);


const d0 = new Date();
console.log(d0);

const d1 = new Date(2018, 11);
console.log(d1);

let mycreatedate2 = new Date(2024 , 5, 21)
console.log(mycreatedate2.toDateString());

const t = new Date("2022-03-25");
console.log(t.toLocaleString());
const d2 = new Date(2018, 11, 24, 10);
console.log(d2.toDateString());

const d3 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d3.toLocaleDateString());

const dta = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(dta.toLocaleDateString());

let myTim = Date.now()
console.log(myTim);
console.log(d3.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(dta.getDay());
console.log(dta.getMonth());
console.log(dta.getMinutes())

d3.toLocaleString(`default`,{
    weekday : "long", timeZone,timeZoneName

})
