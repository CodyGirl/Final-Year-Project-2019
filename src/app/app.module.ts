import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { LayoutComponent } from './ui/layout/layout.component';
import {LoginComponent} from './ui/login/login.component';
import { CardsComponent } from './cards/cards.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthService } from './auth.service';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FooterComponent } from './ui/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LayoutComponent,
    CardsComponent,
    RecommendationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
