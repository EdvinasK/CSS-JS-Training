// var building = function(name, floors,) {
// 	this.name = "My house";
// }


// var myHouse = new building();
// alert(myHouse.name);

// var weapon = function(damage, atcSpeed, durability, minLevel, itemLevel){
// 	this.damage = damage;
// 	this.atcSpeed = atcSpeed;
// 	this.durability = durability;
// 	this.minLevel = minLevel;
// 	this.itemLevel = itemLevel;
// }

// var myWeapon = new weapon(1,1,1,1,1);

// console.log(myWeapon);

$(document).ready(function() {
	// $('button.show-ajax-page').click(function() {
	// 	$('#DivOutput').load('./ajaxAdditionalPage.html #MainTOC');
	// });

	$('button.show-ajax-page').on('mouseenter', function() {
		// $('#DivOutput').load('./ajaxAdditionalPage.html #MainTOC', 
		// 	function(response, request, xhr){
		// 		if(status == "error") {
		// 			alert('Error: ' + xhr.statusText);
		// 		}
		// 	});

		$.get('./ajaxAdditionalPage.html', function(data){
			$('#DivOutput').html(data);
		});
	});

	$('button.show-ajax-page').on('mouseleave', function() {
		$('#DivOutput').empty();
	});

	$('#MyButton').click(function() {
		var customer = 'cust=' + // param in .NET controller action
			JSON.stringify({ 
				FirstName: $('#FirstNameTB').val(),
				LastName: $('#LastNameTB').val() 
			}); // Returns a JSON object(Not a string). Requires the usage of json2.js
		$.ajax({
			url: '../CustomerService.svc/InsertCustomer',
			data: customer,
			datatype: 'json',
			success: function(data, status, xhr){
				$('#OutputDiv').html('Insert status: ' +
									data.d.Status +  '<br />' +
									data.d.Message);
			},
			error: function(xhr, status, error){
				alert('Error occured: ' + status);
			}
		});
	});
});