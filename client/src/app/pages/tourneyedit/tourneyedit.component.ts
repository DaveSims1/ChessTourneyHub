import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../../../model/tournament.model';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { url } from 'inspector';
import { response } from 'express';

@Component({
  selector: 'app-tourneyedit',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './tourneyedit.component.html',
  styleUrl: './tourneyedit.component.css'
})
export class TourneyeditComponent {

  tourneyEdit: Tournament[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTourney();
  }

  getTourney(){
    this.httpClient.get<any>('http://localhost:3001/tourney').subscribe(
      response => {
        console.log(response);
        this.tourneyEdit = response;
      }
    );
  }

}
