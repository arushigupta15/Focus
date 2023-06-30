import {AddGoalAction, UpdateGoalAction, RemoveGoalAction} from '../types';

export enum GOAL_LIST_ACTION_TYPES {
  ADD_GOAL = 'GOAL_LIST/ADD_GOAL',
  REMOVE_GOAL = 'GOAL_LIST/REMOVE_GOAL',
  UPDATE_GOAL = 'GOAL_LIST/UPDATE_GOAL',
}

export const addGoal = (
  desc: string,
  completed: boolean,
  priority: boolean,
): AddGoalAction => ({
  type: GOAL_LIST_ACTION_TYPES.ADD_GOAL,
  goalData: {
    desc,
    completed,
    priority,
  },
});

export const updateGoal = (
  index: number,
  desc: string,
  completed: boolean,
  priority: boolean,
): UpdateGoalAction => ({
  type: GOAL_LIST_ACTION_TYPES.UPDATE_GOAL,
  index,
  goalData: {
    desc,
    completed,
    priority,
  },
});

export const RemoveGoal = (index: number): RemoveGoalAction => ({
  type: GOAL_LIST_ACTION_TYPES.UPDATE_GOAL,
  index,
});
