const burgerIcon = document.getElementById("burgerIcon");
const ul = document.getElementById("ul");
const popUp = document.querySelector("#popUp .container");
const overLay = document.getElementById("overLay");


burgerIcon.addEventListener("click", function() {
  if (ul.style.display != "flex") {
      ul.style.display = "flex";
  } else {
      ul.style.display = "none";
  }
})

window.setTimeout(function() {
    popUp.innerHTML = `
    <div>
        <img onclick="hidePopUp()"src="images/close.png" alt="close icon">
        <img src="images/Profile.png" alt="">
        <p>"What I love about Logo is the easy way we can collaborate even if there is a lot of people involved in the process"</p>
          <span>Guillaume Cabane</span>
          <span > CTO @ BigSpring </span>
         </div>
    `
    overLay.style.width = "100%";
    overLay.style.height = "100%";
    overLay.style.position = "fixed";
    overLay.style.top = "0";
    overLay.style.left = "0";
    overLay.style.backgroundColor = "rgba(0, 0, 0, .5)"
}, 5000);


function hidePopUp() {
  popUp.style.display = "none";
  overLay.style.display = "none";
}