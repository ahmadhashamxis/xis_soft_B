import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects: string[] = [
    'Assembly Verification',
    'Defect Detection',
    'Measurement',
    'Object Counting',
  ];

  return (
    <div className="">
      <div className="mx-14 ">
        <h1 className="pt-8 text-[FFF] text-3xl font-bold text-white">
          Projects
        </h1>
        <div className="mt-12 flex gap-5 justify-between">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
