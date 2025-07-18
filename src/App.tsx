import Card from "@/components/Card";
import Tactics from "@/components/Tactics";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircleIcon, XIcon, Heart, Sword, Droplet } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getCardById } from "./data/cards";
import { getActiveSynergies } from "./data/tactics";
import "./App.css";

const App = () => {
  const cardImages = [
    "archer",
    "archerqueen",
    "bandit",
    "barbarian",
    "bomber",
    "dartgoblin",
    "executioner",
    "giantskeleton",
    "goblin",
    "goblinmachine",
    "goldenknight",
    "knight",
    "megaknight",
    "pekka",
    "prince",
    "princess",
    "royalghost",
    "skeletonking",
    "speargoblin",
    "valkyrie",
  ];
  const tactics = [
    "ace",
    "assassin",
    "avenger",
    "brawler",
    "clan",
    "goblin",
    "juggernaut",
    "noble",
    "ranger",
    "thrower",
    "undead",
  ];

  const [cardCounts, setCardCounts] = useState<Record<string, number>>({});
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (isAlert) {
      const timer = setTimeout(() => {
        setIsAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAlert]);

  function handleCardClick(cardImage: string) {
    const isCardAlreadySelected = cardCounts[cardImage] > 0;

    if (!isCardAlreadySelected && Object.keys(cardCounts).length >= 6) {
      setIsAlert(true);
      return;
    }

    setCardCounts((prev) => {
      return prev[cardImage]
        ? { ...prev, [cardImage]: prev[cardImage] + 1 }
        : { ...prev, [cardImage]: 1 };
    });
  }

  return (
    <main className="app">
      <AnimatePresence>
        {isAlert && (
          <motion.div
            initial={{ width: "100%", y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <Alert>
              <AlertTitle
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <AlertCircleIcon />
                최대 6장까지 선택할 수 있습니다.
                <button
                  onClick={() => setIsAlert(false)}
                  style={{ marginLeft: "auto" }}
                >
                  <XIcon />
                </button>
              </AlertTitle>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="card-container">
        {cardImages.map((cardImage, index) => (
          <Card
            key={index}
            cardImage={cardImage}
            onClick={() => handleCardClick(cardImage)}
          />
        ))}
      </div>

      {getActiveSynergies(cardCounts).length > 0 && (
        <div className="tactics-container">
          {getActiveSynergies(cardCounts).map((synergy, index) => (
            <div key={index} className="synergy-item">
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Tactics tacticsImage={synergy.imageName} />
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {synergy.effect}
                  </p>
                  <p style={{ fontSize: "13px" }}>{synergy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="selected-card-container">
        {Object.entries(cardCounts).map(
          ([selectedCard, selectedCount], index) => (
            <div
              key={index}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <figure
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexBasis: "160px",
                  flexGrow: 0,
                }}
              >
                <Card cardImage={selectedCard} disabled={true}>
                  <Badge
                    variant="secondary"
                    style={{ position: "absolute", top: -8, right: -8 }}
                  >
                    {selectedCount}
                  </Badge>
                </Card>
                <figcaption>{getCardById(selectedCard)?.name}</figcaption>
              </figure>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 4,
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <dl
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: "13px",
                  }}
                >
                  <dt>
                    <Droplet size={14} />
                  </dt>
                  <dd style={{ width: "24px" }}>
                    {getCardById(selectedCard)?.cost}
                  </dd>
                  <dt>
                    <Heart size={14} />
                  </dt>
                  <dd style={{ width: "48px" }}>
                    {getCardById(selectedCard)?.hp}
                  </dd>
                  <dt>
                    <Sword size={14} />
                  </dt>
                  <dd style={{ width: "48px" }}>
                    {getCardById(selectedCard)?.damage}
                  </dd>
                </dl>
                <div style={{ fontSize: "13px" }}>
                  {getCardById(selectedCard)?.description}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default App;
