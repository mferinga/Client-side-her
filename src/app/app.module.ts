import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeparkListComponent } from './features/themepark/themepark-list/themepark-list.component';
import { ThemeparkDetailComponent } from './features/themepark/themepark-detail/themepark-detail.component';
import { ThemeparkEditComponent } from './features/themepark/themepark-edit/themepark-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ThemeparkListComponent,
    ThemeparkDetailComponent,
    ThemeparkEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
