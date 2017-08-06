import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpSerService} from "./http-ser.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'post', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'post/:slug', component: SinglePostComponent },
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },*/
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppContainerComponent,
    AppFooterComponent,
    AppSidebarComponent,
    SinglePostComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule
  ],
  providers: [HttpSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
