import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
  {  loadChildren: () => import('./submission/submisson.module').then(m => m.SubmissionModule), path: '' },
];

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(routes);
