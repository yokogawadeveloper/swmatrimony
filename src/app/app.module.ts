import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { IntroComponent } from './component/intro/intro.component';
import { FeaturesComponent } from './component/features/features.component';
import { SucessStoryComponent } from './component/sucess-story/sucess-story.component';
import { WhyChooseUsComponent } from './component/why-choose-us/why-choose-us.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    FeaturesComponent,
    SucessStoryComponent,
    WhyChooseUsComponent,
    PricingComponent,
    AboutUsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
