var incrementbtn=document.getElementsByClassName('plus');
var decrementbtn=document.getElementsByClassName('moins');
var inputElement = document.getElementsByClassName('input-sm form-control')


for(var i=0 ; i<incrementbtn.length ; i++)
{
var button=incrementbtn[i];
button.addEventListener('click',function(event){
   var buttonClicked=event.target
    var input = buttonClicked.previousElementSibling
       
        var newValue= parseInt(input.value)
     
        newValue++
        
        buttonClicked.previousElementSibling.value=newValue
    
        updateCartTotal()

})


}



for(var i=0 ; i<decrementbtn.length ; i++)
{
var button=decrementbtn[i];
button.addEventListener('click',function(event){
   var buttonClickedMin=event.target
    var inputMin = buttonClickedMin.nextElementSibling
       
        var newValueMin= parseInt(inputMin.value)
       
        newValueMin--
        if (newValueMin < 0){
            buttonClickedMin.nextElementSibling.value= 0
        }
                else {

            buttonClickedMin.nextElementSibling.value=newValueMin
            
        }        
        

  
        updateCartTotal()
      
})

}


var removeElement=document.getElementsByClassName('remove')
for(var i=0; i<removeElement.length; i++){
    var buttonRemove=removeElement[i]
    buttonRemove.addEventListener('click', function(event){
        var buttonRemoveClicked= event.target
        buttonRemoveClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
 
}





    
function updateCartTotal() {
   
    var priceElement=document.getElementsByClassName('prix')
    var total = 0
    for (var i = 0; i <  priceElement.length; i++) {
        var price = parseInt(priceElement[i].innerText)
        input=inputElement[i].value        
        var quantity = parseInt(input)
        total = total + (price * quantity)
        
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('prixTotal')[0].innerText = total +'DT'
}
