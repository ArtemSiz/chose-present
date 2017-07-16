import { ChosePresentAngCliPage } from './app.po';

describe('chose-present-ang-cli App', function() {
  let page: ChosePresentAngCliPage;

  beforeEach(() => {
    page = new ChosePresentAngCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
