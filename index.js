// index.js

const products = [
  {
    name: "1 Unit",
    discount: "10% Off",
    standardPrice: "$24.00 USD",
    discountedPrice: "$10.00 USD",
    tags: "",
    sizes: ["S", "Lg", "XL", "XXL"],
    colors: ["Red", "Yellow", "Pink", "Orange"],
    subtext:"Standard Price"
  },
  {
    name: "2 Unit",
    discount: "20% Off",
    standardPrice: "$24.00 USD",
    discountedPrice: "$24.00 USD",
    tags: ["Most Popular"],
    sizes: ["S", "Lg", "XL"],
    colors: ["Red", "Pink", "Orange"],
    subtext:""
  },
  {
    name: "3 Unit",
    discount: "30% Off",
    standardPrice: "$15.00 USD",
    discountedPrice: "$24.00 USD",
    tags: "",
    sizes: ["S", "XL", "XXL"],
    colors: ["Yellow", "Pink", "Orange"],
    subtext:""
  },
];

// Function to create radio item HTML dynamically
function createRadioItem(product) {
  const sizeOptions = product.sizes
    .map((size) => `<option>${size}</option>`)
    .join("");
  const colorOptions = product.colors
    .map((color) => `<option>${color}</option>`)
    .join("");
  let radioItemHTML = `
      <div class="radio-item" onclick="toggleVarientBox(this)">
        <div class="radio-sub-box">
        
          <div class="radio-content">

            <div class="radio-labels">
              <span class="radioWrapper">
                <input
                  type="radio"
                  class="radio"
                  name="colors"
                  id="${product.name}"
                  style="height: 45px; width: 45px"
                />
              </span>
    
              <div>
                <div class="product-box">
                  <h1 class="product-name">${product.name}</h1>
                  <p class="discount">${product.discount}</p>
                </div>
                <p>${product.subtext}</p>
                
              </div>
            </div>
            
            <div class="radio-details">
              <h2 class="product-name">${product.discountedPrice}</h2>
              <strike>
                <p class="price">${product.standardPrice}</p>
              </strike>
            </div> 
          </div>
          <div class="varient-box" style="display: none;">
            <div>
              <p>Size</p>
              <div class="select-size-box">
                <select>${sizeOptions}</select>
              </div>
            </div>
            <div>
              <p>Color</p>
              <div class="select-size-box">
                <select>${colorOptions}</select>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  return radioItemHTML;
}

function Total() {
  let calculateDiv = `
          <div class="calculationDiv">
          <h2>Free Delivery</h2>
          <p>Total : 
          <span>
          $18.00 USD
          </span>
          </p>
          </div>
          <div class="AddToCart">
          <button> + Add To Cart</button>
          </div>
          `;
  return calculateDiv;
}
let currentOpenItem = null;

function toggleVarientBox(element) {
  const varientBox = element.querySelector(".varient-box");
  const radio = element.querySelector(".radio");

  if (currentOpenItem === element && varientBox.style.display !== "none") {
    // Do nothing if the current item is already open and clicked again
    return;
  }

  if (currentOpenItem && currentOpenItem !== element) {
    const prevVarientBox = currentOpenItem.querySelector(".varient-box");
    prevVarientBox.style.display = "none";
    currentOpenItem.style.border = "1px solid gray";
  }

  if (varientBox.style.display === "none") {
    varientBox.style.display = "flex";
    element.style.border = "2px solid #ff6b82";
    radio.checked = true;
    currentOpenItem = element;
  } else {
    varientBox.style.display = "none";
    element.style.border = "1px solid gray";
    currentOpenItem = null;
  }
}

function renderRadioItems() {
  const container = document.querySelector(".container");
  const radioItems = products.map(createRadioItem).join("");
  
  const totalDiv = Total();  
  const NewDiv = radioItems + totalDiv
  container.insertAdjacentHTML("beforeend", NewDiv);


}


renderRadioItems();


// ${product.tags && product.tags.length > 0 ? 
//   product.tags.map(tag => `<span class="tag">${tag}</span>`).join("") 
//   : ""
// }