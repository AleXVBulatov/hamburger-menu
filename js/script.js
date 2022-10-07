window.addEventListener("DOMContentLoaded", () => {

  const menuBtnRef = document.querySelector(".menu__btn");
  // console.log(menuBtnRef);
  const menuBoxRef = document.querySelector(".menu__box");
  // console.log(menuBoxRef);


  menuBtnRef.addEventListener("click", (event) => {
    if (event.currentTarget.nodeName === "DIV") {
      menuBoxRef.classList.toggle("js_active");
      menuBtnRef.classList.toggle("js_btn-close");
    }
    window.addEventListener("click", (event) => {
      if (event.target.nodeName === "BODY" && menuBtnRef.classList.contains("js_btn-close")) {
        menuBoxRef.classList.toggle("js_active");
        menuBtnRef.classList.toggle("js_btn-close");
      };
      return;
    });
  });
});

