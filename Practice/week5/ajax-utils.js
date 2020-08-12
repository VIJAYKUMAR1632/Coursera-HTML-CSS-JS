(function(global){//forgot curly braces and parameter


	var ajaxutils= {};//forgot terminator

	function getRequestObject(){
		if (window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		
	}

	//Makes an Ajax GET request to 'requestURL'
	ajaxutils.sendgetRequest=function(requestURL, 
									responeHandler, 
									isJsonResponse) {
		var request=getRequestObject();

		request.onreadystatechange=
		function() {
			handleResponse(request, 
							responeHandler)
		};
		request.open("GET", requestURL, true);
		request.send(null);
	};

	function handleResponse(request,
							responeHandler,
							isJsonResponse) {
		if ((request.readyState==4) && (request.status ==200)){
			responeHandler(request.responseText);
			
			if (isJsonResponse == undefined){
			 	isJsonResponse = true;
			 }
		 	if (isJsonResponse){
			 	responseHandler(JSON.parse(request.responseText))
			 }
			else{
				responseHandler(request.responseText);
			}
		}
	}

global.$ajaxutils= ajaxutils;

})(window);