import './Skills.css'

function Skills(){
    return(
        <section className="skills">
            <div className="skills-root">
                <div className="skills-branch1">
                    <div className="skills-leaf1">
                        <h2 className="skills-title">
                            My Skills
                        </h2>
                        <p className="skills-description">
                            I have a wide range of skills and experience in various technologies. Here are some of the key areas I excel in:
                        </p>
                    </div>
                </div>
                <div className="skills-branch2">
                    <div className="skills-leaf2">
                        <h3 className="skills-domain1">Front-End</h3>
                        <ul className="skills-list1">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>PHP<br/></p>
                            <p>CakePHP<br/></p>
                            <p>Symfony<br/></p>
                            <p>JavaScript<br/></p>
                            <p>React<br/></p>
                            <p>Spring<br/></p>
                            <p>Servlet<br/></p>
                            <p>Jersey<br/></p>
                        </ul>
                    </div>
                    <div className="skills-leaf3">
                        <h3 className="skills-domain2">Back-End</h3>
                        <ul className="skills-list2">
                            <p>C</p>
                            <p>Python</p>
                            <p>Bash</p>
                            <p>C++</p>
                            <p>C#</p>
                            <p>Java</p>
                            <p>J2EE</p>
                            <p>.NET</p>
                            <p>Android</p>
                            <p>Kotlin</p>
                            <p>Dart</p>
                            <p>Flutter</p>
                        </ul>
                    </div>
                    <div className="skills-leaf4">
                        <h3 className="skills-domain3">Databases</h3>
                        <ul className="skills-list3">
                            <p>MySQL</p>
                            <p>JDBC</p>
                            <p>JPA</p>
                            <p>PL/SQL</p>
                            <p>PostgreSQL</p>
                            <p>Redis</p>
                            <p>4D</p>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills