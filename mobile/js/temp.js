
var pos;
window.addEventListener('scroll', function(){
    pos = window.scrollY;
	goTop.check(pos); //  위로가기
    header.header_set(pos); // 그림자 넣기
});



/* 컨텐츠의 높이값이 작을때 */
var layout;
layout = {
	load : function(){
		var wrap = $(".wrap");
		if(wrap.outerHeight() <= window.innerHeight) {
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	},
	active : function(pos){
		var wrap = $(".wrap");
		if(wrap.outerHeight() < window.innerHeight) {
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	},
	observerAction : function(){
		var wrap = $(".wrap");
		var header = $(".wrap header");
		if(!header) {
			if(wrap.outerHeight() < window.innerHeight) {
				$("html").addClass("flexCol");
				return;
			} else {
				$("html").removeClass("flexCol");
				return;
			}
		} else {
			if(window.innerHeight >= ($(header).prop('scrollHeight') + $("section").prop('scrollHeight'))) {
				$("html").addClass("flexCol");
				return;
			} else {
				$("html").removeClass("flexCol");
				return;
			}
		}
	}
}
layout.load();

// On element change. test1
$('section').on('DOMSubtreeModified', function () {
	layout.observerAction();
});





/* nav scroll */
let pos_nav;
var navSection = document.querySelector(".nav_section")
navSection.addEventListener('scroll', function(){
	pos_nav = navSection.scrollTop;
	// goTop.check(pos_nav);
	navHeader.navHeader_set(pos_nav);
	// layout.active(pos_nav)
});

let navHeader;
navHeader = {
	item : document.querySelector('.nav_header'),
	navHeader_set : function(pos_nav){
		if(!navHeader.item) return;
		console.log(pos_nav)
		if(pos_nav > ( navHeader.item.offsetHeight * 0)) {
			navHeader.item.classList.add('active')
		} else {
			navHeader.item.classList.remove('active')
		}
	},
	navHeader_height : function(){
		if(!navHeader.item) return;
		// navHeader.item.style.height = navHeader.inner.offsetHeight + 'px';
	}
}
navHeader.navHeader_height();







var ipt_num = document.querySelectorAll('input[type="number"');
ipt_num.forEach(function(item){
	item.addEventListener("focusin", function(){
		this.setAttribute('type', 'tel')
	})
	item.addEventListener("focusout", function(){
		this.setAttribute('type', 'tel')
	})
})






/* modal, alert 배경 클릭시 팝업 닫기 */
// $(".layer .dim").on("click", function(){
//     $(this).parents('.layer').hide();
// })


/*
function containerPadding(){
	var $container = $("body .container");
	$container.each(function(){
		var $footerBtn = $(this).siblings("footer");
		footerHeight = $footerBtn.outerHeight() + 15;
		$(this).css({
			"padding-bottom" : footerHeight
		})
	})
}
containerPadding();
*/


$(".input_form_title.toggle").on("click", function(){
	$(this).next(".input_form_cont").toggle()
})

/* depth2 메뉴 구분선 추가 */
// $(".gnb_sub a").before( "<span class='bar'></span>" );


window.onload = function(){
	/* 메뉴 보기 */
	$(".btn_menu").on("click", function(){
		$(".gnb_wrap").addClass("active");
		$("html").addClass("scrollHidden");
	})
	/* 메뉴 닫기 */
	$(".gnb_wrap .btn_close").on("click", function(){
		$(".gnb_wrap").removeClass("active");
		$("html").removeClass("scrollHidden");
	})
}







/* faq 보기 */
$(".faq_item .q").on("click", function(){
	$(this).closest(".faq_item").siblings().removeClass("active");
	$(this).closest(".faq_item").toggleClass("active");
})





/* 위로가기 버튼 보이기 (버튼 없을때 오류남.) */
var goTop;
goTop = {
	btn : document.querySelector(".toTop"),
	header_wrap : document.querySelector('.header_wrap'),
	check : function(pos){
		if(goTop.btn == null) {
			return;
		}
		if(pos > goTop.header_wrap.offsetHeight) {
			goTop.btn.classList.add("active")
		} else {
			goTop.btn.classList.remove("active")
		}
		// (pos > window.innerHeight) ? goTop.btn.classList.add("active") : goTop.btn.classList.remove("active");
	},
	action : function(pos){
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
if(goTop.btn != null) {
	goTop.btn.addEventListener("click", function(){
		goTop.action();
	})
}






/* 헤더 그림자 넣기 */
var header;
header = {
	item : document.querySelector('header'),
	header_set : function(pos){
		if(header.item == null) {
			return;
		}
		if(pos > header.item.offsetHeight) {
			header.item.classList.add('active')
		} else {
			header.item.classList.remove('active')
		}
		// (pos > header.item.offsetHeight * 1.5) ? header.item.classList.add('active') : header.item.classList.remove('active');
	}
}








window.onload = function(){


	/* footer 간격 샘플 */
	var footer_wrap;
	footer_wrap = {
		item : document.querySelector('.divide_bottom'),
		footer_wrap : document.querySelector('.footer_wrap'),
		active : function(pos){
			if(footer_wrap.item == null || footer_wrap.footer_wrap == null) {
				return;
			}

			footer_wrap.footer_wrap.style.marginTop = 0;
		}
	}
	footer_wrap.active();


}