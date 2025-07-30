# Test Cases: Accessibility Widget

---

### Test Case: Open and Close Accessibility Widget

- **Priority**: High
- **Precondition**: User is on the homepage.
- **Steps**:
  1.  Locate and click the Accessibility icon/button.
  2.  Verify the accessibility widget panel opens and is visible.
  3.  Click the close icon inside the widget.
- **Expected Result**: The accessibility widget panel closes and is no longer visible.
- **Status**: Automated

---

### Test Case: Check All Tools Are Visible

- **Priority**: High
- **Precondition**: Accessibility widget is open.
- **Steps**:
  1.  Open the widget.
- **Expected Result**: All the expected tools and options are visible inside the widget (Keyboard Navigation, Disable Animations, Contrast, etc.).
- **Status**: Automated

---

### Test Case: Toggle - Keyboard Navigation

- **Priority**: High
- - **Precondition**: Widget is open.
- **Steps**:
  1.  Click on the “Keyboard Navigation” toggle.
  2.  Press the "Tab" key.
- **Expected Result**: The browser focus moves correctly from the "Keyboard Navigation" toggle to the "Disable Animations" toggle.
- **Status**: Automated

---

### Test Case: Toggle - Disable Animations

- **Priority**: Medium
- **Precondition**: Widget is open.
- **Steps**:
  1.  Check the initial `transition-duration` of an animated element (the "Our Solutions" submenu). It should be `"0.3s, 0.3s"`.
  2.  Click the "Disable Animations" toggle.
  3.  Trigger the animation again by hovering over the "Our Solutions" link.
- **Expected Result**: The `transition-duration` of the submenu is now `"0s"`, confirming the animation has been disabled.
- **Status**: Automated

---

### Test Case: Toggle - Contrast

- **Priority**: Medium
- **Precondition**: Widget is open.
- **Steps**:
  1.  Check the initial `background-color` of a page element (e.g., the "Our Solutions" submenu). It should be white (`"rgb(255, 255, 255)"`).
  2.  Click the "Contrast" toggle.
- **Expected Result**: The `background-color` of the element changes to black (`"rgb(0, 0, 0)"`).
- **Status**: Automated

---

### Test Case: Toggle - Increase/Decrease Text Size

- **Priority**: Medium
- **Precondition**: Widget is open.
- **Steps**:
  1.  Get the initial `font-size` of a text element (e.g., the widget's own title). It should be `"24px"`.
  2.  Click the "Increase Text" toggle.
  3.  Assert the new `font-size` is larger (e.g., contains `"38"`).
  4.  Click the "Decrease Text" toggle.
- **Expected Result**: The `font-size` returns to its smaller, original value (e.g., contains `"19"`).
- **Status**: Automated

---

### Test Case: Toggle - Readable Font

- **Priority**: Low
- **Precondition**: Widget is open.
- **Steps**:
  1.  Get the initial `font-family` of a text element. It should be `"DM Sans", sans-serif`.
  2.  Click the "Readable Font" toggle.
- **Expected Result**: The `font-family` changes to `"Arial, sans-serif"`.
- **Status**: Automated

---

### Test Case: Toggle - Mark Titles

- **Priority**: Low
- **Precondition**: Widget is open.
- **Steps**:
  1.  Get the initial `background-color` of a title element. It should be transparent (`"rgba(0, 0, 0, 0)"`).
  2.  Click the "Mark Titles" toggle.
- **Expected Result**: The `background-color` of the title changes to yellow (`"rgb(255, 255, 0)"`).
- **Status**: Automated

---

### Test Case: Toggle - Highlight Links & Buttons

- **Priority**: Low
- **Precondition**: Widget is open.
- **Steps**:
  1.  Get the initial `background-color` of a link. It should be transparent (`"rgba(0, 0, 0, 0)"`).
  2.  Click the "Highlight Links & Buttons" toggle.
- **Expected Result**: The `background-color` of the link changes to a yellow highlight color (containing `"rgba(255, 233, 1"`).
- **Status**: Automated
