let list = document.querySelector("li");
let span = document.querySelector("span");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li, span);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

list.addEventListener("click", function() {
  //  li.toggleClass("done");
   if (this.style.color === "gray") {
        this.style.color = "black";
        this.style.textDecoration = "none";
    }
    else { 
list.style.textDecoration = "line-through";
list.style.color = "gray";
    }
})

// To Delete ToDo

span.addEventListener("click", function() {
    alert("clicked a span");
    event.stopPropagation;
})


input.addEventListener("keypress", function(event) {
  if(inputLength() > 0 && event.which === 13) {
  createListElement();
  }   
})