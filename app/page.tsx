import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
    <main>
    <title>Brody's Portfolio</title>
    <header className="pt-40 hero text-center">
      <h1 className="font-serif"><em>Welcome, all!</em></h1>
      <div className="font-mono max-w-md mx-auto flex flex-col">
        <div className="scripture-block flex flex-col">
          <span>⠀It's great to see you 😊</span>
          <span>I'm Brody. I'm glad you</span>
          <span>could make it to</span>
          <span>my portfolio!</span>
        </div>
      </div>
    </header>
    <article className="mx-auto pt-30 font-mono max-w-sm flex flex-col space-y-12">
      <p className="mx-auto">
        jump on in &rarr;
      </p>
      <ul className="list-disc mx-auto">
        <li>
          <a className="font-semibold" href="projects/">See my projects</a>
        </li>
        <li>
          <a className="font-semibold" href="scripture-wall/">Explore a wall of scriptures</a>
        </li>
      </ul>
      <div className="pb-24"></div>
    </article>
  </main>
  );
}
