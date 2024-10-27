import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        // Initialize the page object and the links on the Home page
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.startingUpLink = page.getByRole('link', { name: 'Starting up ' });
        this.startingUpMenuLink = page.getByLabel('Menu', { exact: true }).getByRole('link', { name: 'Starting up', exact: true });
        this.appointedRepMenuLink = page.getByRole('link', { name: 'Appointed Representatives' });
        this.brokersLink = page.getByRole('link', { name: 'Brokers', exact: true });
        this.productsLink = page.getByRole('link', { name: 'Our products and services' });
        this.specialistBrokingLink = page.getByRole('link', { name: 'Specialist Broking' });
        this.financialServicesLink = page.getByRole('link', { name: 'Capital For Financial Services' });
        this.complianceConsultingLink = page.getByRole('link', { name: 'Compliance consulting' });
        this.aboutUsLink = page.getByRole('link', { name: /About us/ });
        this.contactUsLink = page.getByRole('link', { name: 'Contact Us' });
        this.insightsLink = page.getByLabel('Menu', { exact: true }).getByRole('link', { name: 'Insights' });
        this.loginLink = page.getByRole('link', { name: /Log in/ });
    }

    /**
     * Navigates to the Home page and verifies that the heading is visible.
     */
    async navigateToHome() {
        await this.homeLink.click();
        const heading = this.page.getByRole('heading', { name: 'Financial services done differently' });
        await expect(heading).toBeVisible();
    }

    /**
     * Navigates to the Starting Up page.
     */
    async navigateToStartingUp() {
        await this.startingUpLink.click();
    }

    /**
     * Clicks the Starting Up menu link and verifies the URL.
     */
    async navigateToStartingUpMenuLink() {
        await this.startingUpMenuLink.click();
        await expect(this.page).toHaveURL(/starting-an-insurance-brokerage/);
    }

    /**
     * Verifies that the Starting Up menu links are visible.
     */
    async verifyStartingUpMenuLinksVisible() {
        await expect(this.appointedRepMenuLink).toBeVisible();
        await expect(this.startingUpMenuLink).toBeVisible();
    }

    /**
     * Navigates to the Brokers page.
     */
    async navigateToBrokers() {
        await this.brokersLink.click();
    }

    /**
     * Verifies that the Brokers page has loaded by checking the heading.
     */
    async verifyBrokersPageLoaded() {
        await expect(this.page.getByRole('heading', { name: 'A new destination for insurance brokers' })).toBeVisible();
    }

    /**
     * Navigates to the Products page.
     */
    async navigateToProducts() {
        await this.productsLink.click();
    }

    /**
     * Verifies that the Products menu links are visible.
     */
    async verifyProductsMenuLinksVisible() {
        await expect(this.specialistBrokingLink).toBeVisible();
        await expect(this.financialServicesLink).toBeVisible();
        await expect(this.complianceConsultingLink).toBeVisible();
    }

    /**
     * Navigates to the About Us page.
     */
    async navigateToAboutUs() {
        await this.aboutUsLink.click();
    }

    /**
     * Navigates to the Contact Us page and verifies the URL.
     */
    async navigateToContactUs() {
        await this.contactUsLink.click();
        await expect(this.page).toHaveURL(/contact-us/);
    }

    /**
     * Navigates to the Insights page and verifies that the heading is visible.
     */
    async navigateToInsights() {
        await this.insightsLink.click();
        const heading = this.page.getByRole('heading', { name: 'Insights' });
        await expect(heading).toBeVisible();
    }

    /**
     * Verifies that the Login link is visible.
     */
    async verifyLoginLinkVisible() {
        await expect(this.loginLink).toBeVisible();
    }
}
