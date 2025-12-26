import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Topic } from '../types';
import { searchTopics } from '../lib/data';

export function TopicSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [topics, setTopics] = useState<Topic[]>(searchTopics(''));

  const handleSearch = (value: string) => {
    setQuery(value);
    setTopics(searchTopics(value));
  };

  const handleSelectTopic = (topic: Topic) => {
    navigate(`/topic/${topic.id}`);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="トピックを検索（例：子育て支援、環境問題）"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            onClick={() => handleSelectTopic(topic)}
            className="transition-all hover:border-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{topic.title}</CardTitle>
                <Badge variant="info">{topic.category}</Badge>
              </div>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {topics.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          検索結果が見つかりませんでした
        </div>
      )}
    </div>
  );
}


