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
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HighprofileComponent } from './component/highprofile/highprofile.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SearchComponent } from './component/search/search.component';

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
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    HighprofileComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
