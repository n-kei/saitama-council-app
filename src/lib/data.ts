import { Topic, Issue, Solution, Faction, Councilor } from '../types';

// サンプルデータ
export const topics: Topic[] = [
  {
    id: '1',
    title: '子育て支援',
    description: '子育て世代の支援に関する施策',
    category: '福祉',
  },
  {
    id: '2',
    title: '環境問題',
    description: '環境保護と持続可能なまちづくり',
    category: '環境',
  },
  {
    id: '3',
    title: '交通インフラ',
    description: '公共交通機関の利便性向上',
    category: 'インフラ',
  },
  {
    id: '4',
    title: '高齢者支援',
    description: '高齢者の生活支援と介護サービス',
    category: '福祉',
  },
  {
    id: '5',
    title: '教育',
    description: '学校教育と生涯学習',
    category: '教育',
  },
];

export const issues: Issue[] = [
  {
    id: '1-1',
    title: '待機児童の解消',
    description: '保育園の待機児童が依然として多く、子育て世代の就労を阻害している',
    topicId: '1',
    priority: 'high',
  },
  {
    id: '1-2',
    title: '児童館の不足',
    description: '放課後児童クラブの施設が不足しており、待機児童が発生している',
    topicId: '1',
    priority: 'high',
  },
  {
    id: '2-1',
    title: 'CO2排出量削減',
    description: '2050年カーボンニュートラル達成に向けた具体的施策が必要',
    topicId: '2',
    priority: 'high',
  },
  {
    id: '3-1',
    title: 'バス路線の拡充',
    description: '郊外部の公共交通アクセスが不便で、移動弱者が発生している',
    topicId: '3',
    priority: 'medium',
  },
  {
    id: '4-1',
    title: '在宅介護支援の充実',
    description: '介護離職を防ぐための在宅介護支援サービスが不足している',
    topicId: '4',
    priority: 'high',
  },
];

export const solutions: Solution[] = [
  {
    id: 's1',
    title: '新規保育園2園の開設',
    description: '待機児童が多いエリアに新規保育園を2園開設し、定員を200名増やす',
    issueId: '1-1',
    status: 'discussing',
    proposedDate: '2024-01-15',
  },
  {
    id: 's2',
    title: '太陽光発電施設の拡充',
    description: '市有施設への太陽光パネル設置を拡大し、再生可能エネルギー導入を推進',
    issueId: '2-1',
    status: 'discussing',
    proposedDate: '2024-02-01',
  },
  {
    id: 's3',
    title: 'コミュニティバスの新設',
    description: '郊外部にコミュニティバス路線を3路線新設し、利便性を向上',
    issueId: '3-1',
    status: 'voted',
    proposedDate: '2024-01-20',
  },
  {
    id: 's4',
    title: '児童館の増設',
    description: '待機児童が多い地区に児童館を1館増設',
    issueId: '1-2',
    status: 'discussing',
    proposedDate: '2024-02-10',
  },
];

export const factions: Faction[] = [
  {
    id: 'f1',
    name: '自民党・公明党',
    description: '与党会派',
    position: 'support',
    reason: '子育て支援は喫緊の課題であり、保育園の増設は待機児童解消に不可欠である',
    solutionId: 's1',
  },
  {
    id: 'f2',
    name: '立憲民主党・社民党',
    description: '野党第一会派',
    position: 'support',
    reason: '保育園の増設は必要だが、質の確保と保育士の待遇改善も同時に進めるべき',
    solutionId: 's1',
  },
  {
    id: 'f3',
    name: '日本共産党',
    description: '野党会派',
    position: 'oppose',
    reason: '単なる数の増設では根本解決にならない。無償化と質の向上を優先すべき',
    solutionId: 's1',
  },
  {
    id: 'f4',
    name: '無所属・諸派',
    description: '無所属議員の連合',
    position: 'neutral',
    solutionId: 's1',
  },
  {
    id: 'f5',
    name: '自民党・公明党',
    description: '与党会派',
    position: 'support',
    reason: '環境問題は重要であり、太陽光発電の導入はCO2削減に効果的',
    solutionId: 's2',
  },
  {
    id: 'f6',
    name: '立憲民主党・社民党',
    description: '野党第一会派',
    position: 'support',
    reason: '再生可能エネルギーの拡大は必要だが、コスト面の検証も必要',
    solutionId: 's2',
  },
  {
    id: 'f7',
    name: '日本共産党',
    description: '野党会派',
    position: 'oppose',
    reason: '初期投資が大きすぎる。省エネ施策を優先すべき',
    solutionId: 's2',
  },
];

export const councilors: Councilor[] = [
  {
    id: 'c1',
    name: '山田太郎',
    nameKana: 'やまだたろう',
    factionId: 'f1',
    factionName: '自民党・公明党',
    profile: {
      age: 45,
      district: '南区',
      term: 2,
    },
    activities: [
      {
        id: 'a1',
        date: '2024-01-15',
        title: '保育園増設に関する質問',
        description: '待機児童解消に向けた保育園増設計画について質問',
        category: 'question',
      },
      {
        id: 'a2',
        date: '2024-01-20',
        title: '交通インフラ整備の提案',
        description: 'コミュニティバスの新設を提案',
        category: 'proposal',
      },
      {
        id: 'a3',
        date: '2024-02-01',
        title: '環境問題に関する委員会参加',
        description: '環境委員会で太陽光発電導入について議論',
        category: 'committee',
      },
    ],
  },
  {
    id: 'c2',
    name: '佐藤花子',
    nameKana: 'さとうはなこ',
    factionId: 'f2',
    factionName: '立憲民主党・社民党',
    profile: {
      age: 38,
      district: '北区',
      term: 1,
    },
    activities: [
      {
        id: 'a4',
        date: '2024-01-18',
        title: '保育士の待遇改善に関する提案',
        description: '保育士の給与改善と労働環境の整備を提案',
        category: 'proposal',
      },
      {
        id: 'a5',
        date: '2024-01-25',
        title: '子育て支援施策についての質問',
        description: '子育て世代への支援施策の現状と課題について質問',
        category: 'question',
      },
    ],
  },
  {
    id: 'c3',
    name: '鈴木一郎',
    nameKana: 'すずきいちろう',
    factionId: 'f3',
    factionName: '日本共産党',
    profile: {
      age: 52,
      district: '中央区',
      term: 3,
    },
    activities: [
      {
        id: 'a6',
        date: '2024-01-22',
        title: '保育園無償化の推進',
        description: '保育園の完全無償化を実現するための予算案を提案',
        category: 'proposal',
      },
      {
        id: 'a7',
        date: '2024-02-05',
        title: '環境対策に関する反対討論',
        description: '太陽光発電導入案について反対の立場から討論',
        category: 'vote',
      },
    ],
  },
  {
    id: 'c4',
    name: '田中二郎',
    nameKana: 'たなかじろう',
    factionId: 'f1',
    factionName: '自民党・公明党',
    profile: {
      age: 41,
      district: '西区',
      term: 2,
    },
    activities: [
      {
        id: 'a8',
        date: '2024-01-30',
        title: '高齢者支援に関する質問',
        description: '在宅介護支援サービスの現状について質問',
        category: 'question',
      },
    ],
  },
  {
    id: 'c5',
    name: '渡辺三郎',
    nameKana: 'わたなべさぶろう',
    factionId: 'f4',
    factionName: '無所属・諸派',
    profile: {
      age: 48,
      district: '東区',
      term: 1,
    },
    activities: [
      {
        id: 'a9',
        date: '2024-02-08',
        title: '教育施策に関する提案',
        description: '放課後学習支援の充実を提案',
        category: 'proposal',
      },
    ],
  },
];

// 検索関数
export function searchTopics(query: string): Topic[] {
  if (!query) return topics;
  const lowerQuery = query.toLowerCase();
  return topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(lowerQuery) ||
      topic.description.toLowerCase().includes(lowerQuery) ||
      topic.category.toLowerCase().includes(lowerQuery)
  );
}

export function getIssuesByTopicId(topicId: string): Issue[] {
  return issues.filter((issue) => issue.topicId === topicId);
}

export function getSolutionsByIssueId(issueId: string): Solution[] {
  return solutions.filter((solution) => solution.issueId === issueId);
}

export function getFactionsBySolutionId(
  solutionId: string,
  position?: 'support' | 'oppose' | 'neutral'
): Faction[] {
  let filtered = factions.filter((faction) => faction.solutionId === solutionId);
  if (position) {
    filtered = filtered.filter((faction) => faction.position === position);
  }
  return filtered;
}

export function getCouncilorsByFactionId(factionId: string): Councilor[] {
  return councilors.filter((councilor) => councilor.factionId === factionId);
}

export function getCouncilorById(councilorId: string): Councilor | undefined {
  return councilors.find((councilor) => councilor.id === councilorId);
}

