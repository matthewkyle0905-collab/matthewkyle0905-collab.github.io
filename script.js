// Sample products data
const products = [
    { id: 1, name: "Photo Cards", price: "₱600", image: "https://i5.walmartimages.com/seo/48-Pack-Photo-Frame-Cards-with-Envelopes-Notecards-for-4x6-Picture-Insert-Ivory_5339c47e-9e2e-4d17-bbcc-46da7d0288fb.88480b050f2d7e488cd5a07e5e90cfb5.jpeg", description: "Create personalized greeting cards with your best photos" },
    { id: 2, name: "Calendar", price: "₱900", image: "https://th.bing.com/th/id/OIP.YCkmc4EOofxjfXtluhXq-gHaFj?w=284&h=213&c=7&r=0&o=7&pid=1.7&rm=3", description: "Make your own calendar with your favorite photos" },
    { id: 3, name: "Photo Book", price: "₱1,500", image: "https://kroma.co.nz/cdn/shop/products/Classic_Hard_Cover_Photo_Book_Premium.jpg?v=1746043639&width=940", description: "Premium hardcover photo books to collect your memories" },
    { id: 4, name: "Canvas", price: "₱2,400", image: "https://www.printique.com/wp-content/uploads/2019/08/1.jpg", description: "Your favorite photo mounted on canvas" },
    { id: 5, name: "Mouse Pads", price: "₱480", image: "https://th.bing.com/th/id/OIP.3qkIBo_qp7kxxk0SVA2ntwHaEI?w=313&h=180&c=7&r=0&o=7&pid=1.7&rm=3", description: "Display your favorite photo at the office with a mouse pad" },
    { id: 6, name: "Double Cards", price: "₱720", image: "https://framkallning.fotocenter.se/templates2/categories/FOLDEDCARDS/mobile_image.png", description: "Elegant greetings for all special occasions" },
];

// Product icons mapping
const productIcons = {
    'photocards': '🖼️',
    'calendar': '📅',
    'photobook': '📘',
    'canvas': '🖼️',
    'mousepads': '🖱️',
    'doublecards': '🃏'
};

const productDisplayNames = {
    'photocards': 'Photo Cards',
    'calendar': 'Calendar',
    'photobook': 'Photo Book',
    'canvas': 'Canvas',
    'mousepads': 'Mouse Pads',
    'doublecards': 'Double Cards'
};

// ============== CALENDAR PRODUCTS DATA ==============
const calendarProducts = [
    // Desk Calendars (3 samples)
    {
        id: 101,
        type: 'desk',
        name: "Classic Wooden Desk Calendar",
        price: "₱ 850.00",
        image: "https://images.unsplash.com/photo-1585241645928-1f7aeb8bb6c7?w=400&h=300&fit=crop",
        description: "Elegant wooden base with monthly tear-off pages",
        features: ["Wooden Stand", "Tear-off Pages", "8x10 inches"],
        badge: "Best Seller"
    },
    {
        id: 102,
        type: 'desk',
        name: "Modern Acrylic Desk Calendar",
        price: "₱ 950.00",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        description: "Sleek acrylic stand with minimalist design",
        features: ["Acrylic Stand", "Modern Design", "12x12 inches"],
        badge: "Modern"
    },
    {
        id: 103,
        type: 'desk',
        name: "Magnetic Cube Calendar",
        price: "₱ 750.00",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w-400&h=300&fit=crop",
        description: "Rotating cube design with monthly magnets",
        features: ["Magnetic Cubes", "Rotating Design", "Compact Size"],
        badge: "Interactive"
    },

    // Wall Calendars (3 samples)
    {
        id: 104,
        type: 'wall',
        name: "Landscape Wall Calendar",
        price: "₱ 650.00",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        description: "Beautiful nature photography for each month",
        features: ["12 Landscape Photos", "Spiral Bound", "11x17 inches"],
        badge: "Nature"
    },
    {
        id: 105,
        type: 'wall',
        name: "Family Photo Wall Calendar",
        price: "₱ 700.00",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop",
        description: "Perfect for displaying family memories all year",
        features: ["Custom Photos", "Family Themed", "12x12 inches"],
        badge: "Family"
    },
    {
        id: 106,
        type: 'wall',
        name: "Art Illustration Calendar",
        price: "₱ 800.00",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        description: "Unique artwork for each month by local artists",
        features: ["Original Art", "Premium Paper", "8.5x11 inches"],
        badge: "Artistic"
    },

    // Mini Calendars (3 samples)
    {
        id: 107,
        type: 'mini',
        name: "Magnetic Fridge Calendar",
        price: "₱ 350.00",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        description: "Small magnetic calendar perfect for your refrigerator",
        features: ["Magnetic Back", "Monthly View", "5x7 inches"],
        badge: "Practical"
    },
    {
        id: 108,
        type: 'mini',
        name: "Credit Card Pocket Calendar",
        price: "₱ 250.00",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
        description: "Ultra-thin calendar that fits in your wallet",
        features: ["Credit Card Size", "12 Months", "Plastic Coated"],
        badge: "Portable"
    },
    {
        id: 109,
        type: 'mini',
        name: "Sticky Note Calendar",
        price: "₱ 450.00",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=300&fit=crop",
        description: "Monthly sticky notes you can write on",
        features: ["Writeable Surface", "12 Month Pads", "Desktop Design"],
        badge: "Functional"
    },

    // Photo Calendars (3 samples)
    {
        id: 110,
        type: 'photo',
        name: "12-Photo Custom Calendar",
        price: "₱ 900.00",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
        description: "One special photo for each month of the year",
        features: ["12 Custom Photos", "Premium Glossy", "Wire-O Bound"],
        badge: "Personalized"
    },
    {
        id: 111,
        type: 'photo',
        name: "Photo Collage Calendar",
        price: "₱ 1,100.00",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        description: "Multiple photos per month in beautiful layouts",
        features: ["Collage Layouts", "Hard Cover", "12x12 inches"],
        badge: "Deluxe"
    },
    {
        id: 112,
        type: 'photo',
        name: "Baby's 1st Year Calendar",
        price: "₱ 1,200.00",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
        description: "Special calendar to track baby's milestones",
        features: ["Baby Themed", "Milestone Stickers", "Premium Binding"],
        badge: "Baby"
    }
];

// ============== PRINT OPTIONS CONFIGURATION ==============
const printOptionsConfig = {
    photocards: [
        { value: "4x6", label: "4x6 inches", price: "25.00" },
        { value: "5x7", label: "5x7 inches", price: "35.00" },
        { value: "8x10", label: "8x10 inches", price: "50.00" }
    ],
    calendar: [
        { value: "8x10", label: "8x10 inches", price: "60.00" },
        { value: "12x12", label: "12x12 inches", price: "85.00" },
        { value: "8.5x11", label: "8.5x11 inches", price: "70.00" },
        { value: "11x17", label: "11x17 inches", price: "100.00" }
    ],
    photobook: [
        { value: "8x8", label: "8x8 inches", price: "120.00" },
        { value: "11x8.5", label: "11x8.5 inches", price: "150.00" }
    ],
    canvas: [
        { value: "8x10", label: "8x10 inches", price: "200.00" },
        { value: "16x20", label: "16x20 inches", price: "350.00" }
    ],
    mousepads: [
        { value: "7x9", label: "7x9 inches", price: "45.00" },
        { value: "9x11", label: "9x11 inches", price: "60.00" }
    ],
    doublecards: [
        { value: "5x7", label: "5x7 inches", price: "70.00" },
        { value: "8x10", label: "8x10 inches", price: "95.00" }
    ]
};

// ============== TEMPLATE CONFIGURATION ==============
let currentProduct = 'photocards'; // Default product
let templateImage = null;
const templates = {
    calendar: null,  // REMOVED template - now works like other products
    photocards: null,
    photobook: null,
    canvas: null,
    mousepads: null,
    doublecards: null
};

function getEventClient(e) {
    if (e.touches && e.touches[0]) return e.touches[0];
    return e;
}

// Initialize navigation highlight and attach handlers
function setupNavHighlight() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const onclick = this.getAttribute('onclick') || '';
            const m = onclick.match(/'([^']+)'/);
            if (m && m[1]) {
                updateNavHighlight(m[1]);
            }
        });
    });

    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id) {
        updateNavHighlight(activePage.id);
    } else {
        updateNavHighlight('home');
    }
}

// Enhanced Shopping Cart System
let shoppingCart = JSON.parse(localStorage.getItem('fotocenterCart')) || [];
let undoStack = [];
let redoStack = [];

// Photo Editor Variables
let uploadedImages = [];
let currentImageIndex = -1;
let originalImages = [];
let canvas = null;
let ctx = null;
let currentFilter = 'none';

// Calendar Variables
let calendarImages = [];
let calendarCurrentImageIndex = -1;

// Image adjustments
let adjustments = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0,
    flipHorizontal: false,
    flipVertical: false
};

// ============== CROP TOOL ==============
const cropTool = {
    active: false,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    minSize: 10,
    startX: 0,
    startY: 0,
    startCropX: 0,
    startCropY: 0,
    startCropWidth: 0,
    startCropHeight: 0,
    resizing: false,
    moving: false,
    handle: null,
    imageX: 0,
    imageY: 0,
    imageWidth: 0,
    imageHeight: 0
};

// Enhanced Photo Editor Features
const editorFeatures = {
    filters: {
        none: '',
        grayscale: 'grayscale(100%)',
        sepia: 'sepia(100%)',
        vintage: 'sepia(80%) contrast(120%) brightness(90%)',
        cool: 'hue-rotate(180deg) saturate(120%)',
        warm: 'hue-rotate(-30deg) saturate(120%)',
        vivid: 'saturate(150%) contrast(120%)',
        noir: 'grayscale(100%) contrast(150%)',
        lomo: 'contrast(120%) saturate(120%) brightness(110%)',
        dreamy: 'contrast(90%) brightness(110%) saturate(150%)'
    },

    textOverlay: {
        active: false,
        text: 'Add Text',
        font: 'Arial',
        size: 20,
        color: '#ffffff',
        x: 50,
        y: 50
    }
};

// AI Chat Widget with intelligent responses
const chatAI = {
    responses: {
        greeting: ["Hello! 👋 How can I help you with your photo printing needs today?", "Hi there! Welcome to FOTOCENTER. What can I assist you with?"],
        pricing: ["Our photo prints start at ₱25 for 4x6 prints. Cards range from ₱150-₱350. Would you like specific pricing for any product?", "Prices vary by product: Photos (₱25-₱50), Cards (₱150-₱350), Calendars (₱900), Photo Books (₱1500+). Need details?"],
        delivery: ["Delivery takes 3-5 business days in Metro Manila, 5-7 days for provincial areas. Express delivery (+₱200) is available.", "Standard delivery: 3-5 days. We offer express options for faster service."],
        quality: ["We use professional-grade photo paper and printers for excellent quality. All prints come with a satisfaction guarantee!", "Our prints are made with archival-quality materials to ensure your memories last a lifetime."],
        upload: ["You can upload JPG, PNG, or GIF files up to 10MB each. Just drag & drop or click the upload area!", "Supported formats: JPG, PNG, GIF. Max 10MB per file. Need help with uploading?"],
        editing: ["Try our photo editor! You can adjust brightness, contrast, add filters, crop, and more before printing.", "Edit your photos with our tools - adjust colors, add filters, crop, or add text overlays."],
        sizes: ["We offer 4x6, 5x7, and 8x10 inch prints. Cards come in 5x7, 8x10, and folded formats.", "Print sizes: 4x6 (₱25), 5x7 (₱35), 8x10 (₱50). Card sizes vary."],
        refund: ["We offer refunds within 7 days if prints are damaged or incorrect. Contact support with order details.", "Refund policy: 7-day window for damaged/incorrect items. Contact us for assistance."],
        payment: ["We accept GCash, Maya, credit/debit cards (Visa/Mastercard), and bank transfers.", "Payment methods: GCash, Maya, cards, and bank transfers."],
        default: ["I understand you're asking about that. For detailed assistance, please contact us at (+63) 929 725 2291.", "That's a great question! Let me connect you with a human agent for better assistance."]
    },

    getResponse: function (query) {
        query = query.toLowerCase();

        if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
            return this.getRandomResponse('greeting');
        } else if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
            return this.getRandomResponse('pricing');
        } else if (query.includes('deliver') || query.includes('ship') || query.includes('time')) {
            return this.getRandomResponse('delivery');
        } else if (query.includes('quality') || query.includes('good') || query.includes('best')) {
            return this.getRandomResponse('quality');
        } else if (query.includes('upload') || query.includes('file') || query.includes('format')) {
            return this.getRandomResponse('upload');
        } else if (query.includes('edit') || query.includes('filter') || query.includes('crop')) {
            return this.getRandomResponse('editing');
        } else if (query.includes('size') || query.includes('dimension')) {
            return this.getRandomResponse('sizes');
        } else if (query.includes('refund') || query.includes('return') || query.includes('exchange')) {
            return this.getRandomResponse('refund');
        } else if (query.includes('payment') || query.includes('pay') || query.includes('card')) {
            return this.getRandomResponse('payment');
        } else {
            return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
        }
    },

    getRandomResponse: function (type) {
        const responses = this.responses[type];
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// ============== ENTER KEY SUPPORT FOR CHAT ==============
function setupChatKeyboard() {
    const chatInput = document.getElementById('chatInput');

    if (chatInput) {
        chatInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });

        chatInput.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.key === 'Enter') {
                if (!event.shiftKey) {
                    event.preventDefault();
                    setTimeout(() => {
                        sendMessage();
                    }, 10);
                }
            }
        });
    }
}

// ============== SEND MESSAGE FUNCTION ==============
function sendMessage() {
    const input = document.getElementById('chatInput');

    if (!input) return;

    const messageText = input.value.trim();

    if (!messageText) {
        return;
    }

    input.value = '';

    addMessage(messageText, 'user');
    if (window.socket && window.socket.connected) {
        try {
            window.socket.emit('message', { sender: 'user', text: messageText, time: new Date().toLocaleTimeString(), user: localStorage.getItem('userName') || 'Guest' });
        } catch (e) {
            console.warn('Socket emit failed', e);
        }
    }

    setTimeout(() => {
        const response = chatAI.getResponse(messageText);
        addMessage(response, 'bot');

        if (window.socket && window.socket.connected) {
            try {
                window.socket.emit('message', { sender: 'bot', text: response, time: new Date().toLocaleTimeString() });
            } catch (e) {
                // ignore
            }
        }
    }, 1000);

    setTimeout(() => {
        if (input) {
            input.focus();
        }
    }, 50);
}

// ============== ADD MESSAGE FUNCTION ==============
function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;

    const messageContent = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    messageContent.innerHTML = `<p>${text}</p><div class="msg-time">${time}</div>`;
    messageDiv.appendChild(messageContent);

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
    persistChatMessage({ sender, text, time });
}

function persistChatMessage(msg) {
    try {
        const key = 'fotocenterChatHistory';
        const hist = JSON.parse(localStorage.getItem(key)) || [];
        hist.push(msg);
        if (hist.length > 200) hist.shift();
        localStorage.setItem(key, JSON.stringify(hist));
    } catch (e) {
        console.warn('Failed to persist chat message', e);
    }
}

function loadChatHistory() {
    try {
        const key = 'fotocenterChatHistory';
        const hist = JSON.parse(localStorage.getItem(key)) || [];
        const messages = document.getElementById('chatMessages');
        if (!messages) return;
        messages.innerHTML = '';
        hist.forEach(m => {
            const div = document.createElement('div');
            div.className = `chat-message ${m.sender}-message`;
            const content = document.createElement('div');
            content.innerHTML = `<p>${m.text}</p><div class="msg-time">${m.time}</div>`;
            div.appendChild(content);
            messages.appendChild(div);
        });
        messages.scrollTop = messages.scrollHeight;
    } catch (e) {
        console.warn('Failed to load chat history', e);
    }
}

// Cart management functions
function updateCartStorage() {
    localStorage.setItem('fotocenterCart', JSON.stringify(shoppingCart));
}

function addToCart(item) {
    const existingItemIndex = shoppingCart.findIndex(cartItem =>
        cartItem.id === item.id &&
        cartItem.type === item.type &&
        cartItem.size === item.size
    );

    if (existingItemIndex > -1) {
        shoppingCart[existingItemIndex].quantity += item.quantity || 1;
    } else {
        item.addedAt = new Date().toISOString();
        shoppingCart.push(item);
    }

    updateCartStorage();
    updateCartUI();
    showSuccessModal();

    return item;
}

function updateCartUI() {
    const cartBtn = document.querySelector('.cart-btn');
    if (!cartBtn) return;

    const total = calculateCartTotal();
    const itemCount = shoppingCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    cartBtn.innerHTML = `🛒 Cart (${itemCount}) - ₱ ${total.toFixed(2)}`;
    const cartCountBadge = document.getElementById('cartCount');
    if (cartCountBadge) cartCountBadge.textContent = itemCount;
    cartBtn.setAttribute('title', `${itemCount} items in cart`);
}

function calculateCartTotal() {
    return shoppingCart.reduce((total, item) => {
        const price = parseFloat(item.price.toString().replace('₱', '').replace(',', '')) || 0;
        return total + (price * (item.quantity || 1));
    }, 0);
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartStorage();
    updateCartUI();
}

function clearCart() {
    shoppingCart = [];
    updateCartStorage();
    updateCartUI();
}

function viewCart() {
    closeModal();

    let cartModal = document.getElementById('cartModal');
    if (!cartModal) return;

    const cartItemsList = document.getElementById('cartItemsList');
    if (cartItemsList) {
        if (shoppingCart.length === 0) {
            cartItemsList.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItemsList.innerHTML = shoppingCart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100?text=Image'">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                        <p>Price: ${item.price}</p>
                        <div class="cart-item-quantity">
                            <button onclick="updateCartItemQuantity(${index}, -1)">-</button>
                            <span>${item.quantity || 1}</span>
                            <button onclick="updateCartItemQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }

    const cartTotal = document.getElementById('cartTotalAmount');
    if (cartTotal) {
        cartTotal.textContent = `₱ ${calculateCartTotal().toFixed(2)}`;
    }

    cartModal.style.display = 'flex';
}

function updateCartItemQuantity(index, change) {
    const item = shoppingCart[index];
    const newQuantity = (item.quantity || 1) + change;

    if (newQuantity < 1) {
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        updateCartStorage();
        updateCartUI();
        viewCart();
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function proceedToCheckout() {
    if (shoppingCart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        alert('Please log in to proceed to checkout.');
        navigateTo('login');
        closeCartModal();
        return;
    }

    alert('Proceeding to checkout... This would connect to payment gateway.');

    const orderId = 'ORD-' + Date.now();
    const order = {
        id: orderId,
        items: shoppingCart,
        total: calculateCartTotal(),
        date: new Date().toISOString(),
        status: 'pending'
    };

    const orders = JSON.parse(localStorage.getItem('fotocenterOrders')) || [];
    orders.push(order);
    localStorage.setItem('fotocenterOrders', JSON.stringify(orders));

    clearCart();
    closeCartModal();
    alert(`Order ${orderId} created successfully!`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    displayHomeProducts();
    setupPhotoEditor();
    setupNavHighlight();
    setupDragAndDrop();
    setupEventListeners();
    updatePriceDisplay();
    initPhotoMode();
    updateLoginStatus();
    updateCartUI();
    setupFaqScroll();
    setupChatKeyboard();
    setupDropdownMenu();

    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.onclick = viewCart;
    }

    renderShopProducts();
    renderReviews();
    updateCartBadgeOnLoad();
    loadChatHistory();
    updateUndoRedoButtons();

    setTimeout(() => {
        selectProduct('photocards');
    }, 500);
    
    // Initialize print options
    initPrintOptions();
});

function updateCartBadgeOnLoad() {
    const badge = document.getElementById('cartCount');
    if (badge) {
        const count = shoppingCart.reduce((s, i) => s + (i.quantity || 1), 0);
        badge.textContent = count;
    }
}

function renderShopProducts() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p>${p.description}</p>
                <div class="product-footer">
                    <div class="price-list">
                        <span>USD: ${convertPriceToUSD(p.price)}</span>
                        <span>SEK: ${convertPriceToSEK(p.price)}</span>
                        <span>PHP: ${p.price}</span>
                    </div>
                    <button onclick="navigateTo('photos');">Edit</button>
                </div>
            </div>
        </div>
    `).join('');
}

function convertPriceToUSD(priceStr) {
    const php = parseFloat(priceStr.replace(/[₱,\s]/g, '')) || 0;
    const rate = 0.018;
    return `$${(php * rate).toFixed(2)}`;
}

function convertPriceToSEK(priceStr) {
    const php = parseFloat(priceStr.replace(/[₱,\s]/g, '')) || 0;
    const rate = 0.20;
    return `${(php * rate).toFixed(2)} kr`;
}

// Reviews
const reviews = [
    { name: 'Maria', product: 'Photo Book', rating: 5, text: 'Beautiful quality and fast delivery!' },
    { name: 'Jon', product: 'Canvas', rating: 4, text: 'Great colors, slightly longer shipping.' },
    { name: 'Anna', product: 'Calendars', rating: 5, text: 'Perfect gift. Loved the layout options.' }
];
let currentReview = 0;

function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    container.innerHTML = reviews.map(r => `
        <div class="review-card">
            <div class="review-header"><strong>${r.name}</strong> — <em>${r.product}</em></div>
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <p>${r.text}</p>
        </div>
    `).join('');
    updateReviewVisibility();
}

function updateReviewVisibility() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    const cards = container.querySelectorAll('.review-card');
    cards.forEach((c, i) => {
        c.style.display = i === currentReview ? 'block' : 'none';
    });
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReviewVisibility();
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReviewVisibility();
}

// LOGIN modal handlers
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

function handleLoginModal(e) {
    e.preventDefault();
    const email = document.getElementById('modalEmail').value;
    const password = document.getElementById('modalPassword').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', email.split('@')[0]);
    localStorage.setItem('isLoggedIn', 'true');
    alert('Logged in (simulated).');
    closeLoginModal();
    updateLoginStatus();
}

function simulateSocialLogin(provider) {
    localStorage.setItem('userEmail', `${provider}-user@example.com`);
    localStorage.setItem('userName', provider + 'user');
    localStorage.setItem('isLoggedIn', 'true');
    alert(`Simulated ${provider} login`);
    closeLoginModal();
    updateLoginStatus();
}

// When opening chat, personalize
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');

    const isMobile = window.innerWidth <= 480;
    if (isMobile) {
        chatBox.classList.add('active');
        chatBox.style.width = '100%';
        chatBox.style.right = '0';
        chatBox.style.left = '0';
        chatBox.style.bottom = '0';
        chatBox.style.height = '100%';
        chatBox.style.borderRadius = '0';
    } else {
        chatBox.classList.toggle('active');
    }

    if (chatBox.classList.contains('active')) {
        const input = document.getElementById('chatInput');
        if (input) input.focus();

        const userName = localStorage.getItem('userName') || 'Guest';
        const existingWelcome = chatMessages.querySelector('.agent-welcome');
        if (!existingWelcome) {
            const welcomeMessageDiv = document.createElement('div');
            welcomeMessageDiv.className = 'chat-message bot-message agent-welcome';
            welcomeMessageDiv.innerHTML = `
                <div class="agent-welcome">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.Il1NAN2piMWTFt8ZUoG8cwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Agent" class="agent-photo">
                    <div class="agent-message"><p>Hello ${userName}! 👋 I'm Kyle from FOTOCENTER. How can I help?</p></div>
                </div>
            `;
            chatMessages.appendChild(welcomeMessageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    } else {
        chatBox.style.width = '';
        chatBox.style.right = '';
        chatBox.style.left = '';
        chatBox.style.bottom = '';
        chatBox.style.height = '';
        chatBox.style.borderRadius = '';
    }
}

// Placeholder for backend chat connection (Node/Socket.io)
function initChatBackend() {
    try {
        if (typeof io === 'undefined') {
            console.info('Socket.io client not available. Backend chat disabled.');
            return;
        }

        const socket = io('http://localhost:3000');
        window.socket = socket;

        socket.on('connect', () => {
            console.info('Connected to chat backend');
            socket.emit('getHistory');
        });

        socket.on('history', (hist) => {
            try {
                const messages = document.getElementById('chatMessages');
                if (!messages) return;
                messages.innerHTML = '';
                hist.forEach(m => {
                    addMessage(m.text, m.sender === 'user' ? 'user' : 'bot');
                });
            } catch (e) {
                console.warn('Failed to render history', e);
            }
        });

        socket.on('message', (msg) => {
            if (!msg) return;
            addMessage(msg.text, msg.sender === 'user' ? 'user' : 'bot');
        });

        socket.on('disconnect', () => {
            console.info('Disconnected from chat backend');
        });
    } catch (e) {
        console.warn('Chat backend init failed', e);
    }
}

initChatBackend();

function displayHomeProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" onclick="navigateTo('product-detail'); showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); navigateTo('photos');">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function displayProductsGrid() {
    const productsGrid = document.getElementById('printProductsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="navigateTo('product-detail'); showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); addToCartProduct(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <div class="detail-layout">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="detail-info">
                <h2>${product.name}</h2>
                <p class="detail-desc">${product.description}</p>
                <div class="price-section">
                    <span class="detail-price">${product.price}</span>
                </div>
                <div class="quantity-section">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" min="1" value="1">
                </div>
                <button class="detail-add-btn" onclick="addToCartProduct(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function addToCartProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    const cartItem = {
        id: productId,
        type: 'product',
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity
    };

    addToCart(cartItem);
    alert(`${product.name} added to cart!`);
}

function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    updateNavHighlight(pageId);

    if (pageId === 'photos') {
        setTimeout(() => {
            switchPhotoMode('upload');
        }, 50);
    }

    window.scrollTo(0, 0);
}

function updateNavHighlight(pageId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(`'${pageId}'`)) {
            link.classList.add('active');
        }
    });
}

// Photo Mode Switching
function switchPhotoMode(mode) {
    const uploadModeBtn = document.getElementById('uploadModeBtn');
    const printModeBtn = document.getElementById('printModeBtn');
    const uploadView = document.getElementById('uploadView');
    const printsView = document.getElementById('printsView');

    if (mode === 'upload') {
        uploadModeBtn.classList.add('active');
        printModeBtn.classList.remove('active');
        uploadView.classList.add('active-view');
        uploadView.style.display = 'block';
        printsView.style.display = 'none';
    } else {
        uploadModeBtn.classList.remove('active');
        printModeBtn.classList.add('active');
        uploadView.classList.remove('active-view');
        uploadView.style.display = 'none';
        printsView.style.display = 'block';
        displayProductsGrid();
    }
}

// Setup Photo Editor
function setupPhotoEditor() {
    canvas = document.getElementById('photoCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    setupSliders();
    setupTextDrag();
}

function setupTextDrag() {
    if (!canvas) return;
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] && e.touches[0].clientX);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] && e.touches[0].clientY);
        return {
            x: Math.round((clientX - rect.left) * (canvas.width / rect.width)),
            y: Math.round((clientY - rect.top) * (canvas.height / rect.height))
        };
    }

    function onDown(e) {
        if (!editorFeatures.textOverlay.active) return;
        const pos = getMousePos(e);
        let tx = editorFeatures.textOverlay.x;
        let ty = editorFeatures.textOverlay.y;
        if (tx <= 100) tx = Math.round((tx / 100) * canvas.width);
        if (ty <= 100) ty = Math.round((ty / 100) * canvas.height);

        const textSize = editorFeatures.textOverlay.size || 20;
        const textWidth = ctx.measureText(editorFeatures.textOverlay.text || '').width;
        const textHeight = textSize;

        if (pos.x >= tx - textWidth / 2 && pos.x <= tx + textWidth / 2 && pos.y >= ty - textHeight && pos.y <= ty + 10) {
            isDragging = true;
            dragOffset.x = pos.x - tx;
            dragOffset.y = pos.y - ty;
            e.preventDefault();
        }
    }

    function onMove(e) {
        if (!isDragging) return;
        const pos = getMousePos(e);
        const newX = pos.x - dragOffset.x;
        const newY = pos.y - dragOffset.y;
        editorFeatures.textOverlay.x = Math.round((newX / canvas.width) * 100);
        editorFeatures.textOverlay.y = Math.round((newY / canvas.height) * 100);
        const tx = document.getElementById('textX');
        const ty = document.getElementById('textY');
        const txVal = document.getElementById('textXValue');
        const tyVal = document.getElementById('textYValue');
        if (tx && txVal) { tx.value = editorFeatures.textOverlay.x; txVal.textContent = tx.value; }
        if (ty && tyVal) { ty.value = editorFeatures.textOverlay.y; tyVal.textContent = ty.value; }
        drawImage();
        e.preventDefault();
    }

    function onUp(e) {
        if (isDragging) {
            isDragging = false;
        }
    }

    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    canvas.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
}

function setupSliders() {
    const sliders = ['brightness', 'contrast', 'saturation'];
    sliders.forEach(slider => {
        const sliderElement = document.getElementById(`${slider}Slider`);
        const valueElement = document.getElementById(`${slider}Value`);

        if (sliderElement && valueElement) {
            sliderElement.addEventListener('input', function () {
                adjustments[slider] = parseInt(this.value);
                valueElement.textContent = `${this.value}%`;
                drawImage();
            });
            sliderElement.addEventListener('change', function () {
                saveCurrentAdjustments();
                pushSnapshotForCurrentImage();
            });
        }
    });
}

// Drag and Drop
function setupDragAndDrop() {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('photoInput');

    if (!dropArea || !fileInput) {
        console.warn('setupDragAndDrop: missing elements', { dropAreaFound: !!dropArea, fileInputFound: !!fileInput });
        return;
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    dropArea.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', handleFileSelect, false);
    console.debug('setupDragAndDrop: listeners attached for dropArea and file input');
}

function handleFileSelect(e) {
    const files = e.target.files;
    console.debug('handleFileSelect: files selected', files && files.length);
    processFiles(files);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    console.debug('handleDrop: files dropped', files && files.length);
    processFiles(files);
}

function processFiles(files) {
    if (!files || files.length === 0) {
        console.warn('processFiles: no files to process');
        return;
    }

    Array.from(files).forEach(file => {
        try {
            if (file.type && file.type.match('image.*')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    console.debug('processFiles: file read complete', file.name);
                    addImageToGallery(e.target.result, file.name);
                };
                reader.onerror = function (err) {
                    console.error('processFiles: FileReader error', err);
                };
                reader.readAsDataURL(file);
            } else {
                console.warn('processFiles: skipped non-image file', file.name, file.type);
            }
        } catch (err) {
            console.error('processFiles: error processing file', file, err);
        }
    });
}

function addImageToGallery(dataUrl, filename) {
    const image = new Image();
    image.onload = function () {
        try {
            const newImage = {
                id: Date.now() + Math.random(),
                src: dataUrl,
                name: filename,
                original: dataUrl,
                baseOriginal: dataUrl,
                adjustments: { ...adjustments },
                filter: 'none',
                history: [dataUrl],
                redo: []
            };

            uploadedImages.push(newImage);
            originalImages.push(dataUrl);
            updateImageGallery();
            updateUploadCount();

            if (uploadedImages.length === 1) {
                selectImage(0);
                setTimeout(() => {
                    pushSnapshotForCurrentImage();
                    updateUndoRedoButtons();
                }, 300);
            }
        } catch (err) {
            console.error('addImageToGallery: failed to add image', filename, err);
        }
    };
    image.src = dataUrl;
}

function updateImageGallery() {
    const container = document.getElementById('uploadedImages');
    if (!container) return;

    container.innerHTML = uploadedImages.map((image, index) => `
        <div class="uploaded-thumbnail ${index === currentImageIndex ? 'active' : ''}">
            <div class="thumb-remove" onclick="removeUploadedImage(event, ${index})">&times;</div>
            <div class="thumb-click" onclick="selectImage(${index})">
                <img src="${image.src}" alt="${image.name}">
                <div class="thumb-overlay">
                    <span class="thumb-name">${image.name.substring(0, 10)}...</span>
                </div>
            </div>
        </div>
    `).join('');
}

function removeUploadedImage(e, index) {
    try {
        e.stopPropagation();
    } catch (err) { }

    if (index < 0 || index >= uploadedImages.length) return;

    const wasCurrent = index === currentImageIndex;
    uploadedImages.splice(index, 1);

    if (uploadedImages.length === 0) {
        currentImageIndex = -1;
        const overlay = document.getElementById('canvasOverlay');
        if (overlay) overlay.style.display = 'block';
        updateImageGallery();
        updateUploadCount();
        return;
    }

    if (wasCurrent) {
        const newIndex = Math.min(index, uploadedImages.length - 1);
        selectImage(newIndex);
    } else {
        if (currentImageIndex > index) currentImageIndex--;
        updateImageGallery();
    }

    updateUploadCount();
}

function updateUploadCount() {
    const countElement = document.getElementById('uploadCount');
    if (countElement) {
        countElement.textContent = uploadedImages.length;
    }
}

function selectImage(index) {
    if (index < 0 || index >= uploadedImages.length) return;

    currentImageIndex = index;
    const imageData = uploadedImages[index];

    adjustments = { ...imageData.adjustments };
    currentFilter = imageData.filter;

    updateSliderValues();
    updateImageGallery();

    const overlay = document.getElementById('canvasOverlay');
    if (overlay) overlay.style.display = 'none';

    drawImage();
    updatePriceDisplay();
}

function updateSliderValues() {
    const sliders = ['brightness', 'contrast', 'saturation'];
    sliders.forEach(slider => {
        const sliderElement = document.getElementById(`${slider}Slider`);
        const valueElement = document.getElementById(`${slider}Value`);

        if (sliderElement && valueElement) {
            sliderElement.value = adjustments[slider];
            valueElement.textContent = `${adjustments[slider]}%`;
        }
    });
}

// Image Editing Functions
function adjustBrightness(amount) {
    adjustments.brightness = Math.max(0, Math.min(200, adjustments.brightness + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function adjustContrast(amount) {
    adjustments.contrast = Math.max(0, Math.min(200, adjustments.contrast + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function adjustSaturation(amount) {
    adjustments.saturation = Math.max(0, Math.min(200, adjustments.saturation + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function rotateImage(degrees) {
    adjustments.rotation = (adjustments.rotation + degrees) % 360;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function flipHorizontal() {
    adjustments.flipHorizontal = !adjustments.flipHorizontal;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function flipVertical() {
    adjustments.flipVertical = !adjustments.flipVertical;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function applyFilter(filter) {
    currentFilter = filter;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function saveCurrentAdjustments() {
    if (currentImageIndex !== -1) {
        uploadedImages[currentImageIndex].adjustments = { ...adjustments };
        uploadedImages[currentImageIndex].filter = currentFilter;

        const fullSizeSnapshot = canvas.toDataURL('image/png');

        const thumbnailCanvas = document.createElement('canvas');
        const tempCtx = thumbnailCanvas.getContext('2d');
        const img = new Image();

        img.onload = function () {
            thumbnailCanvas.width = 100;
            thumbnailCanvas.height = 100;
            tempCtx.save();

            tempCtx.filter = `brightness(${adjustments.brightness}%) contrast(${adjustments.contrast}%) saturate(${adjustments.saturation}%)`;

            tempCtx.translate(thumbnailCanvas.width / 2, thumbnailCanvas.height / 2);
            tempCtx.rotate((adjustments.rotation * Math.PI) / 180);

            if (adjustments.flipHorizontal) tempCtx.scale(-1, 1);
            if (adjustments.flipVertical) tempCtx.scale(1, -1);

            tempCtx.translate(-thumbnailCanvas.width / 2, -thumbnailCanvas.height / 2);

            if (currentFilter === 'grayscale') {
                tempCtx.filter += ' grayscale(100%)';
            } else if (currentFilter === 'sepia') {
                tempCtx.filter += ' sepia(100%)';
            } else if (currentFilter === 'vintage') {
                tempCtx.filter += ' sepia(80%) contrast(120%) brightness(90%)';
            } else if (currentFilter === 'cool') {
                tempCtx.filter += ' contrast(110%) saturate(80%)';
            } else if (currentFilter === 'warm') {
                tempCtx.filter += ' contrast(110%) saturate(120%)';
            }

            tempCtx.drawImage(img, 0, 0, thumbnailCanvas.width, thumbnailCanvas.height);
            tempCtx.restore();

            tempCtx.save();
            tempCtx.font = '10px Arial';
            tempCtx.fillStyle = 'rgba(255,255,255,0.7)';
            tempCtx.textAlign = 'right';
            tempCtx.fillText('FOTOCENTER', thumbnailCanvas.width - 6, thumbnailCanvas.height - 6);
            tempCtx.restore();

            uploadedImages[currentImageIndex].src = thumbnailCanvas.toDataURL();
            updateImageGallery();

            const imgObj = uploadedImages[currentImageIndex];
            imgObj.history = imgObj.history || [];
            const last = imgObj.history[imgObj.history.length - 1];
            if (last !== fullSizeSnapshot) {
                imgObj.history.push(fullSizeSnapshot);
                if (imgObj.history.length > 30) imgObj.history.shift();
                imgObj.redo = [];
            }
            updateUndoRedoButtons();
        };
        img.src = uploadedImages[currentImageIndex].original;
    }
}

// ============== FIXED UNDO/REDO SYSTEM ==============
function pushSnapshotForCurrentImage() {
    if (currentImageIndex === -1 || !canvas) return;

    const imgObj = uploadedImages[currentImageIndex];
    const snapshot = canvas.toDataURL('image/png');

    if (!imgObj.history) imgObj.history = [];
    if (!imgObj.redo) imgObj.redo = [];

    if (imgObj.history[imgObj.history.length - 1] !== snapshot) {
        imgObj.history.push(snapshot);
        imgObj.redo = [];
        console.log('📸 History saved. Length:', imgObj.history.length);
    }

    updateUndoRedoButtons();
}

function undo() {
    if (currentImageIndex === -1) {
        console.log('⛔ No image selected');
        return;
    }

    const imgObj = uploadedImages[currentImageIndex];
    if (!imgObj.history || imgObj.history.length <= 1) {
        console.log('⛔ Nothing to undo');
        return;
    }

    console.log('↩️ Undo called. Current history length:', imgObj.history.length);

    const current = canvas.toDataURL('image/png');
    imgObj.redo.push(current);

    imgObj.history.pop();
    const previous = imgObj.history[imgObj.history.length - 1];

    imgObj.original = previous;

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        console.log('✅ Undo successful. New history length:', imgObj.history.length);
    };
    img.src = previous;

    updateUndoRedoButtons();
}

function redo() {
    if (currentImageIndex === -1) {
        console.log('⛔ No image selected');
        return;
    }

    const imgObj = uploadedImages[currentImageIndex];
    if (!imgObj.redo || imgObj.redo.length === 0) {
        console.log('⛔ Nothing to redo');
        return;
    }

    console.log('↪️ Redo called. Redo stack length:', imgObj.redo.length);

    const next = imgObj.redo.pop();

    const current = canvas.toDataURL('image/png');
    imgObj.history.push(current);

    imgObj.original = next;

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        console.log('✅ Redo successful');
    };
    img.src = next;

    updateUndoRedoButtons();
}

function resetImage() {
    if (currentImageIndex === -1) return;

    const imgObj = uploadedImages[currentImageIndex];

    adjustments = {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false
    };
    currentFilter = 'none';

    imgObj.original = imgObj.baseOriginal;

    imgObj.history = [imgObj.baseOriginal];
    imgObj.redo = [];

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        updateSliderValues();
        updateUndoRedoButtons();
        console.log('✅ Reset complete - back to original');
    };
    img.src = imgObj.baseOriginal;
}

function updateUndoRedoButtons() {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    let canUndo = false;
    let canRedo = false;

    if (currentImageIndex !== -1) {
        const imgObj = uploadedImages[currentImageIndex];
        if (imgObj) {
            canUndo = (imgObj.history && imgObj.history.length > 1);
            canRedo = (imgObj.redo && imgObj.redo.length > 0);
        }
    }

    if (!canUndo) canUndo = undoStack.length > 0;
    if (!canRedo) canRedo = redoStack.length > 0;

    if (undoBtn) undoBtn.disabled = !canUndo;
    if (redoBtn) redoBtn.disabled = !canRedo;

    console.log(`🔄 Undo: ${canUndo ? 'enabled' : 'disabled'}, Redo: ${canRedo ? 'enabled' : 'disabled'}`);
}

// ============== FIXED DRAWIMAGE FUNCTION ==============
function drawImage() {
    if (currentImageIndex === -1 || !canvas || !ctx) return;

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        console.log('📸 Drawing image. Product:', currentProduct);
        console.log('Image dimensions:', img.width, 'x', img.height);

        ctx.save();

        if (!cropTool.active) {
            canvas.width = img.width;
            canvas.height = img.height;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((adjustments.rotation * Math.PI) / 180);

        if (adjustments.flipHorizontal) ctx.scale(-1, 1);
        if (adjustments.flipVertical) ctx.scale(1, -1);

        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        let filterString = `brightness(${adjustments.brightness}%) contrast(${adjustments.contrast}%) saturate(${adjustments.saturation}%)`;
        if (currentFilter !== 'none' && editorFeatures.filters[currentFilter]) {
            filterString += ' ' + editorFeatures.filters[currentFilter];
        }
        ctx.filter = filterString;

        if (cropTool.active) {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

            cropTool.imageX = 0;
            cropTool.imageY = 0;
            cropTool.imageWidth = canvas.width;
            cropTool.imageHeight = canvas.height;
        } else {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

            cropTool.imageX = 0;
            cropTool.imageY = 0;
            cropTool.imageWidth = canvas.width;
            cropTool.imageHeight = canvas.height;
        }

        ctx.restore();

        if (editorFeatures.textOverlay.active) {
            const text = editorFeatures.textOverlay;
            ctx.save();
            ctx.font = `${text.size}px ${text.font}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = 'center';
            let xPos = text.x;
            let yPos = text.y;
            if (xPos <= 100) xPos = Math.round((xPos / 100) * canvas.width);
            if (yPos <= 100) yPos = Math.round((yPos / 100) * canvas.height);
            ctx.fillText(text.text, xPos, yPos);
            ctx.restore();
        }

        drawWatermark();

        if (cropTool.active) {
            console.log('✂️ Crop active, updating handles');
            setTimeout(() => {
                setupCropHandles();
            }, 50);
        }
    };

    img.src = image.original;
}

// Add watermark function
function drawWatermark() {
    try {
        ctx.save();
        const text = 'FOTOCENTER';
        const fontSize = Math.max(12, Math.round(canvas.width / 40));
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.textBaseline = 'bottom';
        ctx.textAlign = 'right';
        ctx.fillText(text, canvas.width - 10, canvas.height - 10);
        ctx.restore();
    } catch (e) {
        // ignore watermark errors
    }
}

// ============== DROPDOWN MENU FUNCTIONS ==============
function setupDropdownMenu() {
    const dropdownBtn = document.getElementById('productDropdownBtn');
    const dropdownMenu = document.getElementById('productDropdownMenu');

    if (!dropdownBtn || !dropdownMenu) return;

    const productTypes = ['photocards', 'calendar', 'photobook', 'canvas', 'mousepads', 'doublecards'];

    dropdownMenu.innerHTML = productTypes.map(type => {
        const icon = productIcons[type] || '📷';
        const name = productDisplayNames[type] || type;
        const isActive = currentProduct === type ? 'active' : '';

        return `
            <div class="dropdown-item ${isActive}" data-product="${type}">
                <span>${name}</span>
                <span class="item-icon">${icon}</span>
            </div>
        `;
    }).join('');

    dropdownBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const productType = this.getAttribute('data-product');

            dropdownMenu.querySelectorAll('.dropdown-item').forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');

            updateProductBadge(productType);

            dropdownMenu.classList.remove('show');

            selectProduct(productType);
        });
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });
}

function updateProductBadge(productType) {
    const badge = document.getElementById('currentProductBadge');
    if (!badge) return;

    if (productType && productDisplayNames[productType]) {
        const icon = productIcons[productType] || '📷';
        const name = productDisplayNames[productType];
        badge.innerHTML = `<span class="badge-text">${icon} ${name}</span>`;
    } else {
        badge.innerHTML = `<span class="badge-text">None</span>`;
    }
}

// ============== PRODUCT SELECTION FUNCTION ==============
function selectProduct(type) {
    currentProduct = type;

    document.querySelectorAll('.product-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-product') === type);
    });

    updateProductBadge(type);

    updatePrintOptions(type);

    if (templates[type]) {
        templateImage = new Image();
        templateImage.onload = function () {
            drawImage();
        };
        templateImage.src = templates[type];
    } else {
        templateImage = null;
        drawImage();
    }
}

// ============== UPDATE PRINT OPTIONS ==============
function updatePrintOptions(productType) {
    const printOptionsContainer = document.querySelector('.print-options');
    if (!printOptionsContainer) return;

    const options = printOptionsConfig[productType] || printOptionsConfig.photocards;

    printOptionsContainer.innerHTML = options.map(opt => `
        <div class="print-option">
            <label>
                <input type="radio" name="printSize" value="${opt.value}" ${opt.value === options[0].value ? 'checked' : ''}>
                ${opt.label}
                <span class="print-price">₱ ${opt.price}</span>
            </label>
        </div>
    `).join('');

    updatePriceDisplay();
}

// ============== CROP TOOL FUNCTIONS ==============
function setupCropHandles() {
    console.log('setupCropHandles called');
    if (!canvas) {
        console.log('Canvas not ready');
        return;
    }

    removeCropHandles();

    const container = document.querySelector('.canvas-container');
    if (!container) {
        console.log('Canvas container not found');
        return;
    }

    if (!cropTool.active) {
        console.log('Crop tool not active');
        return;
    }

    container.style.position = 'relative';

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    console.log('Container rect:', containerRect);
    console.log('Canvas rect:', canvasRect);

    const scaleX = canvasRect.width / canvas.width;
    const scaleY = canvasRect.height / canvas.height;

    console.log('Scale factors:', { scaleX, scaleY });

    const cropCanvasX = cropTool.imageX + (cropTool.x / 100) * cropTool.imageWidth;
    const cropCanvasY = cropTool.imageY + (cropTool.y / 100) * cropTool.imageHeight;
    const cropCanvasW = (cropTool.width / 100) * cropTool.imageWidth;
    const cropCanvasH = (cropTool.height / 100) * cropTool.imageHeight;

    const screenX = canvasRect.left + (cropCanvasX * scaleX);
    const screenY = canvasRect.top + (cropCanvasY * scaleY);
    const screenW = cropCanvasW * scaleX;
    const screenH = cropCanvasH * scaleY;

    const relX = screenX - containerRect.left;
    const relY = screenY - containerRect.top;

    console.log('Crop box pixels (relative to container):', { relX, relY, screenW, screenH });

    const cropWrapper = document.createElement('div');
    cropWrapper.className = 'crop-wrapper';
    cropWrapper.style.position = 'absolute';
    cropWrapper.style.top = '0';
    cropWrapper.style.left = '0';
    cropWrapper.style.width = '100%';
    cropWrapper.style.height = '100%';
    cropWrapper.style.pointerEvents = 'none';
    cropWrapper.style.zIndex = '10000';
    container.appendChild(cropWrapper);

    const cropBox = document.createElement('div');
    cropBox.className = 'crop-box';
    cropBox.style.position = 'absolute';
    cropBox.style.left = relX + 'px';
    cropBox.style.top = relY + 'px';
    cropBox.style.width = screenW + 'px';
    cropBox.style.height = screenH + 'px';
    cropBox.style.border = '2px solid white';
    cropBox.style.boxShadow = '0 0 0 9999px rgba(0,0,0,0.5)';
    cropBox.style.cursor = 'move';
    cropBox.style.pointerEvents = 'auto';
    cropBox.style.zIndex = '10002';
    cropBox.setAttribute('data-crop-box', 'true');
    cropWrapper.appendChild(cropBox);

    cropBox.addEventListener('mousedown', startCropMove);
    cropBox.addEventListener('touchstart', startCropMove, { passive: false });

    const handleSize = 24;
    const handlePositions = [
        { pos: 'nw', cursor: 'nw-resize', left: relX, top: relY },
        { pos: 'n', cursor: 'n-resize', left: relX + screenW / 2, top: relY },
        { pos: 'ne', cursor: 'ne-resize', left: relX + screenW, top: relY },
        { pos: 'e', cursor: 'e-resize', left: relX + screenW, top: relY + screenH / 2 },
        { pos: 'se', cursor: 'se-resize', left: relX + screenW, top: relY + screenH },
        { pos: 's', cursor: 's-resize', left: relX + screenW / 2, top: relY + screenH },
        { pos: 'sw', cursor: 'sw-resize', left: relX, top: relY + screenH },
        { pos: 'w', cursor: 'w-resize', left: relX, top: relY + screenH / 2 }
    ];

    handlePositions.forEach(pos => {
        const handle = document.createElement('div');
        handle.className = `crop-handle ${pos.pos}`;
        handle.style.position = 'absolute';
        handle.style.width = handleSize + 'px';
        handle.style.height = handleSize + 'px';
        handle.style.background = 'white';
        handle.style.border = '3px solid #ff6b35';
        handle.style.borderRadius = '50%';
        handle.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5)';
        handle.style.zIndex = '10003';
        handle.style.cursor = pos.cursor;
        handle.style.pointerEvents = 'auto';
        handle.style.left = (pos.left - handleSize / 2) + 'px';
        handle.style.top = (pos.top - handleSize / 2) + 'px';

        handle.addEventListener('mousedown', (e) => startCropResize(e, pos.pos));
        handle.addEventListener('touchstart', (e) => startCropResize(e, pos.pos), { passive: false });

        cropWrapper.appendChild(handle);
    });

    console.log('All crop handles created');
}

function removeCropHandles() {
    document.querySelectorAll('.crop-wrapper').forEach(el => el.remove());
}

function updateCropHandlesPosition() {
    if (!canvas || !cropTool.active) return;

    const container = document.querySelector('.canvas-container');
    if (!container) return;

    const wrapper = container.querySelector('.crop-wrapper');
    if (!wrapper) return;

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    const scaleX = canvasRect.width / canvas.width;
    const scaleY = canvasRect.height / canvas.height;

    const cropCanvasX = cropTool.imageX + (cropTool.x / 100) * cropTool.imageWidth;
    const cropCanvasY = cropTool.imageY + (cropTool.y / 100) * cropTool.imageHeight;
    const cropCanvasW = (cropTool.width / 100) * cropTool.imageWidth;
    const cropCanvasH = (cropTool.height / 100) * cropTool.imageHeight;

    const screenX = canvasRect.left + (cropCanvasX * scaleX);
    const screenY = canvasRect.top + (cropCanvasY * scaleY);
    const screenW = cropCanvasW * scaleX;
    const screenH = cropCanvasH * scaleY;

    const relX = screenX - containerRect.left;
    const relY = screenY - containerRect.top;

    const cropBox = wrapper.querySelector('[data-crop-box]');
    if (cropBox) {
        cropBox.style.left = relX + 'px';
        cropBox.style.top = relY + 'px';
        cropBox.style.width = screenW + 'px';
        cropBox.style.height = screenH + 'px';
    }

    const handlePositions = {
        'nw': [relX, relY],
        'n': [relX + screenW / 2, relY],
        'ne': [relX + screenW, relY],
        'e': [relX + screenW, relY + screenH / 2],
        'se': [relX + screenW, relY + screenH],
        's': [relX + screenW / 2, relY + screenH],
        'sw': [relX, relY + screenH],
        'w': [relX, relY + screenH / 2]
    };

    wrapper.querySelectorAll('.crop-handle').forEach(handle => {
        const posClass = Array.from(handle.classList).find(c =>
            ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'].includes(c)
        );
        if (posClass && handlePositions[posClass]) {
            const [hx, hy] = handlePositions[posClass];
            handle.style.left = (hx - 12) + 'px';
            handle.style.top = (hy - 12) + 'px';
        }
    });
}

function startCropResize(e, handle) {
    e.preventDefault();
    e.stopPropagation();
    cropTool.resizing = true;
    cropTool.handle = handle;

    const pt = getEventClient(e);
    cropTool.startX = pt.clientX;
    cropTool.startY = pt.clientY;
    cropTool.startCropX = cropTool.x;
    cropTool.startCropY = cropTool.y;
    cropTool.startCropWidth = cropTool.width;
    cropTool.startCropHeight = cropTool.height;

    window.addEventListener('mousemove', onCropResize);
    window.addEventListener('mouseup', onCropResizeEnd);
    window.addEventListener('touchmove', onCropResize, { passive: false });
    window.addEventListener('touchend', onCropResizeEnd);
}

function onCropResize(e) {
    if (!cropTool.resizing) return;
    e.preventDefault();

    const pt = getEventClient(e);
    const rect = canvas.getBoundingClientRect();

    const dx = ((pt.clientX - cropTool.startX) / cropTool.imageWidth) * 100;
    const dy = ((pt.clientY - cropTool.startY) / cropTool.imageHeight) * 100;

    let newX = cropTool.startCropX;
    let newY = cropTool.startCropY;
    let newWidth = cropTool.startCropWidth;
    let newHeight = cropTool.startCropHeight;

    const handle = cropTool.handle;

    if (handle.includes('e')) newWidth += dx;
    if (handle.includes('w')) {
        newX += dx;
        newWidth -= dx;
    }
    if (handle.includes('s')) newHeight += dy;
    if (handle.includes('n')) {
        newY += dy;
        newHeight -= dy;
    }

    if (newWidth < 10) newWidth = 10;
    if (newHeight < 10) newHeight = 10;
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + newWidth > 100) newX = 100 - newWidth;
    if (newY + newHeight > 100) newY = 100 - newHeight;

    cropTool.x = newX;
    cropTool.y = newY;
    cropTool.width = newWidth;
    cropTool.height = newHeight;

    updateCropHandlesPosition();
    drawImage();
}

function onCropResizeEnd() {
    cropTool.resizing = false;
    window.removeEventListener('mousemove', onCropResize);
    window.removeEventListener('mouseup', onCropResizeEnd);
    window.removeEventListener('touchmove', onCropResize);
    window.removeEventListener('touchend', onCropResizeEnd);
}

function startCropMove(e) {
    e.preventDefault();
    e.stopPropagation();
    cropTool.moving = true;

    const pt = getEventClient(e);
    cropTool.startX = pt.clientX;
    cropTool.startY = pt.clientY;
    cropTool.startCropX = cropTool.x;
    cropTool.startCropY = cropTool.y;

    window.addEventListener('mousemove', onCropMove);
    window.addEventListener('mouseup', onCropMoveEnd);
    window.addEventListener('touchmove', onCropMove, { passive: false });
    window.addEventListener('touchend', onCropMoveEnd);
}

function onCropMove(e) {
    if (!cropTool.moving) return;
    e.preventDefault();

    const pt = getEventClient(e);
    const rect = canvas.getBoundingClientRect();

    const dx = ((pt.clientX - cropTool.startX) / cropTool.imageWidth) * 100;
    const dy = ((pt.clientY - cropTool.startY) / cropTool.imageHeight) * 100;

    let newX = cropTool.startCropX + dx;
    let newY = cropTool.startCropY + dy;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + cropTool.width > 100) newX = 100 - cropTool.width;
    if (newY + cropTool.height > 100) newY = 100 - cropTool.height;

    cropTool.x = newX;
    cropTool.y = newY;

    updateCropHandlesPosition();
    drawImage();
}

function onCropMoveEnd() {
    cropTool.moving = false;
    window.removeEventListener('mousemove', onCropMove);
    window.removeEventListener('mouseup', onCropMoveEnd);
    window.removeEventListener('touchmove', onCropMove);
    window.removeEventListener('touchend', onCropMoveEnd);
}

function toggleCrop() {
    console.log('🔧 Toggle crop. Current state:', cropTool.active);
    cropTool.active = !cropTool.active;
    console.log('New crop state:', cropTool.active);

    if (cropTool.active) {
        cropTool.x = 0;
        cropTool.y = 0;
        cropTool.width = 100;
        cropTool.height = 100;
        console.log('Crop initialized:', cropTool);
        console.log('Current image position:', {
            x: cropTool.imageX,
            y: cropTool.imageY,
            w: cropTool.imageWidth,
            h: cropTool.imageHeight
        });

        showCropControls();

        setTimeout(() => {
            console.log('Setting up crop handles...');
            setupCropHandles();
        }, 100);
    } else {
        console.log('Removing crop handles');
        removeCropHandles();
        hideCropControls();
    }

    drawImage();
}

function showCropControls() {
    const cropControls = `
        <div class="tool-group">
            <label>Crop Image</label>
            <div class="button-group">
                <button onclick="applyCrop()" class="tool-btn" style="background: #28a745; color: white;">Apply Crop</button>
                <button onclick="cancelCrop()" class="tool-btn" style="background: #dc3545; color: white;">Cancel</button>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">
                Drag corners to resize • Drag inside box to move
            </p>
        </div>
    `;

    const editorTools = document.querySelector('.editor-tools');
    if (editorTools) {
        const existingCropControls = document.getElementById('cropControls');
        if (existingCropControls) existingCropControls.remove();

        const cropDiv = document.createElement('div');
        cropDiv.id = 'cropControls';
        cropDiv.innerHTML = cropControls;
        editorTools.appendChild(cropDiv);
    }
}

function hideCropControls() {
    const cropControls = document.getElementById('cropControls');
    if (cropControls) {
        cropControls.remove();
    }
}

// ============== FIXED APPLY CROP FUNCTION ==============
function applyCrop() {
    if (currentImageIndex === -1 || !cropTool.active) return;

    pushSnapshotForCurrentImage();

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        const sx = (cropTool.x / 100) * img.width;
        const sy = (cropTool.y / 100) * img.height;
        const sWidth = (cropTool.width / 100) * img.width;
        const sHeight = (cropTool.height / 100) * img.height;

        tempCanvas.width = sWidth;
        tempCanvas.height = sHeight;

        tempCtx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

        image.original = tempCanvas.toDataURL();

        cropTool.active = false;
        removeCropHandles();
        hideCropControls();

        drawImage();
        saveCurrentAdjustments();

        setTimeout(() => {
            pushSnapshotForCurrentImage();
            console.log('✅ Crop applied and saved to history');
        }, 100);

        console.log('✅ Crop applied');
    };

    img.src = image.original;
}

function cancelCrop() {
    cropTool.active = false;
    removeCropHandles();
    hideCropControls();
    drawImage();
}

// Text overlay functionality
function toggleTextOverlay() {
    editorFeatures.textOverlay.active = !editorFeatures.textOverlay.active;
    if (editorFeatures.textOverlay.active) {
        showTextControls();
    } else {
        hideTextControls();
    }
    drawImage();
}

function showTextControls() {
    const textControls = `
        <div class="tool-group">
            <label>Text Overlay</label>
            <input type="text" id="textInput" value="Add Text" class="text-input">
            <div class="slider-container">
                <span>Font Size: </span>
                <input type="range" min="10" max="100" value="20" id="textSize">
                <span id="textSizeValue">20px</span>
            </div>
            <div class="slider-container">
                <span>X: </span>
                <input type="range" min="0" max="1000" value="50" id="textX">
                <span id="textXValue">50</span>
            </div>
            <div class="slider-container">
                <span>Y: </span>
                <input type="range" min="0" max="1000" value="50" id="textY">
                <span id="textYValue">50</span>
            </div>
            <input type="color" id="textColor" value="#ffffff">
            <button onclick="updateText()" class="tool-btn">Update Text</button>
        </div>
    `;

    const editorTools = document.querySelector('.editor-tools');
    if (editorTools) {
        const existingTextControls = document.getElementById('textControls');
        if (existingTextControls) existingTextControls.remove();

        const textDiv = document.createElement('div');
        textDiv.id = 'textControls';
        textDiv.innerHTML = textControls;
        editorTools.appendChild(textDiv);

        const textInput = document.getElementById('textInput');
        const textSize = document.getElementById('textSize');
        const textSizeValue = document.getElementById('textSizeValue');
        const textColor = document.getElementById('textColor');
        const textX = document.getElementById('textX');
        const textY = document.getElementById('textY');
        const textXValue = document.getElementById('textXValue');
        const textYValue = document.getElementById('textYValue');

        if (textInput) {
            textInput.value = editorFeatures.textOverlay.text || '';
            textInput.addEventListener('input', function () {
                editorFeatures.textOverlay.text = this.value;
                drawImage();
            });
        }

        if (textSize && textSizeValue) {
            textSize.value = editorFeatures.textOverlay.size || 20;
            textSizeValue.textContent = textSize.value + 'px';
            textSize.addEventListener('input', function () {
                textSizeValue.textContent = this.value + 'px';
                editorFeatures.textOverlay.size = parseInt(this.value);
                drawImage();
            });
        }

        if (textColor) {
            textColor.value = editorFeatures.textOverlay.color || '#ffffff';
            textColor.addEventListener('input', function () {
                editorFeatures.textOverlay.color = this.value;
                drawImage();
            });
        }

        if (textX && textXValue) {
            textX.value = editorFeatures.textOverlay.x || 50;
            textXValue.textContent = textX.value;
            textX.addEventListener('input', function () {
                textXValue.textContent = this.value;
                editorFeatures.textOverlay.x = parseInt(this.value);
                drawImage();
            });
        }

        if (textY && textYValue) {
            textY.value = editorFeatures.textOverlay.y || 50;
            textYValue.textContent = textY.value;
            textY.addEventListener('input', function () {
                textYValue.textContent = this.value;
                editorFeatures.textOverlay.y = parseInt(this.value);
                drawImage();
            });
        }
    }
}

function hideTextControls() {
    const textControls = document.getElementById('textControls');
    if (textControls) {
        textControls.remove();
    }
}

function updateText() {
    drawImage();
}

// Add red-eye reduction simulation
function reduceRedEye() {
    if (currentImageIndex === -1) return;

    alert('Red-eye reduction applied (simulated). In a real app, this would analyze and fix red-eye areas.');

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            if (r > 150 && g < 100 && b < 100) {
                data[i] = r * 0.7;
                data[i + 1] = g * 1.1;
                data[i + 2] = b * 1.1;
            }
        }

        tempCtx.putImageData(imageData, 0, 0);

        image.original = tempCanvas.toDataURL();
        drawImage();
        saveCurrentAdjustments();
        pushSnapshotForCurrentImage();
    };

    img.src = image.original;
}

// Add auto-enhance feature
function autoEnhance() {
    if (currentImageIndex === -1) return;

    pushSnapshotForCurrentImage();

    adjustments = {
        brightness: 110,
        contrast: 110,
        saturation: 110,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false
    };

    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
    alert('Auto-enhance applied!');
}

function saveImage() {
    if (currentImageIndex === -1) {
        alert('Please select an image first.');
        return;
    }

    saveCurrentAdjustments();
    alert('Edits saved successfully!');
}

function downloadImage() {
    if (currentImageIndex === -1) {
        alert('Please select an image first.');
        return;
    }

    const link = document.createElement('a');
    link.download = `edited-${uploadedImages[currentImageIndex].name}`;
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.click();
}

// ============== UPDATED GET PRICE FOR SIZE ==============
function getPriceForSize(size) {
    const productType = currentProduct || 'photocards';
    const options = printOptionsConfig[productType] || printOptionsConfig.photocards;
    const option = options.find(opt => opt.value === size);
    return option ? parseFloat(option.price) : 25.00;
}

function updatePriceDisplay() {
    const priceElements = document.querySelectorAll('.print-price');
    const selectedPrice = document.getElementById('selectedPrice');
    const radioButtons = document.querySelectorAll('input[name="printSize"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                const price = getPriceForSize(this.value);
                if (selectedPrice) {
                    selectedPrice.textContent = `₱ ${price.toFixed(2)}`;
                }
            }
        });
    });

    const checkedRadio = document.querySelector('input[name="printSize"]:checked');
    if (checkedRadio && selectedPrice) {
        const initialPrice = getPriceForSize(checkedRadio.value);
        selectedPrice.textContent = `₱ ${initialPrice.toFixed(2)}`;
    }

    function updatePrintSelection() {
        document.querySelectorAll('.print-option').forEach(el => el.querySelector('label').classList.remove('selected'));
        const checked = document.querySelector('input[name="printSize"]:checked');
        if (checked) {
            const lbl = checked.closest('label');
            if (lbl) lbl.classList.add('selected');
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            updatePrintSelection();
        });
    });

    updatePrintSelection();
}

// Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeCartModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
            closeCartModal();
        }
    });
}

function initPhotoMode() {
    switchPhotoMode('upload');
}

// Login and Authentication Functions
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');

    alert('Login successful! Welcome back.');
    navigateTo('home');
    updateLoginStatus();
}

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');

    alert('Account created successfully! Welcome to FOTOCENTER.');
    navigateTo('home');
    updateLoginStatus();
}

function signUpWithGoogle() {
    alert('Google Sign-Up integration would be implemented here with OAuth.');
    localStorage.setItem('userEmail', 'user@gmail.com');
    localStorage.setItem('isLoggedIn', 'true');
    updateLoginStatus();
}

function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginLink = document.querySelector('.login-link');

    if (isLoggedIn && loginLink) {
        loginLink.textContent = 'Log out';
        loginLink.onclick = function () {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            updateLoginStatus();
            navigateTo('home');
            return false;
        };
    } else if (loginLink) {
        loginLink.textContent = 'Log in';
        loginLink.onclick = function () {
            navigateTo('login');
            return false;
        };
    }
}

// FAQ Functions
function selectFaqQuestion(type) {
    let question = '';
    let answer = '';

    switch (type) {
        case 'pricing':
            question = 'What are your prices?';
            answer = chatAI.getResponse('pricing');
            break;
        case 'delivery':
            question = 'How long does delivery take?';
            answer = chatAI.getResponse('delivery');
            break;
        case 'upload':
            question = 'How do I upload photos?';
            answer = chatAI.getResponse('upload');
            break;
        case 'quality':
            question = 'What is your print quality like?';
            answer = chatAI.getResponse('quality');
            break;
        case 'editing':
            question = 'Can I edit my photos?';
            answer = chatAI.getResponse('editing');
            break;
        case 'payment':
            question = 'What payment methods do you accept?';
            answer = chatAI.getResponse('payment');
            break;
        case 'sizes':
            question = 'What sizes do you offer?';
            answer = chatAI.getResponse('sizes');
            break;
        case 'refund':
            question = 'What is your refund policy?';
            answer = chatAI.getResponse('refund');
            break;
    }

    addMessage(question, 'user');

    setTimeout(() => {
        addMessage(answer, 'bot');
    }, 500);
}

// Setup FAQ scroll functionality
function setupFaqScroll() {
    const faqScrollContainer = document.querySelector('.faq-scroll-container');
    const leftIndicator = document.querySelector('.faq-scroll-indicator.left');
    const rightIndicator = document.querySelector('.faq-scroll-indicator.right');

    if (!faqScrollContainer || !leftIndicator || !rightIndicator) return;

    function updateIndicators() {
        const scrollLeft = faqScrollContainer.scrollLeft;
        const maxScroll = faqScrollContainer.scrollWidth - faqScrollContainer.clientWidth;

        leftIndicator.style.opacity = scrollLeft > 0 ? '1' : '0';
        rightIndicator.style.opacity = scrollLeft < maxScroll - 1 ? '1' : '0';
    }

    leftIndicator.addEventListener('click', () => {
        faqScrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });

    rightIndicator.addEventListener('click', () => {
        faqScrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });

    faqScrollContainer.addEventListener('scroll', updateIndicators);

    setTimeout(updateIndicators, 100);
}

// ============== CALENDAR FUNCTIONS ==============
function switchCalendarsMode(mode) {
    const uploadBtn = document.getElementById('calendarsUploadModeBtn');
    const productsBtn = document.getElementById('calendarsProductsModeBtn');
    const uploadView = document.getElementById('calendarsUploadView');
    const productsView = document.getElementById('calendarsProductsView');

    if (mode === 'upload') {
        uploadBtn.classList.add('active');
        productsBtn.classList.remove('active');
        uploadView.style.display = 'block';
        productsView.style.display = 'none';
    } else {
        uploadBtn.classList.remove('active');
        productsBtn.classList.add('active');
        uploadView.style.display = 'none';
        productsView.style.display = 'block';
        displayCalendarProducts();
    }
}

function initializeCalendarPreview() {
    const monthGrid = document.querySelector('.calendar-month-grid');
    if (!monthGrid) return;

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    monthGrid.innerHTML = months.map(month => `
        <div class="calendar-month" onclick="selectCalendarMonth('${month}')">
            <div class="month-name">${month}</div>
            <div class="month-image">📷</div>
        </div>
    `).join('');

    setupCalendarUpload();
    updateCalendarPrice();
}

function setupCalendarUpload() {
    const dropArea = document.getElementById('calendarsDropArea');
    const fileInput = document.getElementById('calendarsPhotoInput');

    if (!dropArea || !fileInput) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    dropArea.addEventListener('drop', handleCalendarDrop, false);
    fileInput.addEventListener('change', handleCalendarFileSelect, false);
}

function handleCalendarFileSelect(e) {
    const files = e.target.files;
    processCalendarFiles(files);
}

function handleCalendarDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    processCalendarFiles(files);
}

function processCalendarFiles(files) {
    Array.from(files).forEach((file, index) => {
        if (file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                addCalendarImageToGallery(e.target.result, file.name, index);
            };
            reader.readAsDataURL(file);
        }
    });
}

function addCalendarImageToGallery(dataUrl, filename, index) {
    const image = new Image();
    image.onload = function () {
        calendarImages.push({
            id: Date.now() + Math.random(),
            src: dataUrl,
            name: filename,
            monthIndex: index % 12
        });

        updateCalendarImageGallery();
        updateCalendarUploadCount();

        if (index < 12) {
            updateMonthPreview(index, dataUrl);
        }
    };
    image.src = dataUrl;
}

function updateCalendarImageGallery() {
    const container = document.getElementById('calendarsUploadedImages');
    if (!container) return;

    container.innerHTML = calendarImages.map((image, index) => `
        <div class="uploaded-thumbnail ${index === calendarCurrentImageIndex ? 'active' : ''}" 
             onclick="selectCalendarImage(${index})">
            <img src="${image.src}" alt="${image.name}">
            <div class="thumb-overlay">
                <span class="thumb-name">Month ${(image.monthIndex + 1)} - ${image.name.substring(0, 10)}...</span>
            </div>
        </div>
    `).join('');
}

function selectCalendarImage(index) {
    calendarCurrentImageIndex = index;
    updateCalendarImageGallery();
}

function updateCalendarUploadCount() {
    const countElement = document.getElementById('calendarsUploadCount');
    if (countElement) {
        countElement.textContent = calendarImages.length;
    }
}

function updateMonthPreview(monthIndex, imageUrl) {
    const months = document.querySelectorAll('.calendar-month');
    if (months[monthIndex]) {
        const monthImage = months[monthIndex].querySelector('.month-image');
        if (monthImage) {
            monthImage.innerHTML = `<img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
            monthImage.style.background = 'none';
        }
    }
}

function selectCalendarMonth(monthName) {
    alert(`Selected ${monthName}. You can upload a photo for this month.`);
}

function updateCalendarPrice() {
    const calendarType = document.getElementById('calendarType').value;
    const size = document.getElementById('calendarSize').value;
    const paperType = document.getElementById('paperType').value;
    const bindingType = document.getElementById('bindingType').value;
    const quantity = parseInt(document.getElementById('calendarQuantity').value) || 1;

    const basePrices = {
        'desk': 800,
        'wall': 650,
        'mini': 350,
        'photo': 900
    };

    let basePrice = basePrices[calendarType] || 800;

    const sizeAdjustments = {
        '8x10': 0,
        '12x12': 200,
        '8.5x11': 100,
        '11x17': 300
    };

    basePrice += sizeAdjustments[size] || 0;

    const paperAdjustments = {
        'glossy': 0,
        'matte': 100,
        'premium': 200
    };

    basePrice += paperAdjustments[paperType] || 0;

    const bindingAdjustments = {
        'spiral': 0,
        'wire': 50,
        'hardcover': 300
    };

    basePrice += bindingAdjustments[bindingType] || 0;

    const optionsPrice = (sizeAdjustments[size] || 0) +
        (paperAdjustments[paperType] || 0) +
        (bindingAdjustments[bindingType] || 0);

    const totalPrice = basePrice * quantity;

    document.getElementById('basePrice').textContent = `₱ ${(basePrice - optionsPrice).toFixed(2)}`;
    document.getElementById('optionsPrice').textContent = `₱ ${optionsPrice.toFixed(2)}`;
    document.getElementById('calendarTotalPrice').textContent = `₱ ${totalPrice.toFixed(2)}`;
    document.getElementById('calendarFinalPrice').textContent = `₱ ${totalPrice.toFixed(2)}`;

    return totalPrice;
}

function updateCalendarQuantity(change) {
    const quantityInput = document.getElementById('calendarQuantity');
    let quantity = parseInt(quantityInput.value) || 1;
    quantity = Math.max(1, quantity + change);
    quantityInput.value = quantity;
    updateCalendarPrice();
}

function updateCalendarPreview() {
    updateCalendarPrice();
}

function displayCalendarProducts() {
    const grid = document.getElementById('calendarsProductsGrid');
    if (!grid) return;

    const groupedCalendars = {};
    calendarProducts.forEach(product => {
        if (!groupedCalendars[product.type]) {
            groupedCalendars[product.type] = [];
        }
        groupedCalendars[product.type].push(product);
    });

    let html = '';

    Object.keys(groupedCalendars).forEach(type => {
        const typeName = getCalendarTypeName(type);
        html += `
            <div class="calendar-type-section">
                <h3 style="margin: 2rem 0 1rem 0; color: var(--text); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">${typeName}</h3>
                <div class="calendar-samples">
        `;

        groupedCalendars[type].forEach(product => {
            html += `
                <div class="calendar-product-card">
                    ${product.badge ? `<div class="calendar-badge">${product.badge}</div>` : ''}
                    <div class="calendar-product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Calendar+Image'">
                    </div>
                    <div class="calendar-product-info">
                        <h3>${product.name}</h3>
                        <div class="calendar-product-type">
                            <span>📅 ${typeName}</span>
                        </div>
                        <p class="calendar-product-desc">${product.description}</p>
                        <div class="calendar-features">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                        <div class="calendar-product-footer">
                            <span class="calendar-price">${product.price}</span>
                            <button class="calendar-add-btn" onclick="addCalendarProductToCart(${product.id})">
                                <span>🛒</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function getCalendarTypeName(type) {
    const typeNames = {
        'desk': 'Desk Calendars',
        'wall': 'Wall Calendars',
        'mini': 'Mini Calendars',
        'photo': 'Photo Calendars'
    };
    return typeNames[type] || 'Calendars';
}

function addCalendarProductToCart(productId) {
    const product = calendarProducts.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        id: productId,
        type: 'calendar',
        name: product.name,
        image: product.image,
        price: product.price,
        productType: product.type,
        quantity: 1
    };

    addToCart(cartItem);
    showSuccessModal();
}

function addCustomCalendarToCart() {
    if (calendarImages.length === 0) {
        alert('Please upload at least one photo for your calendar.');
        return;
    }

    const calendarType = document.getElementById('calendarType').value;
    const size = document.getElementById('calendarSize').value;
    const paperType = document.getElementById('paperType').value;
    const bindingType = document.getElementById('bindingType').value;
    const startMonth = document.getElementById('startMonth').value;
    const quantity = parseInt(document.getElementById('calendarQuantity').value) || 1;
    const totalPrice = updateCalendarPrice();

    const cartItem = {
        id: 'custom-calendar-' + Date.now(),
        type: 'custom-calendar',
        name: `Custom ${getCalendarTypeName(calendarType)} (${size})`,
        image: calendarImages.length > 0 ? calendarImages[0].src : 'https://via.placeholder.com/300x200?text=Custom+Calendar',
        price: `₱ ${totalPrice.toFixed(2)}`,
        details: {
            type: calendarType,
            size: size,
            paper: paperType,
            binding: bindingType,
            startMonth: startMonth,
            photoCount: calendarImages.length,
            quantity: quantity
        },
        quantity: quantity
    };

    addToCart(cartItem);
    showSuccessModal();
}

function viewCalendarSample(productId) {
    const product = calendarProducts.find(p => p.id === productId);
    if (!product) return;

    alert(`Preview of ${product.name}. In a full implementation, this would show a detailed preview modal.`);
}

function getCalendarBestFor(type) {
    const bestFor = {
        'desk': 'Office desks, home offices',
        'wall': 'Home decoration, kitchens, offices',
        'mini': 'Refrigerators, wallets, small spaces',
        'photo': 'Gifts, family memories, special occasions'
    };
    return bestFor[type] || 'General use';
}

// For Cards section (simplified version of the photo editor)
function switchCardsMode(mode) {
    const uploadBtn = document.getElementById('cardsUploadModeBtn');
    const productsBtn = document.getElementById('cardsProductsModeBtn');
    const uploadView = document.getElementById('cardsUploadView');
    const productsView = document.getElementById('cardsProductsView');

    if (mode === 'upload') {
        uploadBtn.classList.add('active');
        productsBtn.classList.remove('active');
        uploadView.style.display = 'block';
        productsView.style.display = 'none';
    } else {
        uploadBtn.classList.remove('active');
        productsBtn.classList.add('active');
        uploadView.style.display = 'none';
        productsView.style.display = 'block';
        displayCardsProducts();
    }
}

function displayCardsProducts() {
    const grid = document.getElementById('cardsProductsGrid');
    if (!grid) return;

    const cardProducts = [
        { id: 101, name: "Standard Photo Card", price: "₱150", image: "https://i5.walmartimages.com/seo/48-Pack-Photo-Frame-Cards-with-Envelopes-Notecards-for-4x6-Picture-Insert-Ivory_5339c47e-9e2e-4d17-bbcc-46da7d0288fb.88480b050f2d7e488cd5a07e5e90cfb5.jpeg", description: "5x7 inch photo card with envelope" },
        { id: 102, name: "Premium Photo Card", price: "₱250", image: "https://framkallning.fotocenter.se/templates2/categories/FOLDEDCARDS/mobile_image.png", description: "8x10 inch premium card with matte finish" },
        { id: 103, name: "Folded Greeting Card", price: "₱350", image: "https://th.bing.com/th/id/OIP.2JQJy-hTVtAdeD9wR7SFZgHaHa?w=188&h=188&c=7&r=0&o=7&pid=1.7&rm=3", description: "Folded card with multiple photo slots" },
        { id: 104, name: "Holiday Card Pack", price: "₱600", image: "https://th.bing.com/th/id/OIP.qtYORFPfMvfnjzqE2NZ7bQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3", description: "Pack of 10 holiday-themed cards" }
    ];

    grid.innerHTML = cardProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="addToCartProduct(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Simplified card editor functions
function adjustCardsBrightness(amount) {
    alert('Card editor would work similarly to photo editor. Full implementation would be similar to adjustBrightness()');
}

function adjustCardsContrast(amount) {
    alert('Card editor function placeholder');
}

function adjustCardsSaturation(amount) {
    alert('Card editor function placeholder');
}

function rotateCardsImage(degrees) {
    alert('Card editor function placeholder');
}

function flipCardsHorizontal() {
    alert('Card editor function placeholder');
}

function flipCardsVertical() {
    alert('Card editor function placeholder');
}

function applyCardsFilter(filter) {
    alert('Card editor function placeholder');
}

function resetCardsImage() {
    alert('Card editor function placeholder');
}

function saveCardsImage() {
    alert('Card editor function placeholder');
}

function downloadCardsImage() {
    alert('Card editor function placeholder');
}

function addCardsToCart() {
    const selectedSize = document.querySelector('input[name="cardsSize"]:checked');
    if (!selectedSize) {
        alert('Please select a card size.');
        return;
    }

    const size = selectedSize.value;
    const price = getCardPriceForSize(size);

    const cartItem = {
        id: 'card-' + Date.now(),
        type: 'card',
        name: `Photo Card (${size})`,
        image: 'https://via.placeholder.com/200x150?text=Photo+Card',
        price: `₱ ${price.toFixed(2)}`,
        size: size,
        quantity: 1
    };

    addToCart(cartItem);
}

function getCardPriceForSize(size) {
    const prices = {
        '5x7': 150.00,
        '8x10': 250.00,
        'folded': 350.00
    };
    return prices[size] || 150.00;
}

// ============== REDESIGNED PRINT OPTIONS FUNCTIONS ==============

// Global variables for print options
let currentQuantity = 1;
let currentAdvancedQuantity = 1;
let isAdvancedOpen = false;
let basePricePerUnit = 25;

// Toggle advanced options - FIXED to show only ONE button at a time
function toggleAdvancedOptions() {
    const advancedDiv = document.getElementById('advancedPrintOptions');
    const toggleBtn = document.getElementById('toggleAdvancedBtn');

    if (!advancedDiv || !toggleBtn) return;

    isAdvancedOpen = !isAdvancedOpen;

    if (isAdvancedOpen) {
        advancedDiv.style.display = 'block';
        toggleBtn.textContent = '− Less Options';
        // Sync simple quantity to advanced
        document.getElementById('advancedQuantityDisplay').textContent = currentQuantity;
        currentAdvancedQuantity = currentQuantity;
        calculateAdvancedPrice();
    } else {
        advancedDiv.style.display = 'none';
        toggleBtn.textContent = '+ More Options';
        // Sync advanced quantity back to simple
        currentQuantity = currentAdvancedQuantity;
        document.getElementById('quantityDisplay').textContent = currentQuantity;
        updateSimpleTotal();
    }
}

// Update quantity in simple view
function updateQuantity(change) {
    currentQuantity = Math.max(1, currentQuantity + change);
    document.getElementById('quantityDisplay').textContent = currentQuantity;
    
    updateSimpleTotal();
    
    if (isAdvancedOpen) {
        currentAdvancedQuantity = currentQuantity;
        document.getElementById('advancedQuantityDisplay').textContent = currentQuantity;
        calculateAdvancedPrice();
    }
}

// Update quantity in advanced view
function updateAdvancedQuantity(change) {
    currentAdvancedQuantity = Math.max(1, currentAdvancedQuantity + change);
    document.getElementById('advancedQuantityDisplay').textContent = currentAdvancedQuantity;
    document.getElementById('breakdownQuantity').textContent = currentAdvancedQuantity;
    
    currentQuantity = currentAdvancedQuantity;
    document.getElementById('quantityDisplay').textContent = currentQuantity;
    
    calculateAdvancedPrice();
}

// Update simple view total
function updateSimpleTotal() {
    const selectedSize = document.querySelector('input[name="printSize"]:checked');
    let pricePerUnit = 25;
    
    if (selectedSize) {
        const sizeValue = selectedSize.value;
        switch(sizeValue) {
            case '4x6': pricePerUnit = 25; break;
            case '5x7': pricePerUnit = 35; break;
            case '8x10': pricePerUnit = 50; break;
            case '11x14': pricePerUnit = 80; break;
            default: pricePerUnit = 25;
        }
    }
    
    basePricePerUnit = pricePerUnit;
    const total = pricePerUnit * currentQuantity;
    document.getElementById('simpleTotalPrice').textContent = `₱${total.toFixed(2)}`;
    document.getElementById('finalPrice').textContent = `₱${total.toFixed(2)}`;
}

// Calculate advanced view price
function calculateAdvancedPrice() {
    let basePrice = 25;
    const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
    
    if (selectedSize) {
        const sizeValue = selectedSize.value;
        if (sizeValue === 'custom') {
            const width = parseFloat(document.getElementById('customWidth').value) || 8;
            const height = parseFloat(document.getElementById('customHeight').value) || 10;
            const area = width * height;
            basePrice = Math.max(25, Math.round(area * 0.5));
        } else {
            switch(sizeValue) {
                case '4x6': basePrice = 25; break;
                case '5x7': basePrice = 35; break;
                case '8x10': basePrice = 50; break;
                case '11x14': basePrice = 80; break;
                case '16x20': basePrice = 150; break;
                default: basePrice = 25;
            }
        }
    }
    
    let paperUpgrade = 0;
    const glossyChecked = document.getElementById('paperGlossy')?.checked || false;
    const matteChecked = document.getElementById('paperMatte')?.checked || false;
    
    if (glossyChecked) paperUpgrade += 10;
    if (matteChecked) paperUpgrade += 15;
    
    const priceBeforeQuantity = basePrice + paperUpgrade;
    const totalPrice = priceBeforeQuantity * currentAdvancedQuantity;
    
    document.getElementById('basePrice').textContent = `₱${basePrice.toFixed(2)}`;
    document.getElementById('paperUpgradePrice').textContent = `₱${paperUpgrade.toFixed(2)}`;
    document.getElementById('quantityMultiplier').textContent = `₱${(priceBeforeQuantity * currentAdvancedQuantity).toFixed(2)}`;
    document.getElementById('advancedTotalPrice').textContent = `₱${totalPrice.toFixed(2)}`;
    document.getElementById('finalPrice').textContent = `₱${totalPrice.toFixed(2)}`;
    
    basePricePerUnit = basePrice;
    document.getElementById('simpleTotalPrice').textContent = `₱${(basePrice * currentQuantity).toFixed(2)}`;
}

// Handle when advanced size is selected - NEW with custom size toggle
function onAdvancedSizeSelect() {
    const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
    if (!selectedSize) return;
    
    const customSizeContainer = document.getElementById('customSizeContainer');
    
    if (selectedSize.value === 'custom') {
        // Show custom size inputs
        if (customSizeContainer) {
            customSizeContainer.style.display = 'block';
        }
        
        // Enable inputs
        document.getElementById('customWidth').disabled = false;
        document.getElementById('customHeight').disabled = false;
        document.getElementById('customUnit').disabled = false;
    } else {
        // Hide custom size inputs
        if (customSizeContainer) {
            customSizeContainer.style.display = 'none';
        }
        
        // Disable inputs
        document.getElementById('customWidth').disabled = true;
        document.getElementById('customHeight').disabled = true;
        document.getElementById('customUnit').disabled = true;
        
        // Sync with simple view radio
        const simpleRadio = document.querySelector(`input[name="printSize"][value="${selectedSize.value}"]`);
        if (simpleRadio) {
            simpleRadio.checked = true;
        }
    }
    
    calculateAdvancedPrice();
}

// Override addPhotoToCart
const originalAddPhotoToCart = window.addPhotoToCart;
window.addPhotoToCart = function() {
    if (currentImageIndex === -1) {
        alert('Please upload and select an image first.');
        return;
    }
    
    let size, price, paperType = 'standard', sizeMode = 'fill', isCustom = false;
    let customWidth = null, customHeight = null, customUnit = 'inches';
    
    if (isAdvancedOpen) {
        const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
        size = selectedSize ? selectedSize.value : '4x6';
        
        if (size === 'custom') {
            isCustom = true;
            customWidth = document.getElementById('customWidth').value;
            customHeight = document.getElementById('customHeight').value;
            customUnit = document.getElementById('customUnit').value;
            size = `${customWidth} x ${customHeight} ${customUnit}`;
        }
        
        if (document.getElementById('paperGlossy')?.checked) paperType = 'glossy';
        if (document.getElementById('paperMatte')?.checked) paperType = 'matte';
        
        const sizeModeRadio = document.querySelector('input[name="sizeMode"]:checked');
        sizeMode = sizeModeRadio ? sizeModeRadio.value : 'fill';
        
        price = document.getElementById('advancedTotalPrice').textContent;
    } else {
        const selectedSize = document.querySelector('input[name="printSize"]:checked');
        size = selectedSize ? selectedSize.value : '4x6';
        price = document.getElementById('simpleTotalPrice').textContent;
    }
    
    const cartItem = {
        id: 'photo-' + Date.now(),
        type: 'photo',
        name: `Printed Photo (${size})`,
        image: canvas.toDataURL('image/jpeg', 0.9),
        price: price,
        size: size,
        quantity: isAdvancedOpen ? currentAdvancedQuantity : currentQuantity,
        paperType: paperType,
        sizeMode: sizeMode,
        isCustom: isCustom,
        customDimensions: isCustom ? { width: customWidth, height: customHeight, unit: customUnit } : null,
        originalName: uploadedImages[currentImageIndex]?.name || 'photo',
        timestamp: new Date().toISOString()
    };
    
    addToCart(cartItem);
};

// Initialize print options
function initPrintOptions() {
    // Set up radio listeners for simple view
    document.querySelectorAll('input[name="printSize"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updateSimpleTotal();
            if (isAdvancedOpen) {
                const advancedRadio = document.querySelector(`input[name="advancedPrintSize"][value="${this.value}"]`);
                if (advancedRadio) {
                    advancedRadio.checked = true;
                    calculateAdvancedPrice();
                }
            }
        });
    });
    
    // Set up listeners for advanced inputs
    const advancedInputs = ['customWidth', 'customHeight', 'customUnit'];
    advancedInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', calculateAdvancedPrice);
        }
    });
    
    // Initial update
    updateSimpleTotal();
    
    // Hide advanced view initially
    const advancedDiv = document.getElementById('advancedPrintOptions');
    if (advancedDiv) {
        advancedDiv.style.display = 'none';
    }
    
    // Hide custom size container initially
    const customSizeContainer = document.getElementById('customSizeContainer');
    if (customSizeContainer) {
        customSizeContainer.style.display = 'none';
    }
}
// ============== SEARCH BAR FUNCTIONS ==============

// Store last search query
let lastSearchQuery = localStorage.getItem('lastSearch') || 'canvas prints...';

// Initialize search bar
function initSearchBar() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    // Set placeholder to last search
    searchInput.placeholder = lastSearchQuery;
    
    // Handle Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value.trim());
        }
    });
    
    // Handle search icon click (optional)
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            performSearch(searchInput.value.trim());
        });
    }
}

// Perform search
function performSearch(query) {
    if (!query) {
        // If empty search, just go to shop page
        navigateTo('shop');
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('lastSearch', query);
    document.getElementById('searchInput').placeholder = query;
    
    // Navigate to shop page
    navigateTo('shop');
    
    // Small delay to ensure shop page is loaded
    setTimeout(() => {
        filterProducts(query);
    }, 100);
}

// Filter products based on search query
function filterProducts(query) {
    const shopGrid = document.getElementById('shopProductsGrid');
    if (!shopGrid) return;
    
    const productCards = shopGrid.querySelectorAll('.product-card');
    if (productCards.length === 0) {
        // If products aren't loaded yet, wait and retry
        setTimeout(() => filterProducts(query), 500);
        return;
    }
    
    const searchTerm = query.toLowerCase();
    let matchCount = 0;
    
    // Add search-active class to container
    document.querySelector('.products-grid')?.classList.add('search-active');
    
    // Show search results info
    const searchInfo = document.getElementById('searchResultsInfo');
    const searchText = document.getElementById('searchResultsText');
    if (searchInfo && searchText) {
        searchInfo.style.display = 'flex';
        searchText.innerHTML = `Search results for: <span>"${query}"</span>`;
    }
    
    // Loop through all product cards
    productCards.forEach(card => {
        const title = card.querySelector('h3, h4')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.product-desc, p')?.textContent.toLowerCase() || '';
        const price = card.querySelector('.price')?.textContent.toLowerCase() || '';
        
        // Check if search term matches
        if (title.includes(searchTerm) || desc.includes(searchTerm) || price.includes(searchTerm)) {
            // Match found - highlight
            card.classList.add('search-highlight');
            card.classList.remove('search-dim');
            matchCount++;
        } else {
            // No match - dim with blur
            card.classList.add('search-dim');
            card.classList.remove('search-highlight');
        }
    });
    
    // Update results count
    if (searchText) {
        searchText.innerHTML = `Found <span>${matchCount}</span> result${matchCount !== 1 ? 's' : ''} for: <span>"${query}"</span>`;
    }
    
    // If no matches, show message
    if (matchCount === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                <h3>😕 No products found</h3>
                <p>Try searching for: photo cards, calendar, canvas, photo book, mouse pads, double cards</p>
            </div>
        `;
        shopGrid.appendChild(noResults);
    }
}

// Clear search
function clearSearch() {
    // Remove search classes
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('search-highlight', 'search-dim');
    });
    
    document.querySelector('.products-grid')?.classList.remove('search-active');
    
    // Hide search info
    const searchInfo = document.getElementById('searchResultsInfo');
    if (searchInfo) {
        searchInfo.style.display = 'none';
    }
    
    // Clear input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset to default products
    renderShopProducts();
}

// Override renderShopProducts to work with search
const originalRenderShopProducts = renderShopProducts;
renderShopProducts = function() {
    originalRenderShopProducts();
    
    // Check if we need to reapply search
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        setTimeout(() => {
            filterProducts(searchInput.value.trim());
        }, 100);
    }
};

// Add no-results-message style if not exists
const style = document.createElement('style');
style.textContent = `
    .no-results-message {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: var(--text-muted);
    }
    .no-results-message h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text);
    }
`;
document.head.appendChild(style);

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSearchBar();
});
