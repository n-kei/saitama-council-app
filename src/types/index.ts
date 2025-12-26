// トピック（生活上一般市民が興味を持つトピック）
export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
}

// 地域の課題
export interface Issue {
  id: string;
  title: string;
  description: string;
  topicId: string;
  priority: 'high' | 'medium' | 'low';
}

// 解決策（議題）
export interface Solution {
  id: string;
  title: string;
  description: string;
  issueId: string;
  status: 'discussing' | 'voted' | 'implemented' | 'rejected';
  proposedDate: string;
}

// 会派
export interface Faction {
  id: string;
  name: string;
  description: string;
  position?: 'support' | 'oppose' | 'neutral';
  reason?: string; // 賛成/反対理由
  solutionId?: string;
}

// 議員
export interface Councilor {
  id: string;
  name: string;
  nameKana: string;
  factionId: string;
  factionName: string;
  profile: {
    age: number;
    district: string;
    term: number;
    photo?: string;
  };
  activities: Activity[];
}

// 活動履歴
export interface Activity {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'proposal' | 'question' | 'vote' | 'committee' | 'other';
}


