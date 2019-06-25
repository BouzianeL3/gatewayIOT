import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule , MatFormFieldModule , MatInputModule , MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
