// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabEntry = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
 .then(response => {
   response.data.topics.forEach(item => {
   tabEntry.appendChild(TabComponent(item))
  })
  // .catch(error => {
  //  console.log(error)

   //why does it say cannot read property of 'catch' of undefined?
  // }) 

 });

 function TabComponent (data){
  //define elements
  const tabDiv = document.createElement('div');

  // set class names
  tabDiv.classList.add('tab');

  // set text content
  tabDiv.textContent = data;
  

  return tabDiv;
 }
