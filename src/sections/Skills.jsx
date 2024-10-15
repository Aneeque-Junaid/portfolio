import { skills } from "../index";

const Skills = () => (
  <section id="skills" className=" py-8">
    <h2 className="text-center text-3xl font-bold mb-4 text-primary underline ">My Skills</h2>
    <div className="flex flex-wrap justify-evenly">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <img
            src={skill.logo}
            alt={skill.name}
            className="h-16 w-16 object-contain"
          />
          <p className="mt-2 text-center text-lg text-secondary">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
