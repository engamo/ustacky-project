var products = [{
	index: 1,
	id: 'p1',
	name: 'Samsung TV',
	price: 500000
},
{
	index: 2,
	id: 'p2',
	name: 'Pixel 4a',
	price: 250000
},
{
	index: 3,
	id: 'p3',
	name: 'PS 5',
	price: 300000
},
{
	index: 4,
	id: 'p4',
	name: 'MacBook Air',
	price: 800000
},
{
	index: 5,
	id: 'p5',
	name: 'Apple Watch',
	price: 95000
},
{
	index: 6,
	id: 'p6',
	name: 'Air Pods',
	price: 75000
},

]

function checkout() {
	nameValidation();
	emailValidation();
	telValidation()
	var nameInput = document.getElementById("customer_name");
	var emailInput = document.getElementById("customer_email");
	var telInput = document.getElementById("customer_phone");

	Customer.name = nameInput.value;
	customer.email = emailInput.value;
	customer.telephone = telInput.value;
	customer.cart = cart;
	customer.totalAmount = totalAmount;

	if (cart.length ==0) {
		alert("Please Select a product")
		return
	}

	if (validationResult == true) {
		console.log ("The customer data is: ", customer)
		closeCart();
		payWithPaystack()
	}
}

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  let handler = PaystackPop.setup({
    key: 'pk_test_7310d2b081204a9b85d1207e9638c16fb0ebb542', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}