const loadAllCards = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(response => response.json())
    .then(data =>showAllCards(data.meals))
    .catch(error => console.error("Error happened", error))
}


const showAllCards = (cards) => {
    const cardContainer = document.getElementById('card-container');
    console.log(cards)
    cards.forEach(card => {
       const div = document.createElement('div')
    div.innerHTML =`
        <div class="flex gap-6 border rounded-lg p-2">
           <img class="w-[250px] rounded-lg" src=" ${card.strMealThumb}"/>
           <div class="flex flex-col justify-center items-start space-y-2">
           <h3 class="text-xl font-bold">${card.strMeal}</h3>
            <p class="text-sm text-gray-400">There are many variations of passages of available, but the majority have suffered</p>
            <a class="link link-warning">View Details</a>
           </div> 
        </div>
    `
    cardContainer.appendChild(div)

   });
}

loadAllCards()