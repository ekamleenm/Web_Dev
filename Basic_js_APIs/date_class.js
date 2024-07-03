const currentDate = new Date();

console.log(currentDate.getFullYear())
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

for(let i = 0; i < 12;  i++){
    if(i == currentDate.getMonth()){
        console.log("current month is : " + months[i]);
    }
}