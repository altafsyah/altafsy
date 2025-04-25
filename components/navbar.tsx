"use client";

import { useEffect, useState } from "react";
import { GripIcon } from "./grip-icon";
import { cn } from "@/lib/utils";
import { useAnimate } from "motion/react";
import Link from "next/link";
import { EarthIcon } from "./earth-icon";
import { BananaIcon } from "./banana-icon";

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
        stiffness: 150,
        damping: 10,
        duration: 250,
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
          "rounded w-10 h-10 right-5 top-5 z-50 border border-white/30 shadow shadow-white/20 bg-black/40 absolute"
        )}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <GripIcon
            className={cn(
              "absolute",
              isOpen
                ? "top-1 right-1"
                : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          />
        </button>
        {isOpen && (
          <section className="mt-5">
            <div>
              <p className="px-6 text-xs text-gray-300">Pages</p>
              <ul className="mt-1 mx-3 text-sm">
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/" className="flex items-center">
                    <EarthIcon size={18} />
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about" className="flex items-center">
                    <BananaIcon size={18} />
                    <span>About</span>
                  </Link>
                </li>
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="writings" className="flex items-center">
                    <BananaIcon size={18} />
                    <span>Writings</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <p className="px-6 text-xs text-gray-300">Me</p>
              <ul className="mt-1 mx-3 text-sm">
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="books" className="flex items-center">
                    <EarthIcon size={18} />
                    <span>Goods</span>
                  </Link>
                </li>
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="uses" className="flex items-center">
                    <BananaIcon size={18} />
                    <span>Uses</span>
                  </Link>
                </li>
                <li
                  className="hover:bg-white/30 rounded link"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="now" className="flex items-center">
                    <BananaIcon size={18} />
                    <span>Now</span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};
