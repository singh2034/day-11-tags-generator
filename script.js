let tags = document.getElementById("tags");
let inputTag = document.getElementById("input-tag");

inputTag.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const tag = document.createElement("li");
    const tagContent = inputTag.value.trim();
    if (tagContent !== "") {
      tag.innerText = tagContent;
      tag.innerHTML += "<button class='deleteBtn'>X</button>";
      tags.appendChild(tag);
      inputTag.value = "";
    }
  }
});

// delete button
tags.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentNode.remove();
  }
});
