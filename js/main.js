
jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: $(this.hash).offset().top - 0 }, 1000);
	});
});


blueimp.Gallery(
    document.getElementById('links'),
    {
        onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].appendChild(document.createTextNode(text));
            }
        }
    }
);