import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class AccessibilityWidget extends BasePage {
  readonly accessibilityToolbarLabel: Locator;
  readonly closeToolbarButton: Locator;
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
    this.accessibilityToolbarLabel = page.getByText("Accessibility Toolbar", { exact: true });
    this.closeToolbarButton = page.getByRole("button", { name: "Toggle the visibility of the" });
    this.keyboardNavigationToggle = page.getByText("keyboard Keyboard Navigation");
    this.disableAnimationsToggle = page.getByText("visibility_off Disable");
    this.contrastToggle = page.getByText("nights_stay Contrast");
    this.increaseTextButton = page.getByText("format_size Increase Text");
    this.decreaseTextButton = page.getByText("text_fields Decrease Text");
    this.readableFontToggle = page.getByText("font_download Readable Font");
    this.markTitlesToggle = page.getByText("title Mark Titles");
    this.highlightLinksAndButtonsToggle = page.getByText("link Highlight Links & Buttons");
  }
}
