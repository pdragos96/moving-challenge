export interface LevelClass {
    id: number;
    levelOrder: number;
    levelName: string;
    targetPoints: number;
    targetParticipants: number;
    participantsWithTargetPoints: number;
    completedPercentage: number;
    isCompleted: boolean;
}
