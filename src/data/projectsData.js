import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";
import cannon from "../assets/svg/projects/cannon.svg";
import chat from "../assets/svg/projects/chat.svg";
import rocket from "../assets/svg/projects/rocket.svg";
import earth from "../assets/svg/projects/earth.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "React Mealplanner",
    projectDesc:
      "A single-page react app designed that makes use of a recipe API to give users the opportunity to meal plan and calculate nutrition information.",
    tags: ["React", "HTML", "CSS"],
    code: "https://github.com/jennifer-ruan/cookbook",
    demo: "",
    image: food,
  },
  {
    id: 2,
    projectName: "Get Down Mr. President",
    projectDesc:
      "I was the programming lead on a team of over 15 people who designed and developed this silly action-centered Unity game.",
    tags: ["C#", "Unity"],
    code: "https://github.com/jennifer-ruan/mr-president",
    demo: "https://kimber1y.itch.io/get-down-mr-president",
    image: cannon,
  },
  {
    id: 3,
    projectName: "Social App Prototype",
    projectDesc:
      "Researched, ideated, designed, tested, and iterated on a prototype for a social app meant to connect millenials with the younger generation.",
    tags: ["Figma", "UX Research"],
    code: "https://www.figma.com/proto/XgeNTCfJWJ832S7ZnO16fp/Hi-Fi-Prototype?node-id=195%3A2361&scaling=min-zoom",
    demo: "https://www.youtube.com/watch?v=xArKLByn1p4",
    image: chat,
  },
  {
    id: 4,
    projectName: "Space Exploration Game",
    projectDesc:
      "Shoot enemies in randomly generated levels in this 2D C++ game I made over a weekend for Develop At Ubisoft 2022!",
    tags: ["C++"],
    code: "https://www.youtube.com/watch?v=yGvx_FpoKLo&ab_channel=JenniferRuan",
    demo: "https://www.youtube.com/watch?v=yGvx_FpoKLo&ab_channel=JenniferRuan",
    image: rocket,
  },
  {
    id: 5,
    projectName: "3D Platforming Game",
    projectDesc:
      "Made a simple Katamari Damancy-inspired game in a team of four for a course-related game jam in Unity and C#.",
    tags: ["Unity", "C#"],
    code: "",
    demo: "",
    image: earth,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
