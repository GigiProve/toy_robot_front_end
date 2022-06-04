import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { robotReducer } from 'src/app/reducers/robot.reducers';

import { SurfaceComponent } from './surface.component';

describe('SurfaceComponent', () => {
	let component: SurfaceComponent;
	let fixture: ComponentFixture<SurfaceComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SurfaceComponent],
			imports: [StoreModule.forRoot({ appState: robotReducer })],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SurfaceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
