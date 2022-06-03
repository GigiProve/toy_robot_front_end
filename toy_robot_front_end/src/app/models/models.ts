import { createAction, props } from '@ngrx/store';

export enum Directions {
	East = 'East',
	West = 'West',
	North = 'North',
	South = 'South',
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

export const placement = createAction('[Robot] Placement', props<{ robotPosition: RobotPosition }>());
export const movePosition = createAction('[Robot] MovePosition', props<{ robotPosition: RobotPosition }>());
export const leftRotation = createAction('[Robot] LeftRotation', props<{ robotPosition: RobotPosition }>());
export const rightRotation = createAction('[Robot] RightRotation', props<{ robotPosition: RobotPosition }>());
export const report = createAction('[Robot] Report');
export const X_LENGTH: number = 5;
export const Y_LENGTH: number = 5;
export const DIRECTIONS: Directions[] = [Directions.North, Directions.East, Directions.South, Directions.West]; //clockwise order
