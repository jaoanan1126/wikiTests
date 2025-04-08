# Technical Assessment for QA Engineer at Ranger

## Overview

In this exercise, you will work with Playwright (written in TypeScript) to create and complete three automated tests for Wikipedia.

You’ll start by implementing a login test from scratch, then finish two existing tests that were partially generated using Ranger’s test recorder and code generation tool.

You have one hour to complete this exercise on your own. When the hour is up, your interviewer will rejoin the call to discuss your work. You’ll walk them through what you accomplished, highlight what went well, and note any improvements you would have made with additional time.

## Your Task

1. Implement a login test and capture the storage state so the remaining tests run as a logged in user
    - In `login.test.ts`, create a test that signs into Wikipedia
    - Create an account if you don't already have one
    - Add your sign in credentials to `.env`
2. Complete the Wikipedia search test
    - In `searchWikipedia.ts`, finish the existing test so that it correctly implements the test case in the file
3. Complete the Wikipedia home page actions test
    - In `wikipediaHomepageActions.ts`, finish the existing test so that it correctly implements the test case in the file

Each test file contains more detailed instructions.

After you finish all three tests, please come back to this file. Imagine Wikipedia is a Ranger customer, and these tests are part of their end-to-end test suite. Write a technical message to Wikipedia describing the updates you made to `searchWikipedia.ts` and `wikipediaHomepageActions.ts`—specifically, what changed and why.

## Message to Wikipedia

#### Updates to the Search Feature test
I've improved the Wikipedia Search test to correct failed tests and improve reliability. 

- Specified Search Selections: Specified the exact search suggestion to click to avoid conflicts in the search result.
- Improved Language Handling: Leveraged regex with case-insensitivity for language selection buttons to make the test more robust across translations 
- Optimized Configuration: Implemented baseUrl configuration for better code maintainability and deployment flexibility
- Enhanced Error Reporting: Added detailed assertion messages that explain potential failures clearly for easier debugging 

#### Updates to the Homepage Actions

I've improved the Wikipedia Homepage Actions test to correct failed tests and ensure consistent behavior.

- Font Size Validation: Added precise measurements to verify text size changes when different font size options are selected
- Theme Testing: Implemented reliable color change for changes in color theme
- Article Count Validation: Added verification that the article count falls within expected parameters while accommodating Wikipedia's growing content base


## Future Improvements

If given infinite time and patience some improvements I would prioritize would be:
- Create a full page object model
    - create page classes for each page and place the locators in one location. 
    - Create helper methods

- Better error handlings
    - Add robust error reporting 
    - Implement retry logic 

## Project Structure

```plaintext
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .env
└── src
    └── lib
        ├── tests
        │   ├── searchWikipedia.ts
        │   └── wikipediaHomepageActions.ts
    └── auth
        └── login.json
└── tests
        ├── all.test.ts
        ├── login.test.ts
```

## Setup

### Requirements

-   Node.js v22+
-   npm

### .env file should have the following variables:
WIKIPEDIA_USERNAME= <Username>
WIKIPEDIA_PASSWORD= <Password>
TARGET_URL='https://en.wikipedia.org/'

### Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

#### Run all tests

There's a `test` script in `package.json` so you can do:

```bash
npm run test
```

#### Run all tests

Another option is to run the tests via ui

```bash
npx playwright test --ui    
```
#### Run a specific test

Add `.only` to the specific test you want to run in isolation in `all.test.ts` and then run the same command:

```bash
npm run test
```


Note a useful command to identify ARIA roles: 

```bash
npx playwright codegen <Desired Https website> 
```
## Need Help?

If you run into any technical issues during the assessment, do your best to unblock yourself. If you really cannot proceed or are done with the task, email megan@ranger.net.
