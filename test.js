var age = 100;

const persona = {
  name: "Nicolas",
  age: 35,
  func1: function (num) {
    return num + this.age;
  },
  func2: (num) => {
    return persona.age;
  },
};

// console.log(persona.func1(5));
// console.log(persona.func2(5));

const MIN_TIME = document.getElementById("duration").min;

const addToast = document.getElementById("add-button");
const toasts = document.getElementById("toasts");
const clearToasts = document.getElementById("clear-button");

clearToasts.addEventListener("click", () => {
  const div = document.getElementById("toasts");
  div.innerHTML = "";
});

addToast.addEventListener("click", () => {
  // CREATE ELEMENTS
  const div = document.createElement("div");
  const p = document.createElement("p");

  // GET ELEMENTS
  const success = document.getElementById("success").checked;
  const cancelable = document.getElementById("cancelable").checked;
  const messageContent = document.getElementById("message-content");
  const duration = document.getElementById("duration").value;

  div.className = `toast ${successOrError(success)}`;
  p.className = "message";
  if (messageContent.value === "") {
    p.textContent = success ? "Success!" : "Error.";
  } else {
    p.textContent = `${messageContent.value}`;
  }

  div.appendChild(p);

  if (cancelable) {
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "X";
    cancelButton.className = "cancel-button";
    cancelButton.addEventListener("click", function () {
      this.parentNode.remove();
    });
    div.appendChild(cancelButton);
  }

  toasts.prepend(div);

  setRemoval(duration, div);
});

function successOrError(success) {
  return success ? "success-toast" : "error-toast";
}

function setRemoval(timeout, obj) {
  if (timeout < 500 || isNaN(timeout)) {
    setTimeout(() => obj.remove(), 500);
  } else {
    setTimeout(() => obj.remove(), timeout);
  }
}
