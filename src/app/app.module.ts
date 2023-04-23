import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { Route, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionModule } from './submission/submission.module';


const routes: Route[] = [
  { path: '', redirectTo: '/submission', pathMatch: 'full' },
  { path: 'submission', component: SubmissionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    SubmissionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
