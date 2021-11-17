let inventoryModal = document.getElementById("inventoryModal");
let inventoryButton = document.getElementById("inventoryButton");
let closeInventoryButton = document.getElementById("closeModal");

inventoryButton.onclick = function (){
    inventoryModal.style.display = "block";
}

closeInventoryButton.onclick = function (){
    inventoryModal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == inventoryModal){
        inventoryModal.style.display = "none";
    }
}

function openTab(pageName, element, color){
    let tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tabContent");
    for(let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tabButton");
    for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    element.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();