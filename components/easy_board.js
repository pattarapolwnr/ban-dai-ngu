import Image from 'next/image';
import { SpriteAnimator } from 'react-sprite-animator';
import { Spinner } from 'flowbite-react';

export const EasyBoard = () => {
  return (
    <div className="ml-10 grid grid-cols-12 gap-2 text-center relative">
      <div className="flex flex-col justify-center items-center px-6 py-6 rounded-lg bg-gradient-to-b from-yellow-100 to-yellow-400 ">
        <h1 className="">50</h1>
        <h1 className="">Finish</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">49</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[50px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">48</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">47</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">46</h1>
        <h1 className="text-xs">Monster</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">45</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">44</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">43</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[50px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">42</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">41</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">40</h1>
        <h1 className="text-xs">Monster</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">39</h1>
      </div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="relative h-24 flex flex-col justify-center items-center bg-gradient-to-b from-red-300 to-red-600 rounded-lg shadow-lg px-6 py-6">
        <h1 className="absolute z-50 text-white top-1 text-xs">38</h1>
        <h1 className="absolute z-50 text-white bottom-1 text-xs">trap</h1>
        <div className="absolute bottom-[28px]">
          <SpriteAnimator
            sprite="/sprites/fire_trap.png"
            width={32}
            height={41}
            fps={12}
            scale={0.5}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">26</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">27</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-red-300 to-red-600 rounded-lg shadow-lg px-6 py-6">
        <h1 className="absolute z-50 text-white top-1 text-xs">28</h1>
        <h1 className="absolute z-50 text-white bottom-1 text-xs">trap</h1>
        <div className="absolute bottom-[28px]">
          <SpriteAnimator
            sprite="/sprites/fire_trap.png"
            width={32}
            height={41}
            fps={12}
            scale={0.5}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">29</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">30</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">31</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[60px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">32</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">33</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">34</h1>
        <h1 className="text-xs">Monster</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">35</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">36</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">37</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">25</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[60px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">24</h1>
        <h1 className="text-xs">Monster</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">23</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-red-300 to-red-600 rounded-lg shadow-lg px-6 py-6">
        <h1 className="absolute z-50 text-white top-1 text-xs">22</h1>
        <h1 className="absolute z-50 text-white bottom-1 text-xs">trap</h1>
        <div className="absolute bottom-[28px]">
          <SpriteAnimator
            sprite="/sprites/fire_trap.png"
            width={32}
            height={41}
            fps={12}
            scale={0.5}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">21</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">20</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">19</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[60px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">18</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-red-300 to-red-600 rounded-lg shadow-lg px-6 py-6">
        <h1 className="absolute z-50 text-white top-1 text-xs">17</h1>
        <h1 className="absolute z-50 text-white bottom-1 text-xs">trap</h1>
        <div className="absolute bottom-[28px]">
          <SpriteAnimator
            sprite="/sprites/fire_trap.png"
            width={32}
            height={41}
            fps={12}
            scale={0.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">16</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">15</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">14</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-red-300 to-red-600 rounded-lg shadow-lg px-6 py-6">
        <h1 className="absolute z-50 text-white top-1 text-xs">13</h1>
        <h1 className="absolute z-50 text-white bottom-1 text-xs">trap</h1>
        <div className="absolute bottom-[28px]">
          <SpriteAnimator
            sprite="/sprites/fire_trap.png"
            width={32}
            height={41}
            fps={12}
            scale={0.5}
          />
        </div>
      </div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="px-6 py-6"></div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">12</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="px-6 py-6"></div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-yellow-100 to-yellow-400  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">1</h1>
        <h1 className="">Start</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">2</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">3</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">4</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">5</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">6</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-purple-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">7</h1>
        <h1 className="text-xs">Mystery</h1>
        <div className="absolute bottom-[60px]">
          <SpriteAnimator
            sprite="/sprites/random_box.png"
            width={32}
            height={32}
            fps={6}
            scale={0.5}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-cyan-500  rounded-lg shadow-lg px-6 py-6">
        <h1 className="">8</h1>
        <h1 className="">Card</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">9</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-400 rounded-lg shadow-lg px-6 py-6">
        <h1 className="">10</h1>
        <h1 className="text-xs">Monster</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-6 py-6">
        <h1 className="">11</h1>
      </div>
      {/* Tile 10 Go to Tile 14 */}
      <div className="absolute bottom-[68px] right-[65px]">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_dYH2"
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="0;spinner_2BXs.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_novB"
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_2BXs"
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
        </svg>
      </div>
      {/* <Image
        src={'/images/ladder.png'}
        width={43}
        height={100}
        className="absolute bottom-[98px] right-[82px]"
        quality={90}
      /> */}
      {/* Tile 21 Go to Tile 27 */}
      <div className="absolute bottom-[275px] left-[210px]">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_dYH2"
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="0;spinner_2BXs.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_novB"
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_2BXs"
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
        </svg>
      </div>
      {/* <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[275px] left-[200px] -rotate-[45deg] brightness-50"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[350px] left-[125px] -rotate-[45deg] brightness-50"
        quality={90}
      /> */}
      {/* Tile 24 Go to Tile 29 */}
      <div className="absolute bottom-[260px]">
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_dYH2"
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="0;spinner_2BXs.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_novB"
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_2BXs"
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
        </svg>
      </div>
      {/* <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[270px] left-[75px] rotate-[55deg] brightness-75"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[331px] left-[163px] rotate-[55deg] brightness-125"
        quality={90}
      /> */}
      {/* Tile 30 Go to Tile 39 */}
      <div className="absolute bottom-[482px] left-[290px]">
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_dYH2"
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="0;spinner_2BXs.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_novB"
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_2BXs"
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
        </svg>
      </div>
      {/* <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[442px] left-[370px] rotate-[70deg] brightness-50"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[475px] left-[460px] rotate-[70deg] brightness-75"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[508px] left-[550px] rotate-[70deg] brightness-100"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[541px] left-[640px] rotate-[70deg] brightness-125"
        quality={90}
      />
      <Image
        src={'/images/ladder.png'}
        width={43}
        height={150}
        className="absolute bottom-[574px] left-[730px] rotate-[70deg] brightness-150"
        quality={90}
      /> */}
      {/* Tile 41 to 47 */}
      <div className="absolute top-0 right-[140px]">
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_dYH2"
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="0;spinner_2BXs.end"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="0;spinner_2BXs.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_novB"
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.2s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            transform="translate(12, 12) scale(0)"
          >
            <animateTransform
              id="spinner_2BXs"
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              type="translate"
              dur="1.2s"
              values="12 12;0 0"
              keySplines=".52,.6,.25,.99"
            />
            <animateTransform
              begin="spinner_dYH2.begin+0.4s"
              attributeName="transform"
              calcMode="spline"
              additive="sum"
              type="scale"
              dur="1.2s"
              values="0;1"
              keySplines=".52,.6,.25,.99"
            />
            <animate
              begin="spinner_dYH2.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default EasyBoard;
