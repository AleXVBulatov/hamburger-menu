window.addEventListener("DOMContentLoaded", () => {

  const menuBtnRef = document.querySelector(".menu__btn");
  // console.log(menuBtnRef);
  const menuBoxRef = document.querySelector(".menu__box");
  // console.log(menuBoxRef);
  const bodyRef = document.querySelector("body");
  // console.log(bodyRef);


  
  menuBtnRef.addEventListener("click", (event) => {
    if (event.currentTarget.nodeName === "DIV") {
      menuBoxRef.classList.toggle("js_active");
      menuBtnRef.classList.toggle("js_btn-close");
    };
  });

  bodyRef.addEventListener("click", (event) => {
    if (event.target.nodeName === "BODY" && menuBtnRef.classList.contains("js_btn-close")) {
      menuBoxRef.classList.toggle("js_active");
      menuBtnRef.classList.toggle("js_btn-close");
    };
  });

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && menuBtnRef.classList.contains("js_btn-close")) {
      menuBoxRef.classList.toggle("js_active");
      menuBtnRef.classList.toggle("js_btn-close");
    };
  });



});

