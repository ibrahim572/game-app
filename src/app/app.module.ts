import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotdoundComponent } from './notdound/notdound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserComponent } from './browser/browser.component';
import { DetailsComponent } from './details/details.component';
import { MediaitemComponent } from './mediaitem/mediaitem.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { PopularityComponent } from './popularity/popularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { RacingComponent } from './racing/racing.component';
import { SportsComponent } from './sports/sports.component';
import { SocialComponent } from './social/social.component';
import { ShooterComponent } from './shooter/shooter.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FightingComponent } from './fighting/fighting.component';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { ZombieComponent } from './zombie/zombie.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    PlatformsComponent,
    SortbyComponent,
    CategoriesComponent,
    ResgisterComponent,
    LoginComponent,
    NavbarComponent,
    NotdoundComponent,
    BrowserComponent,
    DetailsComponent,
    MediaitemComponent,
    ReleaseDateComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    BattleRoyaleComponent,
    FantasyComponent,
    FightingComponent,
    ActionRpgComponent,
    ActionComponent,
    ZombieComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
