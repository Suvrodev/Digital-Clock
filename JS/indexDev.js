const Start=document.getElementById('startbtn');
const Stop=document.getElementById('stopbtn');
const Reset=document.getElementById('resetbtn');
const Number=document.getElementById('number');

let SetIntervalID;
let count=1;


const ChangeTime=(p1)=>{
     console.log("Value of p1(2nd) :",p1);
     Number.innerText=count++;

   // Number.innerText=count++;
    // if(p1===true){
    //     clearInterval(SetIntervalID)
    // }
    // if(p1===false){
    //     Number.innerText=count++;
    // }
}



const Show_Clock=(p1=false)=>{
    console.log("Value of p1: ",p1);
    SetIntervalID=setInterval(ChangeTime,1000,p1)
    // if(p1===true){
    //     setTimeout(()=>{
    //         console.log("SetInterval ID: "+SetIntervalID);
    //         clearInterval(SetIntervalID);
    //     },1000)
    // }
  //  console.log("Interval ID: ",SetIntervalID)
}

Start.addEventListener('click',()=>{

    if(Start.classList.contains('DoStop')){
       // Start.classList.remove('DoStop');
    }else{
        Start.classList.add('DoStop');
        Show_Clock();

        Stop.classList.remove('DoStop');
        Reset.classList.remove('DoStop');
    }

})


Stop.addEventListener('click',()=>{
    console.log("Stop");
    if(Stop.classList.contains('DoStop')){

    }else{
        Stop.classList.add('DoStop');
        //Show_Clock(true);


        Start.classList.remove('DoStop');
        Reset.classList.remove('DoStop');
       // const ResetClock=setInterval(ChangeTime,1000,false)
       clearInterval(SetIntervalID);
    }
})

Reset.addEventListener('click',()=>{
    console.log('Reset');
    
    if(Reset.classList.contains('DoStop')){

    }else{
        Reset.classList.add('DoStop');
        Start.classList.remove('DoStop');
        Stop.classList.remove('DoStop');

    }
    clearInterval(SetIntervalID);
    Number.innerText='0';
    count=0;
})