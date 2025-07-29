import { Locator, Page } from "@playwright/test";

export class NavigationComponent {
  readonly page: Page;
  readonly ourSolutionsLink: Locator;
  readonly integrationsLink: Locator;
  readonly knowledgeCenterLink: Locator;
  readonly caseStudiesLink: Locator;
  readonly aboutLink: Locator;
  readonly bookADemoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ourSolutionsLink = page.getByRole("banner").getByRole("link", { name: "Our Solutions" });
    this.integrationsLink = page.getByRole("banner").getByRole("link", { name: "Integrations" });
    this.knowledgeCenterLink = page.getByRole("banner").getByRole("link", { name: "Knowledge Center" });
    this.caseStudiesLink = page.getByRole("banner").getByRole("link", { name: "Case Studies" });
    this.aboutLink = page.getByRole("banner").getByRole("link", { name: "About" });
    this.bookADemoLink = page.getByRole("banner").getByRole("link", { name: "Book a Demo" });
  }

  async clickBookADemo() {
    await this.bookADemoLink.click();
  }
}
