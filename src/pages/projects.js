import { projects, categories } from '../data/projectData.js';

let activeFilters = [];
let searchQuery = "";

function displayResults(projects)
{
    const projectContainer = document.querySelector("#results");
    const template = document.querySelector("#project-template");

    if (!projectContainer || !template) { console.log("container or template not found"); return; };

    projectContainer.innerHTML = "";

    projects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-img").src = project.img;
        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools.join(" · ");

        if (project.url)
        {
            const card = projectInstance.querySelector(".project");
            card.style.cursor = "pointer";
            card.onclick = () => window.open(project.url, "_blank");
        }

        projectContainer.appendChild(projectInstance);
    });
}

function filterAndDisplay() {
    const filtered = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery) || project.tools.some(t => t.toLowerCase().includes(searchQuery));
        const matchesFilters = activeFilters.length == 0 || activeFilters.every(f => project.categories.includes(f));

        return matchesSearch && matchesFilters;
    });

    displayResults(filtered);
}

function setupFilters() {
    const searchInput = document.getElementById("project-search");
    const filterContainer = document.getElementById("category-filters");

    if (searchInput)
    {
        searchInput.addEventListener("input", (textbox) => {
            searchQuery = textbox.target.value.toLowerCase();
            filterAndDisplay();
        });
    }

    if (filterContainer) {
        Object.values(categories).forEach(cat => {
            const label = document.createElement("label");
            // UPDATED: Using .filter-tag to match your style
            label.className = "filter-tag cursor-pointer padding-[5px-15px] border-radius-[20px] background-color-[var(--bg-secondary-color)]";
            
            label.innerHTML = `
                <input type="checkbox" value="${cat}" class="display-[none]">
                <span>${cat.toUpperCase()}</span>
            `;

            label.querySelector("input").addEventListener("change", (e) => {
                if (e.target.checked) {
                    activeFilters.push(cat);
                } else {
                    activeFilters = activeFilters.filter(f => f !== cat);
                }
                filterAndDisplay();
            });

            filterContainer.appendChild(label);
        });
    }
}

function setup() {
    setupFilters();
    displayResults(projects);
}

setup();