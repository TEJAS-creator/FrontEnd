const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control_prev')
const next_btn = document.querySelector('.control_next')

let n = 0;
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';

}

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})