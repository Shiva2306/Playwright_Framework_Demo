
import { test } from '@playwright/test';
import { TestConfig } from '../testconfig';
import { allure } from 'allure-playwright';
import fs from 'fs';

// Launch application before each test
test.beforeEach(async ({ page }) => {
    await page.goto(TestConfig.appUrl);
});

test.afterEach(async ({ page }, testInfo) => {

    for (const attachment of testInfo.attachments) {
        if (attachment.path) {
            await allure.attachment(
                attachment.name,
                fs.readFileSync(attachment.path),
                attachment.contentType || 'application/octet-stream'
            );
        }
    }
});