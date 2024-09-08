import './Projects.css'
import Card from './ui/Card';

function Projects(){
    return(
        <section className="projects">
            <div className="projects-root">
                <div className="projects-branch1">
                    <div className="projects-leaf1">
                        <h2 className="projects-title">
                            Mes Projets
                        </h2>
                        <p className="projects-description">
                            Voici quelques projets sur lesquelles j'ai travaillé dernièrement.
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