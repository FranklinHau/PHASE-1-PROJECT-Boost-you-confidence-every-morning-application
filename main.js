
//Fetching data from the server at the specified URL, which returns an array of affirmations.
fetch('http://localhost:3000/affirmations')
  .then(response => response.json())//Convert the response received from the server into a JSON object.
  .then(data => {  //Processing the JSON object received in the previous step.
    const affirmations = data; // Store the data received from the server in a variable named "affirmations".
    const button = document.getElementById('showAffirmationButton');//Get the HTML element with the specified ID
    const affirmationContainer = document.getElementById('affirmationContainer');//Get element with the specified ID

    let currentIndex = 0;//will keep track of current index of 'Affirmations' array 

    //creates a new smiley element 
    function createSmileyElement() {
      const smiley = document.createElement('span');
      smiley.textContent = '😊';
      smiley.classList.add('smiley');
      return smiley;
    }
    //This function displays the next affirmation from the affirmations array.
    function displayNextAffirmation() {
      if (currentIndex < affirmations.length) { //checks if currentIndex is within the length 
        const affirmation = affirmations[currentIndex];
        affirmationContainer.innerHTML = '';

        //forEach iterates through each element in the affirmations array, passing the current 
        //element (affirmation) and its index (index) as arguments to the callback function.
        affirmations.forEach((affirmation, index) => { //
          if (index === currentIndex) {
            const affirmationElement = document.createElement('p');//creates a new 'p'
            affirmationElement.textContent = affirmation.description;//replaces with new affirmation
            affirmationElement.classList.add('affirmation');//adds the class 'affirmation' to the affirmationElement

            //mouseover event listener to the paragraph element. When the mouse is hovered 
            //over the element, the text content is removed, and a smiley element is added 
            affirmationElement.addEventListener('mouseover', () => {
              affirmationElement.textContent = '';
              const smiley = createSmileyElement();
              affirmationContainer.appendChild(smiley);
            });

            //appending the affirmationElement to the affirmationContainer element in the DOM.
            affirmationContainer.appendChild(affirmationElement);
          }
        });
        //next affirmation will be displayed when the button is clicked again.
        currentIndex++;
      } else { //end of the array has been reached, display an alert message
        alert("You've reached the end of the affirmations.");
      }
    }

    //click event listener to the button.
    button.addEventListener('click', displayNextAffirmation);
  })
  //Catch any errors that occur during the fetch process
  .catch(error => {
    console.error('Error fetching affirmations:', error);
  });