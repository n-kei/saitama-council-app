import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getSolutionsByIssueId, issues } from '../lib/data';

export function SolutionList() {
  const navigate = useNavigate();
  const { issueId } = useParams<{ issueId: string }>();
  
  if (!issueId) {
    navigate('/');
    return null;
  }

  const issue = issues.find(i => i.id === issueId);
  const solutions = getSolutionsByIssueId(issueId);

  const statusLabels = {
    discussing: '審議中',
    voted: '採決済み',
    implemented: '実施中',
    rejected: '否決',
  };

  const statusColors = {
    discussing: 'info',
    voted: 'success',
    implemented: 'success',
    rejected: 'danger',
  } as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(`/topic/${issue?.topicId}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <h2 className="text-xl font-bold sm:text-2xl">課題: {issue?.title || ''}</h2>
      </div>

      <div className="space-y-3">
        {solutions.map((solution) => (
          <Card
            key={solution.id}
            onClick={() => navigate(`/solution/${solution.id}`)}
            className="transition-all hover:border-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  {solution.title}
                </CardTitle>
                <Badge variant={statusColors[solution.status]}>
                  {statusLabels[solution.status]}
                </Badge>
              </div>
              <CardDescription className="mt-2">{solution.description}</CardDescription>
              <div className="mt-2 text-xs text-gray-500">
                提案日: {solution.proposedDate}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {solutions.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          この課題に関連する解決策が見つかりませんでした
        </div>
      )}
    </div>
  );
}


