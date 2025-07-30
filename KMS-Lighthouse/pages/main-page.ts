import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class MainPage extends BasePage {
  readonly ourSolutionsSubmenuPanel: Locator;
  readonly mainHeading: Locator;
  readonly iNeedKnowledgeManagementForMyTeamLink: Locator;

  constructor(page: Page) {
    super(page);
    this.ourSolutionsSubmenuPanel = page.locator('[aria-labelledby="dropdown_menu-0"]');
    this.iNeedKnowledgeManagementForMyTeamLink = page.locator('[data-id="0600780"]');
  }

  async open() {
    await this.page.goto("/");
  }
}
