import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatwindowComponent } from './component/chatwindow/chatwindow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatLineItemComponent } from './component/chat-line-item/chat-line-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatwindowComponent,
    ChatLineItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
