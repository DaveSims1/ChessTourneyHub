import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { MainNavComponent } from './partials/main-nav/main-nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BottomNavComponent } from './partials/bottom-nav/bottom-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { TourneyComponent } from './pages/tourney/tourney.component';
import { TourneyeditComponent } from './pages/tourneyedit/tourneyedit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainNavComponent, FooterComponent, BottomNavComponent, HttpClientModule, TourneyComponent, TourneyeditComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TourneyHub';
}
