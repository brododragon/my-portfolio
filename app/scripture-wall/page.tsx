import '../globals.css';
import './scripture-wall-style.css';

export default function Home() {
  return (
    <main>
        <header className='flex'>
            <h1 className='mx-auto pt-10'>Welcome to the Scripture Wall!</h1>
        </header>
    
          <div className="scripture-card-nephi">
              <div className="ornament">❖</div>
              <p className="nephi-text">
                  Adam fell that men might be; and men are, <br></br>
                  <span className="emphasis-joy">that they might have joy.</span>
              </p>
              <span className="nephi-ref">2 NEPHI 2:25</span>
            <p className='credit'>Credit to Gemini AI for this scripture art.</p>
          </div>
          <div className='third-nephi-eleven'>
            <span className="ornament">❖</span>
            <p>
            7 Behold my Beloved Son, in whom I am well pleased, in whom I have glorified my name—hear ye him.
            </p><p>
            8 And it came to pass, as they understood they cast their eyes up again towards heaven; and behold, they saw a Man descending out of heaven; and he was clothed in a white robe; and he came down and stood in the midst of them; and the eyes of the whole multitude were turned upon him, and they durst not open their mouths, even one to another, and wist not what it meant, for they thought it was an angel that had appeared unto them.
            </p><p>
            9 And it came to pass that he stretched forth his hand and spake unto the people, saying:
            </p><p>
            10 Behold, I am Jesus Christ, whom the prophets testified shall come into the world.
            </p><p>
            11 And behold, I am the light and the life of the world; and I have drunk out of that bitter cup which the Father hath given me, and have glorified the Father in taking upon me the sins of the world, in the which I have suffered the will of the Father in all things from the beginning.
            </p>
            <span className='ref'><em>3 Nephi 11:7-11</em></span>
            <div className="ornament">❖</div>
          </div>

    </main>
  );
}