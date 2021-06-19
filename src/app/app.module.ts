import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {MatTableModule} from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    NgxUiLoaderModule,
    MatTableModule,
    FormsModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
