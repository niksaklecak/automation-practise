import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class AccessibilityWidget extends BasePage {
  readonly page: Page;
  readonly accessibilityToolbarLabel: Locator;
  readonly closeAccessibilityToolbarButton: Locator;
  readonly keyboardNavigationToggle: Locator;
  readonly disableAnimationsToggle: Locator;
  readonly contrastToggle: Locator;
  readonly increaseTextToggle: Locator;
  readonly decreaseTextToggle: Locator;
  readonly readableFontToggle: Locator;
  readonly markTitlesToggle: Locator;
  readonly highlightLinksAndButtonsToggle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.accessibilityToolbarLabel = page.getByText("Accessibility Toolbar", { exact: true });
    this.closeAccessibilityToolbarButton = page.getByRole("button", { name: "Toggle the visibility of the" });
    this.keyboardNavigationToggle = page.getByText("keyboard Keyboard Navigation");
    this.disableAnimationsToggle = page.getByText("visibility_off Disable");
    this.contrastToggle = page.getByText("nights_stay Contrast");
    this.increaseTextToggle = page.getByText("format_size Increase Text");
    this.decreaseTextToggle = page.getByText("text_fields Decrease Text");
    this.readableFontToggle = page.getByText("font_download Readable Font");
    this.markTitlesToggle = page.getByText("title Mark Titles");
    this.highlightLinksAndButtonsToggle = page.getByText("link Highlight Links & Buttons");
  }
}
