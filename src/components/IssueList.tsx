import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getIssuesByTopicId, topics } from '../lib/data';

export function IssueList() {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  
  if (!topicId) {
    navigate('/');
    return null;
  }

  const topic = topics.find(t => t.id === topicId);
  const issues = getIssuesByTopicId(topicId);

  const priorityColors = {
    high: 'danger',
    medium: 'warning',
    low: 'info',
  } as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <h2 className="text-xl font-bold sm:text-2xl">トピック: {topic?.title || ''}</h2>
      </div>

      <div className="space-y-3">
        {issues.map((issue) => (
          <Card
            key={issue.id}
            onClick={() => navigate(`/issue/${issue.id}`)}
            className="transition-all hover:border-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  {issue.title}
                </CardTitle>
                <Badge variant={priorityColors[issue.priority]}>
                  {issue.priority === 'high' ? '高' : issue.priority === 'medium' ? '中' : '低'}
                </Badge>
              </div>
              <CardDescription className="mt-2">{issue.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {issues.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          このトピックに関連する課題が見つかりませんでした
        </div>
      )}
    </div>
  );
}


