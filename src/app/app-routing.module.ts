import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChipsComponent } from './chips/chips.component';
import { DateComponent } from './date/date.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {path:'buttons', component:ButtonsComponent},
  {path:'chips', component:ChipsComponent},
  {path:'date', component:DateComponent},
  {path:'slide', component:SlideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ButtonsComponent, ChipsComponent, DateComponent]

// just specify here