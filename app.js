function updateProductCount(category, price, mainPrice, isIncreasing){
    const productInput = document.getElementById(category);
    let productCount = productInput.value;
    if(isIncreasing == true)
    {
        productCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0){
        productCount = parseInt(productCount) - 1;
    }
    productInput.value = productCount;
    // update case total
    const itemPrice = document.getElementById(price);
    itemPrice.innerText = productCount * mainPrice;
    
    // update subtotal
    const updatePhonePrice = document.getElementById('phone-price').innerText;
    const updateCasePrice = document.getElementById('case-price').innerText;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt(updatePhonePrice) + parseInt(updateCasePrice); 
    const taxAmount = document.getElementById('tax-amount');
    taxAmount.innerText = parseInt(subTotal.innerText) / 10; 
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = parseInt(subTotal.innerText) + parseFloat(taxAmount.innerText); 
}
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductCount('case-count', 'case-price', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductCount('case-count', 'case-price', 59, false);
});
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductCount('phone-count', 'phone-price', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductCount('phone-count', 'phone-price', 1219, false);
});