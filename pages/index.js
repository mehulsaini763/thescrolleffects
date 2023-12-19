import { Montserrat } from "next/font/google";

// METHODS IMPORTS
import DesktopComponent from "./components/DesktopComponent";
import MobileComponent from "./components/MobileComponent";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [scroll, setScroll] = useState(0);

  const next = () => {
    if (scroll == -600) {
      return;
    } else {
      setScroll(scroll - 100);
      setDragMove(scroll - 100);
    }
  };

  const prev = () => {
    if (scroll == 0) {
      return;
    } else {
      setScroll(scroll + 100);
      setDragMove(scroll + 100);
    }
  };

  const handleScroll = (e) => {
    e > 0 ? next() : prev();
  };

  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  return (
    <main
      className={`relative text-white flex min-h-screen ${montserrat.className}`}
      onWheel={(e) => handleScroll(e.deltaY)}
      onTouchStart={(e) => {
        setDragStart(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        setDragEnd(e.touches[0].clientX);
      }}
      onTouchEnd={() => {
        if (dragStart > dragEnd) {
          setDragCurrent(
            dragCurrent - 100 < -(7 * 100) + 100 ? -600 : dragCurrent - 100
          );
          setDragMove(
            dragCurrent - 100 < -(7 * 100) + 100 ? -600 : dragCurrent - 100
          );
          setScroll(dragMove);
        } else {
          setDragCurrent(dragCurrent + 100 > 0 ? 0 : dragCurrent + 100);
          setDragMove(dragCurrent + 100 > 0 ? 0 : dragCurrent + 100);
          setScroll(dragMove);
        }
      }}
    >
      <div className="hidden lg:flex w-full">
        <DesktopComponent scroll={scroll} />
      </div>
      <div className="flex flex-col w-full lg:hidden ">
        <MobileComponent scroll={scroll} dragMove={dragMove} />
      </div>
    </main>
  );
}
