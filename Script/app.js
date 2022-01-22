

(function(){

    let myVar = "just now";

    function Start(){
        console.log(`App Started...${myVar}`);
    }

    window.addEventListener("load", Start);
})();