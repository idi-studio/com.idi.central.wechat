import { browser, by, element } from 'protractor';

export class Com.Idi.Central.WechatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
