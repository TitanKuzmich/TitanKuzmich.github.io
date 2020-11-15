const forms = () => {
    const form = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'images/formImages/spinner.gif',
        ok: 'images/formImages/ok.png',
        fail: 'images/formImages/fail.png'
    };

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 18
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 5
                }
            },
            messages:{
                name: "Пожалуйста, введите свое имя",
                phone: {
                    required: "Пожалуйста, введите номер телефона",
                    minlength: "Номер должен состоять из 11 цифр"
                },
                email:{
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты",
                    minlength: "Адрес должен быть не менее, чем из 5-ти символов"
                }
            },
            submitHandler: function () {
                form.forEach(item => {
                    item.addEventListener('submit', (e) => {
                        e.preventDefault();
                        let statusMessage = document.createElement('div');
                        statusMessage.classList.add('status');
                        item.parentNode.appendChild(statusMessage);

                        let statusImg = document.createElement('img');
                        let textMessage = document.createElement('div');

                        item.classList.add('animated', 'fadeOutUp');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 400);

                        $.ajax({
                            type: "POST",
                            url: "mailer/smart.php",
                            data: $(item).serialize(),
                            beforeSend: () => {

                                statusImg.setAttribute('src', message.spinner);
                                statusImg.classList.add('animated', 'fadeInUp');
                                statusMessage.appendChild(statusImg);

                                textMessage.textContent = message.loading;
                                statusMessage.appendChild(textMessage);
                            },
                            error: () => {
                                statusImg.setAttribute('src', message.fail);
                                textMessage.textContent = message.failure;
                            },
                            success: () => {
                                statusImg.setAttribute('src', message.ok);
                                textMessage.textContent = message.success;
                            }
                        }).done(function () {
                            $(item).find("input").val("");
                            $(item).trigger('reset');
                        });

                        return false;
                    });
                });
            }
        });
    }

    validateForms(form);
}

const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange){
            elem.setSelectionRange(pos, pos);
        }else if(elem.createTextRange){
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(e){
        let matrix ='+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if(def.length >= val.length){
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if(e.type === 'blur'){
            if(this.value.length === 2){
                this.value = '';
            }
        }else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

const modals = () => {

    let btnPressed = false;


    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }

                btnPressed = true;

                if(destroy){
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                    item.classList.remove('fadeOut');
                })

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.remove('fadeIn');
                item.classList.add('fadeOut');
                item.style.display = 'none';
            })
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                windows.forEach(item => {
                    item.classList.remove('fadeIn');
                    item.classList.add('fadeOut');
                    item.style.display = 'none';
                })
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.btn-call-modal', '.overlay', '.modal__close');
};

$(document).ready(function() {

    // wow animations
    var wow = new WOW({callback: checkAnims});
    wow.init();
    function checkAnims(el) {
        var el = $(el);
        if (el.hasClass("typewriter")) {
            var text = el.html();
            el.html("");
            var delay = el.data("delay");
            setTimeout(function() { typeWriter(el, text, 0); }, delay)
        }
    }
    function typeWriter(el, text, i) {
        i++;
        el.html(text.substr(0, i));
        if (i < text.length) {
            setTimeout(function() { typeWriter(el, text, i); }, 50)
        }
    }

    //modals
    modals();
    //mask
    mask('[name="phone"]');
    //forms
    forms();

    // video
    $('#video').on('ended', function() {
		$('#video')[0].pause();
		setTimeout("$('#video')[0].play()",5000);
    });
    function videoWipeIn() {
        $("#video-wipe").animate({
            left: 0
        }, {
            duration: 1000,
            complete: function() {
                $('#video')[0].play();
                videoWipeOut();
            }
        });
    }
    function videoWipeOut() {
        $("#video-wipe").animate({
            left: "-100%"
        }, {
            duration: 1000,
            complete: function() {
                
            }
        });
    }

    // sticky menu
    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // team lightbox
    $.featherlight.defaults.beforeOpen = function(e) {
        var windowWidth = $(window).width();
        if (windowWidth > 812) {
            $('html').removeClass("with-featherlight");
            e.preventDefault();
            return false;
        } else {
            $(".team-section .lightbox").removeClass("targetDiv");
        }
    }
    $.featherlight.defaults.beforeClose = function(e) {
        $(".team-section .lightbox").addClass("targetDiv");
    }

    // strategy and team
    $('.first').css('display','block');
    
    jQuery('.showSingle').hover(function() {
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        jQuery('.targetDiv').hide();
        jQuery('#'+$(this).attr('target')).show().addClass('animated pulse');
    });
    jQuery('.showSingle').click(function() {
        jQuery('.targetDiv').hide();
        jQuery('#'+$(this).attr('target')).show();
    });

    // accordion
    $(".strategies-header").on("click", function() {
        if (!$(this).parent().hasClass("on")) {
            $(".strategies ul li").removeClass("on");
            $(this).parent().addClass("on");
        } else {
            $(this).parent().removeClass("on");
        }
    });
	$(".meet-our-team-header").on("click", function() {
        if (!$(this).hasClass("on")) {
            $(".meet-our-team-header").removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
        }
    });
	
	
	$(".transaction_carousel_wrapper").click(function( event ) {
		event.stopPropagation();
		event.preventDefault();
        if (!$(this).hasClass("on")) {
            $(".transaction_carousel_wrapper").removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
        }
    });
	
	$(".transaction_carousel_container").click(function( event ) {
		event.stopPropagation();
		event.preventDefault();
    });
	
	$(".bio_container").click(function( event ) {
  		event.stopPropagation();
		event.preventDefault();
		if (!$(this).hasClass("on")) {
            $(".bio_container").removeClass("on");
            $(this).addClass("on");
			//$(this).parentNode.parentNode.parentNode.addClass("on");
        } else {
            $(this).removeClass("on");
			//$(this).parentNode.parentNode.parentNode.addClass("on");
        }
		
    });


    // map
    var mapData = [];
    for (var i=0; i<mapData.length; i++) {
        var li = '<li class="marker" style="left:' + mapData[i].left + '%;top:' + mapData[i].top + '%;">';
            li += '<a href="javascript:void(0);">' + mapData[i].panels[0].name + '</a>';
            for (var j=0; j<mapData[i].panels.length; j++) {
                li += '<span class="marker-panel marker-panel-' + mapData[i].panels.length + '-' + j + '">';
                    li += '<strong>' + mapData[i].panels[j].name + '</strong>';
                    li += '<span class="stats">';
                        li += '<div class="stat-title">';
                            li += '<p>Projects</p>';
                            li += '<p>Total Invested</p>';
                        li += '</div>';
                        li += '<div class="stat-amount">';
                            li += '<p>' + mapData[i].panels[j].projects + '</p>';
                            li += '<p>' + mapData[i].panels[j].invest + '</p>';
                        li += '</div>';
                    li += '</span>';
                li += '</span>';
            }
        li += '</li>';
        var el = $(li);
        $(".markers").append(el);
    }

    // slick slides
    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });	

    $('.about-image-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });	
	
	$('.case-study-image-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: false
    });	

});



window.onload = function (){
	// trigger scroll animate
	if ($(window).scrollTop() > 10 && animateStats == 0){
		 animateSt();
	}
	$(window).scroll(function (){
		if ($(window).scrollTop() > 10 && animateStats == 0){
			 animateSt();
		}
	});
	
}

/* animate stats */
var animateStats = 0;
var stat1 = 60; // procents
var stat2 = 1; // month
var stat3 = 5; // years
var stat4 = 5; // models
var stat5 = 30; // investors
var stat6 = 19; // objects
var stat7 = 48; // profitability

var ctr1 = 0; // procents
var ctr2 = 0; // month
var ctr3 = 0; // years
var ctr4 = 0; // models
var ctr5 = 0; // investors
var ctr6 = 0; // objects
var ctr7 = 0; // profitability
function animateSt(){
	clearTimeout(t);
	animateStats = 1;
	if (document.getElementById('stat1').innerHTML*1 < stat1){
		ctr1 = ctr1 + 3;
		document.getElementById('stat1').innerHTML = Math.round(ctr1);
	}
	if (document.getElementById('stat2').innerHTML*1 < stat2){
		ctr2 = ctr2 + 0.09;
		if (ctr2 >= 0.6){ctr2 = stat2;}
		document.getElementById('stat2').innerHTML = Math.round(ctr2*100)/100;
	}
	if (document.getElementById('stat3').innerHTML*1 < stat3){
		ctr3 = ctr3 + 0.14;
		document.getElementById('stat3').innerHTML = Math.round(ctr3);
	}
	if (document.getElementById('stat4').innerHTML*1 < stat4){
		ctr4 = ctr4 + 0.12;
		document.getElementById('stat4').innerHTML = Math.round(ctr4);
	}
	if (document.getElementById('stat5').innerHTML*1 < stat5){
		ctr5 = ctr5 + 1;
		document.getElementById('stat5').innerHTML = Math.round(ctr5);
	}
	if (document.getElementById('stat6').innerHTML*1 < stat6){
		ctr6 = ctr6 + 0.4;
		document.getElementById('stat6').innerHTML = Math.round(ctr6);
	}
	if (document.getElementById('stat7').innerHTML*1 < stat7){
		ctr7 = ctr7 + 0.9;
		document.getElementById('stat7').innerHTML = Math.round(ctr7);
	}
	var t = setTimeout('animateSt()',70);	
}
/* end animate stats */


// equalise height
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el = 0,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
 
 var EHT = setTimeout("equalheight('.equalize')",300);
}

$(window).on('load',function() {
  equalheight('.equalize');
});


$(window).on('resize',function() {
  equalheight('.equalize');
});
