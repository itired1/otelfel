document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.infographic-item, .promo-item, .hotel-item');
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                el.classList.add('slide-up');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Demo infographic animation
    const durationCircle = document.querySelector('#duration .circle');
    const guestsCircle = document.querySelector('#guests .circle');
    const categoryCircle = document.querySelector('#category .circle');
    
    if(durationCircle && guestsCircle && categoryCircle) {
        setInterval(() => {
            durationCircle.textContent = Math.floor(Math.random() * 14) + 1 + ' дн.';
            guestsCircle.textContent = Math.floor(Math.random() * 5) + 1 + ' гост.';
            categoryCircle.textContent = Math.floor(Math.random() * 5) + 1 + '★';
        }, 2000);
    }
    
    // Form validation for search
    const searchForm = document.querySelector('.test-0-search form');
    if(searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const city = document.querySelector('.test-0-fg').value;
            if(!city) {
                alert('Пожалуйста, укажите город');
                return;
            }
            window.location.href = 'search.html';
        });
    }
    
    // Sample hotels data for search page
    const hotels = [
        {
            city: "Москва",
            name: "Feliksotel Премиум",
            address: "ул. Тверская, 10",
            stars: 5,
            comfort: "Люкс",
            capacity: "2 человека",
            price: 12000,
            parking: true,
            transfer: true,
            rooms: 5
        },
        {
            city: "Санкт-Петербург",
            name: "Feliksotel Нева",
            address: "Невский пр., 25",
            stars: 4,
            comfort: "Стандарт",
            capacity: "3 человека",
            price: 8500,
            parking: false,
            transfer: true,
            rooms: 3
        },
        {
            city: "Сочи",
            name: "Feliksotel Черноморский",
            address: "ул. Приморская, 15",
            stars: 4,
            comfort: "Комфорт",
            capacity: "4 человека",
            price: 9500,
            parking: true,
            transfer: false,
            rooms: 7
        },
        {
            city: "Казань",
            name: "Feliksotel Казан",
            address: "ул. Баумана, 30",
            stars: 3,
            comfort: "Эконом",
            capacity: "2 человека",
            price: 4500,
            parking: false,
            transfer: false,
            rooms: 10
        },
        {
            city: "Екатеринбург",
            name: "Feliksotel Урал",
            address: "ул. Ленина, 42",
            stars: 4,
            comfort: "Стандарт",
            capacity: "2 человека",
            price: 6500,
            parking: true,
            transfer: true,
            rooms: 4
        }
    ];
    
    // Display hotels on search page
    if(window.location.pathname.includes('search.html')) {
        const container = document.querySelector('.hotels-container');
        
        hotels.forEach(hotel => {
            const hotelEl = document.createElement('div');
            hotelEl.className = 'hotel-item fade-in';
            hotelEl.innerHTML = `
                <h3 class="test-1-fon">${hotel.name}</h3>
                <p class="test-1-fg">${hotel.city}</p>
                <p class="test-1-foa">${hotel.address}</p>
                <p class="test-1-fkat">${'★'.repeat(hotel.stars)}</p>
                <p class="test-1-fkom">${hotel.comfort}</p>
                <p class="test-1-fvm">${hotel.capacity}</p>
                <p class="test-1-fst">${hotel.price} руб./ночь</p>
                <p class="test-1-fpar">${hotel.parking ? 'Есть парковка' : 'Нет парковки'}</p>
                <p class="test-1-ftr">${hotel.transfer ? 'Есть трансфер' : 'Нет трансфера'}</p>
                <p class="test-1-fn">Свободных номеров: ${hotel.rooms}</p>
                <button class="test-1-det" onclick="location.href='hroom.html'">Подробнее</button>
                <button class="test-1-fbr" onclick="location.href='booking.html'">Забронировать</button>
            `;
            container.appendChild(hotelEl);
        });
    }
    
    // Login form validation
    const loginForm = document.querySelector('.auth-form form');
    if(loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.querySelector('.test-6-fpn').value;
            const password = document.querySelector('.test-6-fps').value;
            
            if(!phone || !password) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            // In a real app, this would validate credentials
            window.location.href = 'profile.html';
        });
    }
    
    // Registration form validation
    const registerForm = document.querySelector('.auth-form form');
    if(registerForm && window.location.pathname.includes('register.html')) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('.test-5-name').value;
            const lastName = document.querySelector('.test-5-last').value;
            const doc = document.querySelector('.test-5-doc').value;
            const phone = document.querySelector('.test-5-phone').value;
            const password = document.querySelector('.test-5-pass').value;
            const password2 = document.querySelector('.test-5-pass2').value;
            
            if(!name || !lastName || !doc || !phone || !password || !password2) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            if(password !== password2) {
                alert('Пароли не совпадают');
                return;
            }
            
            // In a real app, this would register the user
            window.location.href = 'profile.html';
        });
    }
    
    // Logout button
    const logoutBtn = document.querySelector('.test-7-logout');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
    
    // Add/remove client buttons in booking form
    const addClientBtn = document.querySelector('.test-3-add');
    const removeClientBtn = document.querySelector('.test-3-remove');
    
    if(addClientBtn && removeClientBtn) {
        let clientCount = 1;
        
        addClientBtn.addEventListener('click', function() {
            if(clientCount >= 4) {
                alert('Максимальное количество клиентов - 4');
                return;
            }
            
            clientCount++;
            const clientInfo = document.querySelector('.client-info');
            const newClient = document.createElement('div');
            newClient.className = 'client-form';
            newClient.innerHTML = `
                <h3>Клиент ${clientCount}</h3>
                <input type="text" placeholder="Фамилия" required>
                <input type="text" placeholder="Имя" required>
                <input type="text" placeholder="Отчество">
                <input type="date" required>
                <select required>
                    <option value="">Вид документа</option>
                    <option value="passport">Паспорт</option>
                    <option value="driver">Водительские права</option>
                </select>
                <input type="text" placeholder="Номер документа" required>
            `;
            clientInfo.appendChild(newClient);
        });
        
        removeClientBtn.addEventListener('click', function() {
            if(clientCount <= 1) {
                alert('Должен остаться хотя бы один клиент');
                return;
            }
            
            clientCount--;
            const clientForms = document.querySelectorAll('.client-form');
            clientForms[clientForms.length - 1].remove();
        });
    }
    
    // Simple image slider for room page
    if(window.location.pathname.includes('hroom.html')) {
        const slider = document.querySelector('.slider');
        if(slider) {
            let currentIndex = 0;
            const images = slider.querySelectorAll('img');
            const totalImages = images.length;
            
            function showImage(index) {
                images.forEach((img, i) => {
                    img.style.display = i === index ? 'block' : 'none';
                });
            }
            
            function nextImage() {
                currentIndex = (currentIndex + 1) % totalImages;
                showImage(currentIndex);
            }
            
            // Show first image initially
            showImage(0);
            
            // Auto-rotate images every 3 seconds
            setInterval(nextImage, 3000);
            
            // Also allow clicking to navigate
            slider.addEventListener('click', nextImage);
        }
    }
});