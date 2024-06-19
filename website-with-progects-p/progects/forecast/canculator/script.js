let a ='';
let b ='';
let sign='';
let finish =false;

const digit=['0', '1', '2', '3', '4','5', '6', '7','8','9','.'];
const action =['-','+','*','/',]

const out = document.querySelector('.calc-screen p');

function clearAll(){ 
    a="";
     b ='';
      sign='';
finish =false;
out.textContent=0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick=(event)=>{ 
    if(!event.target.classList.contains('btn'))return;
    if(event.target.classList.contains('ac'))return;

    out.textContent='';
    const key = event.target.textContent;

    if(digit.includes(key)){
        if(b === '' && sign ===''){
        a+=key;
        console.log(a ,b ,sign);
        out.textContent=a;
    }
        // else if(a!==''&& b!==''&& finish){
        //     b=key;
        //     finish=false;
        //     out.textContent=b;
        // }
        else{
            b+=key ;
            out.textContent=b;
        }
        console.table(a ,b , sign);
        return;
    }

    if(action.includes(key)){
        sign=key;
        out.textContent=sign;
        console.table(a ,b ,sign);
        return;
    }

    if (key ==='='){
        if(b==='')b=a;
        switch(sign){
            case"+":
            a=(+a)+(+b);
            break;
            case"-":
            a =a-b;
            break;
            case"*":
             a=a*b;
             break;
             case"/":
             if(b==='0'){
                out.textContent='error';
            a='' ;
            b='';
            sign='';
            return;    
                }
                a=a/b;
                break;
        }
        finish=true;
        out.textContent=a;
        console.table( a, b, sign);
        // out = Number;
        // out.toFixed(3);
    }
   
}




function changeBackground(color){
document.body.style.background = color;
}
 function colorSwither(){
    document.getElementById('c1').onclick= function(){
        changeBackground('rgb(167, 109, 109)')

        document.getElementById('c2').onclick= function(){
            changeBackground('rgb(122, 167, 109)')
        }
     
        document.getElementById('c3').onclick= function(){
            changeBackground('rgb(141, 200, 195)')
        }
        document.getElementById('c4').onclick= function(){
            changeBackground('rgb(155, 65, 65)')
        }
        document.getElementById('c5').onclick= function(){
            changeBackground(' rgb(60, 59, 59)')
        }
        document.getElementById('c6').onclick= function(){
            changeBackground('rgb(72, 3, 3)')
        }
        document.getElementById('c7').onclick= function(){
            changeBackground('rgb(128, 109, 167)')
        }
        document.getElementById('c8').onclick= function(){
            changeBackground('rgb(102, 143, 120);')
        }
        document.getElementById('c9').onclick= function(){
            changeBackground('rgb(212, 207, 207)')
        }
        document.getElementById('c10').onclick= function(){
            changeBackground('rgb(220, 237, 124)')
        }
        document.getElementById('c11').onclick= function(){
            changeBackground('rgb(56, 75, 159)')
        }
        document.getElementById('c12').onclick= function(){
            changeBackground('rgb(40, 102, 22)')
        }
        document.getElementById('c13').onclick= function(){
            changeBackground('rgb(132, 97, 37)')
        }
        document.getElementById('c14').onclick= function(){
            changeBackground('rgb(247, 104, 104)')
        }
        document.getElementById('c15').onclick= function(){
            changeBackground('rgb(62, 48, 42)')
        }    
    }
 }
 window.onload=colorSwither;



 document.getElementById('kitten').onclick = function(){
    document.getElementById('change-img').src='img/frame binatang kambing.png'
 }
 document.getElementById('rabbit').onclick = function(){
    document.getElementById('change-img').src='img/frame binatang kambing.png'
 }
 document.getElementById('koala').onclick = function(){
    document.getElementById('change-img').src='img/frame binatang kucing pink.png'
 }
 document.getElementById('lion').onclick = function(){
    document.getElementById('change-img').src='img/frame binatang tikus pink - frame kanak-kanak.png'
 }