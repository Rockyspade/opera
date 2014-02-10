// Google Analytics

if(location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-XXXX-Y');
	ga('send', 'pageview');
}


// Disqus comments

var disqus_shortname = 'metacotta';

$('.comments-toggle').on('click', function(event) {

	event.preventDefault();

	var dsq = document.createElement('script');

	dsq.async = true;
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';

	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
});