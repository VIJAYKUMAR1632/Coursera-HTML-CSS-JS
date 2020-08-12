// console.log(document.getElementById('title'));

document.addEventListener("DOMContentLoaded",
	function (event) {
		// body...
	

	// ***DOM Manipulation, Handling Events***
	// 	function sayhello(event) {
	// 		console.log(event);
	// 	// body...
	// 	var name=document.getElementById("name").value;
	// 	var message= "<h2>Luv u " + name + "!</h2>";

	// 	// document.getElementById('container').textContent= message;


	// 	// console.log(document.getElementById('title'));
	// 	document.getElementById('container').innerHTML= message;

	// 		if (name == 'student') {
	// 			var title= document.querySelector('#title').textContent;
	// 			title+= ", Complete it fast";
	// 			document.querySelector("h1").textContent=title;
			
	// 		}	

		

	// 	}

	// 	// Unobstrusive event binding
	// 	document.querySelector('button').addEventListener('click', sayhello);
		
	// 	document.querySelector('html').addEventListener('mousemove',
	// 		function (event) {
	// 			if (event.shiftKey == true){
	// 				console.log('x:' + event.clientX);
	// 				console.log('y:' + event.clientY);
	// 			// body...
	// 			}
	// 		}

	// 	)	
	



	// ***Ajax Basics***
	// document.querySelector("button")
	// 	.addEventListener("click", function() {
			

	// 		$ajaxutils
	// 			.sendgetRequest("name.txt", function(request) {
					
	// 				var p_name=document.getElementById("name").value;
	// 				var name=request.responseText;

	// 				document.querySelector("#container")		
	// 				.innerHTML= p_name + "'s" + name;
		
	// 		});
		

		
	// });

	//***Ajax Basics + JSON***
	document.querySelector("button")
		.addEventListener("click", function() {
			

			$ajaxutils
				.sendgetRequest("name.json", function(res) {
					var message= res.firstName+
									" is a "+
									res.Type+
									"ans she prefers"+
									res.LikesPerksOver;

					// var p_name=document.getElementById("name").value;
					// var name=request.responseText;

					document.querySelector("#container")		
					.innerHTML= "<h2"+ message +"</h2>";
		
			});
		

		
	});
});

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });