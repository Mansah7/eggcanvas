
const groupA = document.querySelector(".group-1");
const groupB = document.querySelector(".group-2");
const groupA2 = document.querySelector(".group-1_2");
const groupB2 = document.querySelector(".group-2_2");
// const page1Of1 = document.querySelector(".p_1-1");
// const page1Of2 = document.querySelector(".p_1-2");
const page1 = document.querySelector(".p_1");
const page2 = document.querySelector(".p_2");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const scrollWrapper = document.querySelector('.image-container');
const menuOpen = document.querySelector('#open_nav');
const menuClose = document.querySelector('#close_nav');
const navItem = document.querySelector('.nav-items');
const searchIcon = document.querySelector('#search');
const social = document.querySelector('.social');




// media query


// Navigation menu

menuOpen.addEventListener('click', function navMob(n) {
    navItem.classList.remove('close_nav')
    navItem.style.width = '50%';
    searchIcon.style.display = 'none';
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    social.classList.toggle('close_nav');

    
});

menuClose.addEventListener('click', function navMob2(m) {
    navItem.classList.add('close_nav')
    searchIcon.style.display = 'block';
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    social.classList.toggle('close_nav');
    

});


// Header section - first carrousel



backward.addEventListener('click', function(){
    page2.classList.toggle('active');
    page1.classList.toggle('active');
    groupB.classList.remove('non-active');
    groupA.classList.add('non-active');
    forward.style.cssText= `cursor:pointer; color: #231f20`;
    backward.style.cssText= `cursor:auto; color: #cfceca`;
    forward.setAttribute('disabled', true);

});

forward.addEventListener('click', function(){
    page2.classList.toggle('active');
    page1.classList.toggle('active');
    groupB.classList.add('non-active');
    groupA.classList.remove('non-active');
    backward.style.cssText= `cursor:pointer; color: #231f20`;
    forward.style.cssText= `cursor:auto; color: #cfceca`;
    
   
    
});


// second coarrousel

forward.addEventListener('click', () => {
    forward.style.display = 'none';

})
