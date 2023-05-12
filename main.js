fetch('http://localhost:3000/affirmations')
  .then(response => response.json())
  .then(data => {
    //console.log('Fetched data:', data);

   // if (!Array.isArray(data)) {
   //   throw new Error('Fetched data is not in the expected format');
   // }

    const affirmations = data;

    const button = document.getElementById('showAffirmationButton');
    const affirmationContainer = document.getElementById('affirmationContainer');

    function displayRandomAffirmation() {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      const affirmation = affirmations[randomIndex];

      const affirmationElement = document.createElement('p');
      affirmationElement.textContent = affirmation.description;
      affirmationElement.classList.add('affirmation');

      affirmationContainer.innerHTML = '';
      affirmationContainer.appendChild(affirmationElement);
    }

    button.addEventListener('click', displayRandomAffirmation);
  })
  .catch(error => {
    console.error('Error fetching affirmations:', error);
  });