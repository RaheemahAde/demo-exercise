import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.beforeEach(async ({ page }) => {
    // Navigate to the homepage and verify the title
    await page.goto('https://www.stubbenedge.com/');
    await expect(page).toHaveTitle(/Stubben Edge/);
});

test('verify main navigation links', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to Starting Up and verify the menu links are visible
    await homePage.navigateToStartingUp();
    await homePage.verifyStartingUpMenuLinksVisible();

    // Navigate to Brokers page and verify it loaded successfully
    await homePage.navigateToBrokers();
    await homePage.verifyBrokersPageLoaded();

    // Navigate to Products page and verify the menu links are visible
    await homePage.navigateToProducts();
    await homePage.verifyProductsMenuLinksVisible();

    // Navigate through other sections
    await homePage.navigateToAboutUs();
    await homePage.navigateToInsights();
    await homePage.navigateToHome();

    // Verify that the Login link is visible on the Home page
    await homePage.verifyLoginLinkVisible();
});
