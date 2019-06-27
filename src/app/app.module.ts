import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar-component/toolbar.component';
import { SidebarComponent } from './components/sidebar-component/sidebar.component';
import { DetailsPageComponent } from './components/details-page-component/details-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BottomNavigationComponent } from './components/bottom-navigation-component/bottom-navigation.component';
import { CardComponentComponent } from './components/card-component/card-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DetailsPageComponent,
    BottomNavigationComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
