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
import Board, { HardBoard } from '@/components/hard_board';
import Dice from 'react-dice-roll';
import check_landing, { check_isTeleport } from '@/utils/check_landing';
import { Button, Modal } from 'flowbite-react';
import WheelComponent from 'react-wheel-of-prizes';
import footstep from '../public/sounds/sfx/footstep.mp3';
import spin from '../public/sounds/sfx/spin.mp3';
import player_attack from '../public/sounds/sfx/player_attack.mp3';
import monster_attack from '../public/sounds/sfx/monster_attack.mp3';
import reduce_heart from '../public/sounds/sfx/reduce_heart.mp3';
import receive_card from '../public/sounds/sfx/receive_card.mp3';
import win from '../public/sounds/sfx/win.mp3';
import lose from '../public/sounds/sfx/lose.mp3';
import heal from '../public/sounds/sfx/heal.mp3';
import { EasyBoard } from '@/components/easy_board';
import MediumBoard from '@/components/medium_board';
import warp from '../public/sounds/sfx/warp.mp3';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Play() {
  const router = useRouter();
  const mode = router.query.mode;
  const [maxHP, setMaxHP] = useState(7);
  const [maxMonsterHP, setMaxMonsterHP] = useState(1);
  const [HP, setHP] = useState(3);
  const [monsterHP, setMonsterHP] = useState(1);
  const [HP_Bar, setHP_Bar] = useState([]);
  const [monsterHP_Bar, setMonsterHP_Bar] = useState([]);
  const character = router.query.character;
  const [cardPocket, setCardPocket] = useState([]);
  const [landingEffect, setLandingEffect] = useState('');
  const [teleportTo, setTeleportTo] = useState(0);

  //sound
  const [playFootstep] = useSound(footstep);
  const [playSpin] = useSound(spin);
  const [playPlayerAttack] = useSound(player_attack);
  const [playMonsterAttack] = useSound(monster_attack);
  const [playReduceHeart] = useSound(reduce_heart);
  const [playReceiveCard] = useSound(receive_card);
  const [playHeal] = useSound(heal);
  const [playWin] = useSound(win);
  const [playLose] = useSound(lose);

  //Character Position
  const [index, setIndex] = useState(1);
  const [position, setPosition] = useState({ top: 610, left: 120 });

  //Modal State
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openTrapModal, setOpenTrapModal] = useState(false);
  const [openMysteryModal, setOpenMysteryModal] = useState(false);
  const [openAngelCard, setOpenAngelCard] = useState(false);
  const [openMonsterModal, setOpenMonsterModal] = useState(false);
  const [openTeleportModal, setOpenTeleportModal] = useState(false);

  //use Angel Card
  const [isUseAngelCard, setIsUseAngelCard] = useState(false);

  //Battle state
  const [playerDiceNumber, setPlayerDiceNumber] = useState(0);
  const [monsterDiceNumber, setMonsterDiceNumber] = useState(0);

  //sound
  const [playWarpSound] = useSound(warp);

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
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
  ];

  // Cards
  const cards_segments = [
    'Increase HP 1 Point',
    'Angel Card',
    'Double Damage',
    // 'Go Ahead 1 block',
    'Increase HP 2 Point',
    // 'Go Ahead 3 blocks',
    // 'Go Ahead 2 blocks',
    'Increase HP 1 Point',
  ];

  const displayCardEffect = (effect) => {
    if (effect === 'Increase HP 1 Point') {
      playHeal();
      // Check HP is full?
      if (HP == maxHP) {
        return;
      } else {
        setHP((prevHP) => prevHP + 1);
      }
    } else if (effect === 'Angel Card') {
      playReceiveCard();
      // Check card Pocket is empty?
      if (cardPocket.length === 0) {
        const newCardPocket = [...cardPocket, 'Angel Card'];
        setCardPocket(newCardPocket);
      } else {
        setCardPocket(['Angel Card']);
      }
    } else if (effect === 'Double Damage') {
      playReceiveCard();
      // Check card Pocket is empty?
      if (cardPocket.length === 0) {
        const newCardPocket = [...cardPocket, 'Double Damage'];
        setCardPocket(newCardPocket);
      } else {
        setCardPocket(['Double Damage']);
      }
      // } else if (effect === 'Go Ahead 1 block') {
      //   setIndex((prevIndex) => prevIndex + 1);
    } else if (effect === 'Increase HP 2 Point') {
      playHeal();
      // Check HP is full?
      if (HP == maxHP) {
        return;
      } else if (HP + 2 <= maxHP) {
        setHP((prevHP) => prevHP + 2);
      } else {
        setHP(maxHP);
        return;
      }
      // } else if (effect === 'Go Ahead 3 blocks') {
      //   setIndex((prevIndex) => prevIndex + 3);
      //   playFootstep();
      // } else if (effect === 'Go Ahead 2 blocks') {
      //   setIndex((prevIndex) => prevIndex + 2);
      //   playFootstep();
    }
  };

  // check is there a double damage card
  const checkDoubleDamage = () => {
    //Check is there a card in pocket?
    if (cardPocket.length > 0) {
      // Check is it a double damage card?
      if (cardPocket[0] === 'Double Damage') {
        return true;
      }
    }
    return false;
  };

  const cards_onFinished = (winner) => {
    setTimeout(() => {
      alert(winner);
    }, 500);
    setTimeout(() => {
      setOpenCardModal(false);
    }, 2000);
    setTimeout(() => {
      displayCardEffect(winner);
    }, 2000);
  };

  // Angel Card
  const useAngelCard = () => {
    setTimeout(() => {
      setOpenAngelCard(false);
      setIsUseAngelCard(true);
      setOpenTrapModal(false);
      setCardPocket([]);
    }, 500);
  };

  // Mystery
  const mystery_segments = [
    'Trap',
    'Trap',
    'Card',
    'Trap',
    'Card',
    'Card',
    'Trap',
    'Card',
  ];

  const mystery_onFinished = (winner) => {
    setTimeout(() => {
      alert(winner);
    }, 500);
    setTimeout(() => {
      setOpenMysteryModal(false);
    }, 2000);
    if (winner === 'Trap') {
      setTimeout(() => {
        setOpenTrapModal(true);
      }, 2000);
      if (!isUseAngelCard) {
        setTimeout(() => {
          playSpin();
        }, 4000);
      }
    } else if (winner === 'Card') {
      setTimeout(() => {
        setOpenCardModal(true);
      }, 2000);
      setTimeout(() => {
        playSpin();
      }, 4000);
    }
  };

  //Traps
  const traps_segments = [
    'Reduce 1 heart',
    'Restart',
    'Walk back 1 block',
    'Reduce 2 heart',
    'Walk back 2 blocks',
    'Reduce 3 heart',
    'Walk back 3 blocks',
    'Walk back 4 blocks',
    'Reduce 1 heart',
  ];

  const displayTrapEffect = (effect) => {
    const teleport = check_isTeleport(index, mode);
    if (effect === 'Restart') {
      setIndex(1);
    } else if (effect === 'Reduce 1 heart') {
      setHP((prevHP) => prevHP - 1);
      setTimeout(() => {
        playReduceHeart();
      }, 500);
    } else if (effect === 'Reduce 2 heart') {
      setHP((prevHP) => prevHP - 2);
      setTimeout(() => {
        playReduceHeart();
      }, 500);
    } else if (effect === 'Reduce 3 heart') {
      setHP((prevHP) => prevHP - 3);
      setTimeout(() => {
        playReduceHeart();
      }, 500);
    } else if (effect === 'Walk back 1 block') {
      setIndex((prevIndex) => prevIndex - 1);
      playFootstep();
    } else if (effect === 'Walk back 2 blocks') {
      setIndex((prevIndex) => prevIndex - 2);
      playFootstep();
    } else if (effect === 'Walk back 3 blocks') {
      setIndex((prevIndex) => prevIndex - 3);
      playFootstep();
    } else if (effect === 'Walk back 4 blocks') {
      setIndex((prevIndex) => prevIndex - 4);
      playFootstep();
    }
    if (teleport.isTeleport) {
      setOpenTeleportModal(true);
    }
  };

  const traps_onFinished = (winner) => {
    setTimeout(() => {
      alert(winner);
    }, 500);
    setTimeout(() => {
      setOpenTrapModal(false);
    }, 2000);
    setTimeout(() => {
      displayTrapEffect(winner);
    }, 2000);
  };

  //handle warp
  const handleWarp = () => {
    const teleport = check_isTeleport(index, mode);
    const { isTeleport, teleport_to } = teleport;
    if (isTeleport) {
      setOpenTeleportModal(false);
      setIndex(teleport_to);
      playWarpSound();
    }
    return;
  };

  //Reset battle dice
  const resetBattleDices = () => {
    setPlayerDiceNumber(0);
    setMonsterDiceNumber(0);
  };

  //Dice number & Battle Handling
  useEffect(() => {
    if (playerDiceNumber > 0 && monsterDiceNumber > 0) {
      //check there is a double damage card?
      if (checkDoubleDamage()) {
        if (playerDiceNumber > monsterDiceNumber) {
          playPlayerAttack();
          //Check Monster HP = 2?
          if (monsterHP <= 2) {
            const teleport = check_isTeleport(index, mode);
            alert('Player wins this battle');
            setMonsterHP(maxMonsterHP);
            setCardPocket([]);
            setTimeout(() => {
              setOpenMonsterModal(false);
              if (teleport.isTeleport) {
                setOpenTeleportModal(true);
              }
            }, 1000);
            resetBattleDices();
            return;
          } else {
            alert('Player wins this turn');
            setMonsterHP((prevHP) => prevHP - 2);
            resetBattleDices();
            return;
          }
        } else if (playerDiceNumber < monsterDiceNumber) {
          playMonsterAttack();
          alert('Monster wins this turn');
          setHP((prevHP) => prevHP - 1);
          resetBattleDices();
          return;
        } else {
          //eaual Dice number
          return;
        }
      } else {
        // No Double Damage card
        if (playerDiceNumber > monsterDiceNumber) {
          playPlayerAttack();
          //Check Monster HP = 1?
          if (monsterHP === 1) {
            const teleport = check_isTeleport(index, mode);
            alert('Player wins this battle');
            setCardPocket([]);
            setTimeout(() => {
              setMonsterHP(maxMonsterHP);
              setOpenMonsterModal(false);
              if (teleport.isTeleport) {
                setOpenTeleportModal(true);
              }
            }, 500);
            resetBattleDices();
            return;
          } else {
            alert('Player wins this turn');
            setMonsterHP((prevHP) => prevHP - 1);
            resetBattleDices();
            return;
          }
        } else if (playerDiceNumber < monsterDiceNumber) {
          playMonsterAttack();
          alert('Monster wins this turn');
          setHP((prevHP) => prevHP - 1);
          resetBattleDices();
          return;
        } else {
          //eaual Dice number
          resetBattleDices();
          return;
        }
      }
    }
  }, [playerDiceNumber, monsterDiceNumber]);

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
    const generateMonsterHP_Bar = () => {
      let hp_bar = [];
      // generate HP Bar
      for (let index = 0; index < monsterHP; index++) {
        hp_bar.push(
          <FontAwesomeIcon
            icon={faHeart}
            beat
            style={{ fontSize: '32px', color: '#AFE1AF' }}
            key={index}
          />
        );
      }
      setMonsterHP_Bar(hp_bar);
    };

    if (mode === 'easy') {
      setMaxHP(7);
      setHP(7);
      setMonsterHP(1);
      setMaxMonsterHP(1);
      generateHP_Bar();
      generateMonsterHP_Bar();
    } else if (mode === 'medium') {
      setMaxHP(5);
      setHP(5);
      setMonsterHP(2);
      setMaxMonsterHP(2);
      generateHP_Bar();
      generateMonsterHP_Bar();
    } else {
      setMaxHP(3);
      setHP(3);
      setMonsterHP(2);
      setMaxMonsterHP(2);
      generateHP_Bar();
      generateMonsterHP_Bar();
    }
  }, [maxHP, maxMonsterHP]);

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
    const generateMonsterHP_Bar = () => {
      let hp_bar = [];
      // generate HP Bar
      for (let index = 0; index < monsterHP; index++) {
        hp_bar.push(
          <FontAwesomeIcon
            icon={faHeart}
            beat
            style={{ fontSize: '32px', color: '#AFE1AF' }}
            key={index}
          />
        );
      }
      setMonsterHP_Bar(hp_bar);
    };
    generateHP_Bar();
    generateMonsterHP_Bar();
    if (HP <= 0) {
      playLose();
      setOpenMonsterModal(false);
      setTimeout(() => {
        alert('Game Over !');
      }, 750);
      setTimeout(() => {
        router.push('/gameover');
      }, 2000);
    }
  }, [HP, monsterHP]);

  // Change Character Position
  useEffect(() => {
    const changePositionFromDice = () => {
      if (index <= 11) {
        const start = 1;
        const left = 120 + (index - start) * 72;
        setPosition({ top: 610, left: left });
        setLandingEffect(check_landing(index, mode));
        return;
      } else if (index === 12) {
        setPosition({ top: 510, left: 840 });
        setLandingEffect(check_landing(index, mode));
        return;
      } else if (index > 12 && index <= 24) {
        let start = 13;
        if (index === 13) {
          setPosition({ top: 410, left: 840 });
          setLandingEffect(check_landing(index, mode));
          return;
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 410, left: left });
          setLandingEffect(check_landing(index, mode));
          return;
        }
      } else if (index === 25) {
        setPosition({ top: 310, left: 48 });
        setLandingEffect(check_landing(index, mode));
        return;
      } else if (index > 25 && index <= 37) {
        let start = 26;
        if (index === 26) {
          setPosition({ top: 210, left: 48 });
          setLandingEffect(check_landing(index, mode));
          return;
        } else {
          const left = 48 + (index - start) * 72;
          setPosition({ top: 210, left: left });
          setLandingEffect(check_landing(index, mode));
          return;
        }
      } else if (index === 38) {
        setPosition({ top: 110, left: 840 });
        setLandingEffect(check_landing(index, mode));
        return;
      } else if (index > 38 && index <= 49) {
        let start = 39;
        if (index === 39) {
          setPosition({ top: 40, left: 840 });
          setLandingEffect(check_landing(index, mode));
          return;
        } else {
          const left = 840 - (index - start) * 72;
          setPosition({ top: 40, left: left });
          setLandingEffect(check_landing(index, mode));
          return;
        }
      } else {
        setPosition({ top: 40, left: 48 });
        setTimeout(() => {
          alert('Congratulations! You win the game');
        }, 1000);
        playWin();
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    };
    playFootstep();
    changePositionFromDice();
  }, [index]);

  // Cards Effect
  useEffect(() => {
    if (landingEffect === 'cards') {
      setTimeout(() => {
        setOpenCardModal(true);
      }, 500);
      setTimeout(() => {
        playSpin();
      }, 2000);
      setLandingEffect('');
      return;
    } else if (landingEffect === 'traps') {
      if (cardPocket.length > 0) {
        if (cardPocket[0] === 'Angel Card') {
          setTimeout(() => {
            setOpenAngelCard(true);
          }, 500);

          if (isUseAngelCard) {
            setLandingEffect('');
            setIsUseAngelCard(false);
            return;
          }
        }
      }
      setTimeout(() => {
        setOpenTrapModal(true);
      }, 500);
      setTimeout(() => {
        playSpin();
      }, 2000);
      setLandingEffect('');
      return;
    } else if (landingEffect === 'mystery') {
      setTimeout(() => {
        setOpenMysteryModal(true);
      }, 500);
      setTimeout(() => {
        playSpin();
      }, 2000);
      setLandingEffect('');
      return;
    } else if (landingEffect === 'monster') {
      setTimeout(() => {
        setOpenMonsterModal(true);
      }, 500);
      setLandingEffect('');
      return;
    } else if (landingEffect === 'empty') {
      const teleport = check_isTeleport(index, mode);
      if (teleport.isTeleport) {
        setTeleportTo(teleport.teleport_to);
        setTimeout(() => {
          setOpenTeleportModal(true);
        }, 500);
      }
      setLandingEffect('');
      return;
    }
  }, [landingEffect, teleportTo]);

  // Shuffle array function
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <Head>
        <title>BanDaiNgu Board Game</title>
      </Head>
      <Sound
        url="/sounds/gameplay.mp3"
        playStatus={Sound.status.PLAYING}
        loop
        volume={15}
        playFromPosition={45}
      />
      {/* Card Modal */}
      <Modal show={openCardModal} size={'2xl'} popup>
        <Modal.Header>Card Spinning Wheel</Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="max-w-xl">
            <WheelComponent
              segments={shuffle(cards_segments)}
              segColors={segColors}
              onFinished={(winner) => {
                cards_onFinished(winner);
              }}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              size={250}
              upDuration={500}
              downDuration={200}
              fontFamily="Arial"
              className="spinning-wheels"
            />
          </div>
        </Modal.Body>
      </Modal>

      {/* Trap Modal */}
      <Modal show={openTrapModal} popup>
        <Modal.Header>Trap Spinning Wheel</Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="max-w-xl">
            <WheelComponent
              segments={shuffle(traps_segments)}
              segColors={segColors}
              onFinished={(winner) => traps_onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              size={250}
              upDuration={500}
              downDuration={200}
              fontFamily="Arial"
              className="spinning-wheels"
            />
          </div>
        </Modal.Body>
      </Modal>

      {/* Mystery Modal */}
      <Modal show={openMysteryModal} popup>
        <Modal.Header>Mystery Spinning Wheel</Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="max-w-xl">
            <WheelComponent
              segments={shuffle(mystery_segments)}
              segColors={segColors}
              onFinished={(winner) => mystery_onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              size={250}
              upDuration={500}
              downDuration={200}
              fontFamily="Arial"
              className="spinning-wheels"
            />
          </div>
        </Modal.Body>
      </Modal>

      {/* Angel Card Modal */}
      <Modal show={openAngelCard} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Do you want to use an "Angel Card"? (To skip this trap)
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => useAngelCard()}>
                Yes
              </Button>
              <Button color="gray" onClick={() => setOpenAngelCard(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Teleport Modal */}
      <Modal show={openTeleportModal} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Do you want to teleport?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="success"
                onClick={() => {
                  handleWarp();
                }}
              >
                Yes
              </Button>
              <Button color="gray" onClick={() => setOpenTeleportModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Battle with Monster Modal */}
      <Modal show={openMonsterModal} size="4xl" popup>
        <Modal.Header />
        <Modal.Body>
          <Sound
            url="/sounds/battle.mp3"
            playStatus={Sound.status.PLAYING}
            loop
            volume={35}
          />
          <div className="flex flex-col justify-center items-center text-gray-800 dark:text-gray-300">
            {/* Title */}
            <h1>
              <span className="text-xl font-semibold">
                Battle with monster!
              </span>{' '}
              <span className="font-light">(Press enter to roll dice)</span>
            </h1>
            {/* Body */}
            <div className="flex flex-row justify-center items-center my-10">
              {/* Player */}
              <div className="flex flex-col justify-center items-center w-80">
                <h1>Player</h1>
                <div className="grid grid-cols-3 gap-3 my-4 h-28">{HP_Bar}</div>
                <div className="flex justify-center items-center my-10">
                  <Dice
                    size={150}
                    sound={'/sounds/dice_roll.mp3'}
                    onRoll={(value) =>
                      setTimeout(() => setPlayerDiceNumber(value), 700)
                    }
                    triggers={['Enter']}
                  />
                </div>
              </div>
              {/* Monster */}
              <div className="flex flex-col justify-center items-center w-80">
                <h1>Monster</h1>
                <div className="grid grid-cols-3 gap-3 my-4 h-28">
                  {monsterHP_Bar}
                </div>
                <div className="flex justify-center items-center my-10">
                  <Dice
                    size={150}
                    onRoll={(value) =>
                      setTimeout(() => setMonsterDiceNumber(value), 700)
                    }
                    triggers={['Enter']}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`${righteous.className} relative flex flex-col m-6 shadow-2xl rounded-2xl bg-white w-gamewidth h-gameheight`}
        >
          <div className="flex justify-center items-center w-full px-10 py-1">
            {/* Left Section */}
            <div className="flex flex-col w-1/4 justify-center items-center text-gray-950">
              <div className="flex flex-col  space-y-20">
                <div className="flex flex-row space-x-10 justify-center items-center">
                  <h1>Your HP</h1>
                  <div className="grid grid-cols-3 gap-4">{HP_Bar}</div>
                </div>
                <div className="flex justify-start items-center">
                  <h1 className="">
                    Card Pocket: {cardPocket ? cardPocket[0] : ''}
                  </h1>
                </div>
                <div className="flex flex-row justify-center items-center">
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
              </div>
            </div>

            {/* Board */}
            <div className="relative flex w-3/4 text-gray-950">
              {mode === 'easy' ? <EasyBoard /> : <div className="hidden"></div>}
              {mode === 'medium' ? (
                <MediumBoard />
              ) : (
                <div className="hidden"></div>
              )}
              {mode === 'hard' ? <HardBoard /> : <div className="hidden"></div>}

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
