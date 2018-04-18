import { browser, by, element } from 'protractor';

export class AngularMaterialExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('example-root h1')).getText();
  }
}
