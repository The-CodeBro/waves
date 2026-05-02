const form = document.querySelector("form");
const requestBtn = document.querySelector("form button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const projectInput = document.querySelector("#project-detail");
const indicators = document.querySelectorAll(".indicator");
const fileUpload = document.getElementById("file-upload");
const fileErrorMessage = document.querySelector(".file-error");
const showFile = document.querySelector(".show-file");
const errorMessage = document.querySelector(".error-message");

export function initForm() {
  if (!form || !fileUpload) return;

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

  fileUpload.addEventListener("change", (e) => {
    const file = fileUpload.files[0];

    handleFileValidation(file);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const projectDetail = projectInput.value.trim();
    const file = fileUpload.files[0];

    fileErrorMessage.innerHTML = "";
    errorMessage.innerHTML = "";

    const fileIsValid = handleFileValidation(file);

    if (
      !validateName(name) ||
      !validateMail(email) ||
      !validateProjectDetail(projectDetail) ||
      !fileIsValid
    ) {
      errorMessage.innerHTML = "<p>Please fix error and resend request</p>";

      return;
    }

    // if (!fileIsValid){

    // } return;

    form.submit();
  });

  function validateName(name) {
    const nameRegex = /^[a-zA-Z\s'-]{3,50}$/;

    const indicatorIndex = indicators[0];

    if (nameRegex.test(name)) {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      return true;
    } else if (name === "") {
      indicatorIndex.innerHTML = "";
      return false;
    } else {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
      return false;
    }
  }

  function validateMail(mail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const indicatorIndex = indicators[1];

    if (emailRegex.test(mail)) {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      return true;
    } else if (mail === "") {
      indicatorIndex.innerHTML = "";
      return false;
    } else {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
      return false;
    }
  }

  function validateProjectDetail(projectDetail) {
    const indicatorIndex = indicators[2];

    if (projectDetail.length > 10) {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      return true;
    } else if (projectDetail === "") {
      indicatorIndex.innerHTML = "";
      return false;
    } else {
      indicatorIndex.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
      return false;
    }
  }

  function handleFileValidation(file) {
    if (!file) {
      fileErrorMessage.innerHTML = "";
      showFile.innerHTML = "";
      return true;
    }

    const result = validateFile(file);

    if (!result.valid) {
      fileErrorMessage.innerHTML = result.errorMessage;
      showFile.innerHTML = "";
      return false;
    }

    fileErrorMessage.innerHTML = "";
    showFile.innerHTML = `
        <p>${file.name}</p>
        <i class="fa-solid fa-circle-check"></i>
        `;
    return true;
  }

  function validateFile(file) {
    const acceptedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "application/pdf",
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    ];

    const maxFileSize = 5 * 1024 * 1024;

    if (!acceptedTypes.includes(file.type)) {
      return {
        valid: false,
        errorMessage: "<p>File can only be IMAGE, PDF or DOC</p>",
      };
    }

    if (file.size > maxFileSize) {
      return {
        valid: false,
        errorMessage: "<p>File is too big, max(5mb)</p>",
      };
    }

    return {
      valid: true,
    };
  }
}
