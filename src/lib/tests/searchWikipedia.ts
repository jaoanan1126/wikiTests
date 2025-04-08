import test, { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia
 * 2. Go to the "Artificial intelligence" page
 * 3. Switch the language to Spanish and confirm the page was updated
 * 4. Switch the language to French and confirm the page was updated
 * 5. Click "View history"
 * 6. Assert that the latest edit was made by the user "Worstbull"
 *
 * Instructions:
 * - Run the test and ensure it performs all steps described above
 * - Add assertions to the test to ensure it validates the expected
 *   behavior:
 *   - If the latest edit was not made by "Worstbull" update the steps above accordingly
 *   - Write your assertion to provide clear diagnostic feedback if it fails
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://www.wikipedia.org/');

    /** STEP: Enter text 'art' into the search input field */
    const searchInputField = page.getByRole('searchbox', {
        name: 'Search Wikipedia',
    });
    await searchInputField.fill('artificial');

    /** STEP: Click the 'Artificial Intelligence' link in the search suggestions */
    const artificialIntelligenceLink = page.getByRole('link', {
        name: 'Artificial intelligence Intelligence of Machines',
    });
    await artificialIntelligenceLink.click();

    /** STEP: Click the language selection dropdown to choose a different language */
    const languageDropdownButton = await page.getByRole('button', { name: /Go to an article/i }).click();
    
    /** STEP: Click the button to open the language selection menu */
    const languageSelectionButton = page.getByRole('textbox', {
        name: 'Search for a language',
    });
    await languageSelectionButton.fill('espanol');

    /** STEP: Click the 'Español' link to change the language to Spanish */
    const spanishLanguageLink = page.getByRole('link', { name: 'Español' });
    await spanishLanguageLink.first().click();

    /** STEP: Locate the heading for the 'Inteligencia artificial' section */
    const inteligenciaArtificialHeading = page
        .getByRole('heading', { name: 'Inteligencia artificial', exact: true })
        .locator('span');
    await expect(inteligenciaArtificialHeading).toHaveText(
        'Inteligencia artificial'
    );

    /** STEP: Locate the heading for the 'Inteligencia artificial' section */
    const inteligenciaArtificialSectionHeading = page
        .getByRole('heading', { name: 'Inteligencia artificial', exact: true })
        .locator('span');
    await expect(inteligenciaArtificialSectionHeading).toHaveText(
        'Inteligencia artificial'
    );

    /** STEP: Click the language selection dropdown to choose a different language */
    const languageDropdownToggle = page.getByRole('button', {
        name: /Ir a un artículo en otro/,
    });
    await languageDropdownToggle.click();

    /** STEP: Select the French language link from the language options */
    const frenchLanguageSearch = page.getByRole('textbox', {
        name: 'Buscar un idioma',
    });
    await frenchLanguageSearch.fill('francais');

    /** STEP: Click the 'Français' link to switch the language to French */
    const frenchLanguageLink = page.getByRole('link', { name: 'Français' });
    await frenchLanguageLink.first().click();

    /** STEP: Locate the heading for the 'Intelligence artificielle' section */
    const intelligenceArtificielleHeading = page
        .getByRole('heading', {
            name: 'Intelligence artificielle',
            exact: true,
        })
        .locator('span');
    await expect(intelligenceArtificielleHeading).toContainText('artificielle');

    /** STEP: Locate the heading for the 'Intelligence artificielle' section */
    const intelligenceArtificielleSectionHeading = page
        .getByRole('heading', {
            name: 'Intelligence artificielle',
            exact: true,
        })
        .locator('span');
    await expect(intelligenceArtificielleSectionHeading).toHaveText(
        'Intelligence artificielle'
    );

    /** STEP: Click the 'Clair' appearance option to change the theme */
    const clairAppearanceOption = page
        .getByRole('heading', {
            name: 'Intelligence artificielle',
            exact: true,
        })
        .locator('span');
    await clairAppearanceOption.click();

    /** STEP: Double click the heading for 'Intelligence artificielle' to trigger an action */
    const intelligenceArtificielleHeadingDoubleClick = page
        .getByRole('heading', {
            name: 'Intelligence artificielle',
            exact: true,
        })
        .locator('span');
    await intelligenceArtificielleHeadingDoubleClick.dblclick();

    /** STEP: Locate the heading for the 'Intelligence artificielle' section */
    const intelligenceArtificielleSectionTitle = page.getByRole('heading', {
        name: 'Intelligence artificielle',
        exact: true,
    });
    await expect(intelligenceArtificielleSectionTitle).toHaveText(
        'Intelligence artificielle'
    );

    await page.goto('wiki/Artificial_intelligence#Ethics')
    const viewHistoryLink = page.getByRole('link', { name: 'View history' });
    await viewHistoryLink.click();

    const latestEditor = page.locator('#pagehistory li').first().locator('a.mw-userlink');
    const editorName = await latestEditor.textContent();
    const predictedLastEditor = 'Citation bot'
    console.log("latestEditor: ", editorName)
    await expect(latestEditor, 
        `Expected latest edit to be by "${predictedLastEditor}", but found "${editorName}"`
      ).toHaveText(predictedLastEditor);
};
