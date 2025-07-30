import { test, expect } from "../fixtures/base";
import { Locator } from "@playwright/test";
import { BookDemoPage } from "../../pages/book-demo-page";

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
});

test.describe("Book a Demo - Form Validation", () => {
  const requiredFields: { fieldName: string; locator: (bookDemoPage: BookDemoPage) => Locator }[] = [
    { fieldName: "First Name", locator: (bookDemoPage) => bookDemoPage.firstNameInput },
    { fieldName: "Last Name", locator: (bookDemoPage) => bookDemoPage.lastNameInput },
    { fieldName: "Professional Email", locator: (bookDemoPage) => bookDemoPage.professionalEmailInput },
    { fieldName: "Phone Number", locator: (bookDemoPage) => bookDemoPage.phoneNumberInput },
    { fieldName: "Job Title", locator: (bookDemoPage) => bookDemoPage.jobTitleInput },
    { fieldName: "Country/Region", locator: (bookDemoPage) => bookDemoPage.countryRegionDropdown },
  ];

  requiredFields.forEach(({ fieldName, locator }) => {
    test(`Verify ${fieldName} field validation works correctly`, async ({ bookDemoPage }) => {
      await locator(bookDemoPage).click();
      await bookDemoPage.messageTextarea.click();
      const validationMessage = bookDemoPage.page.locator('[role="alert"]').first();
      await expect(validationMessage).toContainText("Please complete this required field.");
    });
  });

  const positiveEmails = [
    "test@gmail.com",
    "test@asd.com",
    "test@sub.domain.com",
    "test+alias@domain.com",
    "test@domain-name.com",
    "test@domain.co.uk",
    "test@domain.info",
    "test@domain.engineering",
    "a.very.long.email.address.that.is.technically.valid@long-domain-name.com",
  ];

  positiveEmails.forEach((email) => {
    test(`Verify email "${email}" is accepted`, async ({ bookDemoPage }) => {
      await bookDemoPage.professionalEmailInput.fill(email);
      await bookDemoPage.messageTextarea.click();
      const validationMessage = bookDemoPage.page.locator('[role="alert"]').first();
      await expect(validationMessage).not.toBeVisible({ timeout: 1000 });
    });
  });

  const negativeEmails = [
    {
      email: "test@test.com",
      message: "Please enter a different email address. This form does not accept addresses from test.com.",
    },
    { email: "testexample.com", message: "Email must be formatted correctly." },
    { email: "test at @asd.com", message: "Email must be formatted correctly." },
    { email: "test@", message: "Email must be formatted correctly." },
    { email: "test@asd", message: "Email must be formatted correctly." },
    { email: "@asd.com", message: "Email must be formatted correctly." },
    { email: "test!#$%^&*()@asd.com", message: "Please enter a valid email address." },
    { email: "test@@email.com", message: "Email must be formatted correctly." },
    { email: "test@email..com", message: "Please enter a valid email address." },
    {
      email: "test..123@email.com",
      message: "Please enter a different email address. This form does not accept addresses from email.com.",
    },
    {
      email: ".test@email.com",
      message: "Please enter a different email address. This form does not accept addresses from email.com.",
    },
    { email: "test@.asd.com", message: "Please enter a valid email address." },
  ];

  negativeEmails.forEach(({ email, message }) => {
    test(`Verify email "${email}" is rejected`, async ({ bookDemoPage }) => {
      await bookDemoPage.professionalEmailInput.fill(email);
      await bookDemoPage.messageTextarea.click();
      const validationMessage = bookDemoPage.page.locator('[role="alert"]').first();
      await expect(validationMessage).toContainText(message);
    });
  });

  const positivePhoneNumbers = [
    "+1234567890",
    "123-456-7890",
    "123 456 7890",
    "(123) 456-7890",
    "+1 (123) 456-7890",
    "+1(123)456-7890",
  ];

  positivePhoneNumbers.forEach((number) => {
    test(`Verify phone number "${number}" is accepted`, async ({ bookDemoPage }) => {
      await bookDemoPage.phoneNumberInput.fill(number);
      await bookDemoPage.messageTextarea.click();
      const validationMessage = bookDemoPage.page.locator('[role="alert"]').first();
      await expect(validationMessage).not.toBeVisible({ timeout: 1000 });
    });
  });

  const negativePhoneNumbers = [
    {
      number: "abc123def",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "123-456-7890!",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "123@456$7890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "123 @456 #7890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "123456789012345678901234567890",
      message: "The number you entered is not in range.",
    },
    {
      number: "123+456-7890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "++11234567890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "(123-456-7890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
    {
      number: "123)-456-7890",
      message: "A valid phone number may only contain numbers, +()-. or x",
    },
  ];

  negativePhoneNumbers.forEach(({ number, message }) => {
    test(`Verify phone number "${number}" is rejected`, async ({ bookDemoPage }) => {
      await bookDemoPage.phoneNumberInput.fill(number);
      await bookDemoPage.messageTextarea.click();
      const validationMessage = bookDemoPage.page.locator('[role="alert"]').first();
      await expect(validationMessage).toContainText(message);
    });
  });
  //Clarify with the team if this is a valid test case
  test.fixme("Verify number with less than 6 digits is not accepted", async ({ bookDemoPage }) => {
    await bookDemoPage.phoneNumberInput.fill("12345");
    await bookDemoPage.messageTextarea.click();
    const phoneNumberValidationMessage = bookDemoPage.page.locator('[role="alert"]').first();
    await expect(phoneNumberValidationMessage).toContainText(
      "A valid phone number may only contain numbers, +()-. or x"
    );
  });
});
