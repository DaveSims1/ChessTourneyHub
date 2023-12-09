import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../../../model/tournament.model';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { url } from 'inspector';
import { response } from 'express';
@Component({
  selector: 'app-tourney',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './tourney.component.html',
  styleUrl: './tourney.component.css'
})
export class TourneyComponent implements OnInit{
  

  tourneys: Tournament[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTourney();
  }

  getTourney(){
    this.httpClient.get<any>('http://localhost:3001/tourney').subscribe(
      response => {
        console.log(response);
        this.tourneys = response;
      }
    );
  }

}
