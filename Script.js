
let shoppingList = [];
function addGrocery(item,price)
 
{   
    
    let grocery = {Item:item, Price:price}; 
    shoppingList.push(grocery);
    


console.log(shoppingList)

let sum = 0;
 shoppingList.forEach((element)=>{

if(parseFloat(element.value))
    {sum += element;}

 });
 console.log('Total:',sum)
 //console.log('Total:',sum)
}
