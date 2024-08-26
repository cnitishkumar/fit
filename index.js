





const openSideBar = () => {
  if (window.innerWidth < 768) {
    document.getElementById("sidebar").style.width = "100%";
  } else {
    document.getElementById("sidebar").style.width = "250px";
  }
};

const closeSidebar = () => {
  document.getElementById("sidebar").style.width = "0";
};






 function animateNumbers(){

    let countValuDisplay = document.querySelectorAll(".members-heading-count")
   
    countValuDisplay.forEach(eachEl =>{
        let maxValue = parseInt(eachEl.innerHTML)
        let displayVal =parseInt(eachEl.getAttribute('data-value'))
        let counter = setInterval(function(){
               displayVal+=1

               eachEl.innerHTML =displayVal
               

            if(displayVal == parseInt(maxValue)){
               clearInterval(counter)
            }
        },100)


    })
  


}




