import { Component, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { Chapter } from 'src/app/shared/models/Chapter';
import { FetchService } from 'src/app/shared/service/fetch.service';
import { Subscription, fromEvent, map } from 'rxjs';
import { SubChapter } from 'src/app/shared/models/SubChapter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  Chapters!: Chapter[];
  subscription!: Subscription;
  subscriptionDropDown!: Subscription;
  rotate: { [key: string]: boolean }  = {};
  submenu:  { [key: string]: boolean }  = {};
  subChap!: SubChapter[];
  index: number = 0;
  id: string = '';
  constructor(private fetch: FetchService) { }

  ngOnInit() {
    this.subscription = this.fetch.fetchChapter().subscribe({
      next: this.getAllChapters.bind(this),
      error: this.raiseErrorHandler.bind(this),
      complete: this.completeAPI.bind(this)
    })
  }


  clickDropdown(event: any, id: string,index: number) {
    if(id != this.id)
    Object.keys(this.rotate).forEach((item: string) => {
      this.rotate[item] = false
      this.submenu[item] = false
    }
    )
    this.id = id;
    this.submenu[index] = !this.submenu[index];
    this.rotate[index] = !this.rotate[index];
    this.index = index;
    this.subChap = this.Chapters.filter((c: Chapter) => c.id == id)[0].subchapter;
  }

  getAllChapters(objects: Chapter[]) {
    this.Chapters = objects;
  }

  raiseErrorHandler(error: Error) {
    console.log("Error in API")
  }

  completeAPI() {
    console.log("Chapter Fetched")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
