// login.js
export const initializeLoginForm = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const formOpenBtn = document.querySelector("#form-open");
    const home = document.querySelector(".home");
    const formContainer = document.querySelector(".form_container");
    const formCloseBtn = document.querySelector(".form_close");
    const signupBtn = document.querySelector("#signup");
    const loginBtn = document.querySelector("#login");
    const pwShowHide = document.querySelectorAll(".pw_hide");

    if (!formOpenBtn || !home || !formContainer || !formCloseBtn || !signupBtn || !loginBtn || !pwShowHide.length) {
      console.error("One or more required elements not found.");
      return;
    }

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

    pwShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("uil-eye", "uil-eye-slash");
        }
      });
    });

    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.add("active");
    });

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.remove("active");
    });
  });
};
