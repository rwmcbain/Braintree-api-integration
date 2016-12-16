var express = require('express');
var router = express.Router();
var braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "c7k5gzrc4993zxjs",
  publicKey: "qg4t7xs8vpnstyhc",
  privateKey: "6556f653a8582fff72a0e8c8bd943487"
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/client_token', function(req, res, next){
	gateway.clientToken.generate({}, function (err, response) {
  	var clientToken = response.clientToken
  	res.send(clientToken)
  });
});

router.post('/paymentsubmission', function (req, res) {
  var transactionErrors;
  var amount = '10.00'; // set amount to $10
  var paymentNonce = req.body['payment-method-nonce'];
  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: paymentNonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    if (result.success || result.transaction) {
      res.render('success')
    } else {
      transactionErrors = result.errors.deepErrors();
      res.render('error')
    }
  });
});



module.exports = router;