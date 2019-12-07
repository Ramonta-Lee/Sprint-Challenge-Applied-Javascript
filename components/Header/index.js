// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
 //define elements
 const bigDiv = document.createElement('div');
 const spanDate = document.createElement('span');
 const title = document.createElement('h1');
 const spanTemp = document.createElement('span');

 // set class names
 bigDiv.classList.add('header');
 spanDate.classList.add('date');
 spanTemp.classList.add('temp');


 // set text content
 spanDate.textContent = "SMARCH 28, 2019";
 title.textContent = "Lambda Times";
 spanTemp.textContent = "98°";

 // set up structure of elements
 bigDiv.appendChild(spanDate);
 bigDiv.appendChild(title);
 bigDiv.appendChild(spanTemp);

 return bigDiv;
};



const entryPoint = document.querySelector('.header-container');
entryPoint.appendChild(Header());

