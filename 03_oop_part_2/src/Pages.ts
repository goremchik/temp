import { Page } from './Page';

export class Pages implements Iterator<Page> {
  private pages: Page[] = [];
  private currentPage = 0;

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  [Symbol.iterator](): IterableIterator<Page> {
    return this;
  }

  length(): number {
    return this.pages.length;
  }

  next(): IteratorResult<Page> {
    const isLast = this.currentPage === this.pages.length - 1;
    const pageIndex = this.currentPage;
    this.currentPage += isLast ? 0 : 1;
    return { done: isLast, value: this.pages[pageIndex] };
  }
}
