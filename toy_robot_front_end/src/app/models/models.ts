import { createAction, props } from '@ngrx/store';

export enum Directions {
	East = 'East',
	West = 'West',
	North = 'North',
	South = 'South',
	None = 'None',
}
interface Coordinates {
	x: number;
	y: number;
}

export interface RobotPosition extends Coordinates {
	direction?: Directions;
}

export interface State {
	robotPosition: RobotPosition;
	log?: string[];
}

export const ROBOT = {
	[Directions.North]: '↑',
	[Directions.East]: '→',
	[Directions.South]: '↓',
	[Directions.West]: '←',
};

export const placement = createAction('[Robot Component] Placement', props<{ robotPosition: RobotPosition }>());
export const movePosition = createAction('[Robot Component] MovePosition', props<{ robotPosition: RobotPosition }>());
export const leftRotation = createAction('[Robot Component] LeftRotation', props<{ robotPosition: RobotPosition }>());
export const rightRotation = createAction('[Robot Component] RightRotation', props<{ robotPosition: RobotPosition }>());
export const report = createAction('[Robot Component] Report');
export const X_INDEX: number = 4;
export const Y_INDEX: number = 4;
export const DIRECTIONS: Directions[] = [Directions.North, Directions.East, Directions.South, Directions.West]; //clockwise order
