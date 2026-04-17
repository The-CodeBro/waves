const form = document.querySelector("form");
const requestBtn = document.querySelector("form button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const projectInput = document.querySelector("#project");
const indicators = document.querySelectorAll(".indicator");
const errorMessage = document.querySelector(".error-message");

const userRequests = [];

form.addEventListener("keyup", (e) => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const projectDetail = projectInput.value.trim();

  if (e.target.dataset.input === "name") {
    validateName(name);
  }

  if (e.target.dataset.input === "email") {
    validateMail(email);
  }

  if (e.target.dataset.input === "project-detail") {
    validateProjectDetail(projectDetail);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const projectDetail = projectInput.value.trim();

  if (
    !validateName(name) ||
    !validateMail(email) ||
    !validateProjectDetail(projectDetail)
  ) {
    isValid = false;
    errorMessage.innerHTML = "<p>Please fix error and resend request</p>";
    console.log("submit prevented");
    return;
  }

  if (isValid) {
    form.submit();
    errorMessage.innerHTML = "";
    console.log("submitted");
  }
});

function validateName(name) {
  const nameRegex = /^[a-zA-Z\s'-]{3,50}$/;

  let nameValidity;
  const indicatorIndex = indicators[0];

  if (nameRegex.test(name)) {
    nameValidity = true;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  } else if (name === "") {
    indicatorIndex.innerHTML = "";
  } else {
    nameValidity = false;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  }

  return nameValidity;
}

function validateMail(mail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let emailValidity;
  const indicatorIndex = indicators[1];

  if (emailRegex.test(mail)) {
    emailValidity = true;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  } else if (mail === "") {
    indicatorIndex.innerHTML = "";
  } else {
    emailValidity = false;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  }

  return emailValidity;
}

function validateProjectDetail(projectDetail) {
  let detailValidity;
  const indicatorIndex = indicators[2];

  if (projectDetail.length > 10) {
    detailValidity = true;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  } else if (projectDetail === "") {
    indicatorIndex.innerHTML = "";
  } else {
    detailValidity = false;
    indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  }

  return detailValidity;
}
