$(document).ready(function() {
  
  $('#newitembutton').click(function() {
  	addnewitem($("#newitem"));
  });

  $('#shopping-table').on("mouseenter", ".shopping-row", (function() {
    setrowtext(this, checkmark, deletemark);
  }));

  $('#shopping-table').on("mouseleave", ".shopping-row", (function() {
  	setrowtext(this, "", "");
  }));

  $('#shopping-table').on( "click", ".xmark", (function() {
  	$(this).closest("tr").remove();
  }));

  $('#shopping-table').on("click", ".check", (function() {
  	//console.log('clicked checkmark');
  	$(this).closest("tr").find(".shopping-item").toggleClass("bought-item");
  }));
  
});

var checkmark = "&#x2714";
var deletemark = "&#x2716";

function setrowtext(row, checktext, xtext) {
	$(row).find(".check").html(checktext);
	$(row).find(".xmark").html(xtext);
}

function addnewitem(input) {
	htmltext = '<tr class="shopping-row">' +
				'<td class="check"/>' +
				'<td class="shopping-item">' + $(input).val() + '</td>' +
				'<td class="xmark"/>' +
				'</tr>' ;
	$(".shopping-table").append(htmltext);
	$(input).val("");
}
