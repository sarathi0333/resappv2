import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { TypingAnimationDirective } from 'angular-typing-animation'


import { NetworkService } from './services/network.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
