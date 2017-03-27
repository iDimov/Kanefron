$(function(){
$('#menu-toggle').on('click', function(){
	$('.modal-menu').animate({'left': 0, 'opacity': '1'}, 500)
});
$('.menu-close').on('click', function(){
	$('.modal-menu').animate({'left': '-300px', 'opacity': '0'}, 500)
});
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

tl.to(lief, 1, {opacity: 1, rotation: 360, scale: 1, ease:Power4.easeOut})
.to(pack, 1, {opacity: 1, scale: 1, ease:Power4.easeOut}, '-=.65')
.staggerTo(text, 1, {opacity: 1, scale: 1, y: 70, ease:Expo.easeOut}, .1, '-=.55')
.staggerTo(list, 1, {opacity: 1, scale: 1, y: 10, ease:Expo.easeOut}, .15, '-=1.9')
.staggerTo(topText, 1, {opacity: 1, scale: 1, y: -20, ease:Expo.easeOut}, .1, '-=1')
.to(line1, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(line2, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(line3, 1, {width: '100%', ease:Back.easeOut}, '-=.9')
.to(natasha1, 1, {opacity: 1, y: -100, ease:Expo.easeOut}, 1.5)
.staggerTo(natashat1, 1, {opacity: 1, x: 30, ease:Expo.easeOut}, .1, '-=.77');

// .staggerTo(menu, 1, {opacity: 1, scale: 1, x: 30, ease:Expo.easeOut}, .1, '-=.1')


// ScrollMagic

	var controller = new ScrollMagic.Controller({container: "body", loglevel: 3, vertical: false, refreshInterval: 20});


	var myScene = new ScrollMagic.Scene({
		triggerElement: '.pack-min',
		triggerHook: .4
	})
	.setClassToggle('#menu-toggle', 'fade-in')
	.addTo(controller);

	// .addIndicators({
	//  	indent: 100
	//  })

})