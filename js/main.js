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
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    normalScrollElements: '#s2',
});