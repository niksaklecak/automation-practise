import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class BookDemoPage extends BasePage {
  firstNameInput: Locator;
  lastNameInput: Locator;
  professionalEmailInput: Locator;
  phoneNumberInput: Locator;
  countryRegionDropdown: Locator;
  messageTextarea: Locator;
  bookADemoButton: Locator;
  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByRole("textbox", { name: "First name*" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name*" });
    this.professionalEmailInput = page.getByRole("textbox", { name: "Professional Email*" });
    this.phoneNumberInput = page.getByRole("textbox", { name: "Phone number*" });
    this.countryRegionDropdown = page.getByLabel("Country/Region*");
    this.messageTextarea = page.getByRole("textbox", { name: "Message" });
    this.bookADemoButton = page.getByRole("button", { name: "Book a demo" });
  }
}
