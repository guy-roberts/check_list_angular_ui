import { ChecklistUiPage } from './app.po';

describe('checklist-ui App', function() {
  let page: ChecklistUiPage;

  beforeEach(() => {
    page = new ChecklistUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
