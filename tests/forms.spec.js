import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { BrokeragePage } from '../pages/brokeragePage';
import { ContactUsPage } from '../pages/contactUsPage';

const firstName = 'John';
const lastName = 'Doe';
const phoneNumber = '+447000000000';
const baseURL = 'https://www.stubbenedge.com/';

test.beforeEach(async ({ page }) => {
    // Navigate to the homepage and verify the title
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Stubben Edge/);
});

test.describe('Stubben Edge App', () => {
    test('should open brokerage form and fill it', async ({ page }) => {
        const homePage = new HomePage(page);
        const brokeragePage = new BrokeragePage(page);

        // Navigate to brokerage form
        await homePage.navigateToStartingUp();
        await homePage.navigateToStartingUpMenuLink();

        // Open the form modal
        await brokeragePage.openFormModal();
    
        // Fill out form fields except email
        await brokeragePage.fillForm(firstName, lastName, phoneNumber);

        // Submit form and verify validation for email
        await brokeragePage.submitForm();
        await brokeragePage.verifyEmailValidation();
    });

    test('should display all fields in the contact us form', async ({ page }) => {
        const homePage = new HomePage(page);
        const contactUsPage = new ContactUsPage(page);

        // Navigate to the About Us page, then to the Contact Us page
        await homePage.navigateToAboutUs();
        await homePage.navigateToContactUs();

        // Verify that all fields in the Contact Us form are visible
        await contactUsPage.verifyFieldsVisibility();
    });
});
