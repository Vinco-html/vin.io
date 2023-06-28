const headr = document.querySelector('.nav1');
function changeBg(){
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 120)
    {
        headr.classList.add('scrolled');

    }
    else{
        headr.classList.remove('scrolled');
    }
}
document.addEventListener('scroll', changeBg);

const show = document.querySelector(".bars1");
function display1(){
    var scrollValue = window.scrollY;
    console.log(show);
    if(scrollValue > 120)
    {
        show.classList.add('show');

    }
    else{
        show.classList.remove('show');
    }
}
document.addEventListener('scroll', display1);
const show1 = document.querySelector(".bars");
function display(){
    var scrollValue = window.scrollY;
    console.log(show1);
    if(scrollValue > 40)
    {
        show1.classList.add('show1');

    }
    else{
        show1.classList.remove('show1');
    }
}
document.addEventListener('scroll', display);
const disp_Nav = document.querySelector(".disp_Nav");
function disp()
{
    disp_Nav.classList.toggle("disp");
    console.log(disp_Nav);
}
content=document.querySelector(".cont_bottom");
{
    let srell=window.scrollY;
    if(srell>1189){
        content.innerHTML=`<p style="color:white; font-size:10px;">You have just scrolled ${ Math.round(srell)} pixels of my site </p>`;;
        alert(" you did scroll more that "+ Math.round(srell) +" Pixels of my page");
    }
   
}
const timer_time=document.querySelector(".timer");


setInterval(()=>
{
    let d= new Date();
    timer_time.innerHTML = d.toLocaleTimeString();
 
},1000)