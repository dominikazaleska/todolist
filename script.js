const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const inputLength = () => input.value.length;

function createListElement() {
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);	
	const deleteButton = document.createElement("button");	
	deleteButton.classList.add("trash");
	li.appendChild(deleteButton);	
	const deleteIcon = document.createElement("i");	
	deleteIcon.classList.add("fas");
	deleteIcon.classList.add("fa-trash-alt");
	deleteButton.appendChild(deleteIcon);	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listItemDone(event) {
	let itemName;
	if (event.target.nodeName === "LI") {
		itemName = event.target.children[0];
		li = event.target;
	} 
	if (event.target.nodeName === "SPAN") {
		itemName = event.target;
		li = event.target.parentElement;
	} 
	if (event.target.nodeName === "LI" || event.target.nodeName === "SPAN") {
		li.classList.toggle("done");
	}
}

function deleteListItem(event) {
	let li;
	if (event.target.nodeName === "BUTTON") {
		li = event.target.parentElement;
	} 
	if (event.target.nodeName === "I") {
		li = event.target.parentElement.parentElement;
	}
	if (event.target.nodeName === "BUTTON" || event.target.nodeName === "I") {
		ul.removeChild(li);	
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listItemDone);

ul.addEventListener("click", deleteListItem);
