$(function() {
	$sortable = $("#sortable");

	$("#upload").change(function(e) {
		console.log(e);
		console.log(e.target.files);
		$sortable.empty();
		$.each(e.target.files, function(index, file) {
			console.log(index);
			console.log(file);
			showImage(index, file);
		});
	});

	$sortable.sortable({
		stop: function(event, ui) {
			console.log(event);
			console.log(ui);
		}
	})

	function showImage(index, file) {
		var fileReader = new FileReader();

		fileReader.onload = function(e) {
			console.log(e);
			console.log(fileReader);
			$li = $("<li><img width='400' height='400' /></li>");
			$li.appendTo("#sortable");
			$li.find("img").attr("src", fileReader.result);
			$li.find("img").attr("oIndex", index);
		};
		fileReader.readAsDataURL(file);
	};
});