const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle = document.querySelector(".sec")
let dateEle = document.querySelector(".date");



setInterval(()=>{
    let date = new Date();

    let hr = date.getHours()*30;
    let min = date.getMinutes()*6;
    let sec = date.getSeconds()*6;
    let day = date.getDate();


    hrEle.style.transform = `rotateZ(${(hr)+min/12}deg)`
    minEle.style.transform = `rotateZ(${min}deg)`
    secEle.style.transform = `rotateZ(${sec}deg)`
    

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const dayName = days[date.getDay()];
    dateEle.innerText = dayName + " " + day;

})