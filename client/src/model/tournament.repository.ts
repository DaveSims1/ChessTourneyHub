import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class TournamentRepository
{
    private Tournaments: Tournament[] = [];
    private location: string[] = [];

    constructor(private dataSource: StaticDataSource)
    {
        dataSource.getTournaments().subscribe(data => {
            this.Tournaments = data;
            //this.location = data.map(p => p.location)  *Need to fix these two lines)
                //.filter(l, index, array => array.indexOf(l) === index).sort();

        })
    }
    //add on
}