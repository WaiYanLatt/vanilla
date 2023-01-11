const toggleB = document.getElementById("toggleB");

const changeThemetoDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("data-theme", "dark");
};

const changeThemetoLight = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("data-theme", "light");
};

toggleB.addEventListener("click", () => {
  const theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemetoLight();
  } else {
    changeThemetoDark();
  }
});

const theme = localStorage.getItem("data-theme");
if (theme === "dark") {
  changeThemetoDark();
  toggleB.setAttribute("checked", "checked");
} else {
  changeThemetoLight();
}