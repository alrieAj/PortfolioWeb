// --- Translation Data Structure ---
const translations = {
    'en': {
        'nav_home': 'Home', 'nav_about': 'About', 'nav_skills': 'Skills', 'nav_projects': 'Projects', 'nav_contact': 'Contact',
        'name': 'Albert Pingol', 'job_title_static': 'Full Stack Software', 'job_arch': 'Architect', 'job_design': 'Designer', 'job_dev': 'Developer',
        'home_intro': "Hello! I'm a Web Developer, Designer, and Application Architect who creates modern, user-friendly, and scalable solutions with eye-catching designs that leave a lasting impression.",
        'about_title': 'About Me', 
        'about_p1': 'As a Full Stack Software Architect, I thrive on bridging the gap between elegant design and robust, scalable functionality. My journey in web development has been driven by a passion for creating digital experiences that are not just efficient, but genuinely enjoyable to use.',
        'about_p2': 'I specialize in modern frameworks and technologies, consistently looking for new ways to make web solutions stand out.',
        'skills_heading': 'My Core Skills & Technologies', 
        'skill_fe_title': 'Front-End Development', 'skill_fe_desc': 'Building responsive, dynamic user interfaces with modern tech.',
        'skill_be_title': 'Back-End & Databases', 'skill_be_desc': 'Designing and managing robust server-side logic and data storage.',
        'skill_tool_title': 'Tools, Design & AI', 'skill_tool_desc': 'Leveraging creative and productivity tools for streamlined workflow.',
        'projects_heading': 'My Projects',
        'proj1_title': 'AgriWebsite Educational Website', 'proj1_desc': 'A dedicated platform bridging technology and tradition to promote sustainable farming. Provides valuable resources and innovative tools for farm efficiency and environmentally friendly practices.',
        'proj2_title': 'Timeless Blooms Flowershop E-Commerce', 'proj2_desc': 'A high-quality e-commerce floral platform ensuring maximum freshness. It provides seamless shopping for stunning, meticulously sourced bouquets for any special event.',
        'proj3_title': 'Inventory Management System', 'proj3_desc': 'A back-end system demonstrating Create, Read, Update, and Delete functionality for streamlined stock control and data management.',
        'visit_site': 'Visit Site',
        'contact_heading': 'Want to collaborate or hire me?',
        'contact_intro_p': 'Whether you have a project idea, a job opportunity, or just want to say hello, feel free to reach out using the form below!',
        'form_name_label': 'Name:', 'form_name_ph': 'Your Full Name',
        'form_email_label': 'Email:', 'form_email_ph': 'your.email',
        'form_subject_label': 'Subject:', 'form_subject_ph': 'Briefly what this is about',
        'form_message_label': 'Message:', 'form_message_ph': 'Tell me about your project or inquiry',
        'form_button': 'Send Message'
    },
    'es': {
        'nav_home': 'Inicio', 'nav_about': 'Acerca de', 'nav_skills': 'Habilidades', 'nav_projects': 'Proyectos', 'nav_contact': 'Contacto',
        'name': 'Albert Pingol', 'job_title_static': 'Software Full Stack', 'job_arch': 'Arquitecto', 'job_design': 'Diseñador', 'job_dev': 'Desarrollador',
        'home_intro': "¡Hola! Soy un Desarrollador Web, Diseñador y Arquitecto de Aplicaciones que crea soluciones modernas, escalables y fáciles de usar con diseños llamativos que dejan una impresión duradera.",
        'about_title': 'Acerca de Mí', 
        'about_p1': 'Como Arquitecto de Software Full Stack, me dedico a unir el diseño elegante con la funcionalidad robusta y escalable. Mi camino en el desarrollo web se impulsa por la pasión de crear experiencias digitales que no solo sean eficientes, sino genuinamente agradables de usar.',
        'about_p2': 'Me especializo en marcos y tecnologías modernas, buscando constantemente nuevas formas de hacer que las soluciones web destaquen.',
        'skills_heading': 'Mis Habilidades y Tecnologías Principales', 
        'skill_fe_title': 'Desarrollo Front-End', 'skill_fe_desc': 'Construyendo interfaces de usuario dinámicas y receptivas con tecnología moderna.',
        'skill_be_title': 'Back-End y Bases de Datos', 'skill_be_desc': 'Diseñando y administrando lógica de servidor y almacenamiento de datos robustos.',
        'skill_tool_title': 'Herramientas, Diseño e IA', 'skill_tool_desc': 'Aprovechando herramientas creativas y de productividad para un flujo de trabajo optimizado.',
        'projects_heading': 'Mis Proyectos',
        'proj1_title': 'Sitio Web Educativo AgriWebsite', 'proj1_desc': 'Una plataforma dedicada que une tecnología y tradición para promover la agricultura sostenible. Proporciona recursos valiosos y herramientas innovadoras para la eficiencia agrícola y prácticas ecológicas.',
        'proj2_title': 'Comercio Electrónico de Floristería Timeless Blooms', 'proj2_desc': 'Una plataforma floral de comercio electrónico de alta calidad que garantiza la máxima frescura. Proporciona compras sin problemas de ramos impresionantes y meticulosamente obtenidos para cualquier evento especial.',
        'proj3_title': 'Sistema de Gestión de Inventario', 'proj3_desc': 'Un sistema de back-end que demuestra la funcionalidad de Crear, Leer, Actualizar y Eliminar para un control de existencias y gestión de datos optimizados.',
        'visit_site': 'Visitar Sitio',
        'contact_heading': '¿Quieres colaborar o contratarme?',
        'contact_intro_p': 'Ya sea que tengas una idea de proyecto, una oportunidad de trabajo o simplemente quieras saludar, ¡no dudes en comunicarte utilizando el formulario a continuación!',
        'form_name_label': 'Nombre:', 'form_name_ph': 'Tu Nombre Completo',
        'form_email_label': 'Correo Electrónico:', 'form_email_ph': 'tu.correo',
        'form_subject_label': 'Asunto:', 'form_subject_ph': 'Brevemente de qué se trata',
        'form_message_label': 'Mensaje:', 'form_message_ph': 'Cuéntame sobre tu proyecto o consulta',
        'form_button': 'Enviar Mensaje'
    },
    'tl': {
        'nav_home': 'Tahanan', 'nav_about': 'Tungkol sa Akin', 'nav_skills': 'Kasanayan', 'nav_projects': 'Mga Proyekto', 'nav_contact': 'Kontakin',
        'name': 'Albert Pingol', 'job_title_static': 'Full Stack Software', 'job_arch': 'Arkitekto', 'job_design': 'Disenyador', 'job_dev': 'Developer',
        'home_intro': "Kumusta! Ako ay isang Web Developer, Designer, at Application Architect na gumagawa ng moderno, user-friendly, at scalable na mga solusyon na may kaakit-akit na disenyo na nag-iiwan ng pangmatagalang impresyon.",
        'about_title': 'Tungkol sa Akin', 
        'about_p1': 'Bilang isang Full Stack Software Architect, mahilig akong pag-ugnayin ang eleganteng disenyo at matatag, scalable na functionality. Ang aking paglalakbay sa pag-develop ng web ay hinihimok ng hilig sa paggawa ng mga digital na karanasan na hindi lang mahusay, kundi talagang kasiya-siyang gamitin.',
        'about_p2': 'Dalubhasa ako sa mga modernong framework at teknolohiya, patuloy na naghahanap ng mga bagong paraan upang mapansin ang mga solusyon sa web.',
        'skills_heading': 'Aking Mga Pangunahing Kasanayan at Teknolohiya', 
        'skill_fe_title': 'Front-End Development', 'skill_fe_desc': 'Paggawa ng responsive, dynamic na user interfaces gamit ang modernong teknolohiya.',
        'skill_be_title': 'Back-End at Database', 'skill_be_desc': 'Pagdidisenyo at pamamahala ng matatag na server-side logic at pag-iimbak ng data.',
        'skill_tool_title': 'Mga Tool, Disenyo at AI', 'skill_tool_desc': 'Paggamit ng mga tool sa pagkamalikhain at pagiging produktibo para sa streamlined na daloy ng trabaho.',
        'projects_heading': 'Aking Mga Proyekto',
        'proj1_title': 'AgriWebsite Educational Website', 'proj1_desc': 'Isang dedikadong plataporma na nag-uugnay sa teknolohiya at tradisyon upang itaguyod ang napapanatiling pagsasaka. Nagbibigay ng mahalagang mapagkukunan at makabagong mga tool para sa kahusayan sa sakahan at mga kasanayang pangkapaligiran.',
        'proj2_title': 'Timeless Blooms Flowershop E-Commerce', 'proj2_desc': 'Isang de-kalidad na e-commerce floral platform na tinitiyak ang pinakamataas na pagiging bago. Nagbibigay ito ng walang putol na pamimili para sa nakamamanghang, maingat na pinagkunan na mga bouquet para sa anumang espesyal na kaganapan.',
        'proj3_title': 'Sistema ng Pamamahala ng Imbentaryo', 'proj3_desc': 'Isang back-end system na nagpapakita ng functionality ng Create, Read, Update, at Delete para sa pinahusay na kontrol sa stock at pamamahala ng data.',
        'visit_site': 'Bisitahin ang Site',
        'contact_heading': 'Gusto mo bang makipagtulungan o umupa sa akin?',
        'contact_intro_p': 'Kung mayroon kang ideya sa proyekto, isang pagkakataon sa trabaho, o gusto mo lang mag-hello, huwag mag-atubiling makipag-ugnayan gamit ang form sa ibaba!',
        'form_name_label': 'Pangalan:', 'form_name_ph': 'Iyong Buong Pangalan',
        'form_email_label': 'Email:', 'form_email_ph': 'iyong.email',
        'form_subject_label': 'Paksa:', 'form_subject_ph': 'Maikling tungkol saan ito',
        'form_message_label': 'Mensahe:', 'form_message_ph': 'Sabihin sa akin ang tungkol sa iyong proyekto o katanungan',
        'form_button': 'Ipadala ang Mensahe'
    }
};

// --- CORE NAVIGATION LOGIC ---

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Scrolled header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.nav-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});


// --- DARK MODE & VIDEO SWAP LOGIC ---

const darkModeToggle = document.getElementById('darkModeToggle');
const videoSource = document.getElementById('background-video-source'); 
const videoElement = document.querySelector('.bg-video');              
const MOON_ICON = '&#127769;'; // 🌙
const SUN_ICON = '&#127774;';  // ☀️

// Define the correct file paths for each mode
const DAY_MODE_VIDEO = 'videos/background.mp4';
const NIGHT_MODE_VIDEO = 'videos/background2.mp4'; 

function toggleDarkMode() {
    // Toggles the 'dark-mode' class on the body
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // 1. Change icon based on mode
    if (darkModeToggle) {
        darkModeToggle.innerHTML = isDarkMode ? SUN_ICON : MOON_ICON;
    }

    // 2. Swap the video source
    if (videoSource && videoElement) {
        if (isDarkMode) {
            videoSource.src = NIGHT_MODE_VIDEO;
        } else {
            videoSource.src = DAY_MODE_VIDEO;
        }
        
        // IMPORTANT: Force the video element to load the new source
        videoElement.load(); 
        
        // Restart the video
        videoElement.play(); 
    }

    // 3. Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Attach listener to toggle button
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


// --- LANGUAGE DROPDOWN LOGIC ---

const langDropdownContainer = document.querySelector('.lang-dropdown-container');
const langOptions = document.querySelectorAll('.lang-option');

// 1. Toggle dropdown menu visibility
if (langDropdownContainer) {
    langDropdownContainer.addEventListener('click', (event) => {
        // Prevent click from immediately propagating to the window listener (which closes it)
        event.stopPropagation(); 
        langDropdownContainer.classList.toggle('active');
    });
}

// 2. Close dropdown when clicking anywhere else on the page
document.addEventListener('click', (event) => {
    if (langDropdownContainer && langDropdownContainer.classList.contains('active') && !langDropdownContainer.contains(event.target)) {
        langDropdownContainer.classList.remove('active');
    }
});

// 3. Set Language when an option is clicked
langOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        const selectedLang = event.target.getAttribute('data-lang');
        setLanguage(selectedLang);
        // Close the dropdown after selecting
        if (langDropdownContainer) {
            langDropdownContainer.classList.remove('active');
        }
    });
});

// --- LANGUAGE TRANSLATION FUNCTION ---

function setLanguage(lang) {
    const dict = translations[lang];

    if (!dict) return;

    // 1. Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
            element.textContent = dict[key];
        }
    });

    // 2. Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            element.setAttribute('placeholder', dict[key]);
        }
    });
    
    // Save language preference
    localStorage.setItem('language', lang);
}


// --- INITIALIZATION ---

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Check saved preference or system preference
    const isDarkMode = (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches));

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = SUN_ICON;
        }
        // Load the night video source on startup if dark mode is active
        if (videoSource && videoElement) {
            videoSource.src = NIGHT_MODE_VIDEO;
            videoElement.load();
        }

    } else {
        if (darkModeToggle) {
            darkModeToggle.innerHTML = MOON_ICON;
        }
        // Load the day video source on startup if light mode is active
        if (videoSource && videoElement) {
            videoSource.src = DAY_MODE_VIDEO;
            videoElement.load();
        }
    }
}

function loadTranslation() {
    // Get language preference, default to English ('en')
    const preferredLang = localStorage.getItem('language') || 'en';
    setLanguage(preferredLang);
}


// Load theme and translation on initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadTranslation();
});