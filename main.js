 function handleCostKeydown(event) { 
      // If the Enter key is pressed, calculate the total cost
      if (event.key === 'Enter') {
        calculateTotal();
      }
    }
    // Select the input element and get its value
   function calculateTotal () {
      const inputElement = document.querySelector('.js-cost-input');
      let cost = Number(inputElement.value); // Convert to a number

      if (cost < 40) {  // Check if the cost is less than 40
        cost = cost + 10; // If so, add 10 to the cost
      }
     // Display the total cost in the paragraph with class 'js-total-cost'
      document.querySelector('.js-total-cost')
       .innerHTML = `$${cost}`; // The first dollar sign $ is just a regular character in the string, representing the currency symbol.
   }



    function subscribe() {
        // Select the button element with the class 'js-subscribe-button'
        const buttonElement = document.querySelector('.js-subscribe-button');

        // Check the current text of the button
        if (buttonElement.innerText === 'Subscribe') {
          // If the button text is 'Subscribe', change it to 'Subscribed'
          buttonElement.innerHTML = 'Subscribed';
          buttonElement.classList.add('is-subscribed') // classList gives us control of the class attribute
        } else {
          // If the button text is anything else (e.g., 'Subscribed'), change it back to 'Subscribe'
          buttonElement.innerHTML = 'Subscribe';
          buttonElement.classList.remove('is-subscribed') // remove the class
        }
      }