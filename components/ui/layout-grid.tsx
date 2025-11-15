"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-0.5 md:p-1 lg:p-1.5 grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-1 md:gap-1.5 relative min-h-[200px] md:min-h-[250px]">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[140px] md:min-h-[180px] lg:min-h-[200px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg absolute inset-0 h-full w-full m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && (
              <>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-[80] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
                  aria-label="Cerrar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <SelectedCard selected={selected} />
              </>
            )}
            {selected?.id !== card.id && <BlurOverlay card={card} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-center absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};

const BlurOverlay = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`blur-${card.id}`}
      className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-20 flex items-end p-1.5 md:p-2"
    >
      <h3 className="text-white font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ fontSize: '24px' }}>
        {card.title}
      </h3>
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-start items-start rounded-lg shadow-2xl relative z-[60] pt-4 pl-4">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70] text-left"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
