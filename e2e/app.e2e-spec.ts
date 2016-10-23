import { FunyiroAppPage } from './app.po';

describe('funyiro-app App', function() {
  let page: FunyiroAppPage;

  beforeEach(() => {
    page = new FunyiroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
