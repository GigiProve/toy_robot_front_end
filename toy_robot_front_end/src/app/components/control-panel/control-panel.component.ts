import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { chooseFirstState } from 'src/app/selectors/robot.selector';
import { RobotService } from 'src/app/services/robot.service';
import { leftRotation, movePosition, placement, report, rightRotation, RobotPosition, State } from '../../models/models';

@Component({
	selector: 'app-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	currentPlace?: RobotPosition;
	newPlace?: RobotPosition;

	constructor(private store: Store<State>, private robotService: RobotService) {
		this.store.pipe(select(chooseFirstState)).subscribe((initialState: any) => {
			this.currentPlace = initialState.appState.robotPosition;
		});
	}

	ngOnInit(): void {}

	onSubmit(placeValue: RobotPosition) {
		if ((placeValue.x || placeValue.x == 0) && (placeValue.y || placeValue.y == 0) && placeValue.direction) this.newPlace = this.robotService.place(placeValue);
		if (this.newPlace) this.store.dispatch(placement({ robotPosition: this.newPlace }));
	}

	rotateLeft() {
		this.newPlace = this.robotService.rotateLeft(this.currentPlace!);
		if (this.newPlace) this.store.dispatch(leftRotation({ robotPosition: this.newPlace }));
	}

	rotateRight() {
		this.newPlace = this.robotService.rotateRight(this.currentPlace!);
		if (this.newPlace) this.store.dispatch(rightRotation({ robotPosition: this.newPlace }));
	}

	movePosition() {
		this.newPlace = this.robotService.move(this.currentPlace!);
		if (this.newPlace) this.store.dispatch(movePosition({ robotPosition: this.newPlace }));
	}

	report() {
		this.store.dispatch(report());
	}
}
