let menu = document.querySelector('#menu');
if(menu){
    menu.onclick = ()=>{
        document.querySelector('header .responsive-menu').classList.add('active');
        menu.style.display='none';
        document.querySelector('#menu-x').style.display='block'
    }
    document.querySelector('#menu-x').onclick=()=>{
        document.querySelector('header .responsive-menu').classList.remove('active')
        menu.style.display='flex';
        document.querySelector('#menu-x').style.display='none'
    }
}

function loginSignup(){
    document.querySelector('.login_signUp_modal').classList.add('active');
}
function loginSignupClose(e){
    if (e && e.parentElement) {
        let modal = e.parentElement;
        modal.parentElement.classList.remove('active');
    }
}
document.addEventListener('click', function(event) {
    var modal = document.querySelector('.login_signUp_modal .modal_card');
    var targetElement = event.target; 
    if (!modal.contains(targetElement) && !document.querySelector('.login-signup').contains(targetElement)) {
        loginSignupClose();
    }
});
function changeForm(data){
    if(data=='login'){
        document.querySelector('#login').style.transform = 'scale(0)';
        document.querySelector('#login').classList.remove('changeForm')
        document.querySelector('#signup').classList.add('changeForm')
    }else{
        document.querySelector('#signup').classList.remove('changeForm')
        document.querySelector('#login').classList.add('changeForm')
    }
}


const courses_header = document.querySelector('.courses_header');
const courses_header_scroll = (direction)=>{
    if (direction === 'next') {
        courses_header.scrollBy({
            left: 230,
            behavior: 'smooth'});

    } else if (direction === 'previous') {
        courses_header.scrollBy({
            left: -230,
            behavior: 'smooth'
        });
}
}




