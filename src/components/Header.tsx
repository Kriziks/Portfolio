import './Header.css'

function Header(){
    return(
        <header>
            <h1>&lt;/&gt;</h1>
            <nav className="menu">
                <ul className="header-list">
                    <a href="#home" >Home</a>
                    <a href="#projects" >Projects</a>
                    <a href="#skills" >Skills</a>
                    <a href="#contact" >Contact</a>
                </ul>
            </nav>
        </header>
    )
}
export default Header