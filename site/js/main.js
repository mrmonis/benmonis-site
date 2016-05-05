$('#contactMe').submit(function(event) {
	if(event) {
		event.preventDefault();
	}
    $.ajax({
        type:'POST',
        success: function(req, res, jqXHR) {
            console.log(res);
        }, error: function(msg, res) {
            console.log(err);
        }
    })
});