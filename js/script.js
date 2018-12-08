(function () {
    'use strict';

    const openBtn = document.querySelector('#open-nav'),
        closeBtn = document.querySelector('#close-nav'),
        nav = document.querySelector('.nav-wrapper'),
        listItems = document.querySelectorAll('.nav-list li'),
        sections = document.querySelectorAll('section.full');



    function toggleNav(e) {
        if (e.target.tagName === "A"){
            e.preventDefault();
        }
        if (nav.classList.contains('open')){
            nav.classList.remove('open');
            removeOverlay();
        }else{
            nav.classList.add('open');
            creatOverlay();
        }
    }
    
    function creatOverlay() {
        let body = document.querySelector('body'),
            overlay = document.createElement('div');
        overlay.classList.add('overlay', 'fadein');
        body.appendChild(overlay);
    }

    function removeOverlay(){
        let body = document.querySelector('body'),
            overlay = document.querySelector('.overlay');

        overlay.classList.add('fadeout');

        setTimeout(function () {
            body.removeChild(overlay);
        }, 300);
    }

    function revomveElementByOverlay(e) {
        if (e.target.classList.contains('overlay') && nav.classList.contains('open')){
            nav.classList.remove('open');
            removeOverlay();
        }
    }


    function displaySection(e) {
        let paneID = e.target.getAttribute('data-target');
        let pane = document.querySelector('#'+paneID);
        document.querySelector('.full.active').classList.remove('active');
        pane.classList.add('active');
    }


    [openBtn, closeBtn].forEach(function(el) {
        el.addEventListener('click', toggleNav);
    });
    document.addEventListener('click', revomveElementByOverlay);

    window.addEventListener('load', function () {
        document.querySelector('#cover').classList.add('active');
    });

    for (let i = 0; i < listItems.length; i++ ){
        listItems[i].addEventListener('click', displaySection);
    }


})();
