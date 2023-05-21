document.getElementById("parent").innerHTML=("Inroduction");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Shubham Neupane");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 19 Years old");

document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:uppercase");

document.querySelector("h2").innerHTML=("I am fond of readind.");
document.querySelector("#hi").innerHTML=("I am a Explorer.");
document.querySelector(".hey").innerHTML=("I am a researcher");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
   change[i].innerHTML=("I am Shubham");
}

// function myFunction(){
//     document.open();
//     document.write("<h1>Hello World</h1>");
//     document.close();
// }

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1>Hello World</h1>");
    myWindow.document.close();
}