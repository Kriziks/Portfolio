import GithubPic from '../../assets/github-mark.png'
import './Card.css'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={GithubPic} alt="github picture"></img>
            <h2 className="card-title">Projet</h2>
            <p className="card-text">Description du projet</p>
        </div>
    );
}

export default Card