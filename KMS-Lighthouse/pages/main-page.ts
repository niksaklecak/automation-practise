import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class MainPage extends BasePage {
  readonly bookADemoLink: Locator;
  readonly accessibilityWidgetLink: Locator;

  constructor(page: Page) {
    super(page);
    this.bookADemoLink = this.page.getByRole("banner").getByRole("link", { name: "Book a Demo" });
    this.accessibilityWidgetLink = this.page.getByRole("button", {
      name: "Accessibility Toolbar",
    });
  }

  async open() {
    await this.page.goto("/");
  }
}
