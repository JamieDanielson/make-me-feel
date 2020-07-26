const moodTitles = document.querySelectorAll('.mood-title');
const moodContentItems = document.querySelectorAll('.mood-content-item');

// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('mood-selected');
  const moodContentItem = document.querySelector(`#${this.id}-content`);
  moodContentItem.classList.add('show');
}

function removeBorder() {
  moodTitles.forEach((item) => item.classList.remove('mood-selected'));
}

function removeShow() {
  moodContentItems.forEach((item) => item.classList.remove('show'));
}

// listen for tab click
moodTitles.forEach((item) => item.addEventListener('click', selectItem));

// Change background colors based on clicked mood

const happy = document.querySelector('#happy');

function makeHappy() {
  document.body.style.backgroundColor = '#F6FEAA';
  document.body.style.color = '#000';
}

happy.addEventListener('click', makeHappy);

const sad = document.querySelector('#sad');

function makeSad() {
  document.body.style.backgroundColor = '#232C33';
  document.body.style.color = '#fff';
}

sad.addEventListener('click', makeSad);

const smart = document.querySelector('#smart');

function makeSmart() {
  document.body.style.backgroundColor = '#800E13';
  document.body.style.color = '#fff';
}

smart.addEventListener('click', makeSmart);

const aww = document.querySelector('#aww');

function makeAww() {
  document.body.style.backgroundColor = '#FAA6FF';
  document.body.style.color = '#000';
}

aww.addEventListener('click', makeAww);
