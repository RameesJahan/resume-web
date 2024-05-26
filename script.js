const projects = [
  {
    name: "Chat App",
    date: "JAN 2024",
    url: "https://github.com/RameesJahan/chelakkedo",
    description: "Developed real-time messaging app with ReactJS, Tailwind CSS frontend. Firebase Firestore backend for storing messages. Implemented Firebase Authentication for secure phone number verification. Users can send text messages in real-time.",
    skills: ["ReactJS", "Tailwind CSS", "Firebase"]
  },
  {
    name: "E-Commerce API",
    date: "APRIL 2023",
    url: "https://github.com/RameesJahan/FillKart-Api",
    description: "Developed E-commerce API using Node.js, Express.js, and MongoDB. Features four main endpoints: Retrieve list of all products. View detailed information about a specific product. List available product categories. Filter products by category. Demonstrates proficiency in RESTful API design, CRUD operations, and MongoDB integration.",
    skills: ["NodeJS", "ExpressJS", "MongoDB"]
  },
  {
    name: "E-Commerce App",
    date: "FEB 2023",
    url: "https://github.com/RameesJahan/FillKart",
    description: "Created E-commerce app using HTML, CSS, and JavaScript. Integrated Firebase Authentication for secure user login. Demonstrated proficiency in frontend design and client-side scripting. Highlighted practical use of Firebase services for authentication. Showcases skills in e-commerce functionality implementation.",
    skills: ["HTML", "CSS", "JavaScript", "Firebase"]
  }
];
function renderProjects() {
  const projectList = document.getElementById("project-list");
  projects.forEach((project) => {
    const listItem = document.createElement("li");
    const skillsString = project.skills.join(" • ");
    listItem.innerHTML = `
    <li>
    <h4 class="title">${project.name} (${project.date})</h4>
    <p>${skillsString}</p>
    <p>
      Github - 
      <a href="${project.url}">${project.url}</a>
    </p>
    <p>
      &nbsp;
      ${project.description}
    </p>
  </li>
    `;

    projectList.appendChild(listItem);
  });
}

renderProjects();