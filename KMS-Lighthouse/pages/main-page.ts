import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class MainPage extends BasePage {
  readonly page: Page;
  readonly ourSolutionsSubmenuPanel: Locator;
  readonly callCenterLink: Locator;
  readonly selfServiceLink: Locator;
  readonly onboardingAndTrainingLink: Locator;
  readonly fieldServiceLink: Locator;
  readonly mainHeading: Locator;
  readonly howWeCanHelpTodayImg: Locator;
  readonly termsAndPrivacyPolicyLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.ourSolutionsSubmenuPanel = page.locator('[aria-labelledby="dropdown_menu-0"]');
    this.callCenterLink = page.getByRole("link").filter({ hasText: "Call Center Cut call center" });
    this.selfServiceLink = page.getByRole("link").filter({ hasText: "Self Service Empower your" });
    this.onboardingAndTrainingLink = page.getByRole("link").filter({ hasText: "Onboarding & Training Cut" });
    this.fieldServiceLink = page.getByRole("link").filter({ hasText: "Field Service Reduce your" });
    this.mainHeading = page.getByRole("heading", { name: "Find and share your" });
    this.howWeCanHelpTodayImg = page.locator("img.attachment-full.size-full.wp-image-18407");
    this.termsAndPrivacyPolicyLink = page.getByRole("link", { name: "Terms and Privacy Policy" });
  }

  async open() {
    await this.page.goto("/");
  }
}
