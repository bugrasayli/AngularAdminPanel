import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyMapperComponent } from './my-mapper/my-mapper.component';
import { MyOlsComponent } from './my-ols/my-ols.component';
import { MyOriginFileComponent } from './my-origin-file/my-origin-file.component';
import { SendFileComponent } from './send-file/send-file.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"mymapper",component:MyMapperComponent},
  {path:"myorigin",component:MyOriginFileComponent},
  {path:"myols",component:MyOlsComponent},
  {path:"sendfile",component:SendFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
