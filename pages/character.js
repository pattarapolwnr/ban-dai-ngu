import Image from 'next/image';
import { Righteous } from 'next/font/google';
import Head from 'next/head';
import 'animate.css';
import useSound from 'use-sound';
import Sound from 'react-sound';
import Link from 'next/link';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function SelectCharacter() {
  // const [play] = useSound(boopSfx);
  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound
        url="/sounds/scene2.mp3"
        playStatus={Sound.status.PLAYING}
        loop
        volume={50}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-character-bg w-gamewidth h-gameheight `}
        >
          <h1 className="text-7xl font-bold text-center mt-24 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 animate__animated animate__pulse animate_slower animate__infinite">
            Select the character
          </h1>
          <div className="flex justify-center items-center mt-28"></div>
        </div>
      </div>
    </>
  );
}
