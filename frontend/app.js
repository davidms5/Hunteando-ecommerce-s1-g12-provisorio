import { productos } from "./productos.js";
const mainSection = document.getElementById('sectionPrincipal')
const cartContainer  = document.getElementById('cartContainer')
const cartItems = document.getElementById('cartItems')
const cartDisplay= document.getElementById('cartDisplay')
const productContainers = document.getElementById('products');
const cartProducts = []
localStorage.setItem('cart',JSON.stringify({}));



filterProducts(productos)

const btns = document.querySelectorAll('.cart')




function filterProducts (array){
    let product = array.map(item=>{
        return  `
        <div class="card" style="width: 18rem;">
        <img src="./imagenes/${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <span class="card-text fw-bold mb-2 d-block">$ ${item.price}</span>
          <button class="btn btn-primary cart" id=${item.id}>Agregar a Carrito</button>
        </div>
      </div>
          ` 
    });
    product = product.join("");
    productContainers.innerHTML = product;
   
};



function filterProductsBtn(id){
    let filter = productos.find(item=>{
        if(item.id === id){
            return item
        }
    })
    return filter
}

function filterCartProducts(){
    const local = JSON.parse(localStorage.getItem('cart') ||'{}')
  
   let cart = local.cartProducts.map(item=>{
     if(local.cartProducts.length > 0){
        return  `
    <div class="card" style="width: 18rem;">
    <img src="./imagenes/${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <span class="card-text fw-bold mb-2 d-block">$ ${item.price}</span>
      <button class="btn btn-danger delete" id=${item.id}>Delete</button>
    </div>
  </div>
      ` 
     }else{
        return `<h1>carrito</h1>`
        
     }
   
});
 cart = cart.join("");
 cartItems.innerHTML = cart;
}

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
     const local = JSON.parse(localStorage.getItem('cart') || '{}')
     let id = parseInt(btn.id);
     console.log(id)
      let item =filterProductsBtn(id);
      cartProducts.push(item)
     //console.log(item)
    localStorage.setItem('cart', JSON.stringify({...local, cartProducts}))
    })
})

cartDisplay.addEventListener('click',()=>{
    mainSection.classList.add('d-none');
    cartContainer.classList.remove('d-none');
    filterCartProducts()
    const delete1 = document.querySelectorAll('.delete');
    delete1.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
         let btns = parseInt(btn.id)
         console.log(btns)
        let row = e.target.parentNode.parentNode;
        row.remove()
         deleteItems(btns);

       
        })
      
    })
})


function deleteItems(id){
    const local = JSON.parse(localStorage.getItem('cart') || '{}')
    let dataPlace = local.cartProducts.findIndex(item => item.id === id ? item : null);
    local.cartProducts.splice(dataPlace, 1);
    let dataJson = JSON.stringify(local);
    localStorage.setItem('cart', dataJson)
   
    //localStorage.setItem('cart', JSON.stringify(product))
}

