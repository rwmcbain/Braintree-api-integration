var form = document.querySelector('#checkout-form');
var submit = document.querySelector('input[type="submit"]');

// making Ajax call to /client_token to get the token for authorization
$.ajax({
    url: '/client_token',
    type: 'get',
    success: function(data) {
    		brainTreeAuth(data) // on success, creates hosted fields
    },
    error: function(err) {
    }
});

function brainTreeAuth(token){
	braintree.client.create({
	  authorization: token
	}, function (clientErr, clientInstance) {
	  if (clientErr) {
	    return;
	  }
	  braintree.hostedFields.create({
	    client: clientInstance,
	    styles: {
	      'input': {
	        'font-size': '14pt'
	      },
	      'input.invalid': {
	        'color': 'red'
	      },
	      'input.valid': {
	        'color': 'green'
	      }
	    },
	    fields: {
	      number: {
	        selector: '#card-number',
	        placeholder: '4111 1111 1111 1111'
	      },
	      cvv: {
	        selector: '#cvv',
	        placeholder: '123'
	      },
	      expirationDate: {
	        selector: '#expiration-date',
	        placeholder: '10/2019'
	      }
	    }
	  } , function (hostedFieldsErr, hostedFieldsInstance) {
	    if (hostedFieldsErr) {
	      return;
	    }
		// form submission is disabled until this point
	    submit.removeAttribute('disabled'); 

	    form.addEventListener('submit', function (event) {
	      event.preventDefault();

	      hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
	        if (tokenizeErr) {
	        	var div = document.getElementById('error');
	        	div.innerHTML ='Please enter valid payment details'; // appending error into div
	          return;
	        }
	        document.querySelector('input[name="payment-method-nonce"]').value = payload.nonce;
	        form.submit();
	      });
	    }, false);
	  }
	  );
	});
};

