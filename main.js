const temp=document.querySelector('.temperature');
const form=document.getElementById('city-search');
const location=document.querySelector('.location');
const date=document.querySelector('.weather2 span');
const condition=document.querySelector('.weather3 span');
const emoji=document.querySelector('.weather3 img');
const input=document.getElementById('cityname');

async function fetchdata(url){
    const response=await fetch(url);
    const data= await response.json();
    const temp=data.current.temp_c;
    const location=data.location.name;
    const date=data.location.localtime;
    const condition=data.current.condition.text;
    const emoji=data.current.condition.icon;
    update(temp,location,date,condition,emoji);   
}

function showspin(){
    document.querySelector('.wait').style.display='block';
}
function endspin(){
    document.querySelector('.wait').style.display='none';
}

function update(temperature,loc,datee,conditions,emoji_url){
   temp.innerText=temperature +'°';
   location.innerText=loc;
   date.innerText=datee;
   condition.innerText=conditions;
   emoji.src=emoji_url;  
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    showspin();
    setTimeout(() => {
        endspin();
        const city=input.value;
        if(city.length>0){
        fetchdata(`https://api.weatherapi.com/v1/current.json?key=d1e2d12150824e14a4b111328221512&q=${city}&aqi=no`);
    }
    else{
        alert("Enter valid city Name.");
        return;
    }
    }, 3000);
    
})

