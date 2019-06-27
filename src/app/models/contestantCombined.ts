import { ChallengeInformation } from "./challengeInformation"

export interface ContestantCombined {
  id: number;
  points: number;
  distance: number;
  firstName: string;
  lastName: string;
  avatar: string;
  gender: string;
  userName: string;
  userId: number;
  rank: number;
  activityId: number;
  challengeId: number;
  activityName: string;
  userChart: string;
  leaderboardPieChartData: ChallengeInformation[];
}
