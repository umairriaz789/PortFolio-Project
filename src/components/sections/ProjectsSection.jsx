import { FaGithub, FaLink } from "react-icons/fa";
import { Projects } from "../../data/Projects";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectsSection,
  Tags,
} from "../styles/sections/ProjectsSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";

export const ProjectsSection = () => {
  return (
    <>
      <StyledProjectsSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
          <p>These are some of my best projects</p>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectlink}
                  target="_blank"
                >
                  <img alt={project.title} src={project.thumbnail} />
                  <SlantedCard />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    {/* <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink />
                      <span>{project.projectLinkText}</span>
                    </a> */}
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
