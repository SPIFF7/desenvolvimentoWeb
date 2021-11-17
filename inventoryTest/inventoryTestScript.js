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