import { expect } from "@playwright/test";

export class ContactUsPage {
    constructor(page) {
        // Initialize the page object and the fields on the Contact Us page
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Contact us' });
        this.firstNameField = page.getByLabel('First Name');
        this.lastNameField = page.getByLabel('Surname');
        this.phoneNumberField = page.getByLabel('Phone');
        this.emailField = page.getByLabel('Email');
        this.messageField = page.getByPlaceholder('Your message (optional)');
        this.getInTouchButton = page.getByRole('button', { name: 'GET IN TOUCH' });
    }

    /**
     * Verifies the visibility and enabled status of the fields on the Contact Us page.
     * This method checks if the first name, last name, phone number, email fields,
     * message field, and the "Get in Touch" button are visible and enabled.
     */
    async verifyFieldsVisibility() {
        await expect(this.firstNameField).toBeVisible();
        await expect(this.lastNameField).toBeVisible();
        await expect(this.phoneNumberField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.messageField).toBeVisible();
        await expect(this.getInTouchButton).toBeEnabled();
    }
}
