document.addEventListener('DOMContentLoaded',()=>{
    const productList =document.getElementById('productList')

    function fetchproduct(){
        fetch('https://fakestoreapi.com/product')
        .then(response => response.json())
        .then(data=> {
            displayProduct(data);
        })
    }

    function displayProducts(product){
    productList.innerHTML= '';  //clear any existing content

    product.forEach(product => {
        const productElement =document.createElement('div');
        productElement.classList.add('product')
        productElement.innerHTML=`
            <img src="${product.image}" alt="${product.title}"/>
            <h3>${product.title}</h3>
            <p>price:$${product.price.tofixed(2)}</p>
            `;
            productList.appendChild(productElement);
    });
}

});
