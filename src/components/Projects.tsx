import './Projects.css'
import Card from './ui/Card';

function Projects(){
    return(
        <section id="projects" className="projects">
            <div className="projects-root">
                <div className="projects-branch1">
                    <div className="projects-leaf1">
                        <h2 className="projects-title">
                            My Projects
                        </h2>
                        <p className="projects-description">
                            Check out some of the projects I've worked on.
                        </p>
                    </div>
                </div>
                <div className="projects-branch2">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </section>
    )
}
export default Projects