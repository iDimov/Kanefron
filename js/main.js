$(function(){
	// Переключение меню
	$('#menu-toggle').on('click', function(){
		$('.modal-menu').animate({'left': 0, 'opacity': '1'}, 500)
	});
	$('.menu-close').on('click', function(){
		$('.modal-menu').animate({'left': '-300px', 'opacity': '0'}, 500)
	});


var sum = 0;

var arr = [
	"img/bg/photo_1.png",
	"img/bg/photo_2.png",
	"img/bg/photo_3.png",
	"img/bg/photo_4.png",
	"img/bg/photo_5.png"
];

var number = 0;

  // Тест интерактив
$('.test-variation').on('click', function(){ 
	var scores = $(this).attr('data');
		console.log(scores);



	sum = Number(sum) + Number(scores); 
	console.log(sum);
  $(this).closest(".myqs").hide(200);
	$(this).closest(".myqs").next().show(300);
	$('.test-title.active').hide(200);
	$('.test-title.active').removeClass('active').next().show(300).addClass('active');
	$('.test-counter.active').hide(200);
	$('.test-counter.active').removeClass('active').next().show(300).addClass('active');

number++;
	$('.test-bg').fadeTo('fast', 0.3, function(){
    $(this).css('background-image', 'url(' + arr[number] + ')');
}).fadeTo('400', 1);


});



$('.back').on('click', function(){ 
	$(this).parent().prev().show(300);
	$(this).parent().hide(200);
	$('.test-title.active').hide(200);
	$('.test-title.active').removeClass('active').prev().show(300).addClass('active');
	$('.test-counter.active').hide(200);
	$('.test-counter.active').removeClass('active').prev().show(300).addClass('active');
	number--;
	$('.test-bg').fadeTo('300', 0.3, function(){
    $(this).css('background-image', 'url(' + arr[number] + ')');
}).fadeTo('300', 1);
});

$('#q-5 .test-variation').on('click', function(){ 
  console.log('dfgsdfg');
		$("#di").hide(200);
		$("#dis").show(300);
		if(sum < 8 ) {
			$('.pochka-s-2').attr('src', 'img/text/ans_1.svg');
			$('.dyn-text').html('Живы с проблемными почками? Надо сообщить британским ученым.');
		} else if(sum < 12) {
			$('.pochka-s-2').attr('src', 'img/text/ans_2.svg');
						$('.dyn-text').html('Ребята, анука мигом к врачу. Лучше не пешком. В теории еще можете успеть.');
		} else if(sum < 17) {
		$('.pochka-s-2').attr('src', 'img/text/ans_3.svg');
					$('.dyn-text').html(' Но, знаете, жизнь – штука изменчивая.');
		} else if(sum > 17) {
		$('.pochka-s-2').attr('src', 'img/text/ans_4.svg');
					$('.dyn-text').html(' Бросайте все и показуйте всем свои эталонные почки.');
		}
});



var tl = new TimelineLite();
var oog_open = $('#oog_open');
var oog_dicht = $('#oog_dicht');

function winkEye() {
  tl.set($("#oog_dicht"), { opacity: 1, delay: 4});
  tl.set($("#oog_open"), { opacity: 0});
 
   tl.set($("#oog_open"), { opacity: 1, delay: 0.1});
   tl.set($("#oog_dicht"), { opacity: 0, onComplete: winkEye});
  
}

winkEye();


//Анимация первого экрана
var lief = $('.lief-big'),
	 pack = $('.pack-min'),
	 text = $('.my-lief-text'),
	 list = $('.my-list li'),
	 menu = $('.menu li'),
	 line1 = $('.line-1'),
	 line2 = $('.line-2'),
	 line3 = $('.line-3'),
	 natasha1 = $('.natasha-1'),
	 natashat1 = $('#text-4, #text-5'),
	 topText = $('.top-text img');

var tl = new TimelineLite();

tl.to(lief, 1, {autoAlpha: 1, rotation: 360, scale: 1, ease:Power4.easeOut})
.to(pack, 1, {autoAlpha: 1, scale: 1, ease:Power4.easeOut}, '-=.65')
.staggerTo(text, 1, {autoAlpha: 1, scale: 1, y: 70, ease:Expo.easeOut}, .1, '-=.55')
.staggerTo(list, 1, {autoAlpha: 1, scale: 1, y: 10, ease:Expo.easeOut}, .15, '-=1.9')
.staggerTo(topText, 1, {autoAlpha: 1, scale: 1, y: -20, ease:Expo.easeOut}, .1, '-=1')
.to(line1, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(line2, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(line3, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(natasha1, 1, {autoAlpha: 1, y: -100, ease:Expo.easeOut}, 1.5)
.staggerTo(natashat1, 1, {autoAlpha: 1, x: 30, ease:Expo.easeOut}, .1, '-=.77');

// ScrollMagic меню

	var controller = new ScrollMagic.Controller({container: "body", loglevel: 3, vertical: false, refreshInterval: 20});

	var myScene = new ScrollMagic.Scene({
		triggerElement: '#ap-menu',
		triggerHook: .4
	})
	.setClassToggle('#menu-toggle', 'fade-in')
	 .addTo(controller);
	// .addIndicators({
	//  	indent: 0
	//  })

});