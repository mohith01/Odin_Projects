const container = document.querySelector('#container');

const para = document.createElement('p');
// content.classList.add('content');
para.style.color = 'red';
para.textContent = 'Hey I’m red!';

const heading = document.createElement('h3');
heading.style.color = "blue";
heading.textContent = "I am a blue h3!";

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = "I am a div!";

const p = document.createElement('p');
p.textContent = "Me too!";
div.appendChild(h1);
div.appendChild(p);

container.appendChild(para);
container.appendChild(heading);
container.appendChild(div);


// Method 2 Dom Manipulation
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");


// Check out arrow functions
// However problem with this method is that we can add only one eventlistener and it's rigid

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
// Can add multiple event listeners

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// Review of events

function alertMyFunction() {
  alert("YAY! YOU DID Me!");
}
const btn2 = document.querySelector('#btn2')

// METHOD 2
btn2.onclick = alertMyFunction;

// METHOD 3
btn2.addEventListener('click', alertMyFunction);

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
// e references the event
