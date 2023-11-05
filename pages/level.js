import Image from 'next/image';
import { Righteous } from 'next/font/google';
import Head from 'next/head';
import 'animate.css';
import useSound from 'use-sound';
import Sound from 'react-sound';
import Link from 'next/link';
import buttonClick from '../public/sounds/sfx/button.mp3';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function SelectLevel() {
  const [playButtonSound] = useSound(buttonClick);
  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound
        url="/sounds/scene2.mp3"
        playStatus={Sound.status.PLAYING}
        loop
        volume={20}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-character-bg w-gamewidth h-gameheight `}
        >
          <h1 className="text-7xl font-bold text-center mt-24 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 animate__animated animate__pulse animate_slower animate__infinite">
            Select the difficulty level
          </h1>
          <div className="flex flex-col space-y-16 justify-center items-center mt-20">
            <Link href={'/character?mode=easy'}>
              <button
                className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
                onClick={playButtonSound}
              >
                Easy
              </button>
            </Link>
            <Link href={'/character?mode=medium'}>
              <button
                className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
                onClick={playButtonSound}
              >
                Medium
              </button>
            </Link>
            <Link href={'/character?mode=hard'}>
              <button
                className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
                onClick={playButtonSound}
              >
                Hard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
