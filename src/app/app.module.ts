import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { FilesizePipe } from './shared/filesize.pipe';
import { UppercasePipe } from './shared/uppercase.pipe';
import { SquarePipe } from './shared/square.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    FilesizePipe,
    UppercasePipe,
    SquarePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
