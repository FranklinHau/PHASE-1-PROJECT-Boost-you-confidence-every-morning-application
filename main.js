console.log('main js works')

fetch('http://localhost:3000/affirmations')
    .then(response => response.json())
   // .then(json => console.log(json))
    .then(affirmations) => {
        const affirmations = data.affirmations;
        
        const button = document.getElementById('showAffirmationButton');
        const affirmationContainer = document.getElementById('affirmationContainer');
            
        function displayRandomAffirmation() {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            const affirmation = affirmations[randomIndex];

            const affirmationElement = document.createElement('p');
            affirmationElement.textContent = affirmation.description;   
            
            affirmationContainer.innerHTML = '';
            affirmationContainer.appendChild(affirmationElement);
    } 
        };
    
