import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getCouncilorsByFactionId, factions, solutions } from '../lib/data';

export function CouncilorList() {
  const navigate = useNavigate();
  const { factionId } = useParams<{ factionId: string }>();
  
  if (!factionId) {
    navigate('/');
    return null;
  }

  const faction = factions.find(f => f.id === factionId);
  const councilors = getCouncilorsByFactionId(factionId);
  const solution = faction?.solutionId ? solutions.find(s => s.id === faction.solutionId) : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(`/solution/${solution?.id || ''}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <h2 className="text-xl font-bold sm:text-2xl">会派: {faction?.name || ''}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {councilors.map((councilor) => (
          <Card
            key={councilor.id}
            onClick={() => navigate(`/councilor/${councilor.id}`)}
            className="transition-all hover:border-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2">
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
          この会派に所属する議員が見つかりませんでした
        </div>
      )}
    </div>
  );
}


