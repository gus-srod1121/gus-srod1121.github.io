import { projects, categories } from '../data/projectData.js';

function displayProjects()
{
    const projectContainer = document.querySelector("#projects");
    const template = document.querySelector("#project-template");

    projects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools;

        const img = projectInstance.querySelector(".project-img");
        img.src = project.img;

        projectContainer.appendChild(projectInstance);
    })
}


function setup()
{
    displayProjects();
}

setup();