import { LazytablePage } from './app.po';

describe('lazytable App', () => {
  let page: LazytablePage;

  beforeEach(() => {
    page = new LazytablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
