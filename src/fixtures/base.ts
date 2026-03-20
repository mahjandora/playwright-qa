import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

// Declare the types of your fixtures
type MyFixtures = {
  basePage: BasePage;
};

// Extend base test by providing "basePage"
export const test = base.extend<MyFixtures>({
  basePage: async ({ page }, use) => {
    // Set up the fixture
    const basePage = new BasePage(page);
    // Use the fixture value in the test
    await use(basePage);
  },
});

export { expect } from '@playwright/test';
