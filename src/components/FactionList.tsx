import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Users, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getFactionsBySolutionId, solutions, issues } from '../lib/data';

export function FactionList() {
  const navigate = useNavigate();
  const { solutionId } = useParams<{ solutionId: string }>();
  
  if (!solutionId) {
    navigate('/');
    return null;
  }

  const solution = solutions.find(s => s.id === solutionId);
  const issue = solution ? issues.find(i => i.id === solution.issueId) : null;
  
  const allFactions = getFactionsBySolutionId(solutionId);
  const supportingFactions = getFactionsBySolutionId(solutionId, 'support');
  const opposingFactions = getFactionsBySolutionId(solutionId, 'oppose');
  const neutralFactions = getFactionsBySolutionId(solutionId, 'neutral');

  const renderFactionCard = (faction: typeof allFactions[0]) => (
    <Card
      key={faction.id}
      onClick={() => navigate(`/faction/${faction.id}`)}
      className="transition-all hover:border-blue-500"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            {faction.name}
          </CardTitle>
          {faction.position === 'support' && (
            <Badge variant="success">
              <ThumbsUp className="mr-1 h-3 w-3" />
              賛成
            </Badge>
          )}
          {faction.position === 'oppose' && (
            <Badge variant="danger">
              <ThumbsDown className="mr-1 h-3 w-3" />
              反対
            </Badge>
          )}
          {faction.position === 'neutral' && (
            <Badge variant="default">
              <Minus className="mr-1 h-3 w-3" />
              中立
            </Badge>
          )}
        </div>
        <CardDescription>{faction.description}</CardDescription>
        {faction.reason && (
          <div className="mt-3 rounded-md bg-gray-50 p-3 text-sm">
            <div className="font-medium text-gray-700">
              {faction.position === 'support' ? '賛成理由' : '反対理由'}
            </div>
            <div className="mt-1 text-gray-600">{faction.reason}</div>
          </div>
        )}
      </CardHeader>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(`/issue/${issue?.id}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <h2 className="text-xl font-bold sm:text-2xl">解決策: {solution?.title || ''}</h2>
      </div>

      {supportingFactions.length > 0 && (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
            <ThumbsUp className="h-5 w-5" />
            賛成している会派 ({supportingFactions.length})
          </h3>
          <div className="space-y-3">
            {supportingFactions.map(renderFactionCard)}
          </div>
        </div>
      )}

      {opposingFactions.length > 0 && (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-red-700">
            <ThumbsDown className="h-5 w-5" />
            反対している会派 ({opposingFactions.length})
          </h3>
          <div className="space-y-3">
            {opposingFactions.map(renderFactionCard)}
          </div>
        </div>
      )}

      {neutralFactions.length > 0 && (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <Minus className="h-5 w-5" />
            中立の会派 ({neutralFactions.length})
          </h3>
          <div className="space-y-3">
            {neutralFactions.map(renderFactionCard)}
          </div>
        </div>
      )}

      {allFactions.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          この解決策に対する会派の意見が見つかりませんでした
        </div>
      )}
    </div>
  );
}


