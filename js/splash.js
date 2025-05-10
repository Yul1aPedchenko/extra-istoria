window.onload = function () {
  const splashScreen = document.getElementById("splashScreen");
  setTimeout(() => {
    splashScreen.classList.add("hidden");
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 1000); 
  }, 2000); 
};
