import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { robotReducer } from 'src/app/reducers/robot.reducers';

import { LogComponent } from './log.component';

describe('LogComponent', () => {
	let component: LogComponent;
	let fixture: ComponentFixture<LogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LogComponent],
			imports: [StoreModule.forRoot({ appState: robotReducer })],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
