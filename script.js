// Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

Tawk_API.onLoad = function () {
    console.log("Tawk.to Widget Loaded");
};
Tawk_API.onStatusChange = function (status) {
    console.log("Tawk.to Status: " + status);
};

(function () {
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6931c4ee1fe45f1982d30c65/1jbl6ihol';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
})();

// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();

    AOS.init({
        offset: 100,
        duration: 1000, // Slower, smoother animation
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Custom easing
        delay: 50,
        once: true,
        mirror: false
    });
});

// Navbar scroll effect (Glassmorphism toggle)
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('shadow-sm');
        }
    }
});

// Product Detail Modal Logic
function showProductDetail(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('modalProductTitle');
    const modalDesc = document.getElementById('modalProductDesc');
    const modalImg = document.getElementById('modalProductImage');
    const modalType = document.getElementById('modalProductType');
    const modalFeatures = document.getElementById('modalProductFeatures');

    if (modalTitle) modalTitle.innerText = product.name;
    if (modalDesc) modalDesc.innerText = `Sản phẩm ${product.type} chất lượng cao từ ${product.brand}, phù hợp cho ${product.location} tại ${product.project}.`;
    if (modalImg) modalImg.src = product.image;
    if (modalType) modalType.innerText = product.type;

    if (modalFeatures) {
        modalFeatures.innerHTML = product.features.map(f => `<li><i class="fas fa-check text-primary me-2"></i> ${f}</li>`).join('');
    }

    var myModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    myModal.show();
}

// Virtual Room Painter Logic
function changeWallColor(element) {
    // Get color and name from data attributes
    const color = element.getAttribute('data-color');
    const name = element.getAttribute('data-name');

    // Update Wall Overlay Background
    const wallOverlay = document.getElementById('wall-overlay');
    if (wallOverlay) {
        wallOverlay.style.backgroundColor = color;
    }

    // Update Label Text
    const label = document.getElementById('color-name-display');
    if (label) {
        label.innerText = 'Màu hiện tại: ' + name;
    }

    // Update Active State for Swatches
    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(swatch => swatch.classList.remove('active'));
    element.classList.add('active');
}

// Paint Calculator Logic
function calculatePaint() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const layers = parseInt(document.getElementById('layers').value);

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        alert("Vui lòng nhập đầy đủ kích thước!");
        return;
    }

    // Calculate Total Wall Area: 2 * (L + W) * H
    let totalArea = 2 * (length + width) * height;

    // Subtract 10% for doors/windows
    let paintableArea = totalArea * 0.9;

    // Coverage: 10m2 per litre (example)
    const coveragePerLitre = 10;

    // Total Litres Needed
    let totalLitres = (paintableArea / coveragePerLitre) * layers;

    // Round up to 1 decimal
    totalLitres = Math.ceil(totalLitres * 10) / 10;

    // Display Result
    const resultBox = document.getElementById('calcResult');
    const litresText = document.getElementById('litresResult');

    if (resultBox && litresText) {
        litresText.innerText = totalLitres + " Lít";
        resultBox.style.display = 'block';

        // Simple animation
        resultBox.style.opacity = 0;
        let op = 0.1;
        let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            resultBox.style.opacity = op;
            resultBox.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }
}
// Search Filter Logic
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const title = product.querySelector('.card-title').innerText.toLowerCase();
            if (title.includes(filter)) {
                product.parentElement.style.display = ''; // Show (col-md-4)
            } else {
                product.parentElement.style.display = 'none'; // Hide
            }
        });
    });
}

// Shared Components Logic
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const headerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="https://tse2.mm.bing.net/th/id/OIP.t3juAf5Zjrd-5RjoQ37itwHaEK?pid=Api&P=0&h=180"
                    alt="Dulux Logo" style="height: 50px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">Giới thiệu</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.html">Sản phẩm</a></li>
                    <li class="nav-item"><a class="nav-link" href="tool.html">Tìm kiếm màu sắc </a></li>
                    <li class="nav-item"><a class="nav-link" href="community.html">Bài viết</a></li>
                    <li class="nav-item"><a class="nav-link" href="pr.html">PR Online</a></li>
                    
                    <!-- Auth Items -->
                    <li class="nav-item ms-lg-3 d-flex align-items-center">
                        <!-- Login Button (Visible when logged out) -->
                        <a id="nav-btn-login" href="login.html" class="btn btn-outline-primary rounded-pill btn-sm">
                            <i class="fas fa-user me-2"></i>Đăng Nhập
                        </a>

                        <!-- User Profile Dropdown (Visible when logged in) -->
                        <div id="nav-user-profile" class="dropdown d-none">
                            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="user-avatar me-2" id="nav-avatar" style="width: 35px; height: 35px; font-size: 0.9rem; background-color: #00A9CE; color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: bold;">U</div>
                                <span class="fw-bold text-dark small me-2" id="nav-username">User</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2">
                                <li><a class="dropdown-item py-2" href="#" onclick="alert('Tính năng đang phát triển')"><i class="fas fa-address-card me-2 text-primary"></i>Thêm thông tin</a></li>
                                <li><a class="dropdown-item py-2" href="#" onclick="alert('Tính năng đang phát triển')"><i class="fas fa-key me-2 text-warning"></i>Đổi mật khẩu</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item py-2 text-danger" href="#" id="nav-btn-logout"><i class="fas fa-sign-out-alt me-2"></i>Đăng xuất</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item ms-lg-3"><a href="products.html" class="btn btn-primary-custom">Mua Ngay</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="dulux-flourish"></div>
        `;
        headerPlaceholder.innerHTML = headerHTML;
        setActiveLink();
    }
}
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const footerHTML = `
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h4 class="footer-title">DULUX NHÓM 6</h4>
                    <p>Giải pháp màu sắc hoàn hảo cho ngôi nhà của bạn.</p>
                </div>
                <div class="col-md-4 mb-4">
                    <h5 class="text-white mb-3">Liên Hệ</h5>
                    <ul class="list-unstyled text-muted">
                        <li><i class="fas fa-map-marker-alt me-2"></i> [ĐỊA CHỈ]</li>
                        <li><i class="fas fa-phone me-2"></i> 0123 456 789</li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h5 class="text-white mb-3">Kết Nối</h5>
                    <div class="social-icons">
                        <a href="https://facebook.com" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://zalo.me" target="_blank" title="Zalo" style="font-weight: bold; font-family: sans-serif; font-size: 14px; display: inline-flex; align-items: center; justify-content: center;">Zalo</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `;
        footerPlaceholder.innerHTML = footerHTML;
    }
}



function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* =========================================
   DYNAMIC PRODUCT LOGIC
   ========================================= */

const productsData = [
    { name: "Dulux Easyclean Lau Chùi Hiệu Quả Bề Mặt Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/c8/7d/44/1f/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Ambiance 5in1 Diamond Glow - Siêu Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/1a/67/0e/c3/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Ambiance 5in1 Pearl Glow - Bóng Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/06/3a/13/cf/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux EasyClean Chống Bám Bẩn Kháng Virus - Bề Mặt Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/ed/b2/95/7f/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux EasyClean Chống Bám Bẩn Kháng Virus - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/3f/1d/6b/71/a968_160x160px.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux EasyClean Lau Chùi Hiệu Quả - Bề Mặt Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/ef/d1/9a/14/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux EasyClean Lau Chùi Hiệu Quả - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/0f/22/b9/f4/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Inspire Nội Thất Sắc Màu Bền Đẹp - Bề Mặt Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/39/e7/0c/5f/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Inspire Nội Thất Sắc Màu Bền Đẹp - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/c2/69/7a/d2/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Better Living Air Clean - Siêu Bóng", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/53/a7/0c/98/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Sơn Lót Nội Thất Cao Cấp Dulux SuperSealer", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/e1/af/26/6f/packshot_medium.png", type: "Sơn Lót", brand: "Dulux" },
    { name: "Sơn Lót Nội Thất Dulux Ambiance", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/5b/f2/e5/ca/160x160.png", type: "Sơn Lót", brand: "Dulux" },
    { name: "Sơn Lót Nội Thất Dulux Inspire", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/1b/2b/2c/f3/packshot_medium.png", type: "Sơn Lót", brand: "Dulux" },
    { name: "Maxilite Total Sơn Nước Nội Thất - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/87/a7/68/e0/packshot_medium.png", type: "Sơn Phủ", brand: "Maxilite" },
    { name: "Maxilite Hi-Cover Sơn Nước Nội Thất - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/35/5d/bb/6b/packshot_medium.png", type: "Sơn Phủ", brand: "Maxilite" },
    { name: "Maxilite Smooth Sơn Nước Nội Thất - Bề Mặt Mờ", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/1b/d3/52/d1/page_2.png", type: "Sơn Phủ", brand: "Maxilite" },
    { name: "Bột Trét Tường Cao Cấp Dulux", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/9b/95/98/18/packshot_medium.png", type: "Bột Trét", brand: "Dulux" },
    { name: "Bột Trét Tường Nội Thất Maxilite", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/f6/39/64/24/packshot_medium.jpg", type: "Bột Trét", brand: "Maxilite" },
    { name: "Chống Thấm Sàn Dulux Aquatech Max", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/20/86/c1/10/packshot_medium.png", type: "Chất Chống Thấm", brand: "Dulux" },
    { name: "Dulux Ambiance Special Effects - Velvet", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/f9/34/3c/56/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Ambiance Special Effects - Linen", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/7f/06/38/92/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Ambiance Special Effects - Marble", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/51/2e/2e/a3/packshot_medium.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Dulux Ambiance Special Effects - Metallic", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/bd/f0/3f/b1/a935_160x160px.png", type: "Sơn Phủ", brand: "Dulux" },
    { name: "Sơn Lót Chống Kiềm Nội Thất Dulux", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/eb/53/64/3d/packshot_medium.png", type: "Sơn Lót", brand: "Dulux" },
    { name: "Sơn Lót Maxilite Nội Thất", image: "https://msp.images.akzonobel.com/prd/dh/avndlx/packshots/72/c2/ac/ee/packshot_medium.png", type: "Sơn Lót", brand: "Maxilite" }
];

const productTypes = ["Sơn Phủ", "Sơn Lót", "Chất Chống Thấm", "Bột Trét"];
const locations = ["Nội thất"]; // Only Interior
const brands = ["Dulux", "Maxilite"];
const projects = ["Hành lang", "Nhà bếp", "Phòng khách", "Phòng ngủ"];

let allProducts = [];
let filteredProducts = [];
const itemsPerPage = 9;
let currentPage = 1;

// Generate Data from Static List
function generateProducts() {
    allProducts = productsData.map((p, index) => ({
        id: index + 1,
        name: p.name,
        image: p.image,
        type: p.type,
        location: "Nội thất",
        brand: p.brand,
        project: projects[Math.floor(Math.random() * projects.length)],
        features: ["Bảo vệ vượt trội", "Chống thấm hiệu quả", "Màu sắc bền đẹp", "Dễ lau chùi"]
    }));

    filteredProducts = [...allProducts];
    updateResultCount();
    renderProducts();
    renderPagination();
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredProducts.slice(start, end);

    if (pageItems.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center"><p>Không tìm thấy sản phẩm nào phù hợp.</p></div>';
        return;
    }

    pageItems.forEach(p => {
        const card = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="product-card-new h-100">
                    <i class="far fa-heart wishlist-icon"></i>
                    <img src="${p.image}" alt="${p.name}">
                    <h5>${p.name}</h5>
                    <ul class="product-features">
                        ${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                    </ul>
                    <a href="#" class="store-link"><i class="fas fa-map-marker-alt"></i> cửa hàng</a>
                    <div class="card-actions justify-content-end">
                        <button class="btn btn-sm btn-outline-primary rounded-pill px-3" onclick="showProductDetail(${p.id})">
                            Xem chi tiết <i class="fas fa-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Render Pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    let html = '';

    // Previous
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Trước</a>
             </li>`;

    // Numbers
    for (let i = 1; i <= totalPages; i++) {
        html += `<li class="page-item ${currentPage === i ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                 </li>`;
    }

    // Next
    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Sau</a>
             </li>`;

    pagination.innerHTML = html;
}

// Change Page
window.changePage = function (page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderProducts();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter Logic
function filterProducts() {
    const locationInputs = document.querySelectorAll('input[name="location"]:checked');
    const brandInput = document.querySelector('input[name="brand"]:checked');
    const typeInputs = document.querySelectorAll('input[name="type"]:checked');
    const projectInputs = document.querySelectorAll('input[name="project"]:checked');

    const selectedLocations = Array.from(locationInputs).map(i => i.value);
    const selectedBrand = brandInput ? brandInput.value : 'all';
    const selectedTypes = Array.from(typeInputs).map(i => i.value);
    const selectedProjects = Array.from(projectInputs).map(i => i.value);

    filteredProducts = allProducts.filter(p => {
        const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(p.location);
        const matchBrand = selectedBrand === 'all' || p.brand === selectedBrand;
        const matchType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
        const matchProject = selectedProjects.length === 0 || selectedProjects.includes(p.project);

        return matchLocation && matchBrand && matchType && matchProject;
    });

    currentPage = 1;
    updateResultCount();
    renderProducts();
    renderPagination();
}

function updateResultCount() {
    const countEl = document.getElementById('result-count');
    if (countEl) {
        countEl.innerText = `${filteredProducts.length} Sản phẩm được tìm thấy`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Only run on products page
    if (document.getElementById('product-grid')) {
        generateProducts();

        // Attach listeners
        const inputs = document.querySelectorAll('.filter-input');
        inputs.forEach(input => {
            input.addEventListener('change', filterProducts);
        });
    }
});
