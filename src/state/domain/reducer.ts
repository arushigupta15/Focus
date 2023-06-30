// /* eslint-disable @typescript-eslint/no-unused-vars */
// import {AddGoalAction, GoalListAction, GoalListState} from '../types';
// import {GOAL_LIST_ACTION_TYPES} from './actions';

// export const initialState: GoalListState = [];

// const goalList = (
//   state: GoalListState = initialState,
//   action: GoalListAction,
// ) => {
//   const newState: GoalListState = deepClone(state); // a deep-cloning function
//   switch (action.type) {
//     case GOAL_LIST_ACTION_TYPES.ADD_GOAL:
//       // pay attention to type-casting on action
//       const {goalData} = <AddGoalAction>action;
//       return [...newState, {goalData}];

//     // define rest of actions here
//     default:
//       return state;
//   }
// };
