import { projects as matchingProjects, categories } from '../data/projectData.js';

function displayProjects(matchingProjects)
{
    const projectContainer = document.querySelector("#results");
    const template = document.querySelector("#project-template");

    matchingProjects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-img").src = project.img;
        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools;
        
        if (project.url)
        {
            const card = projectInstance.querySelector(".project");
            card.style.cursor = "pointer";
            card.onclick = () => window.open(project.url, "_blank");
        }

        projectContainer.appendChild(projectInstance);
    })
}

function prepareFilters()
{
    const searchbar = document.querySelector("#project-search");
}

function setup()
{
    displayProjects(matchingProjects);
}

setup();