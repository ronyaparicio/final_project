$( document ).ready(function() {
	$("#removefromwatch2").hide();

});

$("#addtowatch2").on("click", function() {
	
	$(this).hide();
	$("#removefromwatch2").show();
	
});

$("#removefromwatch2").on("click", function() {
	$(this).hide();
	$("#addtowatch2").show();
});

