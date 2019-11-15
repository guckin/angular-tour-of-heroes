import { browser, by, element } from 'protractor';
import {HeroesIds} from '../../src/app/heroes/hero.selectors';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('#app-title')).getText() as Promise<string>;
  }

  async getName(): Promise<string> {
    return await element(by.id(HeroesIds.detail)).getText();
  }

  async setName(value: string): Promise<void> {
    const input = await element(by.id(HeroesIds.nameInput));
    await input.clear();
    await input.sendKeys(value);
  }
}
