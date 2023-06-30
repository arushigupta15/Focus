export type Goal = {
  desc: string;
  completed: boolean;
  priority: boolean;
};

export type GoalListState = Goal[];

export type AddGoalAction = {
  type: string;
  goalData: Goal;
};
export type UpdateGoalAction = {
  type: string;
  index: number;
  goalData: Goal;
};
export type RemoveGoalAction = {
  type: string;
  index: number;
};

export type GoalListAction =
  | AddGoalAction
  | UpdateGoalAction
  | RemoveGoalAction;

export type AppState = {
  goalList: GoalListState;
  // add future state slices here
};
