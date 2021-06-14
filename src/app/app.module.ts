import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SendFileComponent } from './send-file/send-file.component';
import { MyMapperComponent } from './my-mapper/my-mapper.component';
import { MyOriginFileComponent } from './my-origin-file/my-origin-file.component';
import { MyOlsComponent } from './my-ols/my-ols.component';
import { PageheaderComponent } from './pageheader/pageheader.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    HeaderComponent,
    HomepageComponent,
    SendFileComponent,
    MyMapperComponent,
    MyOriginFileComponent,
    MyOlsComponent,
    PageheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
