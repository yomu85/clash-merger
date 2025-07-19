import Card from "@/components/Card";
import Tactics from "@/components/Tactics";
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    console.log(cardCounts);
  }, [cardCounts]);

  function handleCardClick(cardImage: string) {
    if(Object.keys(cardCounts).length < 6) {
      setCardCounts(prev => {
        return (
          prev[cardImage] ? { ...prev , [cardImage]: prev[cardImage] + 1} : { ...prev, [cardImage] : 1}
        )
      });
      console.log(cardCounts);
    }
  }

  return (
    <main className="app">
      <div className="card-container">
        {cardImages.map((cardImage, index) => (
          <Card key={index} cardImage={cardImage} onClick={() => handleCardClick(cardImage)} />
        ))}
      </div>
      <div className="tactics-container">
        {tactics.map((tacticsImage, index) => (
          <Tactics key={index} tacticsImage={tacticsImage} />
        ))}
      </div>
      <div className="selected-card-container">
        {
          Object.entries(cardCounts).map(([selectedCard, selectedCount], index) => (
            <Card key={index} cardImage={selectedCard} disabled={true}>
              <Badge variant="secondary" style={{ position: "absolute", top: -8, right: -8 }}>
                {selectedCount}
              </Badge>
            </Card>
          ))
        }
      </div>
    </main>
  );
};

export default App;
