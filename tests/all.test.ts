import { test as base, expect } from '@playwright/test';
import * as path from 'path';

// Define a test fixture that uses the authenticated state
const test = base.extend({
  storageState: path.join(__dirname, '../src/auth/login.json'),
});


import { run as searchWikipedia } from '../src/lib/tests/searchWikipedia.ts';
import { run as wikipediaHomepageActions } from '../src/lib/tests/wikipediaHomepageActions.ts';
test(
    'Search Wikipedia for "artifical intelligence"',
    { tag: '@id=67ddea97348cfb2bed994986' },
    async ({ page }) => {
        await searchWikipedia(page, {});
    }
);

test(
    'Perform Wikipedia homepage actions',
    { tag: '@id=67ddf04f348cfb2bed994999' },
    async ({ page }) => {
        await wikipediaHomepageActions(page, {});
    }
);
const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
test('User should be logged in', async ({ page }) => {
  await page.goto('wiki/Main_Page');
  
  const userLink = page.getByRole('link', { name: wikipediaUsername });
  await expect(userLink).toBeVisible();
  
});