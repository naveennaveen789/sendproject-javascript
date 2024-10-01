document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

//first popup
document.getElementById("btnid").addEventListener("click", function(){ 
    console.log(alert("Your have Successfully Signed in !!! "))

})
//second popup
 let btn = document.getElementById("button")
 btn.addEventListener("click",function(){
    alert("Welcome to Tesla !!!")
 })


  