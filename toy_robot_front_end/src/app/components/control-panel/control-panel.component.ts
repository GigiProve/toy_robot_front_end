import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Directions } from '../../models/models';

@Component({
	selector: 'app-control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
	@Output() xValueEvent = new EventEmitter<number>();
	@Output() yValueEvent = new EventEmitter<number>();
	@Output() placeEvent = new EventEmitter<boolean>();
	@Output() leftEvent = new EventEmitter<string>();
	@Output() rightEvent = new EventEmitter<string>();
	@Output() directionEvent = new EventEmitter<string>();
	@Output() reportEvent = new EventEmitter<string>();
	@Output() moveEvent = new EventEmitter<string>();
	@Output() resetEvent = new EventEmitter<string>();
	@Input() isFirstMove: boolean = true;

	controlPanelForm!: FormGroup;
	directions: Directions[] = Object.values(Directions);

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.setFormGroup();
	}

	onSubmit(): void {
		if (this.controlPanelForm.controls['placeX'].invalid) {
			alert(`Valid X value is [0-4]`);
			this.placeEvent.emit(false);
		} else if (this.controlPanelForm.controls['placeY'].invalid) {
			alert(`Valid Y value is [0-4]`);
			this.placeEvent.emit(false);
		} else if (this.controlPanelForm.controls['robotDirection'].touched === false) {
			alert(`No direction was selected`);
			this.placeEvent.emit(false);
		} else if (this.controlPanelForm.valid) {
			this.placeEvent.emit(true);
		}
	}

	newXItem(event: { target: HTMLInputElement }): void {
		this.xValueEvent.emit(parseInt(event.target.value));
	}
	newYItem(event: { target: HTMLInputElement }): void {
		this.yValueEvent.emit(parseInt(event.target.value));
	}

	newDirection(event: { target: HTMLInputElement }): void {
		this.directionEvent.emit(event.target.value);
	}

	clickReport(event: { target: HTMLInputElement }): void {
		this.reportEvent.emit(event.target.value);
	}

	rotateLeft(event: { target: HTMLInputElement }): void {
		this.leftEvent.emit(event.target.value);
	}
	rotateRight(event: { target: HTMLInputElement }): void {
		this.rightEvent.emit(event.target.value);
	}

	clickMove(event: { target: HTMLInputElement }): void {
		this.moveEvent.emit(event.target.value);
	}
	clickReset(event: { target: HTMLInputElement }): void {
		this.resetEvent.emit(event.target.value);
	}

	private setFormGroup() {
		this.controlPanelForm = this.formBuilder.group({
			placeX: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(4)])],
			placeY: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(4)])],
			robotDirection: ['', Validators.required],
		});
	}
}
