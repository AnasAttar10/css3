/* make slider */

let slider = document.querySelectorAll('.slider_parent >div') ; 

let next =  document.getElementById('next'); 

let previous =  document.getElementById('previous');

let active_slider = 1 ;


function hide_sliders(){

    slider.forEach((item)=>{
        item.style.display='none';
    }) ;
}

function Show_Slider(active_slider){

    hide_sliders();
    console.log('here');
    slider.forEach(item =>{

    let  num_slider = item.getAttribute('data-slider');

    if(num_slider == active_slider){

        item.style.display='block';
    }
    }) ;
}

Show_Slider(active_slider);  // default 

next.onclick = function(){
    active_slider++ ;

    if(active_slider > slider.length)
    {   
        console.log('big');
        active_slider = 1;
    } 

    Show_Slider(active_slider) ;
}

previous.onclick =function(){

    active_slider--;

    if (active_slider <= 0 ) {
        {
            console.log('small')
            active_slider = 3; 
        }
    }
    Show_Slider(active_slider) ;
} 

// end slider 


// start sprite icons 

let container_icons = document.querySelectorAll('.sprit-icon') ;

let num_Y = 0 ; 
let num_H = 50 ; 

container_icons.forEach((item=>{  

    item.style.height = num_H + "px" ;
    item.style.backgroundPosition = "center " + num_Y + "px";
    num_Y-=180;
    num_H+=5;
}))

container_icons.forEach((item)=>{

    item.onmouseover = function(){
        let y = parseInt(item.style.backgroundPositionY);
        let newy = y-90;
        console.log(newy);
        item.style.backgroundPosition = "center " + newy + "px";
    }
    item.onmouseout =function(){
        let y = parseInt(item.style.backgroundPositionY);
        let newy = y+90;
        console.log(newy);
        item.style.backgroundPosition = "center " + newy + "px";
    }
})


// end sprite icons 
