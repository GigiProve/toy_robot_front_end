import { Injectable } from '@angular/core';
import { Snackbar } from '../helpers/snackbar.helper';
import { DIRECTIONS, Directions, RobotPosition, X_INDEX, Y_INDEX } from '../models/models';

@Injectable({
	providedIn: 'root',
})
export class RobotService {
	public place(robotPosition: RobotPosition): RobotPosition | undefined {
		if (this.isValidPosition(robotPosition)) {
			Snackbar.showSuccessMessage('Robot placed successfully');
			return robotPosition;
		}
		Snackbar.showErrorMessage('Invalid position');
		return undefined;
	}

	public rotateLeft(robotPosition: RobotPosition): RobotPosition | undefined {
		if (this.isValidPosition(robotPosition)) {
			let currentPosition: RobotPosition = { x: robotPosition.x, y: robotPosition.y };
			let index = DIRECTIONS.findIndex((d: Directions) => d === robotPosition.direction);
			index--;
			if (index < 0) index = DIRECTIONS.length - 1;
			currentPosition.direction = DIRECTIONS[index];
			return currentPosition;
		}
		Snackbar.showErrorMessage('Place the robot first');
		return undefined;
	}

	public rotateRight(robotPosition: RobotPosition): RobotPosition | undefined {
		if (this.isValidPosition(robotPosition)) {
			let currentPosition: RobotPosition = { x: robotPosition.x, y: robotPosition.y };
			let index = DIRECTIONS.findIndex((d: Directions) => d === robotPosition.direction);
			index++;
			if (index >= DIRECTIONS.length) index = 0;
			currentPosition.direction = DIRECTIONS[index];
			return currentPosition;
		}
		Snackbar.showErrorMessage('Place the robot first');
		return undefined;
	}

	public move(robotPosition: RobotPosition): RobotPosition | undefined {
		let newPos: RobotPosition = { x: robotPosition.x, y: robotPosition.y };
		switch (robotPosition.direction) {
			case Directions.East:
				newPos.x += 1;
				break;
			case Directions.West:
				newPos.x -= 1;
				break;
			case Directions.North:
				newPos.y += 1;
				break;
			case Directions.South:
				newPos.y -= 1;
				break;
		}
		const newPlace = { direction: robotPosition.direction, ...newPos };
		if (this.isValidPosition(newPlace)) {
			return newPlace;
		}
		Snackbar.showErrorMessage('Invalid move');
		return undefined;
	}

	private isValidPosition(robotPosition: RobotPosition): boolean {
		const { x, y, direction } = robotPosition;
		const isDirectionValid = (direction && direction !== Directions.None) as boolean;
		return isDirectionValid && x >= 0 && x <= X_INDEX && y >= 0 && y <= Y_INDEX;
	}
}
