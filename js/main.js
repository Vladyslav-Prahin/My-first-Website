

// function mainNavbarDisappearance ()
// {
//     const element = document.getElementById("navigation");
//     if (window.innerWidth < 1200)
//     {
//         element.classList.remove("navigation");
//         element.classList.add("displayNone");
//     }
//     else {
//         element.classList.remove("displayNone");
//         element.classList.add("navigation");
//     }
    
// }
function addClass ()
{
    const element = document.getElementById("container");
    if (window.innerWidth < 576) {
        element.classList.add("container");
    }
    else {
        element.classList.remove("container");
    }
}
function addAnimationFromId (id, animation) {
    var addToBlock = document.getElementById(id);
    const observer = new IntersectionObserver(entries => {
        // sprawdź, czy obserwowany element jest w widoku
        if (entries[0].isIntersecting) {
          // dodaj klasę animacji do elementu
          addToBlock.classList.add(animation);
          // zakończ obserwację, aby animacja nie była powtarzana
          observer.disconnect();
        }
      });
      
      // zacznij obserwować element
      observer.observe(addToBlock);
}
function addAnimationFromClass(klasa, animation) {
    var addToBlocks = document.getElementsByClassName(klasa);
    const observer = new IntersectionObserver(entries => {
      // przeiteruj po wszystkich elementach o podanej klasie
      for (let i = 0; i < addToBlocks.length; i++) {
        // sprawdź, czy obserwowany element jest w widoku
        if (entries[0].isIntersecting) {
          // dodaj klasę animacji do elementu
          addToBlocks[i].classList.add(animation);
          // zakończ obserwację, aby animacja nie była powtarzana
          observer.disconnect();
        }
      }
    });
  
    // zacznij obserwować element
    observer.observe(addToBlocks[0]);
  }
  
  
window.onload = function () 
{
     //home slide wrapper
    // Wyświetlanie headera po skrolowaniu

    window.addEventListener("scroll", function()
    {
        var header = document.querySelector("header");
        header.classList.toggle("header-fixed", window.scrollY > 300);
    });

    //dodanie animacje płynnego pojawienia się
    addAnimationFromId("content", "animationFadeUp"); //O firmie
    addAnimationFromClass("square", "animationRotation")
    addAnimationFromId("main-content-oferty","animationFadeUp"); //Oferty
    addAnimationFromId("image-oferty", "animationLeftUp") // obrazek z lewej
    addAnimationFromId("main-content-realizacje","animationFadeUp"); //realizacje
    addAnimationFromId("main-content-cennik","animationFadeUp"); //cennik
    addAnimationFromId("image-cennik","animationLeftUp"); //obrazek z lewej cennik
    // add class container 

    // window.addEventListener("resize", addClass);
    // addClass();
    

    // window.addEventListener("resize", mainNavbarDisappearance);
    // mainNavbarDisappearance();

}