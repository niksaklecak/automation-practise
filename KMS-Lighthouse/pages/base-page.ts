import { Page } from "@playwright/test";
import { NavigationComponent } from "./components/navigation-component";

export class BasePage {
  readonly page: Page;
  readonly navigation: NavigationComponent;

  constructor(page: Page) {
    this.page = page;
    this.navigation = new NavigationComponent(this.page);
  }
}
