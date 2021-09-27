import { Pages } from './Pages';
import { Page } from './Page';

export class PagesFactory {
  static build(numberOfPages = 1, type: string, material: string): Pages {
    if (numberOfPages < 0) throw new Error('Number of pages should be positive number');

    return new Pages(
      Array(numberOfPages)
        .fill(0)
        .map((_, i) => new Page(i + 1, type, material))
    );
  }
}
