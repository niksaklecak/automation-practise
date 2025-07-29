import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class MainPage extends BasePage {
  readonly bookADemoLink: Locator;
  readonly accessibilityWidgetLink: Locator;

  constructor(page: Page) {
    super(page);
    this.bookADemoLink = this.page.getByRole("banner").getByRole("link", { name: "Book a Demo" });
    this.accessibilityWidgetLink = this.page.getByRole("button", { name: "Toggle Accessibility Toolbar" });
  }

  async open() {
    await this.page.goto("/");
    // Gracefully handle a potential cookie consent banner
    const acceptCookiesButton = this.page.getByRole("button", { name: "Ok" });
    await acceptCookiesButton.click({ timeout: 3000 }).catch(() => {
      console.log("Cookie banner not found or already accepted.");
    });
  }
}
