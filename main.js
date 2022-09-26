let replaces = [];

let addItem = $("#addItem");
let transformText = $("#transformText");
let message = $("#message");

let trash = $("#delete");

// click event for add button
transformText.on("click", function () {
  let text = $("#text").val();

  if (!text) {
    message.html("<br>Enter text...");
    return;
  }

  let output;

  if (replaces.length > 0) {
    replaces.forEach((el) => {
      if (el.replaced != 0 && el.replacer != 0) {
        output = text.replaceAll(el.replaced, el.replacer);
      }
    });
  } else {
    output = text;
  }

  $("#output").html(output);
  $("#output-container").show();
});

// click event for add button
addItem.on("click", function () {
  // get value of user input
  let replaced = $("#replaced-item").val();
  let replacer = $("#replacer-item").val();

  if (!replaced || !replacer) {
    message.html("<br>Enter values...");
  } else {
    // remove message
    message.html("");

    // reset input field
    $("#replaced-item").val("");
    $("#replacer-item").val("");

    replaces.push({
      replaced: replaced,
      replacer: replacer,
    });

    let idx = replaces.length - 1;

    $("<li>")
      .html(
        `<span id='id${idx}'>Replace <b>` +
          replaced +
          `</b> with <b>` +
          replacer +
          `</b> <i class="fa-solid fa-trash" onclick="DeleteMe('${idx}')"></i></span>`
      )
      .addClass("added")
      .appendTo(".myList");
  }
});

function DeleteMe(i) {
  $(`#id${i}`).parent().hide();

  replaces[i] = 0;
}
