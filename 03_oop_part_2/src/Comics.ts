import { Pages } from './Pages';
import { Item } from './Item';

export class Comics extends Item {
  constructor(title: string, private author: string, private artist: string, pages: Pages) {
    super(title, pages);
  }

  toString(): string {
    return `Comics: ${this.getTitle()} by ${this.getAuthor()}, the artist is ${this.getArtist()}, number of pages: ${this.getBookLength()}`;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }

  getArtist(): string {
    return this.artist;
  }

  setArtist(artist: string): void {
    this.artist = artist;
  }
}
