interface ITacticsProps {
  id: string;
  imageName: string;
  name: string;
  requirement: number; // 시너지 필요 개수 (2/3/4)
  effect: string;
  description: string;
}

export const TACTICS_DATA: ITacticsProps[] = [
  {
    id: "ace_2",
    imageName: "ace",
    name: "에이스",
    requirement: 2,
    effect: "대장이 +30% 보너스 피해",
    description: "전투 시작: 가장 높은 합체 레벨 유닛이 대장이 됩니다. 대장이 적을 물리치면 팀이 +20% 공격 속도를 얻습니다(4초)",
  },
  {
    id: "brawler_2",
    imageName: "brawler",
    name: "격투가",
    requirement: 2,
    effect: "+30% 체력 증가",
    description: "격투가들이 보너스 최대 체력을 얻습니다",
  },
  {
    id: "clan_2",
    imageName: "clan",
    name: "클랜",
    requirement: 2,
    effect: "+30% 체력 및 공격 속도",
    description: "라운드당 한 번, 클랜 유닛들이 체력 50%에서 빠르게 회복하고 보너스 공격 속도를 얻습니다",
  },
  {
    id: "goblin_2",
    imageName: "goblin",
    name: "고블린",
    requirement: 2,
    effect: "2 엘릭서 고블린 획득",
    description: "다음 라운드에 무료로 랜덤 고블린을 얻습니다",
  },
  {
    id: "tanker_2",
    imageName: "tanker",
    name: "탱커",
    requirement: 2,
    effect: "탱커 +30%, 방패 +15% 보너스",
    description: "전투 시작: 탱커 뒤의 유닛들이 8초간 방패를 얻습니다",
  },
  {
    id: "noblesse_2",
    imageName: "noblesse",
    name: "귀족",
    requirement: 2,
    effect: "20% 피해 감소 및 보너스 피해",
    description: "전방 유닛들이 받는 피해가 감소하고 후방 유닛들이 보너스 피해를 얻습니다",
  },
  {
    id: "undead_2",
    imageName: "undead",
    name: "언데드",
    requirement: 2,
    effect: "1명의 적을 저주, 최대 체력 25% 감소",
    description: "전투 시작: 가장 높은 체력의 적이 저주받으며, 언데드가 그 적을 물리치면 +20% 보너스 피해를 얻습니다",
  },
  {
    id: "assassin",
    imageName: "assassin",
    name: "암살자",
    requirement: 3,
    effect: "+35% 치명타 확률 및 치명타 피해",
    description: "전투 시작: 암살자들이 적의 후방 유닛으로 도약합니다",
  },
  {
    id: "avenger",
    imageName: "avenger",
    name: "복수자",
    requirement: 3,
    effect: "+30% 보너스 피해",
    description: "복수자들이 보너스 피해를 얻으며, 마지막 생존자는 2배 피해를 입힙니다",
  },
  {
    id: "ranger",
    imageName: "ranger",
    name: "원거리 사수",
    requirement: 3,
    effect: "+15% 공격 속도 (최대 15회 중첩)",
    description: "원거리 사수들이 공격할 때마다 공격 속도가 증가합니다",
  },
  {
    id: "thrower",
    imageName: "thrower",
    name: "투척병",
    requirement: 3,
    effect: "거리당 +10% 피해",
    description: "투척병들이 +1 공격 범위를 얻고 먼 적에게 더 많은 피해를 입힙니다",
  },
  {
    id: "ace",
    imageName: "ace",
    name: "에이스",
    requirement: 4,
    effect: "대장이 +60% 보너스 피해 및 입힌 피해의 +30% 체력 회복",
    description: "전투 시작: 가장 높은 합체 레벨 유닛이 대장이 됩니다. 대장이 적을 물리치면 팀이 +20% 공격 속도를 얻습니다(4초)",
  },
  {
    id: "brawler",
    imageName: "brawler",
    name: "격투가",
    requirement: 4,
    effect: "격투가 +60%, 팀 전체 +30% 체력 증가",
    description: "격투가들이 보너스 최대 체력을 얻습니다",
  },
  {
    id: "clan",
    imageName: "clan",
    name: "클랜",
    requirement: 4,
    effect: "클랜 +60%, 팀 전체 +30% 체력 및 공격 속도",
    description: "라운드당 한 번, 클랜 유닛들이 체력 50%에서 빠르게 회복하고 보너스 공격 속도를 얻습니다",
  },
  {
    id: "goblin",
    imageName: "goblin",
    name: "고블린",
    requirement: 4,
    effect: "3-4 엘릭서 고블린을 얻을 +60% 확률",
    description: "다음 라운드에 무료로 랜덤 고블린을 얻습니다",
  },
  {
    id: "tanker",
    imageName: "tanker",
    name: "탱커",
    requirement: 4,
    effect: "탱커 +60%, 방패 +30% 보너스",
    description: "전투 시작: 탱커 뒤의 유닛들이 8초간 방패를 얻습니다",
  },
  {
    id: "noblesse",
    imageName: "noblesse",
    name: "귀족",
    requirement: 4,
    effect: "40% 피해 감소 및 보너스 피해",
    description: "전방 유닛들이 받는 피해가 감소하고 후방 유닛들이 보너스 피해를 얻습니다",
  },
  {
    id: "undead",
    imageName: "undead",
    name: "언데드",
    requirement: 4,
    effect: "2명의 적을 저주, 최대 체력 50% 감소",
    description: "전투 시작: 가장 높은 체력의 적이 저주받으며, 언데드가 그 적을 물리치면 +20% 보너스 피해를 얻습니다",
  }
];

// 시너지별 카드 매핑
export const SYNERGY_CARDS: Record<string, string[]> = {
  ace: ["pekka", "executioner", "megaknight", "bandit"],
  assassin: ["goblin", "royalghost", "goldenknight"],
  avenger: ["valkyrie", "bandit", "archerqueen"], 
  brawler: ["barbarian", "prince", "giantskeleton", "megaknight"],
  clan: ["archer", "barbarian", "valkyrie", "archerqueen"],
  goblin: ["goblin", "speargoblin", "dartgoblin", "goblinmachine"],
  tanker: ["knight", "pekka", "goblinmachine", "skeletonking"],
  noblesse: ["knight", "prince", "princess", "goldenknight"],
  ranger: ["archer", "dartgoblin", "princess"],
  thrower: ["speargoblin", "bomber", "executioner"],
  undead: ["bomber", "giantskeleton", "royalghost", "skeletonking"]
};

export const getTacticsByRequirement = (requirement: number): ITacticsProps[] => {
  return TACTICS_DATA.filter(tactic => tactic.requirement === requirement);
};

export const getTacticById = (id: string): ITacticsProps | undefined => {
  return TACTICS_DATA.find(tactic => tactic.id === id);
};

export const getCardCountForSynergy = (synergyType: string, selectedCards: Record<string, number>): number => {
  const cards = SYNERGY_CARDS[synergyType] || [];
  return cards.reduce((count, cardId) => {
    return count + (selectedCards[cardId] || 0);
  }, 0);
};

export const getActiveSynergies = (selectedCards: Record<string, number>): ITacticsProps[] => {
  const activeSynergies: ITacticsProps[] = [];
  
  Object.keys(SYNERGY_CARDS).forEach(synergyType => {
    const count = getCardCountForSynergy(synergyType, selectedCards);
    
    // 4시너지 확인
    const tactic4 = getTacticById(synergyType);
    if (tactic4 && count >= 4) {
      activeSynergies.push(tactic4);
      return; // 4시너지가 활성화되면 2시너지는 무시
    }
    
    // 3시너지 확인
    const tactic3 = getTacticById(synergyType);
    if (tactic3 && count >= 3 && tactic3.requirement === 3) {
      activeSynergies.push(tactic3);
      return; // 3시너지가 활성화되면 2시너지는 무시
    }
    
    // 2시너지 확인
    const tactic2 = getTacticById(`${synergyType}_2`);
    if (tactic2 && count >= 2) {
      activeSynergies.push(tactic2);
    }
  });
  
  return activeSynergies;
}; 