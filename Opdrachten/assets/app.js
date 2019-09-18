function even(){  
    let number=document.getElementById("number").value;
    let test = number % 2
    
    if(test == 0){
        alert("even");
    }
    
    else{
        alert("oneven");
    }
} 

function removenot(){
    let tekst=document.getElementById("tekst");
    removed = tekst.textContent.replace(" not", "")
    alert(removed);
}

const waarde = 1400;
let string = "Ik woon in Naboo";

//Er valt niet echt iets te vergelijken.