const toggle = document.getElementById("toggle");

const changeThemeToDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const changeThemeToLight = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

toggle.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  changeThemeToDark();
  toggle.setAttribute("checked", "checked");
} else {
  changeThemeToLight();
}

//scrool active

window.addEventListener("scroll", scrollActive);
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset; // scroll height
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // get current height
      sectionTop = current.offsetTop - 58, // get current section of height
      sectionId = current.getAttribute("id"); // get current section id
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

//loading

window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
});

// menu icon
let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("show");
});
