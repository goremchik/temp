import { Item } from './Item';

export class Magazine extends Item {
  toString(): string {
    return `Magazine: ${this.getTitle()} with number of pages: ${this.getBookLength()}`;
  }
}
