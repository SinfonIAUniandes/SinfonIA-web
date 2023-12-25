import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProjectsComponent } from './projects/projects.component';
import { GSPRComponent } from './GSPR/GSPR.component';
import { RobowflexComponent } from './robowflex/robowflex.component';
import { WebRemoteComponent } from './webRemote/webRemote.component';
import { TDP2023Component } from './TDP2023/TDP2023.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'GSPR', component: GSPRComponent },
  { path: 'robowflex', component: RobowflexComponent },
  { path: 'webRemote', component: WebRemoteComponent },
  { path: 'tdp', component: TDP2023Component },
  { path: 'videos', component: VideosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [									
      AppComponent,
      AboutComponent,
      HomeComponent,
      ToolsComponent,
      PageNotFoundComponent,
      ProjectsComponent,
      GSPRComponent,
      RobowflexComponent,
      WebRemoteComponent,
      TDP2023Component,
      VideosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
