import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class TermsAndPrivacyPolicyPage extends BasePage {
  readonly page: Page;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.mainHeading = page.getByRole("heading", { name: "Terms and Privacy Policy" });
  }

  async open() {
    await this.page.goto("/terms-and-privacy-policy/");
  }
}
