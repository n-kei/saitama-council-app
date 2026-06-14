import { useState } from 'react';
import { TopicSearch } from './TopicSearch';
import { CouncilorSearch } from './CouncilorSearch';

type SearchTab = 'topic' | 'councilor';

const tabs: { key: SearchTab; label: string }[] = [
  { key: 'topic', label: 'トピックを探す' },
  { key: 'councilor', label: '議員を探す' },
];

export function SearchHome() {
  const [activeTab, setActiveTab] = useState<SearchTab>('topic');

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'topic' ? <TopicSearch /> : <CouncilorSearch />}
    </div>
  );
}
