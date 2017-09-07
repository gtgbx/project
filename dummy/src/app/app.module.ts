import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { TitleComponent } from './component/title/title.component';
import { HighlightDirective } from './directive/highlight.directive';
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { SizerComponent } from './component/sizer/sizer.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HighlightDirective,
    TitleComponent,
    HeroFormComponent,
    SizerComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
