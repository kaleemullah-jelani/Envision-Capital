
let nav_container = document.querySelector('.header__nav');
let humberger_btn = document.querySelector('#humberger-btn');

humberger_btn.addEventListener('click', () =>{
    nav_container.classList.toggle('active');

    if(humberger_btn.classList.contains('fa-bars')){
        
        humberger_btn.classList.remove('fa-bars');
        humberger_btn.classList.add('fa-xmark');

    }else{
        humberger_btn.classList.add('fa-bars');
        humberger_btn.classList.remove('fa-xmark');

    }
})

window.addEventListener('click', function(e){
    if(e.target != nav_container && e.target != humberger_btn){

        if(nav_container.classList.contains('active')){
            nav_container.classList.remove('active');
        }  

        if(humberger_btn.classList.contains('fa-xmark')){

            humberger_btn.classList.add('fa-bars');
            humberger_btn.classList.remove('fa-xmark');
    
        }
    }
})