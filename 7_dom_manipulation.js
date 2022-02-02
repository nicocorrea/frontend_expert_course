// GETTING ELEMENTS
const secondLi = document.getElementById("second-li");
const firstLi = document.querySelector("li");
const fetchAllLi = document.querySelectorAll("li");
console.log(firstLi);
console.log(secondLi);
console.log(fetchAllLi);
console.log(fetchAllLi.length);

// I can use 'forEach' only
fetchAllLi.forEach((element) => {
  console.log(element);
});

// If I want to use other functions (i.e. map) then I need to convert it to array
Array.from(fetchAllLi).map((li) => {
  console.log((li.style.color = "Blue"));
});

// NOTE: getElementsByClassName(className) or getElementsByTagName(tagName) return an HTML collection
// and you can convert it later to an Array like above.

// SETTING ATTRIBUTES
fetchAllLi[0].value = 5; // Changes the bullet number associated to this item
fetchAllLi[0].color = "red";
fetchAllLi[0].textContent = "Changed!";
fetchAllLi[1].setAttribute("class", "important big"); // I can give more than one class by separating it.

fetchAllLi[1].classList.remove("important");
fetchAllLi[1].classList.remove("big");
fetchAllLi[1].classList.add("big", "blue");

fetchAllLi[2].classList.toggle("big"); // It will add or remove the class depending on the state that it sits.

// This is not the preferred option since it can override other properties. Better to use classList.add/remove
fetchAllLi[2].className = "big blue";

// CREATING ELEMENTS
const p1 = document.createElement("p");
p1.textContent = "Hello World";
document.body.appendChild(p1);
// NOTE: Using 'append' instead of 'appendChild' can also work but it can also take simple string. Not desirable.
document.body.append("nico");

const p2 = document.createElement("p");
const text = document.createTextNode("Hola Mundo");
p2.append(text);
document.body.prepend(p2);

// The code below will clear-up everything inside the body tag. Sometimes useful.
// document.body.innerHTML = '';

// Option 1
const parent = document.querySelector("ol");
const listItemsToAdd = [];
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `List item with i=${i}`;
  listItemsToAdd.push(li);
}
parent.append(...listItemsToAdd);

// Option 2
const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `List item with fragment and i=${i}`;
  fragment.append(li);
}
parent.append(fragment);

// SIZES AND SCROLLING
console.log(window.innerWidth);

console.log(fetchAllLi[0].style.fontSize); // Will output blank because by default the fontSize is not set at the element.
console.log(window.getComputedStyle(fetchAllLi[0]).fontSize);

const scrollable = document.getElementById("scrollable");
console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);
console.log(scrollable.querySelectorAll("p")[0].offsetTop); // How far the first paragraph is from the top of the container.

scrollable.querySelectorAll("p")[5].scrollIntoView(); // Will go stright to the 5th paragraph

scrollable.scrollTo({
  top: scrollable.querySelectorAll("p")[0].offsetTop,
  behavior: "smooth",
});
