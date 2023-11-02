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

export default function Home() {
  // const [play] = useSound(boopSfx);
  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound
        url="/sounds/gamestart.mp3"
        playStatus={Sound.status.PLAYING}
        loop
        volume={50}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-start-bg w-gamewidth h-gameheight `}
        >
          <h1 className="text-9xl font-bold text-center mt-32 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-100 animate__animated animate__pulse animate_slower animate__infinite">
            Ban Dai Ngu
          </h1>
          <div className="flex justify-center items-center mt-28">
            <Link
              href={'/character'}
              className={`${righteous.className} text-center text-white px-6 py-4 bg-cyan-400 text-3xl w-60 rounded-2xl animate__animated animate__heartBeat animate__infinite hover:bg-transparent border-2 border-cyan-400 hover:text-cyan-400 ease-in-out delay-75`}
            >
              Start Game
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
