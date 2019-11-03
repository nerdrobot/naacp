import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PrivacyComponent} from "./components/privacy/privacy.component";
import {LeadershipComponent} from "./components/leadership/leadership.component";
import {EventsComponent} from "./components/events/events.component";
import {MembershipComponent} from "./components/membership/membership.component";
import {YouthComponent} from "./components/youth/youth.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'leadership', component: LeadershipComponent},
  {path: 'events', component: EventsComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'youth', component: YouthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
