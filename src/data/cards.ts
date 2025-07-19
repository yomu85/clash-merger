interface ICardDataProps {
  id: string;
  name: string;
  cost: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  type: 'melee' | 'ranged' | 'magic';
  hp: number;
  damage: number;
  description?: string;
}

export const CARD_DATA: ICardDataProps[] = [
  {
    id: "archer",
    name: "궁수",
    cost: 3,
    rarity: "common",
    type: "ranged",
    hp: 125,
    damage: 33,
    description: "빠른 공격 속도를 가진 원거리 유닛"
  },
  {
    id: "archerqueen",
    name: "아처 퀸",
    cost: 5,
    rarity: "legendary",
    type: "ranged",
    hp: 1500,
    damage: 150,
    description: "강력한 범위 공격을 하는 전설 영웅"
  },
  {
    id: "bandit",
    name: "도적",
    cost: 3,
    rarity: "legendary",
    type: "melee",
    hp: 749,
    damage: 159,
    description: "대시 공격으로 적에게 접근하는 근접 유닛"
  },
  {
    id: "barbarian",
    name: "바바리안",
    cost: 5,
    rarity: "common",
    type: "melee",
    hp: 636,
    damage: 159,
    description: "강력한 근접 공격력을 가진 전사"
  },
  {
    id: "bomber",
    name: "폭탄병",
    cost: 2,
    rarity: "common",
    type: "ranged",
    hp: 147,
    damage: 147,
    description: "범위 피해를 주는 폭탄을 던지는 유닛"
  },
  {
    id: "dartgoblin",
    name: "다트 고블린",
    cost: 3,
    rarity: "common",
    type: "ranged",
    hp: 216,
    damage: 67,
    description: "매우 빠른 공격 속도를 가진 원거리 유닛"
  },
  {
    id: "executioner",
    name: "도끼맨",
    cost: 5,
    rarity: "epic",
    type: "ranged",
    hp: 1238,
    damage: 190,
    description: "관통 효과가 있는 도끼를 던지는 유닛"
  },
  {
    id: "giantskeleton",
    name: "자이언트 해골",
    cost: 6,
    rarity: "epic",
    type: "melee",
    hp: 2662,
    damage: 190,
    description: "죽을 때 폭탄을 떨어뜨리는 거대한 스켈레톤"
  },
  {
    id: "goblin",
    name: "고블린",
    cost: 2,
    rarity: "common",
    type: "melee",
    hp: 169,
    damage: 98,
    description: "빠르고 저렴한 근접 유닛"
  },
  {
    id: "goblinmachine",
    name: "고블린 머신",
    cost: 4,
    rarity: "rare",
    type: "ranged",
    hp: 735,
    damage: 98,
    description: "연속 사격이 가능한 기계를 탄 고블린"
  },
  {
    id: "goldenknight",
    name: "골드 나이트",
    cost: 4,
    rarity: "legendary",
    type: "melee",
    hp: 1293,
    damage: 201,
    description: "돌진 공격과 방패를 가진 전설 기사"
  },
  {
    id: "knight",
    name: "기사",
    cost: 3,
    rarity: "common",
    type: "melee",
    hp: 1399,
    damage: 167,
    description: "균형 잡힌 능력치를 가진 탱커 유닛"
  },
  {
    id: "megaknight",
    name: "메가 나이트",
    cost: 7,
    rarity: "legendary",
    type: "melee",
    hp: 3252,
    damage: 480,
    description: "점프 공격으로 적을 제압하는 거대한 기사"
  },
  {
    id: "pekka",
    name: "페카",
    cost: 7,
    rarity: "epic",
    type: "melee",
    hp: 3458,
    damage: 816,
    description: "최강의 공격력을 가진 기계 전사"
  },
  {
    id: "prince",
    name: "프린스",
    cost: 5,
    rarity: "epic",
    type: "melee",
    hp: 1615,
    damage: 445,
    description: "돌진 공격으로 2배 피해를 주는 기마 유닛"
  },
  {
    id: "princess",
    name: "프린세스",
    cost: 3,
    rarity: "legendary",
    type: "ranged",
    hp: 216,
    damage: 140,
    description: "긴 사거리와 범위 공격을 가진 전설 궁수"
  },
  {
    id: "royalghost",
    name: "로얄 고스트",
    cost: 3,
    rarity: "legendary",
    type: "melee",
    hp: 1047,
    damage: 202,
    description: "은신 능력을 가진 유령 전사"
  },
  {
    id: "skeletonking",
    name: "해골 킹",
    cost: 4,
    rarity: "legendary",
    type: "melee",
    hp: 1254,
    damage: 201,
    description: "스켈레톤을 소환하는 언데드 왕"
  },
  {
    id: "speargoblin",
    name: "창 고블린",
    cost: 2,
    rarity: "common",
    type: "ranged",
    hp: 169,
    damage: 98,
    description: "창을 던지는 원거리 고블린"
  },
  {
    id: "valkyrie",
    name: "발키리",
    cost: 4,
    rarity: "rare",
    type: "melee",
    hp: 1374,
    damage: 201,
    description: "360도 범위 공격을 하는 전사"
  }
];

export const getCardById = (id: string): ICardDataProps | undefined => {
  return CARD_DATA.find(card => card.id === id);
};

export const getCardsByRarity = (rarity: 'common' | 'rare' | 'epic' | 'legendary'): ICardDataProps[] => {
  return CARD_DATA.filter(card => card.rarity === rarity);
};

export const getCardsByType = (type: 'melee' | 'ranged' | 'magic'): ICardDataProps[] => {
  return CARD_DATA.filter(card => card.type === type);
};

export const getCardsByCost = (cost: number): ICardDataProps[] => {
  return CARD_DATA.filter(card => card.cost === cost);
};