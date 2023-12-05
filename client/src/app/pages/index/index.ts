import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [IndexComponent],
    exports: [IndexComponent]
})

export class IndexModule {}