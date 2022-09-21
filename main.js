
const groupA = document.querySelector(".group-1");
const groupB = document.querySelector(".group-2");
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
const chevronF = document.querySelector('.chevron-f');
const chevronFO = document.querySelector('.chevron-fo');
const chevronFow = document.querySelector('.chevron-fow');
const chevronB = document.querySelector('.chevron-b');
const chevronBA = document.querySelector('.chevron-ba');
const chevronBac = document.querySelector('.chevron-bac');
const lifeInNycSectionCar = document.querySelector('.lnyc_carr_1');
const lifeInNycSectionCar2 = document.querySelector('.lnyc_carr_2');
const aworldToExploreCarr1 = document.querySelector('.a_world_carr_1');
const aworldToExploreCarr2 = document.querySelector('.a_world_carr_2');
const brandCollCarr1 = document.querySelector('.brand_coll_carrou_1');
const brandCollCarr2 = document.querySelector('.brand_coll_carrou_2');
const inThePressCarro1 = document.querySelector('.in_the_press_1');
const inThePressCarro2 = document.querySelector('.in_the_press_2');
const chevronGall1 = document.querySelector('.chevron_fowa');
const chevronGall2 = document.querySelector('.chevron_back');



// media query


// Navigation menu

menuOpen.addEventListener('click', function navMob(n) {
    navItem.classList.remove('close_nav')
    navItem.style.width = '100%';
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
    // page2.classList.toggle('active');
    // page1.classList.toggle('active');
    groupB.classList.remove('non-active');
    groupA.classList.add('non-active');
    forward.style.cssText= `cursor:pointer; color: #231f20`;
    backward.style.cssText= `cursor:auto; color: #cfceca`;
    forward.setAttribute('disabled', true);

});

forward.addEventListener('click', function(){
    // page2.classList.toggle('active');
    // page1.classList.toggle('active');
    groupB.classList.add('non-active');
    groupA.classList.remove('non-active');
    backward.style.cssText= `cursor:pointer; color: #231f20`;
    forward.style.cssText= `cursor:auto; color: #cfceca`;
    
   
    
});



// second coarrousel

chevronF.addEventListener('click', function(){
    lifeInNycSectionCar.classList.remove('non-active');
    lifeInNycSectionCar2.classList.add('non-active');
    chevronB.style.cssText= `cursor:pointer; color: #231f20`;
    chevronF.style.cssText= `cursor:auto; color: #cfceca`;

});

chevronB.addEventListener('click', () => {
    lifeInNycSectionCar.classList.add('non-active');
    lifeInNycSectionCar2.classList.remove('non-active');
    chevronF.style.cssText= `cursor:pointer; color: #231f20`;
    chevronB.style.cssText= `cursor:auto; color: #cfceca`;

});
// third coarrousel

chevronFO.addEventListener('click', function(){
    aworldToExploreCarr1.classList.remove('non-active');
    aworldToExploreCarr2.classList.add('non-active');
    chevronBA.style.cssText= `cursor:pointer; color: #231f20`;
    chevronFO.style.cssText= `cursor:auto; color: #cfceca`;

});

chevronBA.addEventListener('click', () => {
    aworldToExploreCarr1.classList.add('non-active');
    aworldToExploreCarr2.classList.remove('non-active');
    chevronFO.style.cssText= `cursor:pointer; color: #231f20`;
    chevronBA.style.cssText= `cursor:auto; color: #cfceca`;

});

// fourth coarrousel

chevronFow.addEventListener('click', function(){
    brandCollCarr1.classList.remove('non-active');
    brandCollCarr2.classList.add('non-active');
    chevronBac.style.cssText= `cursor:pointer; color: #231f20`;
    chevronFow.style.cssText= `cursor:auto; color: #cfceca`;

});

chevronBac.addEventListener('click', () => {
    brandCollCarr1.classList.add('non-active');
    brandCollCarr2.classList.remove('non-active');
    chevronFow.style.cssText= `cursor:pointer; color: #231f20`;
    chevronBac.style.cssText= `cursor:auto; color: #cfceca`;

});

// fith coarrousel

chevronGall1.addEventListener('click', () => {
    inThePressCarro1.classList.remove('non-active');
    inThePressCarro2.classList.add('non-active');
    chevronGall2.style.cssText= `cursor:pointer; color: #231f20`;
    chevronGall1.style.cssText= `cursor:auto; color: #cfceca`;
});

chevronGall2.addEventListener('click', () => {
    inThePressCarro2.classList.remove('non-active');
    inThePressCarro1.classList.add('non-active');
    chevronGall1.style.cssText= `cursor:pointer; color: #231f20`;
    chevronGall2.style.cssText= `cursor:auto; color: #cfceca`;
});


