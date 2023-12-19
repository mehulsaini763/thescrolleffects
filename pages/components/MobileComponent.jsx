import { useRef, useState } from "react";

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

import PAGE7IMAGE1 from "@/assets/mobile-app-of-the-year-by-entrepreneur.png";
import PAGE7IMAGE2 from "@/assets/melltoo-img1.png";
import PAGE7IMAGE3 from "@/assets/melltoo-img2.png";

const MobileComponent = ({ scroll, dragMove }) => {
  const drag = useRef(0);
  const [translate, setTranslate] = useState(drag.current);
  return (
    <>
      {/* PAGINATION */}
      <div className="z-40 fixed bottom-0 inset-x-0 flex justify-center gap-2 p-4">
        <div className={`rounded-full bg-neutral-200${scroll==0?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-100?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-200?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-300?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-400?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-500?"":"/50"} h-4 w-4`}></div>
        <div className={`rounded-full bg-neutral-200${scroll==-600?"":"/50"} h-4 w-4`}></div>
      </div>

      <div className="w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300"
          style={{ transform: `translateX(${dragMove}%)` }}
        >
          {/* PAGE 1 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-neutral-300">
              <div
                className="absolute -m-24 -space-x-16 inset-0 flex justify-center"
                style={{ transform: "translateX(10%)" }}
              >
                <div
                  style={{
                    transform: `translateY(40%)`,
                  }}
                >
                  <img src={PAGE1IMAGE2.src} alt="" />
                </div>
                <div
                  style={{
                    transform: `translateY(30%)`,
                  }}
                >
                  <img src={PAGE1IMAGE3.src} alt="" />
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-purple-700 z-10">
              <div className="flex flex-col w-full max-w-md px-8 h-full gap-4 -mt-2">
                <div className="w-5/6 max-w-[260px] bg-purple-700 p-1 rounded-md">
                  <img src={PAGE1IMAGE1.src} alt="" />
                </div>
                <div className="text-4xl font-bold">ABC 1</div>
                <div className="font-light">This is sample text for ABC 1</div>
                <div>View Case Study</div>
              </div>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-indigo-900">
              <div className="absolute inset-0 flex justify-center">
                <div
                  style={{
                    transform: `translateY(40%)`,
                  }}
                >
                  <img src={PAGE2IMAGE1.src} alt="" />
                </div>
                <div
                  style={{
                    transform: `translateY(-40%)`,
                  }}
                >
                  <img src={PAGE2IMAGE2.src} alt="" />
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-indigo-950 z-10">
              <div className="flex flex-col w-full max-w-md px-8 py-16  h-full gap-4">
                <div className="text-4xl font-bold">ABC 2</div>
                <div className="font-light">This is sample text for ABC 2</div>
                <div>
                  CASE STUDY -{" "}
                  <button className="bg-pink-600">Coming Soon</button>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE 3 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-slate-900">
              <div className="absolute inset-0 flex justify-center">
                <div
                  style={{
                    transform: `translateY(40%)`,
                  }}
                >
                  <img src={PAGE3IMAGE2.src} alt="" />
                </div>
                <div
                  style={{
                    transform: `translateY(-40%)`,
                  }}
                >
                  <img src={PAGE3IMAGE3.src} alt="" />
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-slate-950 z-10">
              <div className="flex flex-col w-full max-w-md px-8 py-16  h-full gap-4">
                <div className="text-4xl font-bold">ABC 3</div>
                <div className="font-light">This is sample text for ABC 3</div>
                <div>
                  CASE STUDY -{" "}
                  <button className="bg-white text-black">Coming Soon</button>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE 4 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-slate-950">
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="flex">
                  <div
                    style={{
                      transform: `translateY(0%)`,
                    }}
                  >
                    <img src={PAGE4IMAGE1.src} />
                  </div>
                  <div className="flex ">
                    <div
                      style={{
                        transform: `translateY(-20%)`,
                      }}
                    >
                      <img src={PAGE4IMAGE2.src} />
                    </div>
                    <div
                      style={{
                        transform: `translateY(0%)`,
                      }}
                    >
                      <img src={PAGE4IMAGE3.src} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div
                    style={{
                      transform: `translateY(-30%)`,
                    }}
                  >
                    <img src={PAGE4IMAGE4.src} />
                  </div>
                  <div
                    style={{
                      transform: `translateY(0%)`,
                    }}
                  >
                    <img src={PAGE4IMAGE5.src} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-slate-900 z-10">
              <div className="flex flex-col w-full max-w-md px-8 py-16  h-full gap-4">
                <div className="text-4xl font-bold">ABC 4</div>
                <div className="font-light">This is sample text for ABC 4</div>
                <div>View Case Study</div>
              </div>
            </div>
          </div>

          {/* PAGE 5 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-sky-600">
              <div className="absolute inset-0 flex justify-center">
                <div className="flex flex-col">
                  <div
                    style={{
                      transform: `translateY(-40%)`,
                    }}
                  >
                    <img src={PAGE5IMAGE1.src} alt="" />
                  </div>
                  <div
                    style={{
                      transform: `translateY(-40%)`,
                    }}
                  >
                    <img src={PAGE5IMAGE2.src} alt="" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    style={{
                      transform: `translateY(-20%)`,
                    }}
                  >
                    <img src={PAGE5IMAGE3.src} alt="" />
                  </div>
                  <div
                    style={{
                      transform: `translateY(-20%)`,
                    }}
                  >
                    <img src={PAGE5IMAGE4.src} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div>
                    <img src={PAGE5IMAGE5.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-sky-950 z-10">
              <div className="flex flex-col w-full max-w-md px-8 py-16  h-full gap-4">
                <div className="text-4xl font-bold">ABC 5</div>
                <div className="font-light">This is sample text for ABC 5</div>
                <div>View Case Study</div>
              </div>
            </div>
          </div>

          {/* PAGE 6 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center ">
              <div className="absolute inset-0">
                <div className="absolute inset-0">
                  <img
                    className=" object-cover h-full"
                    src={PAGE6IMAGE1.src}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0">
                  <img src={PAGE6IMAGE2.src} alt="" />
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-blue-800 z-10">
              <div className="flex flex-col w-full max-w-md px-8 py-16  h-full gap-4">
                <div className="text-4xl font-bold">ABC 6</div>
                <div className="font-light">This is sample text for ABC 6</div>
                <div>View Case Study</div>
              </div>
            </div>
          </div>

          {/* PAGE 7 */}
          <div className="shrink-0 flex flex-col w-full h-full">
            <div className="relative h-1/2 flex justify-center bg-green-700">
              <div
                className="absolute inset-0 -space-x-16 flex justify-center"
                style={{ transform: "translateX(5%)" }}
              >
                <div
                  style={{
                    transform: `translateY(30%)`,
                  }}
                >
                  <img src={PAGE7IMAGE2.src} alt="" />
                </div>
                <div
                  style={{
                    transform: `translateY(50%)`,
                  }}
                >
                  <img src={PAGE7IMAGE3.src} alt="" />
                </div>
              </div>
            </div>
            <div className="h-1/2 flex justify-center bg-green-500 z-10">
              <div className="flex flex-col w-full max-w-md px-8 h-full gap-4 -mt-2">
                <div className="w-5/6 max-w-[260px] bg-green-500 p-1 rounded-md">
                  <img src={PAGE7IMAGE1.src} alt="" />
                </div>
                <div className="text-4xl font-bold">ABC 7</div>
                <div className="font-light">This is sample text for ABC 7</div>
                <div>
                  CASE STUDY -{" "}
                  <button className="bg-white text-black">Coming Soon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileComponent;
