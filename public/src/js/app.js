var searchObject = new Search();

$('#txt-search').on('keyup', function (e) {
	var text = $(this).val();

	if (text.length >= 2) {
		var results = searchObject.search(text, $('.event-wrapper'), ['h3', 'span']);

		searchObject.toggleElementsBySearchResults($('.event-wrapper'), results);
	}
});