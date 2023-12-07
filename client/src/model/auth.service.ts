import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { RestDataSource } from './rest.datasource'
// import { JwtHelperService } from '@auth0/angular-jwt';

import { user } from "./user.model";
import { authenticate } from "passport";

// @Injectable() - Needs a few things adjusted
// export class AuthService
// {
//     user: user;

//     constructor(private datasource: RestDataSource)
//     {
//         this.user = new user();
//     }

//     authenticate(user: user): Observable<any></any>
//     {

//     }

//     storeUserData(token: any, user: user): void
//     {

//     } 

//     get authenticate(): boolean
//     {

//     }

//     logout(): Observable<any>
//     {
        
//     }
// }

