import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/models/models';
import { chooseFirstState } from 'src/app/selectors/robot.selector';

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
	logs: any;

	constructor(private store: Store<State>) {}

	ngOnInit(): void {
		this.store.pipe(select(chooseFirstState)).subscribe((initialState) => {
			this.logs = initialState.appState.log;
		});
	}
}
