import Image from 'next/image';
import { Righteous } from 'next/font/google';
import Head from 'next/head';
import 'animate.css';
import useSound from 'use-sound';
import Sound from 'react-sound';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Board from '@/components/board';
import Dice from 'react-dice-roll';
import diceRoll from '../public/sounds/dice_roll.mp3';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Play() {
  const router = useRouter();
  const mode = router.query.mode;
  const [HP, setHP] = useState(3);
  const [HP_Bar, setHP_Bar] = useState([]);
  const hp_bar = [];
  const character = router.query.character;

  // Display Enemy Dice state
  const [isEnemyDice, setIsEnemyDice] = useState(false);

  //Character Position
  const [index, setIndex] = useState(1);
  const [diceNumber, setDiceNumber] = useState(1);
  const [position, setPosition] = useState({ top: 630, left: 120 });

  useEffect(() => {
    const generateHP_Bar = () => {
      let hp_bar = [];
      // generate HP Bar
      for (let index = 0; index < HP; index++) {
        hp_bar.push(
          <FontAwesomeIcon
            icon={faHeart}
            beat
            style={{ fontSize: '32px', color: '#FFC0CB' }}
            key={index}
          />
        );
      }
      setHP_Bar(hp_bar);
    };
    if (mode === 'easy') {
      setHP(7);
      generateHP_Bar();
    } else if (mode === 'medium') {
      setHP(5);
      generateHP_Bar();
    } else {
      setHP(3);
      generateHP_Bar();
    }
  }, [HP]);

  useEffect(() => {
    const changePositionFromDice = () => {
      if (index <= 11) {
        const start = 1;
        const left = 120 + (index - start) * 72;
        setPosition({ top: 630, left: left });
        return;
      } else if (index === 12) {
        setPosition({ top: 530, left: 840 });
        return;
      } else if (index > 12 && index <= 24) {
        let start = 13;
        if (index === 13) {
          setPosition({ top: 530, left: 840 });
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 430, left: left });
        }
      } else if (index === 25) {
        setPosition({ top: 330, left: 48 });
        return;
      } else if (index > 25 && index <= 37) {
        let start = 26;
        if (index === 26) {
          setPosition({ top: 230, left: 120 });
        } else {
          const left = 120 + (index - start) * 72;
          setPosition({ top: 230, left: left });
        }
      } else if (index === 38) {
        setPosition({ top: 130, left: 840 });
        return;
      } else if (index > 38 && index <= 49) {
        let start = 39;
        if (index === 39) {
          setPosition({ top: 30, left: 840 });
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 30, left: left });
        }
      } else {
        alert('Congratulations! You win the game');
        router.push('/');
      }
    };
    changePositionFromDice();
  }, [index, diceNumber]);

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
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-white w-gamewidth h-gameheight`}
        >
          {/* Left Section */}
          <div className="flex justify-center items-center w-full px-10 py-1">
            <div className="flex flex-col w-1/4 text-gray-950">
              <div className="flex flex-col">
                <div className="flex flex-row space-x-10 justify-center items-center">
                  <h1>Your HP</h1>
                  <div className="grid grid-cols-3 gap-4">{HP_Bar}</div>
                </div>
                <div className="flex flex-row justify-center items-center mt-10">
                  <h1 className="font-light text-gray-500">Your Dice</h1>
                  <div className="ml-10">
                    <Dice
                      size={100}
                      sound={'/sounds/dice_roll.mp3'}
                      onRoll={(value) => {
                        setIndex((prevIndex) => prevIndex + value);
                        setDiceNumber(value);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={
                    isEnemyDice
                      ? 'flex flex-col justify-center items-center'
                      : 'hidden'
                  }
                >
                  <h1 className="mt-10 font-light text-gray-700">Enemy Dice</h1>
                  <div className="mt-5">
                    <Dice size={100} />
                  </div>
                </div>
              </div>
            </div>

            {/* Board */}
            <div className="relative flex w-3/4 text-gray-950">
              <Board />
              <div
                className={`rounded-full w-12 h-12 absolute animate__animated animate__bounce animate_slower animate__infinite`}
                style={{ top: `${position.top}px`, left: `${position.left}px` }}
              >
                <Image
                  src={`/images/characters/character${character}_head.png`}
                  height={48}
                  width={48}
                  quality={100}
                  alt="character"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
