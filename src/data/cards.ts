interface ICardDataProps {
  id: string;
  name: string;
  cost: number;
  type: ('Ace' | 'Assassin' | 'Avenger' | 'Brawler' | 'Clan' | 'Goblin' | 'Tanker' | 'Noblesse' | 'Ranged' | 'Thrower' | 'Undead')[];
  hp: number;
  damage: number;
  description?: string;
}

export const CARD_DATA: ICardDataProps[] = [
  {
    id: "knight",
    name: "기사",
    cost: 2,
    type: ["Noblesse", "Tanker"],
    hp: 1399,
    damage: 167,
    description: "왕국에서 가장 강력한 근접 전사 중 하나입니다."
  },
  {
    id: "archer",
    name: "아처",
    cost: 2,
    type: ["Clan", "Ranged"],
    hp: 125,
    damage: 33,
    description: "엄청난 사거리와 톡톡 튀는 핫핑크색 머리카락의 소유자입니다. 갑옷은 필요 없어요!"
  },
  {
    id: "goblin",
    name: "고블린",
    cost: 2,
    type: ["Goblin", "Assassin"],
    hp: 169,
    damage: 98,
    description: "뛰어난 속도와 근접 공격 기술 덕분에 성가신 갑옷을 입을 필요가 없습니다."
  },
  {
    id: "speargoblin",
    name: "창 고블린",
    cost: 2,
    type: ["Goblin", "Thrower"],
    hp: 169,
    damage: 98,
    description: "갑옷 따위는 필요 없을 만큼 먼 거리에서 바람을 가르는 창을 날립니다."
  },
  {
    id: "bomber",
    name: "폭탄병",
    cost: 2,
    type: ["Undead", "Thrower"],
    hp: 147,
    damage: 147,
    description: "가장 가까운 적에게 폭탄을 던져 2칸 반경 내에 피해를 줍니다."
  },
  {
    id: "barbarian",
    name: "바바리안",
    cost: 2,
    type: ["Clan", "Brawler"],
    hp: 636,
    damage: 159,
    description: "멋진 콧수염을 가진 전방위 근접 공격 유닛입니다."
  },
  {
    id: "valkyrie",
    name: "발키리",
    cost: 3,
    type: ["Clan", "Avenger"],
    hp: 1374,
    damage: 201,
    description: "분노의 힘으로 광역 피해를 입히는 근접 공격의 달인입니다."
  },
  {
    id: "pekka",
    name: "페카",
    cost: 3,
    type: ["Ace", "Tanker"],
    hp: 3458,
    damage: 816,
    description: "느리지만 견고한 갑옷을 두른 근접 전사입니다. 그 무엇도 그녀를 뚫고 지나갈 수 없을 거예요…"
  },
  {
    id: "prince",
    name: "프린스",
    cost: 3,
    type: ["Noblesse", "Brawler"],
    hp: 1615,
    damage: 445,
    description: "전투가 시작하면 가장 가까운 대상에게 돌진하여 두 배의 피해를 입히고 적을 밀어내며 2초 동안 기절시킵니다."
  },
  {
    id: "giantskeleton",
    name: "자이언트 해골",
    cost: 3,
    type: ["Undead", "Brawler"],
    hp: 2662,
    damage: 190,
    description: "처치 시 1.5초 후 폭발하는 폭탄을 떨어뜨려 2초 동안 육각형 반경 내의 적에게 피해를 입히고 기절시킵니다."
  },
  {
    id: "dartgoblin",
    name: "다트 고블린",
    cost: 3,
    type: ["Goblin", "Ranged"],
    hp: 216,
    damage: 67,
    description: "무장하지 않은 채 껌을 씹으며 빠르게 달리고, 멀리까지 다트를 쏘는 원거리 공격수입니다."
  },
  {
    id: "executioner",
    name: "도끼맨",
    cost: 3,
    type: ["Ace", "Thrower"],
    hp: 1238,
    damage: 190,
    description: "여러 칸에 걸쳐 가장 가까운 대상에게 부메랑 도끼를 던집니다."
  },
  {
    id: "princess",
    name: "프린세스",
    cost: 4,
    type: ["Noblesse", "Ranged"],
    hp: 216,
    damage: 140,
    description: "가장 먼 적에게 불화살을 발사하여 2칸 반경 내에 피해를 입힙니다."
  },
  {
    id: "megaknight",
    name: "메가 나이트",
    cost: 4,
    type: ["Ace", "Brawler"],
    hp: 3252,
    damage: 480,
    description: "몇 초마다 점프해 가장 큰 적 무리를 강타하여 피해를 입히고, 2초 동안 육각형 반경 내의 적을 기절시킵니다."
  },
  {
    id: "royalghost",
    name: "로얄 고스트",
    cost: 4,
    type: ["Undead", "Assassin"],
    hp: 1047,
    damage: 202,
    description: "3회 공격 후 잠시 투명화됩니다."
  },
  {
    id: "bandit",
    name: "도둑",
    cost: 4,
    type: ["Ace", "Avenger"],
    hp: 749,
    damage: 159,
    description: "특정 공격 후 3칸 중 가장 멀리 있는 적에게 돌진하여 추가 피해를 주고, 경로에 있는 모든 적을 1초 동안 기절시킵니다."
  },
  {
    id: "goblinmachine",
    name: "고블린 머신",
    cost: 4,
    type: ["Goblin", "Tanker"],
    hp: 735,
    damage: 98,
    description: "특정 타격 후 가장 먼 거리에 있는 적에게 로켓을 발사하여 50%의 보너스 피해를 주고 명중한 적을 1.5초 동안 기절시킵니다."
  },
  {
    id: "skeletonking",
    name: "해골 킹",
    cost: 5,
    type: ["Undead", "Tanker"],
    hp: 1254,
    damage: 201,
    description: "원뿔 반경 내의 적에게 피해를 입히고, 물리친 적 하나당 해골 하나를 소환합니다."
  },
  {
    id: "goldenknight",
    name: "골드 나이트",
    cost: 5,
    type: ["Noblesse", "Assassin"],
    hp: 1293,
    damage: 201,
    description: "적을 처치한 후, HP가 가장 낮은 적에게 돌진하여 추가 피해를 줍니다."
  },
  {
    id: "archerqueen",
    name: "아처 퀸",
    cost: 5,
    type: ["Clan", "Avenger"],
    hp: 1500,
    damage: 150,
    description: "가장 가까운 적에게 여러 개의 화살을 발사하고, HP가 50% 미만으로 떨어지면 투명화되어 추가 피해를 줍니다."
  },
];

export const getCardById = (id: string): ICardDataProps | undefined => {
  return CARD_DATA.find(card => card.id === id);
};

export const getCardsByType = (type: ('Ace' | 'Assassin' | 'Avenger' | 'Brawler' | 'Clan' | 'Goblin' | 'Tanker' | 'Noblesse' | 'Ranged' | 'Thrower' | 'Undead')[]): ICardDataProps[] => {
  return CARD_DATA.filter(card => card.type.some(t => type.includes(t)));
};

export const getCardsByCost = (cost: number): ICardDataProps[] => {
  return CARD_DATA.filter(card => card.cost === cost);
};