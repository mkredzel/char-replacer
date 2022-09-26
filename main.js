let replaces = [];

let addItem = document.querySelector("#addItem");
let transformText = document.querySelector("#transformText");
let message = document.querySelector("#message");

let trash = document.querySelector("#delete");

// click event for add button
transformText.addEventListener("click", function () {
  let text = document.querySelector("#text").value;

  let output;

  if (replaces.length > 0) {
    replaces.forEach((el) => {
      output = text.replaceAll(el.replaced, el.replacer);
    });
  } else {
    output = text;
  }

  document.querySelector("#output").innerHTML = output;
  document.querySelector("#output-container").style.display = "block";
});

// click event for add button
addItem.addEventListener(
  "click",
  function () {
    // get value of user input
    let replaced = document.querySelector("#replaced-item").value;
    let replacer = document.querySelector("#replacer-item").value;

    if (replaced == "") {
      message.innerHTML = "<br>Enter a task.";
    } else {
      // remove message
      message.innerHTML = "";

      // reset input field
      document.querySelector("#replaced-item").value = "";
      document.querySelector("#replacer-item").value = "";

      replaces.push({
        replaced: replaced,
        replacer: replacer,
      });

      // creates new li element
      let itemAdded = document.createElement("li");
      let deleteitem = `${replaced}-${replacer}`.replaceAll(' ', '');
      itemAdded.innerHTML = '<span id=' + deleteitem + '>Replace <b>' + replaced + '</b> with <b>' + replacer + '</b> <i class="fa-solid fa-trash" onclick="DeleteMe(`' + deleteitem + '`)"></i></span>';
      itemAdded.className = "added";
      itemAdded.setAttribute('id', JSON.stringify(`${replaced}-${replacer}`));

      let mainList = document.querySelector(".myList");
      mainList.appendChild(itemAdded);
    }
  },
  false
);

function DeleteMe(item) {

  document.querySelector(
    `#${item}`
  ).parentNode.style.display = "none";

  replaces = replaces.filter(function (el) {
    return `${el.replaced}-${el.replacer}`.replaceAll(' ', '') != JSON.parse(item);
  });
}
