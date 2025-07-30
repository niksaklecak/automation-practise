import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class BookDemoPage extends BasePage {
  page: Page;
  firstNameInput: Locator;
  lastNameInput: Locator;
  professionalEmailInput: Locator;
  phoneNumberInput: Locator;
  jobTitleInput: Locator;
  countryRegionDropdown: Locator;
  messageTextarea: Locator;
  bookADemoButton: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.firstNameInput = page.getByRole("textbox", { name: "First name*" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name*" });
    this.professionalEmailInput = page.getByRole("textbox", { name: "Professional Email*" });
    this.phoneNumberInput = page.getByRole("textbox", { name: "Phone number*" });
    this.jobTitleInput = page.getByRole("textbox", { name: "Job Title*" });
    this.countryRegionDropdown = page.getByLabel("Country/Region*");
    this.messageTextarea = page.getByRole("textbox", { name: "Message" });
    this.bookADemoButton = page.getByRole("button", { name: "Book a demo" });
  }

  async open() {
    await this.page.goto("/book-a-demo/");
  }
}
