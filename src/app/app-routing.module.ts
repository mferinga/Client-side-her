import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ThemeparkListComponent } from './features/themepark/themepark-list/themepark-list.component';
import { ThemeparkDetailComponent } from './features/themepark/themepark-detail/themepark-detail.component';
import { ThemeparkEditComponent } from './features/themepark/themepark-edit/themepark-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'parks', component: ThemeparkListComponent },
  { path: 'parks/new', component: ThemeparkEditComponent },
  {
    path: 'parks/:id',
    pathMatch: 'full',
    component: ThemeparkDetailComponent,
  },

  {
    path: 'parks/:id/edit',
    pathMatch: 'full',
    component: ThemeparkEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
