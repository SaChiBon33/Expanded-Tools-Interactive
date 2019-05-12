// single line comment

/* 
multi 
line
comment
*/

$(document).ready(function(){

	//alert("u wot m8");

	$('button#one').click(function(){
		$('.redbox').hide();
	});

	$('button#two').click(function(){
		$('.redbox').show();
	});

	$('div.redbox').mouseenter(function(){
		$('.bluecircle').fadeOut('3000');
	});

	$('div.redbox').mouseleave(function(){
		$('.bluecircle').fadeIn('3000');
	});

	$('.title').click(function(){
		$(this).parents('.text-container').find('.content').slideToggle();
	});

});