import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Councilor } from '../types';
import { searchCouncilors, getDistricts } from '../lib/data';

export function CouncilorSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [district, setDistrict] = useState<string | null>(null);
  const districts = getDistricts();
  const councilors = searchCouncilors(query, district);

  const handleSelectCouncilor = (councilor: Councilor) => {
    navigate(`/councilor/${councilor.id}`);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="議員名や活動区を検索（例：山田太郎、南区）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setDistrict(null)}
          className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
            district === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          すべて
        </button>
        {districts.map((d) => (
          <button
            key={d}
            onClick={() => setDistrict(d)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              district === d
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {councilors.map((councilor) => (
          <Card
            key={councilor.id}
            onClick={() => handleSelectCouncilor(councilor)}
            className="transition-all hover:border-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-blue-500" />
                  {councilor.name}
                </CardTitle>
                <Badge variant="info">{councilor.factionName}</Badge>
              </div>
              <CardDescription className="mt-2">
                <div>ふりがな: {councilor.nameKana}</div>
                <div className="mt-1">
                  {councilor.profile.district} / {councilor.profile.term}期 / {councilor.profile.age}歳
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  活動数: {councilor.activities.length}件
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {councilors.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          検索結果が見つかりませんでした
        </div>
      )}
    </div>
  );
}
