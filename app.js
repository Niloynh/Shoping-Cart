function updateCaseNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;


    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
    
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = caseTotal + phoneTotal;
    const taxTotal = subTotal / 10;
    const totalPrice = subTotal + taxTotal;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increasing decrasing 
document.getElementById('phone-plus').addEventListener('click', function(){
   
    updateCaseNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false);
})



// handle case increasing decrasing 
document.getElementById('case-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateCaseNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function (){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateCaseNumber('case', 59, false);
})




const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    searchField.value = '';
    
    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}



const displaySearchResult = books =>{
     const searchResult = document.getElementById('search-result');
     books.forEach(book => {
         console.log(book)
         const div = document.createElement('div');
         div.classList.add('col');
         div.innerHTML = 
         ` <div class="card h-10">
     <img src="" class="card-img-top" alt="..."
             <div class="card-body">
                  <h5 class="${book.author_name}">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
       </div>`;

       searchResult.appendChild(div);

     });
}