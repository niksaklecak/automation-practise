### Test Case: Verify "Book a Demo" navigation link works

- **Priority**: High
- **Description**: Ensure that clicking on the "Book a Demo" link opens the form modal.
- **Steps**:
  1.  Go to the homepage.
  2.  Click on the "Book a Demo" link in the navigation bar.
- **Expected Result**:
  - Book a demo page opens - url = `https://kmslh.com/book-a-demo/`

---

### Test Case: Verify all form fields are present in "Book a Demo"

- **Priority**: High
- **Description**: Check that the form contains all required fields.
- **Steps**:
  1.  Open the "Book a Demo" form.
  2.  Verify that the following fields are present:
      - First Name
      - Last Name
      - Email
      - Phone Number
      - Country (dropdown)
      - Message (optional)
- **Expected Result**:
  - All fields are rendered in the form.

---

### Test Case: Validate First Name is required

- **Priority**: High
- **Description**: Check that an error is shown when First Name is empty.
- **Steps**:
  1.  Leave the First Name field empty.
  2.  Change focus (blur the field).
- **Expected Result**:
  - Error message like "This field is required" is shown.

---

### Test Case: Validate Last Name is required

- **Priority**: High
- **Description**: Check that an error is shown when Last Name is empty.
- **Steps**:
  1.  Leave the Last Name field empty.
  2.  Blur the field.
- **Expected Result**:
  - Error message is displayed.

---

### Test Case: Validate Email is required

- **Priority**: High
- **Description**: Ensure the user sees a validation error when the Email field is empty.
- **Steps**:
  1.  Leave the Email field empty.
  2.  Blur the field.
- **Expected Result**:
  - Error message is shown (e.g., "This field is required").

---

### Test Case: Validate Email format

- **Priority**: High
- **Description**: Ensure invalid email addresses are rejected.
- **Steps**:
  1.  Enter an invalid email (e.g., "test@").
  2.  Blur the field.
- **Expected Result**:
  - Error message like "Email must be formatted correctly" is shown.

---

### Test Case: Validate Phone Number is required

- **Priority**: High
- **Description**: Check that empty phone numbers are not accepted.
- **Steps**:
  1.  Leave Phone Number field empty.
  2.  Blur the field.
- **Expected Result**:
  - Validation error is shown.

---

### Test Case: Validate Phone Number format

- **Priority**: High
- **Description**: Ensure phone numbers match allowed characters.
- **Steps**:
  1.  Enter an invalid phone number (e.g., "abc123").
  2.  Blur the field.
- **Expected Result**:
  - Error like: "A valid phone number may only contain numbers, +()-. or x".

---

### Test Case: Validate Country selection is required

- **Priority**: High
- **Description**: User must select a country before submitting.
- **Steps**:
  1.  Leave the country dropdown unselected.
  2.  Attempt to submit the form or blur the field.
- **Expected Result**:
  - Validation error is displayed.

---

### Test Case: Verify Message field is optional

- **Priority**: Low
- **Description**: Confirm that the user can leave the message field empty.
- **Steps**:
  1.  Fill in all required fields.
  2.  Leave the message field empty.
  3.  Submit the form.
- **Expected Result**:
  - Form submits successfully without a message.
