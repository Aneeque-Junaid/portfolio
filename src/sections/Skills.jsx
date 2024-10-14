import { skills } from "../index";

const Skills = () => (
  <section className="bg-[#f7f3e9] py-8">
    <h2 className="text-center text-2xl font-semibold mb-4">My Skills</h2>
    <div className="flex flex-wrap justify-evenly">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <img
            src={skill.logo}
            alt={skill.name}
            className="h-16 w-16 object-contain"
          />
          <p className="mt-2 text-center text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
