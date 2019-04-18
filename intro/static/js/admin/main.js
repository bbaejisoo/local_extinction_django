
$(document).ready(function() {
	
	var table = $('#notice').DataTable({
		ajax : {
			'url' : 'notices.json',
			//'type': 'POST',
			'dataSrc' : ''
		},
		responsive: true,
		orderMulti: true,
		select : "single",
		"columns" : [ {
			"className" : 'details-control',
			"orderable" : false,
			"data" : null,
			"defaultContent" : '',
			"render" : function() {
				return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
			},
			width : "5px"
		}, {
			"data" : "BOARD_NUM"
		}, {
			"data" : "BOARD_TITLE"
		}, {
			"data" : "BOARD_DATE"
		}],
		"order" : [ [ 1, 'desc' ] ]
	});
 
	
	// Add event listener for opening and closing details
	$('#notice tbody').on('click', 'td.details-control', function() {
		var tr = $(this).closest('tr');
		var tdi = tr.find("i.fa");
		var row = table.row(tr);

		if (row.child.isShown()) {
			// This row is already open - close it
			row.child.hide();
			tr.removeClass('shown');
			tdi.first().removeClass('fa-minus-square');
			tdi.first().addClass('fa-plus-square');
		} else {
			// Open this row
			row.child(format(row.data())).show();
			tr.addClass('shown');
			tdi.first().removeClass('fa-plus-square');
			tdi.first().addClass('fa-minus-square');
		}
	});

	table.on("user-select", function(e, dt, type, cell, originalEvent) {
		if ($(cell.node()).hasClass("details-control")) {
			e.preventDefault();
		}
	});
});

function format(d) {

	// `d` is the original data object for the row
	return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'
			+ '<tr>'
			+ '<td>내용:</td>'
			+ '<td>'
			+ d.BOARD_CONTENT
			+ '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<td>작성자:</td>'
			+ '<td>'
			+ d.MEMBER_ID
			+ '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<td>공개범위:</td>'
			+ '<td>'
			+ d.BOARD_PUBLIC
			+ '</td>'
			+ '</tr>'
			+ '<tr>'
			+ '<td>게시글 관리</td>'
			+ '<td><button class="btn btn-primary" onclick="modifyarticle('
			+ d.BOARD_NUM
			+ ')">글 수정</button> <button class="btn btn-primary" onclick="deletearticle('
			+ d.BOARD_NUM
			+ ')">글 삭제</button></td>'
			+ '</tr>'
			+'</table>';
}