import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Directions, RobotPosition, State } from 'src/app/models/models';
import { robotReducer } from 'src/app/reducers/robot.reducers';
import { RobotService } from 'src/app/services/robot.service';
import { ControlPanelComponent } from './control-panel.component';

describe('ControlPanelComponent', () => {
	let component: ControlPanelComponent;
	let fixture: ComponentFixture<ControlPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ControlPanelComponent],
			providers: [RobotService],
			imports: [StoreModule.forRoot({ appState: robotReducer }), FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ControlPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('on Submit', () => {
		const direction = Directions.West;
		const placementValue: RobotPosition = {
			x: 1,
			y: 1,
			direction: direction,
		};

		component.onSubmit(placementValue);
		expect(component.newPlace).toEqual(placementValue);
	});
});

describe('should check robot initial state', () => {
	const x = 0;
	const y = 0;
	const initialState: State = {
		robotPosition: {
			x,
			y,
			direction: Directions.None,
		},
		log: [],
	};
	it('should handle initial state', () => {
		expect(robotReducer(undefined, { type: 'unknown' })).toEqual({
			robotPosition: {
				x: 0,
				y: 0,
				direction: Directions.None,
			},
			log: [],
		});
	});
});

describe('should MOVE the robot to one unit in the current direction', () => {
	const postion: RobotPosition = { x: 3, y: 2, direction: Directions.None };
	let component: ControlPanelComponent;
	let fixture: ComponentFixture<ControlPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ControlPanelComponent],
			providers: [RobotService],
			imports: [StoreModule.forRoot({ appState: robotReducer }), FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ControlPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('direction NORTH', () => {
		const direction = Directions.North;
		const placementValue: RobotPosition = {
			...postion,
			direction: direction,
		};

		component.onSubmit(placementValue);
		component.movePosition();

		const expected = { ...placementValue, y: placementValue.y + 1 };
		expect(component.newPlace).toEqual(expected);
	});

	it('direction SOUTH', () => {
		const direction = Directions.South;
		const placementValue: RobotPosition = {
			...postion,
			direction: direction,
		};

		component.onSubmit(placementValue);
		component.movePosition();

		const expected = { ...placementValue, y: placementValue.y - 1 };
		expect(component.newPlace).toEqual(expected);
	});

	it('direction EAST', () => {
		const direction = Directions.East;
		const placementValue: RobotPosition = {
			...postion,
			direction: direction,
		};

		component.onSubmit(placementValue);
		component.movePosition();

		const expected = { ...placementValue, x: placementValue.x + 1 };
		expect(component.newPlace).toEqual(expected);
	});

	it('direction WEST', () => {
		const direction = Directions.West;
		const placementValue: RobotPosition = {
			...postion,
			direction: direction,
		};

		component.onSubmit(placementValue);
		component.movePosition();

		const expected = { ...placementValue, x: placementValue.x - 1 };
		expect(component.newPlace).toEqual(expected);
	});
});
