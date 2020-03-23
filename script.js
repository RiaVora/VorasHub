$(document).ready(function() {
	let modal = $("#modal-box");
	// let imgBtn = $(".img").eq(0);
	let closeBtn = $(".close-btn").eq(0);
	let addCart = $(".add-to-cart").eq(0);
	let numCart = $("#shop-cart-num");
	// imgBtn.on("click", function() {
	// 	modal.css({
	//     	'display':'block'
 //    	})
 //    })

 	let numCartValue = 0;
 	addCart.on("click", function() {
 		console.log("hey");
 		numCartValue += 1;
 		numCart.html(numCartValue.toString());
 	})

	closeBtn.on("click", function() {
		modal.css({
	    	'display':'none'
    	})
	})

	$(window).on("click", function(event) {
		if(event.target === document.getElementById("modal-box")) {
			modal.css({
				'display':'none'
			})
		}
	})

	$(window).on("keyup", function(event) {
		if(event.key === "Escape") {
			modal.css({
				'display':'none'
			})
		}
	})

	let images = $(".img");
	for (let i = 0; i < images.length; i++) {
		images.eq(i).on("click", function() {
			modal.css({
	    		'display':'block'
    		})
		})
	}
})




