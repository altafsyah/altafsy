"use client";

import { useEffect, useState } from "react";
import { GripIcon } from "./grip-icon";
import { cn } from "@/lib/utils";
import { useAnimate } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scopeContainer, animateContainer] = useAnimate();
  const [scopeButton, animateButton] = useAnimate();

  useEffect(() => {
    if (!scopeContainer.current || !scopeButton.current) return;

    animateContainer(
      scopeContainer.current,
      {
        opacity: isOpen ? 1 : 0,
        display: isOpen ? "block" : "none",
      },
      {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    );

    animateButton(scopeButton.current, {
      width: isOpen ? "300px" : 40,
      height: isOpen ? "400px" : 40,
      borderRadius: isOpen ? 16 : 4,
      position: isOpen ? "fixed" : "absolute",
      top: 0,
      left: 0,
      transform: isOpen
        ? "translate(50vw, 50vh) translate(-50%, -50%)"
        : "translate(calc(100vw - 80px), 20px)",
    });
  }, [isOpen, scopeContainer, scopeButton]);

  return (
    <nav className="h-20 sticky top-0 z-5">
      <div
        ref={scopeContainer}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="fixed w-screen transition-colors h-screen top-0 right-0 backdrop-blur-xs bg-black/10 z-40"
      />
      <div
        ref={scopeButton}
        className={cn(
          "rounded w-10 h-10 right-5 top-5 z-50 border border-white/20 bg-gray-500 absolute"
        )}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <GripIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
        {isOpen && (
          <div>
            <p>Pages</p>
            <ul className="mt-2">
              <li className="bg-gray-400 px-3 py-1">Home</li>
              <li>About</li>
              <li>Now</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
