import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Directions, ROBOT, RobotPosition, State, X_INDEX, Y_INDEX } from 'src/app/models/models';
import { chooseFirstState } from 'src/app/selectors/robot.selector';

@Component({
	selector: 'app-surface',
	templateUrl: './surface.component.html',
	styleUrls: ['./surface.component.scss'],
})
export class SurfaceComponent implements OnInit {
	place!: RobotPosition;
	surfaceCells!: string[][];

	constructor(private store: Store<State>) {}

	ngOnInit(): void {
		this.store.pipe(select(chooseFirstState)).subscribe((initialState) => {
			this.place = initialState.appState.robotPosition;
			this.surfaceCells = this.initializeSurface();
		});
	}

	initializeSurface() {
		let rows = [];
		for (let row = 0; row <= X_INDEX; row++) {
			let cols = [];
			for (let col = 0; col <= Y_INDEX; col++) {
				let robot = '';
				if (this.place.direction && this.place.direction !== Directions.None && col === this.place.x && row === X_INDEX - this.place.y) {
					robot = ROBOT[this.place.direction];
				}
				cols.push(robot);
			}
			rows.push(cols);
		}
		return rows;
	}
}
