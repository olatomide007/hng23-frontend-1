
///// To display Nmae and image
const show_btn = document.querySelector(".show-btn");
const show_name = document.querySelector(".show-name");
const show_person = document.querySelector(".show-person");


show_btn.addEventListener ('click', ()=>{
    show_name.innerHTML = "olaT";
    show_person.src = ".//IMG_20210307_084732_0.jpg";
});


////// To display some real time information
const date4Today = new Date()
const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const todayToday = week[date4Today.getDay()-1]

const showDay = document.querySelector('.currentDay')
const showMillesec = document.querySelector('.millesec')

function updateMillesec(){
    const date4millesec = new Date()
    hours = date4millesec.getHours()
    minutes = date4millesec.getMinutes()
    seconds = date4millesec.getSeconds()
    milleseconds = date4millesec.getMilliseconds()
    showMillesec.textContent = `${hours}:${minutes}:${seconds}:${milleseconds}`
}


showDay.textContent=todayToday

setInterval(updateMillesec,1)