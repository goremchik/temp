import { Pages } from './Pages';
import { PagesIterable } from './PagesIterable';

export abstract class Item {
  @PagesIterable()
  pages: Pages;

  constructor(protected title: string, pages: Pages) {
    this.pages = pages;
  }

  abstract toString(): string;

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getBookLength(): number {
    return this.pages.length();
  }
}
