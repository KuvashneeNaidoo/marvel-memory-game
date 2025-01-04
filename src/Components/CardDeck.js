/* To start off, we make a constant called CardDeck and set it to an array. The deck we build in each 
card has a unique id so we set the id variable to 0.  We then create a variable called cards and we 
assign them to an array. The array contains all the Avenger images that will appear on the front side of 
the cards when flipped over. */
const CardDeck = () => {
  let id = 0;
  const cards = [
    "captainamerica",
    "blackpanther",
    "captainmarvel",
    "gamora",
    "hulk",
    "ironman",
    "shuri",
    "spiderman",
    "thor",
    "wandamaximoff",
  ].reduce((acc, item) => {
    acc.push({
      id: id++,
      item,
    });
    acc.push({
      id: id++,
      item,
    });
    return acc;
  }, []);
  return shuffle(cards);
};

/* We do not want the cards to be arranged in order so we create a shuffle function and set it to an array.
We create a copy of the array using slice which will copy all of the objects to a new array. We take the 
10 image objects, duplicate them and put them all inside this new array so we have 20 objects in there 
instead of 10. We iterate over that array using a for loop. We use the Math.random method to shuffle our 
deck of cards. We then will swap over the values by setting a copy of our array to randCard and then also 
setting our randCard to temp in order to enable the shuffling of the cards. */

const shuffle = (array) => {
  const _array = array.slice(0);
  for (var i = 0; i < _array.length - 1; i++) {
    var randomCard = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[randomCard];
    _array[randomCard] = temp;
  }
  return _array;
};

/* We export 'CardDeck' component in order to display this code in App.js. */
export default CardDeck;
