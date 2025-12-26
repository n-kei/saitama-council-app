import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, Calendar, FileText, MessageSquare, Vote, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getCouncilorById } from '../lib/data';

const activityIcons = {
  proposal: FileText,
  question: MessageSquare,
  vote: Vote,
  committee: Users,
  other: Award,
};

const activityLabels = {
  proposal: '提案',
  question: '質問',
  vote: '採決',
  committee: '委員会',
  other: 'その他',
};

export function CouncilorProfile() {
  const navigate = useNavigate();
  const { councilorId } = useParams<{ councilorId: string }>();
  
  if (!councilorId) {
    navigate('/');
    return null;
  }

  const councilor = getCouncilorById(councilorId);

  if (!councilor) {
    return (
      <div className="py-12 text-center text-gray-500">
        議員情報が見つかりませんでした
      </div>
    );
  }

  // 活動を日付の降順でソート
  const sortedActivities = [...councilor.activities].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(`/faction/${councilor.factionId}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <h2 className="text-xl font-bold sm:text-2xl">議員プロフィール</h2>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">{councilor.name}</CardTitle>
                <CardDescription className="mt-1">{councilor.nameKana}</CardDescription>
              </div>
            </div>
            <Badge variant="info">{councilor.factionName}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium text-gray-500">選挙区</div>
              <div className="mt-1 text-lg">{councilor.profile.district}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">任期</div>
              <div className="mt-1 text-lg">{councilor.profile.term}期</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">年齢</div>
              <div className="mt-1 text-lg">{councilor.profile.age}歳</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">所属会派</div>
              <div className="mt-1 text-lg">{councilor.factionName}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            活動履歴
          </CardTitle>
          <CardDescription>
            {sortedActivities.length}件の活動を時系列で表示しています
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedActivities.map((activity, index) => {
              const Icon = activityIcons[activity.category];
              return (
                <div key={activity.id}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      {index < sortedActivities.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="info">{activityLabels[activity.category]}</Badge>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                      <div className="mt-2 font-semibold">{activity.title}</div>
                      <div className="mt-1 text-sm text-gray-600">{activity.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {sortedActivities.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              活動履歴がありません
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

