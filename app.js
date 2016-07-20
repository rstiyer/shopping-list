$(document).ready(function() {
	$('ul').on('click', '.shopping-item-toggle', function() {
		$(this.closest('.shopping-item-controls')).prev().toggleClass('shopping-item__checked');
	})
	.on('click', '.shopping-item-delete', function() {
		$(this.closest('li')).remove();
	});

	$('#js-shopping-list-form').submit(function() {
		event.preventDefault();
		$('li:last-child').clone().insertAfter('li:last-child');
      	$('li:last-child .shopping-item').text($('#shopping-list-entry').val());
      	$(this)[0].reset();
	});
});