import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { SurfaceComponent } from './components/surface/surface.component';
import { robotReducer } from './reducers/robot.reducers';
import { LogComponent } from './components/log/log.component';

@NgModule({
	declarations: [AppComponent, ControlPanelComponent, SurfaceComponent, LogComponent],
	imports: [BrowserModule, FormsModule, StoreModule.forRoot({ appState: robotReducer })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
