import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routes';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { MainNavComponent } from './partials/main-nav/main-nav.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from 'express';
import { provideHttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { TourneyComponent } from './pages/tourney/tourney.component';
import { TourneyeditComponent } from './pages/tourneyedit/tourneyedit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BottomNavComponent,
        MainNavComponent,
        TourneyComponent,
        TourneyeditComponent

    ],
    imports: [
        //BrowserModule,
        AppRoutingModule,
        HttpClient,
        HttpClientModule,
        CommonModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})


export class AppModule {}
