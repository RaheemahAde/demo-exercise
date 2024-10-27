import { expect } from "@playwright/test";

export class BrokeragePage {
    constructor(page) {
        // Initialize the page object and the fields on the Brokerage page
        this.page = page;
        this.brokerageLink = page.getByRole('link', { name: /I want to start a brokerage/ });
        this.modal = page.locator('.dialog-message.dialog-lightbox-message');
        this.firstNameField = page.getByPlaceholder('Your first name');
        this.lastNameField = page.getByPlaceholder('Your surname');
        this.phoneNumberField = page.getByPlaceholder('Your phone number');
        this.emailField = page.locator('input[placeholder="Your email address"]');
        this.submitButton = page.getByRole('button', { name: 'SUBMIT' });
    }

    /**
     * Opens the brokerage form modal by clicking the brokerage link.
     * Verifies that the modal is visible after the link is clicked.
     */
    async openFormModal() {
        await this.brokerageLink.click();
        await expect(this.modal).toBeVisible();
    }

    /**
     * Fills out the brokerage form with the provided first name,
     * last name, and phone number.
     * @param {string} firstName - The first name to fill in the form.
     * @param {string} lastName - The last name to fill in the form.
     * @param {string} phoneNumber - The phone number to fill in the form.
     */
    async fillForm(firstName, lastName, phoneNumber) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.phoneNumberField.fill(phoneNumber);
    }

    /**
     * Submits the brokerage form by clicking the submit button.
     */
    async submitForm() {
        await this.submitButton.click();
    }

    /**
     * Verifies that the email field is marked as required.
     */
    async verifyEmailValidation() {
        await expect(this.emailField).toHaveAttribute('required');
    }
}
