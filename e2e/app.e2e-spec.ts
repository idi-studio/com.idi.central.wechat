import { Com.Idi.Central.WechatPage } from './app.po';

describe('com.idi.central.wechat App', () => {
  let page: Com.Idi.Central.WechatPage;

  beforeEach(() => {
    page = new Com.Idi.Central.WechatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
