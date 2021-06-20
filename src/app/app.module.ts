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
import { LoginComponent } from './Authorize/login/login.component';
import { RegisterComponent } from './Authorize/register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


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
    PageheaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
