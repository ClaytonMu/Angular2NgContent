import { CalendarComponent } from './calendar/calendar.component';
import { Form2Component } from './form2/form2.component';
import { FormComponent } from './form/form.component';
import { NeedLoginGuard } from './need-login.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FlotComponent } from './charts/flot/flot.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { fallbackRoute } from './fallback-route';

const routes: Routes = [
  { path: '', component: CalendarComponent,
    children: [

      //{ path: '', redirectTo: '/form2', pathMatch: 'full' },
      //{ path: 'form2', component: Form2Component},
      //{ path: 'form', component: FormComponent },
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:num', component: CardsComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [NeedLoginGuard] }
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
