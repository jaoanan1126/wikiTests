import test, { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 * 6. Assert the page goes dark when the 'Dark' color option is selected
 * 7. Assert the page goes light when the 'Light' color option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */

test('Actions on Wikipedia homepage', async ({ page }) => {
    /** STEP: Navigate to URL */
    await page.goto('/wiki/Main_Page');

    /** STEP: Click the link to view the total number of articles in English */
    
    const locateNumArticles = page.getByText('articles in English');
    const fullText = await locateNumArticles.textContent();
    const totalArticles = fullText?.split(" ")[0]
    const totalArticlesNum = parseInt(totalArticles)
    // console.log('Full text:', totalArticlesLink);
    const maxArticleCount = Number('7000000');
    expect(totalArticlesNum).toBeLessThan(maxArticleCount);

    /** STEP: Click the 'Standard' text size option in the appearance settings */
    const standardTextSizeButton = page.getByLabel('Standard').first();
    await standardTextSizeButton.click();
    const standardFontSize: Number = parseFloat(await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-size-medium').trim();
      }));

    /** STEP: Select the 'Small' text size option in the appearance settings */
    const smallTextSizeOption = page.getByRole('radio', { name: 'Small' });
    await smallTextSizeOption.click();
    var fontSize = parseFloat(await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-size-medium').trim();
    }));
    expect(fontSize).toBeLessThan(standardFontSize);

    /** STEP: Click the 'Large' text size option to change the display size */
    const largeTextSizeOption = page.getByRole('radio', { name: 'Large' });
    await largeTextSizeOption.click();
    var fontSize: Number = parseFloat(await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-size-medium').trim();
    }));
    expect(fontSize).toBeGreaterThan(standardFontSize);


    /** STEP: Click the 'Dark' color radio button to change the theme */
    const darkColorRadioButton = page.getByRole('radio', { name: 'Dark' });
    await darkColorRadioButton.click();
    var darkBackgroundColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--background-color-neutral-subtle').trim();
    });
    /** STEP: Click the 'Light' color radio button to change the appearance settings */
    const lightColorRadioButton = page.getByRole('radio', { name: 'Light' });
    await lightColorRadioButton.click();
    var lightBackgroundColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--background-color-neutral-subtle').trim();
    });

    expect(darkBackgroundColor).not.toBe(lightBackgroundColor)
});
