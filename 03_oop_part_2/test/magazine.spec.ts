import { Magazine } from '../src/Magazine';
import { PagesFactory } from '../src/PagesFactory';

describe('Magazine', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const magazine = new Magazine(
      'G.Q',
      PagesFactory.build(2, 'with article', 'glossy paper'),
    );
    // @ts-ignore
    for (const page of magazine) {
      expect(page).toEqual(
        `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it's material is glossy paper`
      );
      counter++;
    }
  });
});
