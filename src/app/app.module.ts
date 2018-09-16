import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

library.add(fas, faLinkedin, faInstagram, faEnvelope, faPodcast);

// const appRoutes: Routes = [
//   { path: 'portfolio', component: PortfolioComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CollapseModule,
    FontAwesomeModule

    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
