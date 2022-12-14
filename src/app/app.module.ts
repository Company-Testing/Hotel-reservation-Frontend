import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContractInputComponent } from './contract-input/contract-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import {ContractService} from "./service/contract.service";
import { ContractComponent } from './contract/contract.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {TransferService} from "./service/transfer.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContractInputComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [ContractService, TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
