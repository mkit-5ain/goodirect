//ajax Functions
function ajaxHtmlCall(id, type, dataUrl, dataType, async, callBack) {
	var loadingCount = 0;
	$.ajax({
		type: type ,
		url:dataUrl ,
		dataType : dataType,
		async:async,
		success: function(data) {
			$(id).html(data);
			if(callBack !== undefined) {
				callBack();
				loadingCount = 0;
			}
		},
		error:function() {
			if(loadingCount < 10) {
				loadingCount++;
				ajaxFrame.ajaxHtmlCall(id, type, dataUrl, dataType, async, callBack);
			}else{
				alert('페이지를 불러올 수 없습니다.');
				return;
			}
		}
	});
}

//append Functions
function ajaxAppendCall(id, type, dataUrl, dataType, async, callBack) {
	$.ajax({
		type: type ,
		url:dataUrl ,
		dataType : dataType,
		async:async,
		success: function(data) {
			$(id).parent('*').append(data);
			if(callBack !== undefined) {
				callBack();
			}
		},
		error:function() {
			alert('페이지를 읽을 수 없습니다.');
		}
	});
}


