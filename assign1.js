function SearchPhotos()
{
	let clienId = "ryiILvNjrNBFYerPEpBuQDH6L2OMFX4XUJcxRfmRuAU";
	let query = document.getElementById('search').value;
	let url = "https://api.unsplash.com/search/photos/?client_id=" + clienId + "&query="+query;

	fetch(url)
	.then(function (data) {
		return data.json();
	})
	.then(function (data) {
		console.log(data);

		data.results.forEach(photo => {

			let column = `
				<img id="im" src="${photo.urls.regular}">
				<a id="aa" href="${photo.links.download}">
			`;

			$("#column").append(column);

		});
	});

	document.getElementById("footer").style.position = "relative";

	for (i=0;i<11;i++) {
	document.getElementById("im").remove();
	document.getElementById("aa").remove();
	}

}


var el = document.getElementById("column");
var i;

function listView() {
	document.getElementById("row").style.columnCount = "1";
  for (i=0;i<11;i++) {
    el.getElementsByTagName("img")[i].style.width = '100%';
  }
}

function gridView() {
	document.getElementById("row").style.columnCount = "3";
  for (i=0;i<11;i++) {
    el.getElementsByTagName("img")[i].removeAttribute("style");
  }
}
