import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const cardImages = [
    "archer_queen.png",
    "archers.png",
    "bandit.png",
    "barbarians.png",
    "bomber.png",
    "dart_goblin.png",
    "executioner.png",
    "giant_skeleton.png",
    "goblin_machine.png",
    "goblins.png",
    "golden_knight.png",
    "knight.png",
    "mega_knight.png",
    "pekka.png",
    "prince.png",
    "princess.png",
    "royal-ghost.png",
    "skeleton_king.png",
    "spear_goblins.png",
    "valkyrie.png",
  ];

  // 카드 선택/해제 토글
  const toggleCard = (cardImage: string) => {
    setSelectedCards((prev) =>
      prev.includes(cardImage)
        ? prev.filter((card) => card !== cardImage)
        : [...prev, cardImage]
    );
  };

  return (
    <div className="app">
      <h1>아래 카드를 고르세요.</h1>

      <p>선택된 카드: {selectedCards.length}개</p>

      <article className="choice-card-container">
        <div className="button-container">
          {cardImages.map((cardImage, index) => {
            const isSelected = selectedCards.includes(cardImage);

            return (
              <motion.div
                key={index}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isSelected ? 0.9 : 1,
                  rotateZ: isSelected ? -2 : 0,
                  opacity: isSelected ? 1 : 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="clash-card-button"
                  onClick={() => toggleCard(cardImage)}
                >
                  <motion.img
                    src={`/src/assets/${cardImage}`}
                    alt="카드"
                    className="clash-card-image"
                    animate={{
                      filter: isSelected ? "brightness(1.2)" : "brightness(1)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </article>

      {/* 선택된 카드들 목록 표시 */}
      <AnimatePresence>
        {selectedCards.length > 0 && (
          <motion.section
            className="selected-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>선택된 카드들:</h2>
            <div className="selected-cards-list">
              {selectedCards.map((cardImage) => (
                <img src={`/src/assets/${cardImage}`} alt="선택된 카드" />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
