// JavaScript to handle navbar background change on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-scroll');
    if (window.scrollY > 50) {  // Misalnya, setelah 50px scroll
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



window.onload = function() {
  var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true
      },
      keyboard: { enabled: true },
      mousewheel: { thresholdDelta: 70 },
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 }
      }
  });
};


const colors = ['#5A9BD4'];
                            
async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;
    const productModalsContainer = document.getElementById('productModalsContainer');

    products.forEach((product, index) => {
      // Create Product Card
      const productCard = `
  <div class="col-md-3 mb-4">
    <div class="card product-card" style="background-color: ${colors[index % colors.length]};" data-bs-toggle="modal"  data-bs-target="#productModal${product.id}">
      <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
      <div class="card-body text-center">
        <h5 class="card-title" style="font-size: 1.5rem; font-weight: bold;">${product.title}</h5>
        <p class="card-text"><strong>Brand:</strong> ${product.brand}</p>
        <p class="card-text"><strong>Rating:</strong> ${product.rating} ⭐</p>
      </div>
      <!-- Teks "Buy Now" yang muncul saat hover -->
      <div class="buy-now-overlay">
        <span>Buy Now</span>
      </div>
    </div>
  </div>
`;


      // Append Product Card to the appropriate category container
      const categoryContainer = document.getElementById(`${product.category}-products`);
      if (categoryContainer) {
        categoryContainer.insertAdjacentHTML('beforeend', productCard);
      }

      const productModal = `
      <div class="modal fade" id="productModal${product.id}" tabindex="-1" aria-labelledby="productModalLabel${product.id}" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content shadow-lg rounded-3">
            <!-- Modal Header -->
            <div class="modal-header border-0">
              <h5 class="modal-title text-white" id="productModalLabel${product.id}">${product.title}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <!-- Modal Body -->
            <div class="modal-body p-4">
              <div class="row">
                <div class="col-md-6 text-center mb-3">
                  <img src="${product.thumbnail}" class="img-fluid rounded shadow-sm" alt="${product.title}" style="max-width: 100%; height: auto;">
                </div>
                <div class="col-md-6">
                  <div class="product-info">
                    <p><strong>Brand:</strong> ${product.brand}</p>
                    <p><strong>Price:</strong> <span style="color: #ff6347;">$${product.price}</span></p>
                    <p><strong>Stock:</strong> ${product.stock} units</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Modal Footer -->
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Append Modal to Modals Container
    productModalsContainer.insertAdjacentHTML('beforeend', productModal);
    
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
// JavaScript for controlling the navigation
document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll("input[name='position']");
  let currentIndex = 0;

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
    radioButtons[currentIndex].checked = true;
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    radioButtons[currentIndex].checked = true;
  });
});
