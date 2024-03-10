//Write a program that determines the time of the day based on the current time and greet user accordingly
const currentDate = new Date();
const timeStamp = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
const timeHour = currentDate.getHours()
if(timeHour <= 6){
    console.log("Hi Sly, Good Morning");
} else if(timeHour <= 12){
    console.log("Hi Sly, Good Afternoon");
} else if(timeHour <= 18){
    console.log("Hi Sly, Good Evening");
}