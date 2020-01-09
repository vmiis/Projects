var orderData={
    cmd:"stripe-pay",
    items:[],
    currency:"aud",
    info:{}
}
//****************************************
//wappsystem code
var api_address="https://api.wappsystem.com"
var items=sessionStorage.getItem("shopping_items");
var shopping_items=JSON.parse(items);
var shopping_amount=sessionStorage.getItem("shopping_amount");
for(var i=0;i<shopping_items.length;i++){
    orderData.items.push({id:shopping_items[i].item})
}
orderData.info.total=shopping_amount;
async function vm_get_stripe_public_key(){
    return {"publishableKey":"pk_test_Qt2XuK8annqxYBbQ75iEewb100BbVrGE6i"};
}
//****************************************

// A reference to Stripe.js
var stripe;

/*
var orderData = {
  items: [{ id: "photo-subscription" }],
  currency: "usd"
};
*/
// Disable the button until we have Stripe set up on the page
document.querySelector("button").disabled = true;
  //fetch(api_address+"/stripe-key")
  vm_get_stripe_public_key()
  .then(function(result) {
    return result;
    //return result.json();
  })
  .then(function(data) {
    return setupElements(data);
  })
  .then(function({ stripe, card, clientSecret }) {
    document.querySelector("button").disabled = false;

    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      pay(stripe, card, clientSecret);
    });
  });

var setupElements = function(data) {
  stripe = Stripe(data.publishableKey);
  /* ------- Set up Stripe Elements to use in checkout form ------- */
  var elements = stripe.elements();
  var style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var card = elements.create("card", { style: style });
  card.mount("#card-element");

  return {
    stripe: stripe,
    card: card,
    clientSecret: data.clientSecret
  };
};

var handleAction = function(clientSecret) {
  stripe.handleCardAction(clientSecret).then(function(data) {
    if (data.error) {
      showError("Your card was not authenticated, please try again");
    } else if (data.paymentIntent.status === "requires_confirmation") {
      
      
      fetch(api_address+"/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          paymentIntentId: data.paymentIntent.id
        })
      })
        .then(function(result) {
          return result.json();
        })
        .then(function(json) {
          if (json.error) {
            showError(json.error);
          } else {
            orderComplete(clientSecret);
          }
        });
        
    }
  });
};

/*
 * Collect card details and pay for the order
 */
var pay = function(stripe, card) {

//alert(JSON.stringify(card))

  changeLoadingState(true);

  // Collects card details and creates a PaymentMethod
  stripe
    .createPaymentMethod("card", card)
    .then(function(result) {
      if (result.error) {
        showError(result.error.message);
      } else {
        orderData.paymentMethodId = result.paymentMethod.id;
  
        //vm_stripe_pay( JSON.stringify(orderData) )
        return fetch(api_address+"/pay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderData)
        });
      }
    })
    .then(function(result) {
        return result.json();
    })
    .then(function(response) {
      if (response.error) {
        showError(response.error);
      } else if (response.requiresAction) {
        // Request authentication
        handleAction(response.clientSecret);
      } else {
        orderComplete(response.clientSecret);
      }
    });
};

/* ------- Post-payment helpers ------- */

/* Shows a success / error message when the payment is complete */
var orderComplete = function(clientSecret) {
  stripe.retrievePaymentIntent(clientSecret).then(function(result) {
    var paymentIntent = result.paymentIntent;
    var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);

    document.querySelector(".sr-payment-form").classList.add("hidden");
    document.querySelector("pre").textContent = paymentIntentJson;

    document.querySelector(".sr-result").classList.remove("hidden");
    setTimeout(function() {
      document.querySelector(".sr-result").classList.add("expand");
    }, 200);

    changeLoadingState(false);
  });
};

var showError = function(errorMsgText) {
  changeLoadingState(false);
  var errorMsg = document.querySelector(".sr-field-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};
