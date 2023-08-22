import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookNookComponent } from './book-nook/book-nook.component';



@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    BookNookComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
