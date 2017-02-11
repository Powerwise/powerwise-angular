import {browser, by, element} from 'protractor';

describe('Admin', () => {

  beforeEach(async() => {
    return await browser.get('/admin');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-admin h2')).getText()).toEqual('Features');
  });

});
