$(document).ready(function() {
  
  $('#newitembutton').click(function() {
  	addnewitem($("#newitem"));
  });
  setrowbehavior();
  $('#newitem').val("default input");
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
	setrowbehavior();
}

function setrowbehavior () {
  $('.shopping-row').mouseenter(function() {
    setrowtext(this, checkmark, deletemark);
  })
  .mouseleave(function() {
  	setrowtext(this, "", "");
  }
  );
  
  $('.xmark').click(function() {
  	$(this).closest("tr").remove();
  });

  $('.check').click(function() {
  	console.log('clicked checkmark');
  	$(this).closest("tr").find(".shopping-item").toggleClass("bought-item");
  })
}