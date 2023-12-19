import { useState } from "react";

// IMAGE IMPORTS
import PAGE1IMAGE1 from "@/assets/world-communication-awards-for-best-digital-experience.png";
import PAGE1IMAGE2 from "@/assets/nexgtv-mobile-app-ui-design.png";
import PAGE1IMAGE3 from "@/assets/nexgtv-entertainment-mobile-app-development.png";

import PAGE2IMAGE1 from "@/assets/veme-blockchain-app-developed.png";
import PAGE2IMAGE2 from "@/assets/veme-app-ui-design.png";

import PAGE3IMAGE1 from "@/assets/nasa-mobile-app.png";
import PAGE3IMAGE2 from "@/assets/nasa-fitness-tracking-mobile-app.png";
import PAGE3IMAGE3 from "@/assets/measure-total-body-weight-through-fitness-app.png";

import PAGE4IMAGE1 from "@/assets/pizza_box.png";
import PAGE4IMAGE2 from "@/assets/ux-strategy-for-mobile-app-devlopment.png";
import PAGE4IMAGE3 from "@/assets/dominos-bread.png";
import PAGE4IMAGE4 from "@/assets/domi-img1.png";
import PAGE4IMAGE5 from "@/assets/dominos-bread1.png";

import PAGE5IMAGE1 from "@/assets/karavan-social-networking-app-screen.png";
import PAGE5IMAGE2 from "@/assets/karavan_2.png";
import PAGE5IMAGE3 from "@/assets/social-networking-app-case-study.png";
import PAGE5IMAGE4 from "@/assets/karavan-social-networking-app-screen-2.png";
import PAGE5IMAGE5 from "@/assets/developers-for-social-media-app.png";

import PAGE6IMAGE1 from "@/assets/interior.jpg";
import PAGE6IMAGE2 from "@/assets/erp-app-development-service.png";

import PAGE7IMAGE2 from "@/assets/melltoo-img1.png";
import PAGE7IMAGE3 from "@/assets/melltoo-img2.png";

const DesktopComponent = ({ scroll }) => {
  const leftColors = [
    "bg-purple-700",
    "bg-indigo-700",
    "bg-slate-900",
    "bg-slate-950",
    "bg-sky-600",
    "bg-blue-800",
    "bg-green-700",
  ];

  const rightColors = [
    "bg-neutral-300",
    "bg-indigo-950",
    "bg-slate-950",
    "bg-slate-900",
    "bg-sky-950",
    "bg-neutral-300",
    "bg-green-500",
  ];

  const [pos, setPos] = useState([
    [
      0, 0, 200, -200, 200, -200, -200, -200, -200, 200, 200, -200, 200, -200,
      200, 200, 200, 300, 200, 300,
    ],
    [
      100, 200, 10, -10, 200, 200, -200, -200, -200, 200, 200, -200, 200, -200,
      200, 200, 200, 300, 200, 300,
    ],
    [
      100, 200, 200, -200, 10, -10, -200, -200, -200, 200, 200, -200, 200, -200,
      200, 200, 200, 300, 200, 300,
    ],
    [
      100, 200, 200, -200, 200, -200, 0, 20, -20, 20, 10, -200, 200, -200, 200,
      200, 200, 300, 200, 300,
    ],
    [
      100, 200, 200, -200, 200, -200, -200, -200, -200, 200, 200, -20, -5, -10,
      10, 0, 200, 300, 200, 300,
    ],
    [
      100, 200, 200, -200, 200, -200, -200, -200, -200, 200, 200, -200, 200,
      -200, 200, 200, 0, 0, 200, 300,
    ],
    [
      100, 200, 200, -200, 200, -200, -200, -200, -200, 200, 200, -200, 200,
      -200, 200, 200, 200, 300, 20, 10,
    ],
  ]);

  if(scroll==undefined)return <></>

  return (
    <>
      {/* LEFT PLANE */}
      <div
        className={`relative w-2/5 py-8 px-16 flex flex-col justify-end items-start ${
          leftColors[Math.abs(scroll / 100)]
        } transition-colors duration-300`}
      >
        <div className=" h-1/2 flex flex-col gap-4">
          {/* IMAGES */}
          <div className="h-24 overflow-hidden">
            <div
              className="h-full flex flex-col transition duration-300"
              style={{ transform: `translateY(${scroll}%)` }}
            >
              <div className="h-full text-5xl shrink-0">
                <img className="h-full" src={PAGE1IMAGE1.src} />
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div className="h-16 overflow-hidden">
            <div
              className="h-full flex flex-col transition duration-300"
              style={{ transform: `translateY(${scroll}%)` }}
            >
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 123</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 234</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 345</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 456</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 567</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 678</p>
              </div>
              <div className="h-full text-5xl font-bold shrink-0">
                <p>ABC 789</p>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="h-28 overflow-hidden">
            <div
              className="h-full flex flex-col transition duration-300"
              style={{ transform: `translateY(${scroll}%)` }}
            >
              <div className="h-full shrink-0">
                <p>
                  we are the best
                  <br /> web development company
                  <br /> in the world
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  we are the best
                  <br /> web development company
                  <br />
                  in the world
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  we are the best
                  <br /> web development company <br />
                  in the world
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  we are the best <br /> web development company <br />
                  in the world
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  we are the best AR <br /> development company <br /> in the
                  world
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  Best Since 2017 <br /> We offer a wide range of <br /> web
                  development courses
                </p>
              </div>
              <div className="h-full shrink-0">
                <p>
                  we are the best
                  <br /> web development company
                  <br /> in the world
                </p>
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="h-12 overflow-hidden">
            <div
              className="h-full flex flex-col transition duration-300"
              style={{ transform: `translateY(${scroll}%)` }}
            >
              <div className="h-full shrink-0">
                <p>View Case Study</p>
              </div>
              <div className="h-full shrink-0">
                <p>Coming Soon</p>
              </div>
              <div className="h-full shrink-0">
                <p>View Case Study</p>
              </div>
              <div className="h-full shrink-0">
                <p>Coming Soon</p>
              </div>
              <div className="h-full shrink-0">
                <p>View Case Study</p>
              </div>
              <div className="h-full shrink-0">
                <p>View Case Study</p>
              </div>
              <div className="h-full shrink-0">
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 my-10 mx-16">SKIP</div>

        {/* PATH CIRCLE */}
        <div className="absolute top-12 flex justify-end ml-16 w-full ">
          <div
            className={`flex flex-col items-center z-10  justify-end rounded-full h-72 w-72 ${
              leftColors[Math.abs(scroll / 100)]
            } transition-colors duration-300`}
          ></div>
        </div>

        {/* PATH TEXT */}
        <div className="absolute top-28 flex w-full justify-end z-20">
          <div className="h-36 overflow-hidden">
            <div
              className="h-full w-fit flex flex-col transition duration-300"
              style={{ transform: `translateY(${scroll}%)` }}
            >
              <div className="path-slider-text-container">
                <p className="text-4xl text-right font-bold">25M+ Downloads</p>
                <p className="text-xl text-right">
                  on appstore & google playstore
                </p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-left">The Next Big</p>
                <p className="text-6xl font-bold">Blockchain</p>
                <p className="text-xl text-right">revolution</p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-left">Powered by advance</p>
                <img className="h-16" src={PAGE3IMAGE1.src} />
                <p className="text-xl text-right">algorithms</p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-left">Redefining</p>
                <p className="text-6xl font-bold">UX Strategy</p>
                <p className="text-xl text-right">and UI design</p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-xl text-left">Text Headline</p>
                <p className="text-5xl font-bold">Text Headline</p>
                <p className="text-xl text-right">Footer Headline</p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-xl text-left">Developing ERP Solution for</p>
                <p className="text-5xl font-bold">Text Headline</p>
                <p className="text-xl text-right">in furniture industry</p>
              </div>
              <div className="path-slider-text-container">
                <p className="text-xl text-left">Biggest Classifieds</p>
                <p className="text-6xl font-bold">East Asia</p>
                <p className="text-xl text-right">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANE */}
      <div
        className={`relative w-3/5 ${
          rightColors[Math.abs(scroll / 100)]
        } transition-colors duration-300 overflow-hidden `}
      >
        {/* PAGE 1 IMAGES */}
        <div className="absolute bottom-0 px-24 flex flex-col justify-end items-center w-full h-full">
          <div className="flex h-5/6">
            <div
              className={`h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][0]}%)`,
              }}
            >
              <img src={PAGE1IMAGE2.src} />
            </div>
            <div
              className={`h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][1]}%)`,
              }}
            >
              <img src={PAGE1IMAGE3.src} />
            </div>
          </div>
        </div>

        {/* PAGE 2 IMAGES */}
        <div className="absolute bottom-0 px-28 gap-16 flex w-full h-full">
          <div
            className={`flex items-end h-full transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][2]}%)`,
            }}
          >
            <img src={PAGE2IMAGE1.src} />
          </div>
          <div
            className={`flex items-start h-full transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][3]}%)`,
            }}
          >
            <img src={PAGE2IMAGE2.src} />
          </div>
        </div>

        {/* PAGE 3 IMAGES */}
        <div className="absolute bottom-0 px-28 gap-16 flex w-full h-full">
          <div
            className={`flex items-end h-full transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][4]}%)`,
            }}
          >
            <img src={PAGE3IMAGE2.src} />
          </div>
          <div
            className={`flex items-start h-full transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][5]}%)`,
            }}
          >
            <img src={PAGE3IMAGE3.src} />
          </div>
        </div>

        {/* PAGE 4 IMAGES */}
        <div className="absolute flex flex-col justify-between w-full h-full">
          <div className="flex w-full justify-between ">
            <div
              className={`transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][6]}%)`,
              }}
            >
              <img className="w-60 object-contain" src={PAGE4IMAGE1.src} />
            </div>
            <div className="flex px-16">
              <div
                className={`transition duration-300`}
                style={{
                  transform: `translateY(${pos[Math.abs(scroll / 100)][7]}%)`,
                }}
              >
                <img className="w-48 object-contain" src={PAGE4IMAGE2.src} />
              </div>
              <div
                className={`transition duration-300`}
                style={{
                  transform: `translateY(${pos[Math.abs(scroll / 100)][8]}%)`,
                }}
              >
                <img className="w-36 object-contain" src={PAGE4IMAGE3.src} />
              </div>
            </div>
          </div>
          <div className="flex justify-between px-24">
            <div
              className={`transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][9]}%)`,
              }}
            >
              <img className="w-48 object-contain" src={PAGE4IMAGE4.src} />
            </div>
            <div
              className={`flex items-end transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][10]}%)`,
              }}
            >
              <img className="w-72 object-contain" src={PAGE4IMAGE5.src} />
            </div>
          </div>
        </div>

        {/* PAGE 5 IMAGES */}
        <div className="absolute bottom-0 flex justify-center pl-24 w-full h-full">
          <div className="flex flex-col">
            <div
              className={`flex items-end h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][11]}%)`,
              }}
            >
              <img src={PAGE5IMAGE1.src} />
            </div>
            <div
              className={`flex items-start h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][12]}%)`,
              }}
            >
              <img src={PAGE5IMAGE2.src} />
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={`flex items-end h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][13]}%)`,
              }}
            >
              <img src={PAGE5IMAGE3.src} />
            </div>
            <div
              className={`flex items-start h-full transition duration-300`}
              style={{
                transform: `translateY(${pos[Math.abs(scroll / 100)][14]}%)`,
              }}
            >
              <img src={PAGE5IMAGE4.src} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className={`transition duration-300`}
              style={{
                transform: `translateX(${pos[Math.abs(scroll / 100)][15]}%)`,
              }}
            >
              <img src={PAGE5IMAGE5.src} />
            </div>
          </div>
        </div>

        {/* PAGE 6 IMAGES */}
        <div className="absolute flex flex-col justify-end items-center w-full h-full">
          <div
            className={`absolute inset-0 transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][16]}%)`,
            }}
          >
            <img className="w-full h-full object-cover" src={PAGE6IMAGE1.src} />
          </div>
          <div
            className={`h-full transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][17]}%)`,
            }}
          >
            <img src={PAGE6IMAGE2.src} />
          </div>
        </div>

        {/* PAGE 7 IMAGES */}
        <div className="absolute pl-48 -space-x-8 flex justify-end items-end w-full h-full">
          <div
            className={`transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][18]}%)`,
            }}
          >
            <img src={PAGE7IMAGE2.src} />
          </div>
          <div
            className={` transition duration-300`}
            style={{
              transform: `translateY(${pos[Math.abs(scroll / 100)][19]}%)`,
            }}
          >
            <img src={PAGE7IMAGE3.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopComponent;
