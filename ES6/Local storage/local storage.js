// localStorage.getItem('')
// localStorage.setItem('')
// localStorage.removeItem('')
// localStorage.clear()
// localStorage.length('')


const addProduct = () =>{
    const productField=document.getElementById('product');
    const quantityField=document.getElementById('quantity');
    const product=productField.value;
    const quantity=quantityField.value;
    productField.value="";
    quantityField.value="";

    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity)
}

const displayProduct=(product,quantity) =>{
    const ul=document.getElementById('add-list')
    const li=document.createElement("li")
    li.innerText=` ${product} : ${quantity}`
    ul.appendChild(li)
    
}

// ..........................................
const getStoredSoppingCard=()=>{
    let card={}
    const storedCard=localStorage.getItem('card')
    if(storedCard){
        card=JSON.parse(storedCard);
    }
    return card;
}

const saveProductToLocalStorage=(product,quantity)=>{
    const card=getStoredSoppingCard();
    card[product]=quantity;
    const cardStringified=JSON.stringify(card)
    localStorage.setItem('card',cardStringified)
}

const displayProductFromLocalStorage=()=>{
    const savedCard = getStoredSoppingCard();
    for(const product in savedCard){
        const quantity=savedCard[product]
        console.log(product)
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage()