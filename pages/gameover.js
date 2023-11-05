import Image from 'next/image';
import { Righteous } from 'next/font/google';
import Head from 'next/head';
import 'animate.css';
import useSound from 'use-sound';
import Sound from 'react-sound';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import buttonClick from '../public/sounds/sfx/button.mp3';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Gameover() {
  const [isSound, setIsSound] = useState(Sound.status.STOPPED);
  const [playButtonSound] = useSound(buttonClick);
  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound url="/sounds/gameover.mp3" playStatus={isSound} loop volume={20} />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-gradient-to-b from-black to-slate-800  w-gamewidth h-gameheight `}
        >
          <button
            className="absolute top-10 left-10"
            onClick={() => setIsSound(Sound.status.PLAYING)}
          >
            <FontAwesomeIcon
              icon={faMusic}
              style={{ fontSize: '32px', color: '' }}
            />
          </button>
          <h1 className="text-9xl font-bold text-center mt-32 text-white animate__animated animate__pulse animate_slower animate__infinite">
            GAME OVER
          </h1>
          <div className="flex justify-center items-center mt-28">
            <Link href={'/level'}>
              <button
                onClick={playButtonSound}
                className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl animate__animated animate__heartBeat animate__infinite hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
              >
                Play again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
