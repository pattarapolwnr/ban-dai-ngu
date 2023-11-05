import Image from 'next/image';
import { Righteous } from 'next/font/google';
import Head from 'next/head';
import 'animate.css';
import useSound from 'use-sound';
import Sound from 'react-sound';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import buttonClick from '../public/sounds/sfx/button.mp3';
import chooseClick from '../public//sounds/sfx/choose.mp3';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function SelectCharacter() {
  const [playButtonSound] = useSound(buttonClick);
  const [playChooseSound] = useSound(chooseClick);
  const router = useRouter();
  const mode = router.query.mode;
  const character_image = [
    'character1.png',
    'character2.png',
    'character3.png',
  ];
  const [index, setIndex] = useState(0);
  const handleBack = () => {
    if (index === 0) {
      const charactImageSize = character_image.length;
      setIndex(charactImageSize - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleNext = () => {
    const charactImageSize = character_image.length;
    if (index === charactImageSize - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {}, [index]);
  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound
        url="/sounds/select_character.mp3"
        playStatus={Sound.status.PLAYING}
        loop
        playFromPosition={80}
        volume={15}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-character-bg w-gamewidth h-gameheight `}
        >
          <h1 className="text-7xl font-bold text-center mt-24 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 animate__animated animate__pulse animate_slower animate__infinite">
            Select the character
          </h1>
          <div className="flex justify-center items-center mt-16">
            <div className="absolute top-80 left-80">
              <button
                onClick={() => {
                  handleBack();
                  playChooseSound();
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  style={{ fontSize: '96px', color: 'rgb(165 243 252)' }}
                />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={`/images/characters/${character_image[index]}`}
                width={200}
                height={300}
                quality={95}
                alt="character image"
              />
            </div>
            <div className="absolute top-80 right-80">
              <button
                onClick={() => {
                  handleNext();
                  playChooseSound();
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ fontSize: '96px', color: 'rgb(165 243 252)' }}
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20">
            <Link href={`/play?mode=${mode}&character=${index + 1}`}>
              <button
                className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
                onClick={playButtonSound}
              >
                Select
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
