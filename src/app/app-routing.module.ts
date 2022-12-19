import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { AllComponent } from './all/all.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { BrowserComponent } from './browser/browser.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FightingComponent } from './fighting/fighting.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaitemComponent } from './mediaitem/mediaitem.component';
import { NotdoundComponent } from './notdound/notdound.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PopularityComponent } from './popularity/popularity.component';
import { RacingComponent } from './racing/racing.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SortbyComponent } from './sortby/sortby.component';
import { SportsComponent } from './sports/sports.component';
import { ZombieComponent } from './zombie/zombie.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [GuardGuard], component: HomeComponent },
  { path: 'all', canActivate: [GuardGuard], component: AllComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'categories',
    canActivate: [GuardGuard],
    component: CategoriesComponent,
  },
  {
    path: 'platforms',
    canActivate: [GuardGuard],
    component: PlatformsComponent,
  },
  {
    path: 'details/:id',
    canActivate: [GuardGuard],
    component: DetailsComponent,
  },
  { path: 'browser', canActivate: [GuardGuard], component: BrowserComponent },
  {
    path: 'release-data',
    canActivate: [GuardGuard],
    component: ReleaseDateComponent,
  },
  {
    path: 'relevance',
    canActivate: [GuardGuard],
    component: RelevanceComponent,
  },
  {
    path: 'alphabetical',
    canActivate: [GuardGuard],
    component: AlphabeticalComponent,
  },
  {
    path: 'popularity',
    canActivate: [GuardGuard],
    component: PopularityComponent,
  },
  { path: 'racing', canActivate: [GuardGuard], component: RacingComponent },
  { path: 'media', canActivate: [GuardGuard], component: MediaitemComponent },
  {
    path: 'battle',
    canActivate: [GuardGuard],
    component: BattleRoyaleComponent,
  },
  { path: 'zompie', canActivate: [GuardGuard], component: ZombieComponent },
  { path: 'fighting', canActivate: [GuardGuard], component: FightingComponent },
  { path: 'world', canActivate: [GuardGuard], component: OpenWorldComponent },
  { path: 'fantazy', canActivate: [GuardGuard], component: FantasyComponent },
  { path: 'action', canActivate: [GuardGuard], component: ActionComponent },
  {
    path: 'actionrpg',
    canActivate: [GuardGuard],
    component: ActionRpgComponent,
  },
  { path: 'shooter', canActivate: [GuardGuard], component: ShooterComponent },
  { path: 'sports', canActivate: [GuardGuard], component: SportsComponent },
  { path: 'social', canActivate: [GuardGuard], component: SocialComponent },
  { path: 'resgister', component: ResgisterComponent },
  { path: 'sortby', canActivate: [GuardGuard], component: SortbyComponent },
  { path: '**', component: NotdoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
