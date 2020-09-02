setInterval(myFunction,1000);

function myFunction(){
    console.log("yeah the function is working properly");

        d = new Date();
        minute = d.getMinutes();
        hour = d.getHours();
        second = d.getSeconds();
    
       hourDeg = 30 * hour + minute/2;
       minuteDeg = 6 * minute + second/10;
       secondDeg = 6 * second;
    
        sec = document.getElementById("pointSecond");
        min = document.getElementById("pointMinute");
        hr = document.getElementById("pointHour");
       
       
        sec.style.transform = `rotate(${secondDeg}deg)`;
        min.style.transform = "rotate("+minuteDeg+"deg)";
        hr.style.transform = 'rotate('+hourDeg+'deg)';
    
}