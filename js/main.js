$(document).ready(function(){
	
	var searchForm = $('.main-search'),
		searchTrigger = $('.btn-search'),
		coverLayer = $('.cover-layer');
	
	function closeSearchForm() {
		searchTrigger.removeClass('search-form-visible');
		searchForm.removeClass('is-visible');
		coverLayer.removeClass('search-form-visible');
	}
	
	searchTrigger.on('click', function(event){
		event.preventDefault();
		if( searchTrigger.hasClass('search-form-visible') ) {
			searchForm.find('form').submit();
		} else {
			searchTrigger.addClass('search-form-visible');
			coverLayer.addClass('search-form-visible');
			searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
		}
	});
	
	//close search form
	searchForm.on('click', '.btn-search-close', function(event){
		closeSearchForm();
		event.preventDefault();
	});

	coverLayer.on('click', function(){
		closeSearchForm();
	});
	
	$(document).keyup(function(event){
		if( event.which=='27' ){
			closeSearchForm();
		}
	});
	
	/*---------- NAVIGATION HAMBURGER ----------*/
	$(".navigation-hamburger").on("click", function(){
		if($(this).hasClass('-open')){
			$(this).removeClass('-open').addClass('-close');
			$('body').removeClass('menu-open');
		}
		else{
			$(this).removeClass('-close').addClass('-open');
			$('body').addClass('menu-open');
		}
	});
	
}); //End of document.ready