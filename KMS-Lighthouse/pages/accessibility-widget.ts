import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class AccessibilityWidgetPage extends BasePage {
  readonly accessibilityToolbar: Locator;
  readonly keyboardNavigationToggle: Locator;
  readonly disableAnimationsToggle: Locator;
  readonly contrastToggle: Locator;
  readonly increaseTextButton: Locator;
  readonly decreaseTextButton: Locator;
  readonly readableFontToggle: Locator;
  readonly markTitlesToggle: Locator;
  readonly highlightLinksAndButtonsToggle: Locator;

  constructor(page: Page) {
    super(page);
    this.accessibilityToolbar = page.locator("#acc-toolbar");
    this.keyboardNavigationToggle = page.getByRole("button", {
      name: "Keyboard Navigation",
    });
    this.disableAnimationsToggle = page.getByRole("button", {
      name: "Disable Animations",
    });
    this.contrastToggle = page.getByRole("button", { name: "Contrast" });
    this.increaseTextButton = page.getByRole("button", { name: "Increase Text" });
    this.decreaseTextButton = page.getByRole("button", { name: "Decrease Text" });
    this.readableFontToggle = page.getByRole("button", { name: "Readable Font" });
    this.markTitlesToggle = page.getByRole("button", { name: "Mark Titles" });
    this.highlightLinksAndButtonsToggle = page.getByRole("button", {
      name: "Highlight Links & Buttons",
    });
  }
}
