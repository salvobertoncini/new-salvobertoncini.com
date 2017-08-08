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
import {HttpSerService} from "./_services/http/http-ser.service";
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {PagerService} from "./_services/pagination/pager.service";
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { TagComponent } from './tag/tag.component';
import { AuthGuard} from "./_services/security/auth.guard"
import {AuthService} from "./_services/security/auth.service";
import { LoginComponent } from './login/login.component';
import {AlertService} from "./_services/alert/alert.service";
import { AlertComponent } from './_services/alert/alert.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:page', component: BlogComponent },
  { path: 'category', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'tag', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'tag/:tag', component: TagComponent },
  { path: 'author', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'author/:author', component: AuthorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'post/:slug', component: SinglePostComponent },
  { path: 'login', component: LoginComponent },
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
    AboutComponent,
    BlogComponent,
    ContactComponent,
    CategoryComponent,
    AuthorComponent,
    TagComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule
  ],
  providers: [
    HttpSerService,
    PagerService,
    AlertService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
