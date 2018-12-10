(function () {
    'use strict';

    const openBtn = document.querySelector('#open-nav'),
        closeBtn = document.querySelector('#close-nav'),
        nav = document.querySelector('.nav-wrapper'),
        listItems = document.querySelectorAll('.nav-list li a'),
        contactform = document.querySelector('#contact-form'),
        coverContent = document.querySelector('#cover .content'),
        projectWrapper = document.querySelector('.project-wrapper');



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
        let bWidth = window.innerWidth;
        if(bWidth > 1023.98){
            e.preventDefault()
        }

        let paneID = e.target.getAttribute('data-target');
        let pane = document.querySelector('#'+paneID);

        document.querySelector('.full.active').classList.remove('active','top');
        pane.classList.add('active');

    }

    function submitForm(e) {
        e.preventDefault();
        let data = new FormData(),
            name = document.querySelector('#name').value,
            email = document.querySelector('#email').value,
            message = document.querySelector('#message').value,
            ptagline = document.querySelector('.tagline');


        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== ''){
            data.append('name', name);
            data.append('email', email);
            data.append('message', message)

            fetch('includes/contact.php', {
                method: 'POST',
                body: data
            }).then(function (response) {
                removeMessage();
                let sm = document.createElement('p');

                sm.className = 'response-message success';
                sm.innerHTML = "Your message has been sent! I will get back to you as soon as possible!";
                ptagline.parentNode.insertBefore(sm, ptagline.nextSibling);

                contactform.reset();

            }).catch(function (err) {
                console.log(err);
                removeMessage();
                let em = document.createElement('p');

                em.className = 'response-message error';
                em.innerHTML = "Oops! Some error occurred, please try again later!";
                ptagline.parentNode.insertBefore(em, ptagline.nextSibling);
            })
        }
    }

    function removeMessage(){
        let message = document.querySelector('.response-message');
        if (message){
            contactform.removeChild(message);
        }
    }


    function coverTypographic(){
        fetch(`./includes/cover.php`)
            .then(function(res) {
                return res.json();
            })
            .then(function (data){
                data.forEach(function (cover) {
                    coverContent.innerHTML += '<p>'+ cover.sentence +'</p>';
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function personalInfo(){
        fetch(`./includes/info.php`)
            .then(function(res) {
                return res.json();
            })
            .then(function (data){
                let name = document.querySelector('#my-name');
                let about = document.querySelector('#about .intro');
                let email = document.querySelector('.contact-email');
                name.textContent = data[0].name;
                about.textContent = data[0].about_me;
                email.innerHTML = 'Email: <a href="mailto: '+data[0].email+'">'+data[0].email+'</a>';
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function aboutMeInfo(){
        fetch(`./includes/about.php`)
            .then(function(res) {
                return res.json();
            })
            .then(function (data){
                let imgPrefix = './images/';
                data.forEach(function (info) {
                    let column;
                    if (info.per === '0'){
                        column = document.querySelector('.column-skill.left');
                    }else if (info.per === '1') {
                        column = document.querySelector('.column-skill.right');
                    }

                    column.innerHTML += '<div class="skill">' +
                        '<img src="'+imgPrefix+info.img+'" alt="'+info.title+'">' +
                        '<p class="title">'+info.title+'</p>' +
                        '<p class="desc">'+info.description+'</p>' +
                        '</div>'
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function portfolioInfo(){
        fetch(`./includes/projects.php`)
            .then(function(res) {
                return res.json();
            })
            .then(function (data){
                let imgPrefix = './images/projects/';
                data.forEach(function (project) {
                    let video = project.video;
                    let projectContent;

                    if (video === '1'){
                        projectContent = '<video class="proj project-video" controls>' +
                            '<source src="'+ imgPrefix + project.video_src +'" type="video/mp4">' +
                            '</video>';
                    } else{
                        projectContent = '<img class="proj project-image" src="'+ imgPrefix + project.image_src +'" alt="Project">';
                    }

                    projectWrapper.innerHTML += '<div class="my-work">' +
                        '<a class="lightbox-toggle lightbox-toggle-'+ project.id +'" data-toggle="project'+ project.id +'"></a>' +
                        '<div class="lightbox" id="project'+ project.id +'">' +
                        '<div class="inner">' +
                        '<p class="text-right"><a href="#" class="close-lb"><i class="far fa-times-circle"></i></a></p>' +
                        projectContent +
                        '<p class="project-desc">'+ project.project_desc +'</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    document.querySelector('.lightbox-toggle-'+project.id).style.backgroundImage = "url('"+ imgPrefix + project.project_thumb +"')";

                    let toggle = document.querySelectorAll('.lightbox-toggle');
                    let lbClose = document.querySelectorAll('.close-lb');

                    for (let i = 0; i < toggle.length; i++){
                        toggle[i].addEventListener('click', function (e) {
                            e.preventDefault();
                            let lightboxId = e.target.getAttribute('data-toggle'),
                                lightbox = document.querySelector('#'+lightboxId);

                            lightbox.classList.add('open');

                            let cw = document.querySelector('#'+lightboxId+ ' .inner .proj');

                            if (cw){
                                document.querySelector('#'+lightboxId+ ' .inner').style.width = cw.offsetWidth + 'px';
                            }
                        });
                    }
                    for (let i = 0; i < lbClose.length; i++) {
                        lbClose[i].addEventListener('click', function (e) {
                            e.preventDefault();

                            let openProj = document.querySelector('.lightbox.open .inner');
                                openProj.style.removeProperty('width');

                            document.querySelector('.lightbox.open').classList.remove('open');
                        });
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    [openBtn, closeBtn].forEach(function(el) {
        el.addEventListener('click', toggleNav);
    });
    document.addEventListener('click', revomveElementByOverlay);

    window.addEventListener('load', function () {
        document.querySelector('#cover').classList.add('active');
        coverTypographic();
        personalInfo();
        aboutMeInfo();
        portfolioInfo();
    });

    for (let i = 0; i < listItems.length; i++ ){
        listItems[i].addEventListener('click', displaySection);
    }

    contactform.addEventListener('submit', submitForm);


})();
