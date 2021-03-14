"use strict";
window.addEventListener('DOMContentLoaded', () => {
    //TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = "none";
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = "block";
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        
    });

   //TIMER
    const deadline = '2021-05-11';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours =  Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60); 

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    };
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        };
    };

    setClock('.timer', deadline);

 //MODAL

 const btn = document.querySelectorAll('button[data-modal]'),
       mdl = document.querySelector('.modal'),
       x = document.querySelector('.modal__close');
 
 function openModal() {
    mdl.classList.remove('hide');
    mdl.classList.add('show', 'fade');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
 };
 function closeModal() {
    mdl.classList.remove('show', 'fade');
    mdl.classList.add(/*'fade_out', */'hide');
    document.body.style.overflow = '';
 };

 btn.forEach(item => {
    item.addEventListener('click', openModal);
 });
 x.addEventListener('click', closeModal);

 mdl.addEventListener('click', (e) => {
    if (e.target === mdl) {
        closeModal();
    }
 });

 document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && mdl.classList.contains('show')) {
        closeModal();
    }
 });

 const modalTimerId = setTimeout(openModal, 6000);
 
 function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
 };
 
 window.addEventListener('scroll', showModalByScroll);





 });