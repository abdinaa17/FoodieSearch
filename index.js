const formSubmit = document.getElementById('form-submit');
const inputText = document.getElementById('input-text');
const foodResult = document.getElementById('food-content');
const alertText = document.querySelector('.alert');



function displayRecipe(e) {
     e.preventDefault();
     const inputTextValue = inputText.value;
    if(inputTextValue){

const fetchData = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputTextValue}`)

  const data = await response.json()
  




foodResult.innerHTML = data.meals.map((meal) => {
               const {strMealThumb, strMeal, strCategory, strSource, strInstructions} = meal
 return `<article class="food-container" id="food-container">
          <div class="food-left">
                <img class="food-img" src="${strMealThumb}" alt="${strMeal}">
                    <div class="food-info">
                        <h4>${strMeal}</h4>
                        <h4>Type: <span class='food-type' >${strCategory}</span> </h4> 
                    </div>
                    <div class="food-url">
                        <a href="${strSource}"  target="_blank" rel="noopener noreferrer">See More...</a>
                    </div>
            </div>
            <div class="food-right">
                <div class="food-instructions">
                    <h3>Instructions</h3>
                    <p>${strInstructions}</p>
                </div>
            </div>
            </article> <hr> ` 
            
            }).join('')


        }

fetchData()
        }  else {
  
alertText.classList.add('show');
            setTimeout(()=>{
            alertText.classList.remove('show');
        }, 3000)
            return





    }
}
   




formSubmit.addEventListener('submit', displayRecipe)




























