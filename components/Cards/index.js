// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardEntry = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response => {
  console.log("articles", response);
  response.data.articles;
  response.data.articles.javascript.forEach(item => {
   const newCard = cardCreator(item);
   cardEntry.appendChild(newCard);
  })
  response.data.articles.bootstrap.forEach(item => {
   const newCard = cardCreator(item);
   cardEntry.appendChild(newCard);
  })

  response.data.articles.technology.forEach(item => {
   const newCard = cardCreator(item);
   cardEntry.appendChild(newCard);
  })

  response.data.articles.jquery.forEach(item => {
   const newCard = cardCreator(item);
   cardEntry.appendChild(newCard);
  })

  response.data.articles.node.forEach(item => {
   const newCard = cardCreator(item);
   cardEntry.appendChild(newCard);
  })
 
 })
 .catch(error => {
  console.log(error);
 })

 

 // Component function
 function cardCreator(data){
  //define elements
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const spanAuthor = document.createElement('span');

  //set class names
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  //set text content
  headlineDiv.textContent = data.headline;
  img.setAttribute('src', data.authorPhoto);
  spanAuthor.textContent = `By ${data.authorName}`;

  // set up element structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(spanAuthor);

  return cardDiv;
 }
