import { SalvobertonciniPage } from './app.po';

describe('salvobertoncini App', () => {
  let page: SalvobertonciniPage;

  beforeEach(() => {
    page = new SalvobertonciniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
