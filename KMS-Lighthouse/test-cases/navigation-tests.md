# Test Cases for Navigation

---

### Test Case: Hover on "Our Solution" link opens submenu

- **Priority**: High
- **Description**: Verifies that hovering over "Our Solution" in the main navigation opens a submenu with the correct content and animation.
- **Preconditions**: User is on the homepage.
- **Steps**:
  1.  Hover over the "Our Solution" link in the navigation.
- **Expected Result**:
  - The submenu panel becomes visible.
  - The panel's `transition-duration` is `0.3s`, confirming the slide-down animation is active.
  - The submenu contains the correct links: "Call Center", "Self Service", "Onboarding & Training", and "Field Service".
- **Status**: Automated

---

### Test Case: Click outside "Our Solution" submenu closes it

- **Priority**: High
- **Description**: Verifies that the "Our Solution" submenu closes when the user clicks on another part of the page.
- **Preconditions**: User is on the homepage.
- **Steps**:
  1.  Hover over the "Our Solution" link to open the submenu.
  2.  Verify the submenu is visible.
  3.  Click on the main heading of the page.
- **Expected Result**: The submenu panel becomes hidden.
- **Status**: Automated

---

### Test Case: Submenu stays open when scrolling down

- **Priority**: High
- **Description**: Verifies that the "Our Solution" submenu remains open even when the user scrolls the page.
- **Preconditions**: User is on the homepage.
- **Steps**:
  1.  Hover over the "Our Solution" link to open the submenu.
  2.  Verify the submenu is visible.
  3.  Scroll the page down.
- **Expected Result**: The submenu panel remains visible after scrolling.
- **Status**: Automated
