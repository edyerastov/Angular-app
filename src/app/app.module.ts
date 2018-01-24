import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EventsComponent } from './components/events/events.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
