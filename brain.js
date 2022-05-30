window.onload = (event) => {
 
    btn = document.getElementById("btn");
    input = document.getElementById("input");
    img = document.getElementById("img");


//Functions
    btn.addEventListener('click',pick);




    function pick(){
        var name = input.value;
        alert(name);
        img.src = `https://joeschmoe.io/api/v1/${name}`;
    }

};