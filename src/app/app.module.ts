import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { ToolbarComponent } from "./components/toolbar-component/toolbar.component";
import { SidebarComponent } from "./components/sidebar-component/sidebar.component";
import { DetailsPageComponent } from "./components/details-page-component/details-page.component";

import { BottomNavigationComponent } from "./components/bottom-navigation-component/bottom-navigation.component";
import { CardComponentComponent } from "./components/card-component/card-component.component";
import { TracksPageComponent } from "./components/tracks-page-component/tracks-page.component";
import { TrackDetailsComponent } from "./components/track-details-component/track-details.component";
import { LoginFormComponent } from './components/login-form-component/login-form.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { StatsPageComponent } from './components/stats-page-component/stats-page.component';
import { StatsPageLevelsComponent } from './components/stats-page-levels-component/stats-page-levels.component';
import { LoadingScreenComponent } from './components/loading-screen-component/loading-screen.component';

const appRoutes: Routes = [
  { path: "tracks/:userId", component: TracksPageComponent },
  { path: "login", component: LoginFormComponent},
  { path: "dashboard", component: MainScreenComponent },
  { path: "", component: StatsPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DetailsPageComponent,
    BottomNavigationComponent,
    CardComponentComponent,
    TracksPageComponent,
    TrackDetailsComponent,
    LoginFormComponent,
    MainScreenComponent,
    StatsPageComponent,
    StatsPageLevelsComponent,
    LoadingScreenComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
