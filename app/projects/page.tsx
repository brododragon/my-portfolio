import "../globals.css";
import "./projects-page.css";

export default function Home() {
    return (
        <main>
            <header className="pt-24 text-center">
                <h2>Projects</h2>
            </header>
            <article>
                <ul className="project-tile-container mx-auto">    
                    <li className="project-tile">
                        <a href="/">
                            <figure>
                                <figcaption className="project-tile-caption">
                                    Brody's Portfolio
                                </figcaption>
                                <img src="../favicon.ico"></img>
                            </figure>
                        </a>
                    </li>
                    <li className="project-tile">
                    </li>
                    <li className="project-tile">
                    </li>
                </ul>
            </article>
        </main>
    )
}