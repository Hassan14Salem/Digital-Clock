let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

let clock = document.querySelector('.clock')
// clock.style.transform = "rotateZ(150deg)"


setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30 ;
    let mm = day.getMinutes() * 6 ;
    let ss = day.getSeconds() * 6 ;

    hr.style.transform =`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform =`rotateZ(${mm}deg)`;
    sc.style.transform =`rotateZ(${ss}deg)`;

// ================= Digital Clock =====================
    let hour =document.querySelector('#hour');
    let minutes =document.querySelector('#minutes');
    let seconds =document.querySelector('#seconds');
    let ampm =document.querySelector('#ampm');

    let h = day.getHours() 
    let m = day.getMinutes() 
    let s = day.getSeconds() 
    let am = h>=12 ? 'PM' : 'AM'
// ============ Convert from 24h to 12h =============
if(h > 12 ){
h =h-12
}

// ================= Add ZERO befor the num =================
    h = (h<10) ? "0" +h : h;
    m = (m<10) ? "0" + m: m;
    s = (s<10) ? "0" + s: s;

    hour.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;

})






function sayHello(){



    console.log(hh);
    console.log(mm);
    console.log(ss);

}
sayHello()