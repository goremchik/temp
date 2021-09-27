import { Book } from '../src/Book';
import { PagesFactory } from '../src/PagesFactory';

describe('Book', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const book = new Book(
      'Harry Potter',
      'J. K. Rowling',
      PagesFactory.build(4, 'with text', 'simple paper')
    );
    // @ts-ignore
    for (const page of book) {
      expect(page).toEqual(
        `Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it's material is simple paper`
      );
      counter++;
    }
  });
});
