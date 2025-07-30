import { test, expect } from "../fixtures/base";

test.describe("Book a Demo", () => {
  test("Verify navigation link works", async ({ mainPage, bookDemoPage }) => {
    await mainPage.bookADemoLink.click();
    await bookDemoPage.page.waitForURL("**/book-a-demo/", { timeout: 6000 });
    await expect(bookDemoPage.bookADemoButton).toBeVisible();
  });

  test("Verify all form fields are present", async ({ bookDemoPage }) => {
    await expect(bookDemoPage.bookADemoButton).toBeVisible();
    await expect(bookDemoPage.firstNameInput).toBeVisible();
    await expect(bookDemoPage.lastNameInput).toBeVisible();
    await expect(bookDemoPage.professionalEmailInput).toBeVisible();
    await expect(bookDemoPage.phoneNumberInput).toBeVisible();
    await expect(bookDemoPage.countryRegionDropdown).toBeVisible();
    await expect(bookDemoPage.messageTextarea).toBeVisible();
    await expect(bookDemoPage.bookADemoButton).toBeVisible();
  });

  test("Verify form validation works correctly", async () => {});

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Book a Demo - front end form validation - test required fields", () => {
  test("Verify first name field validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.firstNameInput.click();
    await bookDemoPage.messageTextarea.click();
    const firstNameValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(firstNameValidationMessage).toContainText("Please complete this required field.");
  });

  test("Verify last name field validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.lastNameInput.click();
    await bookDemoPage.messageTextarea.click();
    const lastNameValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(lastNameValidationMessage).toContainText("Please complete this required field.");
  });

  test("Verify professional email field validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.click();
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please complete this required field.");
  });

  test("Verify phone number field validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.click();
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please complete this required field.");
  });

  test("Verify job title field validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.jobTitleInput.click();
    await bookDemoPage.messageTextarea.click();
    const jobTitleValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(jobTitleValidationMessage).toContainText("Please complete this required field.");
  });

  test("Verify country region dropdown validation works correctly", async ({ bookDemoPage }) => {
    await bookDemoPage.countryRegionDropdown.click();
    await bookDemoPage.messageTextarea.click();
    const countryRegionDropdownValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(countryRegionDropdownValidationMessage).toContainText("Please complete this required field.");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Book a Demo - front end form validation - email field validation - positive tests", () => {
  test.fail("Verify gmail email address is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@gmail.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });
  test("Verify proper email format is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@asd.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });
  test("Verify proper subdomain email format is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@sub.domain.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with alias is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test+alias@domain.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with domain name is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@domain-name.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with country code is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@domain.co.uk");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with info domain is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@domain.info");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with engineering domain is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@domain.engineering");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify proper email format with long domain name is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill(
      "a.very.long.email.address.that.is.technically.valid@long-domain-name.com"
    );
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Book a Demo - front end form validation - email field validation - negative tests", () => {
  test("Verify test domain is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@test.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText(
      "Please enter a different email address. This form does not accept addresses from test.com."
    );
  });

  test("Verify test@example.com is a valid email - but domain is not valid", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@example.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify Missing '@' symbol is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("testexample.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify Missing spaces in an email address is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test at @asd.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify Missing Domain Name is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify Missing Top-Level Domain is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@asd");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify when email starts with @ is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("@asd.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify special characters are not allowed in the email address", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test!#$%^&*()@asd.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify multiple @ symbols are not allowed in the email address", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@@email.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify multiple dots are not allowed in the domain address", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test@email..com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify multiple dots are not allowed in the email address", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test..123@email.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify email address with a dot in the domain name is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill(".test@email.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test("Verify email address with a dot in the email address is not a valid email", async ({ bookDemoPage }) => {
    await bookDemoPage.professionalEmailInput.fill("test.@asd.com");
    await bookDemoPage.messageTextarea.click();
    const professionalEmailValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(professionalEmailValidationMessage).toContainText("Please enter a valid email address.");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Book a Demo - front end form validation - phone number field validation - positive tests", () => {
  test("Verify phone number with country code is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("+1234567890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify number with dashes is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123-456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify number with spaces is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123 456 7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify number with parentheses is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("(123) 456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify number with +  () and dashes and spaces is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("+1 (123) 456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });

  test("Verify number with +  () and dashes without spaces is accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("+1(123)456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).not.toBeVisible({ timeout: 1000 });
  });
});

test.describe("Book a Demo - front end form validation - phone number field validation - negative tests", () => {
  test("Verify alfabetic characters are not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("abc123def");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify special characters are not accepted one dash", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123-456-7890!");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify special characters are not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123@456$7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify special characters are not accepted spaces in the phone number", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123 @456 #7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify number with less than 10 digits is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123456789");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify number with more than 15 digits is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123456789012345678901234567890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("The number you entered is not in range.");
  });

  test("Verify number with incorrect + and - is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123+456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify number with multiple + and is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("++11234567890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify number with incorrect ( and - is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("(123-456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });

  test("Verify number with incorrect ) and - is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("123)-456-7890");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText("Please enter a valid phone number.");
  });
});
