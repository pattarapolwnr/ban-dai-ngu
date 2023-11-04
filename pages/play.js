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
import check_landing from '@/utils/check_landing';
import { Button, Modal } from 'flowbite-react';
import WheelComponent from 'react-wheel-of-prizes';
// import 'react-wheel-of-prizes/dist/index.css';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Play() {
  const router = useRouter();
  const mode = router.query.mode;
  const [maxHP, setMaxHP] = useState(7);
  const [HP, setHP] = useState(3);
  const [HP_Bar, setHP_Bar] = useState([]);
  const character = router.query.character;
  const [cardPocket, setCardPocket] = useState([]);
  const [landingEffect, setLandingEffect] = useState('');
  const [alreadyDisplay, setAlreadyDisplay] = useState(false);

  // Display Enemy Dice state
  const [isEnemyDice, setIsEnemyDice] = useState(false);

  //Character Position
  const [index, setIndex] = useState(1);
  const [diceNumber, setDiceNumber] = useState(1);
  const [position, setPosition] = useState({ top: 610, left: 120 });

  //Modal State
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openTrapModal, setOpenTrapModal] = useState(false);
  const [openMysteryModal, setOpenMysteryModal] = useState(false);

  //Spinning wheel
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ];

  // Cards
  const cards_segments = [
    'Increase HP 1 Point',
    'Angel Card',
    'Double Damage',
    'Go Ahead 1 block',
    'Increase HP 2 Point',
    'Go Ahead 3 blocks',
    'Go Ahead 2 blocks',
    'Optional Card',
  ];

  const displayCardEffect = (effect) => {
    if (effect === 'Increase HP 1 Point') {
      // Check HP is full?
      if (HP == maxHP) {
        return;
      } else {
        setHP((prevHP) => prevHP + 1);
      }
    } else if (effect === 'Angel Card') {
      // Check card Pocket is empty?
      if (cardPocket.length === 0) {
        const newCardPocket = [...cardPocket, 'Angel Card'];
        setCardPocket(newCardPocket);
      } else {
        setCardPocket(['Angel Card']);
      }
    } else if (effect === 'Double Damage') {
      // Check card Pocket is empty?
      if (cardPocket.length === 0) {
        const newCardPocket = [...cardPocket, 'Double Damage'];
        setCardPocket(newCardPocket);
      } else {
        setCardPocket(['Double Damage']);
      }
    } else if (effect === 'Go Ahead 1 block') {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (effect === 'Increase HP 2 Point') {
      // Check HP is full?
      if (HP == maxHP) {
        return;
      } else if (HP + 2 <= maxHP) {
        setHP((prevHP) => prevHP + 2);
      } else {
        return;
      }
    } else if (effect === 'Go Ahead 3 blocks') {
      setIndex((prevIndex) => prevIndex + 3);
    } else if (effect === 'Go Ahead 2 blocks') {
      setIndex((prevIndex) => prevIndex + 2);
    } else if (effect === 'Optional Card') {
      // Check card Pocket is empty?
      if (cardPocket.length === 0) {
        const newCardPocket = [...cardPocket, 'Optional Card'];
        setCardPocket(newCardPocket);
      } else {
        setCardPocket(['Optional Card']);
      }
    }
  };

  const cards_onFinished = (winner) => {
    setTimeout(() => {
      alert(winner);
    }, 500);
    setTimeout(() => {
      setOpenCardModal(false);
    }, 2000);
    displayCardEffect(winner);
  };

  // Initial HP
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
      setMaxHP(7);
      setHP(7);
      generateHP_Bar();
    } else if (mode === 'medium') {
      setMaxHP(5);
      setHP(5);
      generateHP_Bar();
    } else {
      setMaxHP(3);
      setHP(3);
      generateHP_Bar();
    }
  }, [maxHP]);

  // Change HP
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
    generateHP_Bar();
  }, [HP]);

  // Change Character Position
  useEffect(() => {
    const changePositionFromDice = () => {
      if (index <= 11) {
        const start = 1;
        const left = 120 + (index - start) * 72;
        setPosition({ top: 610, left: left });
        setLandingEffect(check_landing(index));
        return;
      } else if (index === 12) {
        setPosition({ top: 510, left: 840 });
        setLandingEffect(check_landing(index));
        return;
      } else if (index > 12 && index <= 24) {
        let start = 13;
        if (index === 13) {
          setPosition({ top: 410, left: 840 });
          setLandingEffect(check_landing(index));
          return;
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 410, left: left });
          setLandingEffect(check_landing(index));
          return;
        }
      } else if (index === 25) {
        setPosition({ top: 310, left: 48 });
        setLandingEffect(check_landing(index));
        return;
      } else if (index > 25 && index <= 37) {
        let start = 26;
        if (index === 26) {
          setPosition({ top: 210, left: 48 });
          setLandingEffect(check_landing(index));
          return;
        } else {
          const left = 48 + (index - start) * 72;
          setPosition({ top: 210, left: left });
          setLandingEffect(check_landing(index));
          return;
        }
      } else if (index === 38) {
        setPosition({ top: 110, left: 840 });
        setLandingEffect(check_landing(index));
        return;
      } else if (index > 38 && index <= 49) {
        let start = 39;
        if (index === 39) {
          setPosition({ top: 40, left: 840 });
          setLandingEffect(check_landing(index));
          return;
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 40, left: left });
          setLandingEffect(check_landing(index));
          return;
        }
      } else {
        setPosition({ top: 40, left: 48 });
        setTimeout(() => {
          alert('Congratulations! You win the game');
        }, 1000);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    };
    changePositionFromDice();
  }, [index]);

  // Cards Effect
  useEffect(() => {
    if (landingEffect === 'cards') {
      setTimeout(() => {
        setOpenCardModal(true);
      }, 1000);
      return;
    } else if (landingEffect === 'traps') {
      setTimeout(() => {
        setOpenTrapModal(true);
      }, 1000);
      return;
    } else if (landingEffect === 'mystery') {
      setTimeout(() => {
        setOpenMysteryModal(true);
      }, 1000);
      return;
    } else {
      return;
    }
  }, [landingEffect]);

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
      {/* Card Modal */}
      <Modal show={openCardModal} size={'2xl'}>
        <Modal.Header>Card Spinning Wheel</Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="max-w-xl">
            <WheelComponent
              segments={cards_segments}
              segColors={segColors}
              onFinished={(winner) => cards_onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              size={250}
              isOnlyOnce={false}
              upDuration={1000}
              downDuration={1000}
              fontFamily="Arial"
              className="spinning-wheels"
            />
          </div>
        </Modal.Body>
      </Modal>

      {/* Trap Modal */}
      <Modal show={openTrapModal} onClose={() => setOpenTrapModal(false)}>
        <Modal.Header>Trap Spinning Wheel</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Mystery Modal */}
      <Modal show={openMysteryModal} onClose={() => setOpenMysteryModal(false)}>
        <Modal.Header>Mystery Spinning Wheel</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
      </Modal>

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
                <div className="flex justify-center items-center">
                  <h1 className="my-5">
                    Card Pocket: {cardPocket ? cardPocket[0] : ''}
                  </h1>
                </div>
                <div className="flex flex-row justify-center items-center mt-10">
                  <h1 className="font-light text-gray-500">Your Dice</h1>
                  <div className="ml-10">
                    <Dice
                      size={100}
                      sound={'/sounds/dice_roll.mp3'}
                      onRoll={(value) => {
                        setIndex((prevIndex) => prevIndex + value);
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
