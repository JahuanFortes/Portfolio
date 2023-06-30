const body = document.body;

//switchtheme of site
const switchTheme = () => {
  const currentTheme = body.className;

  if (currentTheme == "light") {
    body.className = "dark";
  } else {
    body.className = "light";
  }
};

//link function to button
const themeButton = document.getElementById("themeButton");
themeButton.onclick = switchTheme;
