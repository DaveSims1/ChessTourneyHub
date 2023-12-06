import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource
{
    private Tournaments: Tournament[] =
    [
        new Tournament(1, 'Tournament 1','Type 1', 'Location 1', 'Date'), //Update this and add more for the datasource.
    ]
    getTournaments(): Observable<Tournament[]>
    {
        return from([this.Tournaments]);
    }
}