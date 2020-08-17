import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { TransactionsPanelComponent } from './transactions-panel/transactions-panel.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    TransactionsPanelComponent,
    MessagePreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
