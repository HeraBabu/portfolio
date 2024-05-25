document.addEventListener('DOMContentLoaded', ()=>{
	//card options
	const cardArray=[
	{
		name:'big_bird',
		img: 'images/big_bird.jpg'
	},
	{
		name:'big_bird',
		img: 'images/big_bird.jpg'
	},
	{
		name:'big_bunny',
		img: 'images/big_bunny.jpg'
	},
	{
		name:'big_bunny',
		img: 'images/big_bunny.jpg'
	},
	{
		name:'big_cat',
		img: 'images/big_cat.jpg'
	},
	{
		name:'big_cat',
		img: 'images/big_cat.jpg'
	},
	{
		name:'big_dog',
		img: 'images/big_dog.jpg'
	},
	{
		name:'big_dog',
		img: 'images/big_dog.jpg'
	},
	{
		name:'small_bird',
		img: 'images/small_bird.jpg'
	},
	{
		name:'small_bird',
		img: 'images/small_bird.jpg'
	},
	{
		name:'small_cat',
		img: 'images/small_cat.jpg'
	},
	{
		name:'small_cat',
		img: 'images/small_cat.jpg'
	},
	{
		name:'small_dog',
		img: 'images/small_dog.jpg'
	},
	{
		name:'small_dog',
		img: 'images/small_dog.jpg'
	},
	{
		name:'small_bunny',
		img: 'images/small_bunny.jpg'
	},
	{
		name:'small_bunny',
		img: 'images/small_bunny.jpg'
	}
]

cardArray.sort(()=> 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon =[]

//flip your card
function flipCard(){
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500)
	}
}


//create your board
function createBoard() {
	for (let i=0;i<cardArray.length;i++){
		var card = document.createElement('img')
		card.setAttribute('src', 'images/blank.jpg')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

//check for matches
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if (cardsChosen[0] === cardsChosen[1]){
		//alert('you found a match')
		cards[optionOneId].setAttribute('src', 'images/white.jpg')
		cards[optionTwoId].setAttribute('src', 'images/white.jpg')
		cardsWon.push(cardsChosen)
	}
	else{
			cards[optionOneId].setAttribute('src', 'images/blank.jpg')
			cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
			//alert('sorry, try again')
	}
	cardsChosen =[]
	cardsChosenId=[]
	resultDisplay.textContent = cardsWon.length
	if (cardsWon.length === cardArray.length/2) {
		resultDisplay.textContent = 'Congratulations! You found them all!'
	}
}



createBoard()
})
