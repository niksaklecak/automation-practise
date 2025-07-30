# Test Cases for Book a Demo

---

### Test Case: Verify "Book a Demo" navigation link works

- **Priority**: High
- **Description**: Ensure that clicking on the "Book a Demo" link in the main navigation opens the correct page.
- **Steps**:
  1.  Go to the homepage.
  2.  Click on the "Book a Demo" link in the navigation bar.
- **Expected Result**: The "Book a Demo" page is opened, confirmed by the URL (`/book-a-demo/`) and the visibility of the "Book a Demo" button on the form.
- **Status**: Automated

---

### Test Case: Verify all form fields are present in "Book a Demo"

- **Priority**: High
- **Description**: Check that the "Book a Demo" form contains all expected input fields.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
- **Expected Result**: The following fields are visible on the page:
  - First Name
  - Last Name
  - Professional Email
  - Phone Number
  - Job Title
  - Country/Region (dropdown)
  - Message (optional)
- **Status**: Automated

---

### Test Case: Validate required fields show an error when empty

- **Priority**: High
- **Description**: Check that an error message ("Please complete this required field.") is shown when a required field is left empty and focus is moved elsewhere.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
  2.  For each required field (First Name, Last Name, Email, Phone, Job Title, Country), click the field and then click away to trigger validation.
- **Expected Result**: The correct validation message appears for each required field.
- **Status**: Automated

---

### Test Case: Validate email field accepts valid formats

- **Priority**: High
- **Description**: Ensure the email field correctly accepts a wide variety of valid email formats.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
  2.  Enter various valid email formats into the email field (e.g., `test@gmail.com`, `test@sub.domain.co.uk`, `test+alias@domain.com`).
  3.  Move focus away from the field.
- **Expected Result**: No validation error message is shown for any of the valid formats.
- **Status**: Automated

---

### Test Case: Validate email field rejects invalid and blocked formats

- **Priority**: High
- **Description**: Ensure the email field correctly rejects invalid formats and specifically blocked domains.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
  2.  Enter various invalid email formats (e.g., `test@test.com`, `test@.com`, `test space@email.com`).
  3.  Move focus away from the field.
- **Expected Result**: The appropriate error message is displayed (e.g., "This form does not accept addresses from test.com" or "Email must be formatted correctly.").
- **Status**: Automated

---

### Test Case: Validate phone number field accepts valid formats

- **Priority**: High
- **Description**: Ensure the phone number field correctly accepts various common phone number formats.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
  2.  Enter various valid phone number formats (e.g., `+1234567890`, `123-456-7890`, `(123) 456-7890`).
  3.  Move focus away from the field.
- **Expected Result**: No validation error message is shown for any of the valid formats.
- **Status**: Automated

---

### Test Case: Validate phone number field rejects invalid formats

- **Priority**: High
- **Description**: Ensure the phone number field rejects inputs that are not valid phone numbers.
- **Steps**:
  1.  Navigate to the "Book a Demo" page.
  2.  Enter various invalid phone number formats (e.g., `abc123def`, `123-456-7890!`, `++11234567890`).
  3.  Move focus away from the field.
- **Expected Result**: The correct error message is displayed ("A valid phone number may only contain numbers, +()-. or x" or "The number you entered is not in range.").
- **Status**: Automated
