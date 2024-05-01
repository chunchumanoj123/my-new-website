// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".navbar-menu ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = this.getAttribute("href");
    smoothScroll(target); // Scroll to the target section
  });
});

// To Toggle between the close and bar icon to show dropdown
const toggleBtn = document.querySelector(".toggle-menu");
const toggleIcon = document.querySelector(".toggle-menu i");
const toggleMenu = document.querySelector(".toggle-options");

toggleBtn.onclick = () => {
  toggleMenu.classList.toggle("open-menu");
  const isOpen = toggleMenu.classList.contains("open-menu");
  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// skills
const skills = [
  {
    category: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Frontend Frameworks / Libraries",
    items: [
      "ReactJS",
      "Redux",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Redux Saga"
    ]
  },
  {
    category: "Version Control",
    items: ["Git"]
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"]
  },
  {
    category: "Package Managers",
    items: ["Yarn", "NPM"]
  },
  {
    category: "Build Tools",
    items: ["Webpack"]
  }
];

function createSkillsSection(skillsData) {
  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((skillCategory) => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = skillCategory.category;

    const categoryList = document.createElement("ul");

    skillCategory.items.forEach((skillItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = skillItem;
      categoryList.appendChild(listItem);
    });

    const categorySection = document.createElement("div");
    categorySection.classList.add("skill-type");
    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryList);

    skillsContainer.appendChild(categorySection);
  });
}

createSkillsSection(skills);

// Projects

const projectDetails = [
  {
    index: "01",
    name: "Attendance Management System",
    logo: "./images/attendance1.png",
    websiteLink: "",
    projectLink: "",
    technology: "Html, Css, js, php ",
    desc:
      "A Online Attendance web based system using html,css,java script,php."
  }
];

function createProjectElement(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  const projectLogo = document.createElement("img");
  projectLogo.src = project.logo;
  projectLogo.alt = project.name;
  projectLogo.width = "600";
  projectLogo.height = "400";
  projectLogo.classList.add("project-logo");
  projectContainer.appendChild(projectLogo);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("project-title");
  projectContainer.appendChild(projectTitle);

  const projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectDesc.classList.add("project-desc");
  projectContainer.appendChild(projectDesc);

  const projectTech = document.createElement("p");
  projectTech.textContent = `Technology: ${project.technology}`;
  projectTech.classList.add("project-tech");
  projectContainer.appendChild(projectTech);

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  const websiteLink = document.createElement("a");
  websiteLink.href = project.websiteLink;
  websiteLink.target = "_blank";
  websiteLink.textContent = "Visit Website";
  websiteLink.classList.add("project-link");
  projectLinks.appendChild(websiteLink);

  const projectLink = document.createElement("a");
  projectLink.href = project.projectLink;
  projectLink.target = "_blank";
  projectLink.textContent = "GitHub Repo";
  projectLink.classList.add("project-link");
  projectLinks.appendChild(projectLink);

  projectContainer.appendChild(projectLinks);

  return projectContainer;
}

function createProjectsSection(projectsData) {
  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
  });
}

createProjectsSection(projectDetails);


//education

const educationDetails = [
  {
    name: "Anna University",
    board: "Bachelor Engineering (B.E)",
    course: "Computer Science Engineering",
    year: "Aug 2020 – Jun 2024",
    points: "7.94 CGPA"
  },
  {
    name: "Pratibha Junior College",
    board: "Board of Intermediate Education (AP)",
    course: "Classes XI and XII (MPC)",
    year: "Aug 2018 – Jun 2020",
    points: "7.3 GPA"
  },
  {
    name: "Sri Goutham High School",
    board: "Board of Secondary Education (AP)",
    course: "Class X",
    year: "Jun 2017",
    points: "8.7 GPA"
  }
];

function createEducationDetails(educationData) {
  const educationDetails = document.getElementById("education-details");

  educationData.forEach((edu) => {
    const row = document.createElement("tr");

    const createTableCell = (text, label) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      cell.setAttribute("data-label", label);
      return cell;
    };

    row.appendChild(createTableCell(edu.name, "Name"));
    row.appendChild(createTableCell(edu.board, "Board"));
    row.appendChild(createTableCell(edu.course, "Course"));
    row.appendChild(createTableCell(edu.year, "Year"));
    row.appendChild(createTableCell(edu.points, "Points"));

    educationDetails.appendChild(row);
  });
}

createEducationDetails(educationDetails);

//Scroll To Top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add this JavaScript code to your index.js or inside a <script> tag at the end of your HTML body

// Function to add the 'fade-up' class to elements in the viewport
function addFadeUpAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
      // Once the animation is applied, we don't need to observe this element anymore
      observer.unobserve(entry.target);
    }
  });
}

// Intersection Observer configuration
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the viewport
  threshold: 0.3 // Trigger when 30% of the element is in the viewport
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(addFadeUpAnimation, options);

// Get all elements with the class 'fade-up' and start observing them
const fadeUpElements = document.querySelectorAll(".fade-up");
fadeUpElements.forEach((element) => {
  observer.observe(element);
});
