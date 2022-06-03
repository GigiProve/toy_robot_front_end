import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
	declarations: [AppComponent, ControlPanelComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
