// Datos de productos basados en la lista de precios (VENTA POR CAJAS)
        const products = [
            // Ahumados Salmón Atlántico
            {
                id: 1,
                name: "Salmón Atlántico B&P Natural Congelado con Piel",
                category: "ahumado",
                species: "atlantico",
                quality: "premium",
                price: 4000,
                weight: "S/C",
                boxes: 2,
                netWeight: "40,00 kg",
                description: "Premium - S/C - 2 cajas disponibles",
                image: "Assets/img/atlantico1.jpg"
            },
            {
                id: 2,
                name: "Ahumado Slices Premium",
                category: "ahumado",
                species: "atlantico",
                quality: "premium",
                price: 14900,
                weight: "500g",
                boxes: 7,
                netWeight: "70,00 kg",
                description: "Premium - 500 GS - 7 cajas disponibles",
                image: "Assets/img/slice1.jpg"
            },
            {
                id: 3,
                name: "Ahumado Industrial",
                category: "ahumado",
                species: "atlantico",
                quality: "industrial",
                price: 12900,
                weight: "200g",
                boxes: 2,
                netWeight: "10,00 kg",
                description: "Industrial - 200 GS - 2 cajas disponibles",
                image: "Assets/img/ahumado.jpg"
            },
            {
                id: 4,
                name: "Porción con Piel IVP Premium",
                category: "ahumado",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "4 Oz",
                boxes: 5,
                netWeight: "22,68 kg",
                description: "Premium - 4 Oz - 5 cajas disponibles",
                image: "Assets/img/porcion.jpg"
            },
            {
                id: 5,
                name: "Porción Standard",
                category: "ahumado",
                species: "atlantico",
                quality: "standard",
                price: 9900,
                weight: "180g",
                boxes: 4,
                netWeight: "18,16 kg",
                description: "Standard - 180 GR - 4 cajas disponibles",
                image: "Assets/img/porcion.jpg"
            },
            {
                id: 6,
                name: "Porción sin Piel IVP Premium 6 Oz",
                category: "ahumado",
                species: "atlantico",
                quality: "premium",
                price: 9800,
                weight: "6 Oz",
                boxes: 26,
                netWeight: "118,04 kg",
                description: "Premium - 6 Oz - 26 cajas disponibles",
                image: "Assets/img/porcion2.jpg"
            },
            {
                id: 7,
                name: "Porción sin Piel IVP Premium 8 Oz",
                category: "ahumado",
                species: "atlantico",
                quality: "premium",
                price: 9900,
                weight: "8 Oz",
                boxes: 216,
                netWeight: "980,64 kg",
                description: "Premium - 8 OZ - 216 cajas disponibles",
                image: "Assets/img/porcion2.jpg"
            },
            
            // Filetes Salmón Atlántico
            {
                id: 8,
                name: "Filete con Piel IQF Industrial B",
                category: "filete",
                species: "atlantico",
                quality: "industrial",
                price: 9300,
                weight: "2-3 LBS",
                boxes: 1,
                netWeight: "25 kg",
                description: "Industrial B - 2-3 LBS - 1 caja disponible",
                image: "Assets/img/filete.jpg"
            },
            {
                id: 9,
                name: "Filete con Piel IQF Industrial B S/C",
                category: "filete",
                species: "atlantico",
                quality: "industrial",
                price: 9300,
                weight: "S/C",
                boxes: 1,
                netWeight: "16,99 kg",
                description: "Industrial B - S/C - 1 caja disponible",
                image: "Assets/img/filete.jpg"
            },
            {
                id: 10,
                name: "Filete con Piel IQF Industrial",
                category: "filete",
                species: "atlantico",
                quality: "industrial",
                price: 9500,
                weight: "2-3 LBS",
                boxes: 2,
                netWeight: "50 kg",
                description: "Industrial - 2-3 LBS - 2 cajas disponibles",
                image: "Assets/img/filete.jpg"
            },
            {
                id: 11,
                name: "Filete con Piel IVP Industrial",
                category: "filete",
                species: "atlantico",
                quality: "industrial",
                price: 9000,
                weight: "1-2 LBS",
                boxes: 2,
                netWeight: "30 kg",
                description: "Industrial - 1-2 LBS - 2 cajas disponibles",
                image: "Assets/img/filete2.jpg"
            },
            {
                id: 12,
                name: "Filete con Piel IVP Industrial S/C",
                category: "filete",
                species: "atlantico",
                quality: "industrial",
                price: 9000,
                weight: "S/C",
                boxes: 1,
                netWeight: "10,77 kg",
                description: "Industrial - S/C - 1 caja disponible",
                image: "Assets/img/filete2.jpg"
            },
            {
                id: 13,
                name: "Filete con Piel IVP Standard 3-4 LBS",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 9400,
                weight: "3-4 LBS",
                boxes: 2,
                netWeight: "30 kg",
                description: "Standard - 3-4 LBS - 2 cajas disponibles",
                image: "Assets/img/filete2.jpg"
            },
            {
                id: 14,
                name: "Filete con Piel IVP Standard 4-5 LBS",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 9400,
                weight: "4-5 LBS",
                boxes: 1,
                netWeight: "15 kg",
                description: "Standard - 4-5 LBS - 1 caja disponible",
                image: "Assets/img/filete2.jpg"
            },
            {
                id: 15,
                name: "Filete con Piel IVP Standard S/C",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 9300,
                weight: "S/C",
                boxes: 2,
                netWeight: "29,67 kg",
                description: "Standard - S/C - 2 cajas disponibles",
                image: "Assets/img/filete2.jpg"
            },
            {
                id: 16,
                name: "Filete con Piel IVP Premium 1-2 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9500,
                weight: "1-2 LBS",
                boxes: 45,
                netWeight: "455,00 kg",
                description: "Premium - 1-2 LBS - 45 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 17,
                name: "Filete con Piel IVP Premium 2-3 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9500,
                weight: "2-3 LBS",
                boxes: 8,
                netWeight: "120 kg",
                description: "Premium - 2-3 LBS - 8 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 18,
                name: "Filete con Piel IVP Premium 3-4 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "3-4 LBS",
                boxes: 16,
                netWeight: "239,97 kg",
                description: "Premium - 3-4 LBS - 16 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 19,
                name: "Filete con Piel IVP Premium 2-4 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "2-4 LBS",
                boxes: 3,
                netWeight: "45,00 kg",
                description: "Premium - 2-4 LBS - 3 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 20,
                name: "Filete con Piel IVP Premium 4-5 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "4-5 LBS",
                boxes: 26,
                netWeight: "390,00 kg",
                description: "Premium - 4-5 LBS - 26 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 21,
                name: "Filete con Piel IVP Premium 5-6 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "5-6 LBS",
                boxes: 61,
                netWeight: "982,46 kg",
                description: "Premium - 5-6 LBS - 61 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 22,
                name: "Filete con Piel IVP Premium 6-7 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9600,
                weight: "6-7 LBS",
                boxes: 37,
                netWeight: "621,52 kg",
                description: "Premium - 6-7 LBS - 37 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 23,
                name: "Filete con Piel IVP Premium 7-8 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9500,
                weight: "7-8 LBS",
                boxes: 7,
                netWeight: "116,56 kg",
                description: "Premium - 7-8 LBS - 7 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 24,
                name: "Filete con Piel IVP Premium S/C",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 9500,
                weight: "S/C",
                boxes: 4,
                netWeight: "56,43 kg",
                description: "Premium - S/C - 4 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 25,
                name: "Filete sin Piel IVP Premium 1-2 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12500,
                weight: "1-2 LBS",
                boxes: 6,
                netWeight: "89,98 kg",
                description: "Premium sin piel - 1-2 LBS - 6 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 26,
                name: "Filete sin Piel IVP Premium 2-3 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12600,
                weight: "2-3 LBS",
                boxes: 69,
                netWeight: "835 kg",
                description: "Premium sin piel - 2-3 LBS - 69 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 27,
                name: "Filete sin Piel IVP Premium 3-4 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12600,
                weight: "3-4 LBS",
                boxes: 68,
                netWeight: "1020 kg",
                description: "Premium sin piel - 3-4 LBS - 68 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 28,
                name: "Filete sin Piel IVP Premium 4-5 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12600,
                weight: "4-5 LBS",
                boxes: 23,
                netWeight: "345 kg",
                description: "Premium sin piel - 4-5 LBS - 23 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 29,
                name: "Filete sin Piel IVP Premium 5-6 LBS",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12600,
                weight: "5-6 LBS",
                boxes: 3,
                netWeight: "45,23 kg",
                description: "Premium sin piel - 5-6 LBS - 3 cajas disponibles",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 30,
                name: "Filete sin Piel IVP Premium S/C",
                category: "filete",
                species: "atlantico",
                quality: "premium",
                price: 12400,
                weight: "S/C",
                boxes: 1,
                netWeight: "9,55 kg",
                description: "Premium sin piel - S/C - 1 caja disponible",
                image: "Assets/img/premium.jpg"
            },
            {
                id: 31,
                name: "Filete sin Piel IVP Standard 2-3 LBS",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 11900,
                weight: "2-3 LBS",
                boxes: 1,
                netWeight: "11,7 kg",
                description: "Standard sin piel - 2-3 LBS - 1 caja disponible",
                image: "Assets/img/standard.jpg"
            },
            {
                id: 32,
                name: "Filete sin Piel IVP Standard 3-4 LBS",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 11900,
                weight: "3-4 LBS",
                boxes: 1,
                netWeight: "12,04 kg",
                description: "Standard sin piel - 3-4 LBS - 1 caja disponible",
                image: "Assets/img/standard.jpg"
            },
            {
                id: 33,
                name: "Filete sin Piel IVP Standard 4-5 LBS",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 11900,
                weight: "4-5 LBS",
                boxes: 1,
                netWeight: "11,23 kg",
                description: "Standard sin piel - 4-5 LBS - 1 caja disponible",
                image: "Assets/img/standard.jpg"
            },
            {
                id: 34,
                name: "Filete sin Piel IVP Standard S/C",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 11900,
                weight: "S/C",
                boxes: 2,
                netWeight: "20,05 kg",
                description: "Standard sin piel - S/C - 2 cajas disponibles",
                image: "Assets/img/standard.jpg"
            },
            {
                id: 35,
                name: "Filete Trozo sin Piel IVP Standard",
                category: "filete",
                species: "atlantico",
                quality: "standard",
                price: 11900,
                weight: "S/C",
                boxes: 1,
                netWeight: "2,17 kg",
                description: "Standard trozo sin piel - S/C - 1 caja disponible",
                image: "Assets/img/standard.jpg"
            },
            
            // Salmón Coho
            {
                id: 36,
                name: "Salmón Coho Slices Ahumado Premium",
                category: "ahumado",
                species: "coho",
                quality: "premium",
                price: 13500,
                weight: "200g",
                boxes: 1,
                netWeight: "5 kg",
                description: "Premium - 200 GS - 1 caja disponible",
                image: "Assets/img/slice2.jpg"
            },
            {
                id: 37,
                name: "Salmón Coho B&P Ahumado Congelado Premium",
                category: "ahumado",
                species: "coho",
                quality: "premium",
                price: 9000,
                weight: "500g",
                boxes: 1,
                netWeight: "3,00 kg",
                description: "Premium - 500 GS - 1 caja disponible",
                image: "Assets/img/coho.jpg"
            },
            {
                id: 38,
                name: "Filete Coho con Piel IVP Premium 1-2 LBS",
                category: "filete",
                species: "coho",
                quality: "premium",
                price: 9200,
                weight: "1-2 LBS",
                boxes: 2,
                netWeight: "28,55 kg",
                description: "Premium - 1-2 LBS - 2 cajas disponibles",
                image: "Assets/img/cohof.jpg"
            },
            {
                id: 39,
                name: "Filete Coho con Piel IVP Premium 2-3 LBS",
                category: "filete",
                species: "coho",
                quality: "premium",
                price: 9000,
                weight: "2-3 LBS",
                boxes: 6,
                netWeight: "90,64 kg",
                description: "Premium - 2-3 LBS - 6 cajas disponibles",
                image: "Assets/img/cohof.jpg"
            },
            {
                id: 40,
                name: "Filete Coho con Piel IVP Premium 3-4 LBS",
                category: "filete",
                species: "coho",
                quality: "premium",
                price: 9200,
                weight: "3-4 LBS",
                boxes: 9,
                netWeight: "138,14 kg",
                description: "Premium - 3-4 LBS - 9 cajas disponibles",
                image: "Assets/img/cohof.jpg"
            }
        ];

        let cart = [];
        let currentFilter = 'all';
        let orders = [];

        // Inicializar la aplicación
        function init() {
            displayProducts();
            updateCartCount();
        }

        // Función para obtener icono según categoría
        function getProductIcon(category, species) {
            if (category === 'ahumado') return '🔥';
            if (species === 'coho') return '🐟';
            return '🐠';
        }

        // Función para obtener indicador de stock
        function getStockIndicator(boxes) {
            if (boxes >= 10) return { class: 'high', text: 'Alto' };
            if (boxes >= 3) return { class: 'medium', text: 'Medio' };
            if (boxes > 0) return { class: 'low', text: 'Bajo' };
            return { class: 'low', text: 'Sin stock' };
        }

        // Mostrar productos
        function displayProducts() {
            const grid = document.getElementById('productsGrid');
            const filtered = currentFilter === 'all'
            ? products
            : products.filter(product => {
                const name = product.name.toLowerCase();

                switch (currentFilter) {
                    case 'filete_piel':
                        return name.includes('filete') && name.includes('con piel');
                    case 'filete_sin_piel':
                        return name.includes('filete') && name.includes('sin piel');
                    case 'porcion':
                        return name.includes('porción') || name.includes('b&p');
                    case 'slice':
                        return name.includes('slice') || name.includes('slices');
                    case 'ahumado':
                        return product.category === 'ahumado';
                    case 'premium':
                        return product.quality === 'premium';
                    default:
                        return true;
                }
            });

        const groups = {};
        filtered.forEach(product => {
            const key = `${product.name.split(/(\d|-|oz|lbs|sc)/i)[0].trim().toLowerCase()}|${product.price}|${product.image}`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(product);
        });

        grid.innerHTML = Object.values(groups).map(group => {
            const mainProduct = group[0];
            const speciesLabel = mainProduct.species === 'atlantico' ? 'Salmón Atlántico' : 'Salmón Coho';

            return `
                <div class="product-card">
                    ${mainProduct.quality === 'premium' ? '<div class="premium-badge">PREMIUM</div>' : ''}
                    <div class="product-img">
                        <img src="${mainProduct.image}" alt="${mainProduct.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${mainProduct.name.split(/(\d|-|oz|lbs|sc)/i)[0].trim()}</h3>
                        <div class="product-details">
                            <div class="detail-row">
                                <span class="detail-label">Especie:</span>
                                <span class="species-tag">${speciesLabel}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Calidad:</span>
                                <span class="quality-tag ${mainProduct.quality}">${mainProduct.quality.charAt(0).toUpperCase() + mainProduct.quality.slice(1)}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Calibre:</span>
                                <select class="calibre-select" onchange="selectCalibre(this, ${group.map(p => p.id).join(',')})">
                                    <option value="">Seleccionar calibre</option>
                                    ${group.map(p => `<option value="${p.id}">${p.weight}</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="product-price">
                            ${mainProduct.price.toLocaleString()} <span class="price-unit">/ caja</span>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${mainProduct.id})">
                            <i class="fas fa-cart-plus"></i> Agregar Caja
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function selectCalibre(selectElement, ...productIds) {
        const selectedId = parseInt(selectElement.value);
        const btn = selectElement.closest('.product-info').querySelector('.add-to-cart');

        if (!selectedId) {
            btn.onclick = null;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Selecciona calibre';
            return;
        }

        btn.disabled = false;
        btn.onclick = () => addToCart(selectedId);
        btn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar Caja';
    }

        // Filtrar productos
        function filterProducts(filter) {
            currentFilter = filter;
            displayProducts();
            
            // Actualizar botones activos
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Agregar al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
            updateCartCount();
            
            // Animación de feedback
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
            btn.style.background = 'linear-gradient(45deg, var(--verde-premium), #2ecc71)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = 'linear-gradient(45deg, var(--azul-oceano), var(--menta-fresca))';
            }, 1000);
        }

        // Actualizar carrito
        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>Tu carrito está vacío</h3>
                        <p>Agrega algunos productos para comenzar</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price.toLocaleString()} / caja</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span>Cantidad: ${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }

            updateTotal();
        }

        // Actualizar cantidad
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                    updateCartCount();
                }
            }
        }

        // Eliminar del carrito
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            updateCartCount();
        }

        // Actualizar total
        function updateTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('totalAmount').textContent = `Total: ${total.toLocaleString()}`;
        }

        // Actualizar contador del carrito
        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        // Toggle carrito
        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            
            if (sidebar.classList.contains('open')) {
                updateCart();
            }
        }

        // Finalizar compra
        function checkout() {
            if (cart.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }

            // Mostrar formulario de checkout
            document.getElementById('checkoutForm').classList.add('active');
            document.getElementById('overlay').classList.add('active');
            
            // Actualizar resumen del pedido
            updateOrderSummary();
            
            // Cerrar carrito
            toggleCart();
        }

        // Actualizar resumen del pedido
        function updateOrderSummary() {
            const summaryItems = document.getElementById('summaryItems');
            const summaryTotal = document.getElementById('summaryTotal');
            
            summaryItems.innerHTML = '';
            let total = 0;
            
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'order-item';
                itemDiv.innerHTML = `
                    <span>${item.name} (x${item.quantity})</span>
                    <span>${(item.price * item.quantity).toLocaleString()}</span>
                `;
                summaryItems.appendChild(itemDiv);
                total += item.price * item.quantity;
            });
            
            summaryTotal.textContent = `Total: ${total.toLocaleString()}`;
        }

        // Cerrar formulario de checkout
        function closeCheckout() {
            document.getElementById('checkoutForm').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        }

        // Guardar pedido para panel admin
        function saveOrder(formData, total, message) {
            const newOrder = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                client: formData.name,
                phone: formData.phone,
                email: formData.email || 'No proporcionado',
                address: `${formData.address}, ${formData.region}`,
                total: total,
                status: 'pendiente',
                details: message,
                items: [...cart]
            };
            
            orders.unshift(newOrder); // Agregar al inicio
        }

        // Mostrar panel de administración
        function showAdmin() {
            document.getElementById('adminPanel').classList.add('active');
            loadOrders();
        }

        // Cerrar panel de administración
        function closeAdmin() {
            document.getElementById('adminPanel').classList.remove('active');
        }

        // Cargar pedidos en el panel admin
        function loadOrders() {
            const tbody = document.getElementById('ordersTableBody');
            
            tbody.innerHTML = '';
            
            if (orders.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #666;">No hay pedidos registrados</td></tr>';
                return;
            }
            
            orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.date}</td>
                    <td>${order.client}</td>
                    <td><a href="https://wa.me/${order.phone.replace(/\D/g,'')}" target="_blank">${order.phone}</a></td>
                    <td>${order.total.toLocaleString()}</td>
                    <td><span class="status ${order.status}">${order.status}</span></td>
                    <td>
                        ${order.status === 'pendiente' 
                            ? `<button class="complete-btn" onclick="markComplete(${order.id})">Completar</button>`
                            : '✅ Completado'
                        }
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        // Marcar pedido como completado
        function markComplete(orderId) {
            orders = orders.map(order => 
                order.id === orderId ? { ...order, status: 'completado' } : order
            );
            loadOrders();
        }

        // Event Listeners
        
        // Manejar envío del formulario
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('customerName').value,
                phone: document.getElementById('customerPhone').value,
                email: document.getElementById('customerEmail').value,
                address: document.getElementById('deliveryAddress').value,
                region: document.getElementById('deliveryRegion').value,
                payment: document.getElementById('paymentMethod').value,
                notes: document.getElementById('deliveryNotes').value
            };

            // Crear mensaje para WhatsApp
            let message = `*🐟 NUEVO PEDIDO - SALMOPRIME*\n\n`;
            message += `*📋 DATOS DEL CLIENTE:*\n`;
            message += `👤 Nombre: ${formData.name}\n`;
            message += `📱 Teléfono: ${formData.phone}\n`;
            if (formData.email) message += `📧 Email: ${formData.email}\n`;
            message += `📍 Dirección: ${formData.address}\n`;
            message += `🌎 Ciudad/Región: ${formData.region}\n`;
            message += `💳 Pago: ${formData.payment}\n\n`;
            
            message += `*🛒 PRODUCTOS PEDIDOS:*\n`;
            let total = 0;
            cart.forEach(item => {
                const subtotal = item.price * item.quantity;
                message += `• ${item.name}\n`;
                message += `  Cantidad: ${item.quantity} cajas\n`;
                message += `  Precio unit: ${item.price.toLocaleString()}\n`;
                message += `  Subtotal: ${subtotal.toLocaleString()}\n\n`;
                total += subtotal;
            });
            
            message += `*💰 TOTAL: ${total.toLocaleString()} CLP*\n\n`;
            
            if (formData.notes) {
                message += `*📝 COMENTARIOS:*\n${formData.notes}\n\n`;
            }
            
            message += `_Pedido generado desde salmoprime.cl_\n`;
            message += `_Fecha: ${new Date().toLocaleString()}_`;

            // Guardar pedido para el panel admin
            saveOrder(formData, total, message);

            // Enviar por WhatsApp
            const whatsappUrl = `https://wa.me/56952348988?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            // Mostrar confirmación
            alert('¡Pedido enviado! Te contactaremos pronto por WhatsApp para confirmar los detalles.');

            // Limpiar carrito y cerrar formulario
            cart = [];
            updateCart();
            updateCartCount();
            closeCheckout();
            
            // Resetear formulario
            document.getElementById('orderForm').reset();
        });

        // Cerrar carrito al hacer clic en overlay
        document.getElementById('overlay').addEventListener('click', function() {
            if (document.getElementById('cartSidebar').classList.contains('open')) {
                toggleCart();
            }
        });

        // Smooth scrolling para enlaces del nav
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Inicializar aplicación
        window.addEventListener('DOMContentLoaded', init);