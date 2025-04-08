import { test as base, expect } from '@playwright/test';
import * as path from 'path';

// Define a test fixture that uses the authenticated state
const test = base.extend({
  storageState: path.join(__dirname, '../src/auth/login.json'),
});

import './searchWikipedia.test';
import './wikipediaHomepageActions.test';

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
test('User should be logged in', async ({ page }) => {
  await page.goto('wiki/Main_Page');
  
  const userLink = page.getByRole('link', { name: wikipediaUsername });
  await expect(userLink).toBeVisible();
  
});