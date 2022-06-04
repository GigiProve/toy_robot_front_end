import { createReducer, on } from '@ngrx/store';
import { Snackbar } from '../helpers/snackbar.helper';
import { Directions, leftRotation, movePosition, placement, report, rightRotation, State } from '../models/models';

const initialState: State = {
	robotPosition: {
		x: 0,
		y: 0,
		direction: Directions.None,
	},
	log: [],
};

const _robotReducer = createReducer(
	initialState,
	on(leftRotation, (state, { robotPosition }) => {
		return {
			robotPosition: robotPosition,
			log: [...state?.log!, 'LEFT'],
		};
	}),
	on(rightRotation, (state, { robotPosition }) => {
		return {
			robotPosition: robotPosition,
			log: [...state?.log!, 'RIGHT'],
		};
	}),
	on(movePosition, (state, { robotPosition }) => {
		return {
			robotPosition: robotPosition,
			log: [...state?.log!, 'MOVE'],
		};
	}),
	on(placement, (state, { robotPosition }) => {
		const { x, y, direction } = robotPosition;
		return {
			robotPosition: robotPosition,
			log: [...state?.log!, `PLACE ${x}, ${y}${direction ? ', ' + direction : ''}`],
		};
	}),
	on(report, (state) => {
		const { x, y, direction } = state.robotPosition;
		if (direction !== Directions.None) {
			return {
				...state,
				log: [...state?.log!, 'Report', `Output: ${x}, ${y}, ${direction}`],
			};
		}
		Snackbar.showErrorMessage('Place the robot first');
		return {
			...state,
			log: [...state?.log!],
		};
	})
);

export function robotReducer(state: any, action: any) {
	return _robotReducer(state, action);
}
