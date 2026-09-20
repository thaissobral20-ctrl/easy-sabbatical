// ==========================================
// 1. NAVEGAÇÃO EM ABAS (Execução Imediata)
// ==========================================
const linksMenu = document.querySelectorAll('nav ul li a');
const todasSecoes = document.querySelectorAll('main section');

// Oculta todas as secções imediatamente e mostra só a Home
todasSecoes.forEach(secao => {
    if (secao.id !== 'home') {
        secao.classList.add('hidden');
    }
});

const homeSecao = document.getElementById('home');
if (homeSecao) {
    homeSecao.classList.remove('hidden');
}

// Evento de clique para alternar as abas
linksMenu.forEach(link => {
    link.addEventListener('click', function(evento) {
        const idDaSecaoAlvo = link.getAttribute('href'); 
        
        if (idDaSecaoAlvo && idDaSecaoAlvo.startsWith('#')) {
            evento.preventDefault(); 
            const secaoAlvo = document.querySelector(idDaSecaoAlvo);

            if (secaoAlvo) {
                // Esconde todas as secções
                todasSecoes.forEach(secao => secao.classList.add('hidden'));
                // Mostra apenas a secção escolhida
                secaoAlvo.classList.remove('hidden');
            }
        }
    });
});

// ==========================================
// 2. CHAT FLUTUANTE
// ==========================================
const botaoAbrirChat = document.getElementById('btn-chat');
const botaoFecharChat = document.getElementById('btn-close-chat');
const janelaChat = document.getElementById('chat-window');

if (botaoAbrirChat && janelaChat) {
    botaoAbrirChat.addEventListener('click', () => janelaChat.classList.remove('hidden'));
}
if (botaoFecharChat && janelaChat) {
    botaoFecharChat.addEventListener('click', () => janelaChat.classList.add('hidden'));
}

// ==========================================
// 3. JANELA MODAL DOS PACOTES
// ==========================================
const informacoesPacotes = {
    'card-mochilao': { 
        titulo: 'Backpacking', 
        preco: 'Planning Fee: $99 / month',
        descricao: 'For the adventurous soul. Dive deep into local cultures, stay in vibrant hostels, and travel using public transport. We handle the visas so you can focus on the experience.', 
        features: [
            'Curated secure & top-rated Hostels', 
            'Train and bus route planning', 
            'Visa and border documentation guide', 
            '24/7 WhatsApp emergency support',
            'Access to budget tracking app'
        ] 
    },
    'card-conforto': { 
        titulo: 'Comfortable', 
        preco: 'Planning Fee: $249 / month',
        descricao: 'The perfect balance between adventure and relaxation. Enjoy great hotels, fast flights, and pre-booked tours without stress.', 
        features: [
            '3 and 4-star Hotels or premium Airbnbs', 
            'Flights and high-speed train tickets', 
            'Pre-booked guided tours & local guides', 
            'Dedicated consultant for mid-trip changes',
            'Premium health insurance included'
        ] 
    },
    'card-luxo': { 
        titulo: 'Luxury', 
        preco: 'Planning Fee: $599 / month',
        descricao: 'Zero stress, pure exclusivity. Experience the world with premium services and bespoke itineraries tailored perfectly to you.', 
        features: [
            '5-star Hotels & Boutique Resorts', 
            'Private chauffeurs and VIP transfers', 
            'Exclusive experiences (Helicopter, Private Chef)', 
            '24/7 Personal Concierge',
            'Priority treatment at airports'
        ] 
    }
};

const modalPacote = document.getElementById('package-modal');
const btnFecharModal = document.getElementById('close-modal');
const tituloModal = document.getElementById('modal-title');
const precoModal = document.getElementById('modal-price'); 
const descModal = document.getElementById('modal-description');
const listaFeatures = document.getElementById('modal-features');
const todosCartoes = document.querySelectorAll('.package-card');

if (modalPacote) {
    todosCartoes.forEach(cartao => {
        cartao.addEventListener('click', function() {
            const info = informacoesPacotes[cartao.id];
            if (info) {
                tituloModal.textContent = info.titulo;
                if(precoModal) precoModal.textContent = info.preco;
                descModal.textContent = info.descricao;
                
                listaFeatures.innerHTML = '';
                info.features.forEach(item => { 
                    listaFeatures.innerHTML += `<li>${item}</li>`; 
                });
                
                modalPacote.classList.remove('hidden');
            }
        });
    });
    
    if(btnFecharModal) {
        btnFecharModal.addEventListener('click', () => modalPacote.classList.add('hidden'));
    }
}

// ==========================================
// 4. DASHBOARD DE CONTINENTES
// ==========================================
const dadosContinentes = {
    'europe': { 
        titulo: 'Europe Explorer', 
        budgetBack: '$2,500', 
        budgetComf: '$4,500',
        budgetLux: '$8,000+',
        categorias: [
            { nome: 'Accommodation', percent: '40%' },
            { nome: 'Food & Dining', percent: '25%' },
            { nome: 'Transportation', percent: '20%' },
            { nome: 'Entertainment & Visas', percent: '15%' }
        ],
        rota: ['Portugal (Lisbon, Porto)', 'Spain (Madrid, Barcelona)', 'Italy (Rome, Florence)', 'France (Paris)'] 
    },
    'asia': { 
        titulo: 'Southeast Asia Discovery', 
        budgetBack: '$1,200', 
        budgetComf: '$2,500',
        budgetLux: '$4,500+',
        categorias: [
            { nome: 'Accommodation', percent: '30%' },
            { nome: 'Food & Dining', percent: '30%' },
            { nome: 'Transportation', percent: '25%' },
            { nome: 'Entertainment & Visas', percent: '15%' }
        ],
        rota: ['Thailand (Bangkok, Chiang Mai)', 'Vietnam (Hanoi, Hoi An)', 'Cambodia (Siem Reap)', 'Indonesia (Bali)'] 
    },
    'southamerica': { 
        titulo: 'South America Adventure', 
        budgetBack: '$1,500', 
        budgetComf: '$3,000',
        budgetLux: '$5,500+',
        categorias: [
            { nome: 'Accommodation', percent: '35%' },
            { nome: 'Food & Dining', percent: '25%' },
            { nome: 'Transportation', percent: '25%' },
            { nome: 'Entertainment & Visas', percent: '15%' }
        ],
        rota: ['Colombia (Medellin, Cartagena)', 'Peru (Cusco, Machu Picchu)', 'Chile (Santiago, Atacama)', 'Argentina (Buenos Aires)'] 
    }
};

const botoesContinentes = document.querySelectorAll('.continent-btn');
const tituloDash = document.getElementById('dash-title');
const orcamentoBack = document.getElementById('dash-budget-back');
const orcamentoComf = document.getElementById('dash-budget-comf');
const orcamentoLux = document.getElementById('dash-budget-lux');
const categoriasDash = document.getElementById('dash-categories');
const rotaDash = document.getElementById('dash-route');

if (tituloDash) {
    botoesContinentes.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesContinentes.forEach(btn => btn.classList.remove('active'));
            botao.classList.add('active');

            const info = dadosContinentes[botao.getAttribute('data-continent')];
            if (info) {
                tituloDash.textContent = info.titulo;
                orcamentoBack.textContent = info.budgetBack;
                orcamentoComf.textContent = info.budgetComf;
                orcamentoLux.textContent = info.budgetLux;
                
                categoriasDash.innerHTML = '';
                info.categorias.forEach(cat => { 
                    categoriasDash.innerHTML += `
                        <li>
                            <span>${cat.nome}</span>
                            <span class="percent-badge">${cat.percent}</span>
                        </li>`; 
                });

                rotaDash.innerHTML = '';
                info.rota.forEach(lugar => { rotaDash.innerHTML += `<li>${lugar}</li>`; });
            }
        });
    });
    
    if(botoesContinentes.length > 0) {
        botoesContinentes[0].click();
    }
}

// ==========================================
// 5. GLOBO 3D FOTORREALISTA (Textura Oficial via CDN)
// ==========================================
window.addEventListener('DOMContentLoaded', function() {
    const containerGlobo = document.getElementById('globe-container');

    if (containerGlobo && typeof THREE !== 'undefined') {
        containerGlobo.innerHTML = '';

        const width = containerGlobo.clientWidth || 400;
        const height = containerGlobo.clientHeight || 400;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(width, height);
        containerGlobo.appendChild(renderer.domElement);

        // Criar a Esfera 3D da Terra
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        
        // Carregador de textura com link oficial público e estável
        const textureLoader = new THREE.TextureLoader();
        
        // Usamos uma textura de alta qualidade da Terra
        const earthTexture = textureLoader.load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
            function (texture) {
                // Sucesso ao carregar a textura
                renderer.render(scene, camera);
            },
            undefined,
            function (error) {
                console.error('Erro ao carregar a textura do globo:', error);
            }
        );

        const material = new THREE.MeshBasicMaterial({ map: earthTexture });
        const earthMesh = new THREE.Mesh(geometry, material);
        scene.add(earthMesh);

        camera.position.z = 6;

        // Animação de rotação contínua e fluida
        function animarGlobo() {
            requestAnimationFrame(animarGlobo);
            earthMesh.rotation.y += 0.0025;
            renderer.render(scene, camera);
        }
        animarGlobo();

        // Responsividade ao redimensionar a janela
        window.addEventListener('resize', () => {
            if (containerGlobo.clientWidth > 0) {
                const w = containerGlobo.clientWidth;
                const h = containerGlobo.clientHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            }
        });
    }
});