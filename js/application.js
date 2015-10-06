$(document).ready(function() {
    console.log( "ready!" );

// Total Price

var returnTotalPrice = function(){
	var itemPrices = $('.item-price'); // Select all the prices
    var itemQuantities = $('.quantity'); // Select all the quantities
    var totalPrice = 0;


}

  var createItem = function(){
    var itemName = $('#new-item-name').val();
  	var itemUnitPrice = $("#new-item-unit-price").val();
 	var newItem = '<div class="item-row"> <div class="item-name">'+ itemName + '</div> <div class="item-price">'+ '$' + itemUnitPrice + '</div><div class="item-qty "><input type="text" class="quantity" placeholder="Quantity"> <button class="cancel">Cancel</button> </div> </div>';
 	$('#items-list').prepend(newItem);
 }

//Create Item
$('#create').on('click', function(){
    createItem();
  });

//Remove Item
  $(document).on('click', '.cancel',function(){
    // fadeOut = hiding = display: none;
    $(this).parent().parent().fadeOut('slow', function(){
      $(this).remove(); // This is removing the HTML
      returnTotalPrice(); // Recalculate the total price
    });
  });


});

