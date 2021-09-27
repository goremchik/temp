import { Pages } from './Pages';
import { Item } from './Item';

export class Book extends Item {
  constructor(title: string, private author: string, pages: Pages) {
    super(title, pages);
  }

  toString(): string {
    return `Book: ${this.getTitle()} by ${this.getAuthor()} with number of pages: ${this.getBookLength()}`;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }
}
