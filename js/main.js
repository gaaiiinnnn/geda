new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#95AAA3', '#EAE7E4', '#7E8F7C', '#FAFAD2' ],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GHA소개', '제다큐어', '연구개발', '본사위치', '연구소위치'],
    easing: 'easeInOutCubic',
    menu: '.gnb_list',
    anchors: ['1st', '2nd', '3rd', '4th', '5th'],
    normalScrollElements: '#s2',
});

var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.total_mitem').click(function(){
    if($(this).hasClass('active')){ //현재 active가 적용된 상태일 때
        $(this).removeClass('active');
    } else {
        $('.total_mitem').removeClass('active');
        $(this).addClass('active');
    }
    
});

$('.totalmenu_w').click(function(){ //menu 부분 누르면
    $('.total_menu_z').addClass('active');
});
$('.totalClose_w').click(function(){
    $('.total_menu_z').removeClass('active');
});