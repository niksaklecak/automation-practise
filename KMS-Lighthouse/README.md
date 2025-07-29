# KMS Lighthouse Automation Framework

This project is a test automation framework built with [Playwright](https://playwright.dev/) to validate the functionality of the KMS Lighthouse website. It provides a structured and maintainable way to write end-to-end and API tests.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/niksaklecak/automation-practise
    cd KMS-Lighthouse
    ```

2.  **Install dependencies:**

    This command will install all the necessary packages defined in `package.json`.

    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**

    This command will download the browser binaries for Chromium, Firefox, and WebKit.

    ```bash
    npx playwright install
    ```

### Configuration

The framework uses a `.env` file to manage environment-specific variables.

1.  **Create a `.env` file** in the root of the `KMS-Lighthouse` directory.

2.  **Add the following environment variables** to the `.env` file:

    ```
    BASE_URL=https://kmslh.com/
    BASE_API_URL=<your_api_url>
    ```

    - `BASE_URL`: The base URL of the website under test.
    - `BASE_API_URL`: The base URL for any API tests.

## 🧪 Running Tests

To run the entire test suite, execute the following command:

```bash
npm test
```

This will run all the tests located in the `tests/` directory in headless mode.

### Viewing Test Results

After the tests have finished running, a detailed HTML report will be generated in the `playwright-report` directory. You can open it with the following command:

```bash
npx playwright show-report
```

## 📂 Project Structure

Here is an overview of the key directories and files in this project:

- `tests/`: Contains all the test files.
  - `e2e/`: End-to-end tests that simulate user interactions.
  - `api/`: API tests for validating server responses.
  - `fixtures/`: Custom test fixtures to provide a specific context for tests.
- `helpers/`: Contains helper functions, utilities, and configuration modules.
  - `config.ts`: Manages environment variables and provides a typed configuration object.
  - `apiClient.ts`: A helper for making API requests.
- `test-cases/`: Markdown files that document the test cases.
- `playwright.config.ts`: The main configuration file for Playwright, where you can define browsers, reporters, and other settings.
- `package.json`: Lists the project dependencies and defines scripts for running tests.

## ✍️ Writing Tests

- **Test Case Documentation**: Before writing a test, it's a good practice to document the test case in a Markdown file in the `test-cases/` directory.
- **Placeholder Tests**: Use `test.fixme("test description", async () => {});` to create a placeholder for a test that is not yet implemented. This will mark the test as "fixme" in the test report.
- **Page Object Model (POM)**: For larger projects, consider implementing the Page Object Model design pattern to create a more maintainable and scalable test suite. You can create page object classes in a `pages/` directory.

---
