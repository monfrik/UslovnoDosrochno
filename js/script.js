let bedroom_btn = document.getElementById("bedroom_btn");
let bedroom_img = document.getElementById("bedroom_img");
let bathroom_btn = document.getElementById("bathroom_btn");
let bathroom_img = document.getElementById("bathroom_img");
let close = document.getElementById("close");

bedroom_btn.addEventListener("click", function(){
    bedroom_img.classList.toggle("active");
    close.classList.add("active");
});
bathroom_btn.addEventListener("click", function(){
    bathroom_img.classList.toggle("active");
    close.classList.add("active");
});
close.addEventListener("click", function(){
    bedroom_img.classList.remove("active");
    bathroom_img.classList.remove("active");
    close.classList.remove("active");
});