function process () {
    var name = document.getElementById("nameBox").value ; 
    var price = parseFloat(document.getElementById("priceBox").value)  ; 
    var many = parseInt(document.getElementById("manyBox").value) ; 
    var total = price * many ;
    document.getElementById("payableBox").value = total; 

}

function addToCart() {
    
}