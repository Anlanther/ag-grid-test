import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { BookmarkedStory } from '../models/story.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `<span
    [ngClass]="{ 'ratio-pass': ratio > 10000, 'ratio-fail': ratio < 5000 }"
    >{{ story.title }}</span
  >`,
})
export class ChapterWordRatioRenderer implements ICellRendererAngularComp {
  story!: BookmarkedStory;

  get ratio() {
    return this.story.words / this.story.chapters;
  }

  agInit(params: ICellRendererParams<BookmarkedStory>): void {
    this.story = params.data!;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
