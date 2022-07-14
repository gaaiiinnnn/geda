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