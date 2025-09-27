document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const projects = [
        {
            title: 'Music Recommendation System',
            description: ' Built a Python-based recommendation engine using Spotify API and a Kaggle dataset (50K+ records) to suggest personalized tracks. Applied EDA, data preprocessing, and recommendation algorithms to improve accuracy.',
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            title: 'Vehicle Parking App',
            description: 'Developed a multi-user vehicle parking application with distinct admin and user dashboards, providing comprehensive management of parking infrastructure and personal reservation tracking.',
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            title: 'AI Powered Chatbot',
            description: 'Developed a chatbot using n8n AI agents with Google Cloud APIs and Pinecone for RAG. Retrieved knowledge dynamically from Google Drive documents for domain-specific Q&A. Tech Stack: n8n, Google Cloud APIs, Pinecone.',
            githubUrl: '#',
            liveUrl: '#'
        },
    ];
    let currentProjectIndex = 0;

    // Function to show a specific section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');

        // Update active nav button
        navButtons.forEach(button => {
            if (button.dataset.section === sectionId) {
                button.classList.add('active-nav-button');
            } else {
                button.classList.remove('active-nav-button');
            }
        });
    }

    // Function to show a specific profile tab
    function showProfileTab(tabId) {
        tabContents.forEach(tab => {
            tab.classList.add('hidden');
        });
        document.getElementById(tabId + '-tab').classList.remove('hidden');

        // Update active tab button
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabId) {
                button.classList.add('active-tab-button');
            } else {
                button.classList.remove('active-tab-button');
            }
        });
    }

    // Function to render the current project
    function renderProject() {
        const projectContent = document.getElementById('project-content');
        const projectCounter = document.getElementById('project-counter');
        const project = projects[currentProjectIndex];

        projectContent.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.liveUrl}" class="btn btn-live-demo" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-eye icon"></i>
                    <span>Live Demo</span>
                </a>
                <a href="${project.githubUrl}" class="btn btn-github" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github icon"></i>
                    <span>GitHub</span>
                </a>
            </div>
        `;
        projectCounter.textContent = `Project ${currentProjectIndex + 1} of ${projects.length}`;
    }

    // Event Listeners for navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            showSection(sectionId);
        });
    });

    // Event Listeners for profile tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            showProfileTab(tabId);
        });
    });

    // Event listeners for project slider
    document.getElementById('next-project-button').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        renderProject();
    });

    document.getElementById('prev-project-button').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        renderProject();
    });

    // Event listener for contact form
    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent successfully! (This is a mock submission)');
        event.target.reset();
    });

    // Initial state
    showSection('home');
    showProfileTab('skills');
    renderProject();
});
