import { HopePage } from './app.po';

describe('hope App', () => {
  let page: HopePage;

  beforeEach(() => {
    page = new HopePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
