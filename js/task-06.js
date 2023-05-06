const inputEl = document.querySelector("#validation-input");

const checkInputLength = () => {
  const inputValueLength = inputEl.value.length;
  const dataLength = inputEl.getAttribute("data-length");

  if (inputValueLength === Number(dataLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", checkInputLength);
