import { FirestoreTestPage } from './app.po';

describe('firestore-test App', () => {
  let page: FirestoreTestPage;

  beforeEach(() => {
    page = new FirestoreTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
