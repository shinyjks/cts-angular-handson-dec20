import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LengthFinder, PersonTitle } from './pipe-demo/length-finder';
import { XyzPipe } from './xyz.pipe';
import { UserItemsComponent } from './user-items/user-items.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PipeDemoComponent,
    LengthFinder,
    PersonTitle,
    XyzPipe,
    UserItemsComponent,
    EventBindComponent,
    PropertyBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
