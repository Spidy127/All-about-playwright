import {test, expect} from '@playwright/test';

test.describe('Form Interactions', () => {

    test('should fill a text box and verify value', async ({page}) => {
          await page.goto('https://demoqa.com/text-box');

          const fullName  = page.getByPlaceholder('Full Name');

          await fullName.fill('Ankur Kumar');

          await expect(fullName).toHaveValue('Ankur Kumar');

          const email = page.getByPlaceholder('name@example.com');
          await email.fill('ankur@example.com');

          await page.getByRole('button', { name: 'Submit'}).click();

          const output = page.locator('#output');
          await expect(output).toContainText('Ankur Kumar');
          await expect(output).toContainText('ankur@example.com');

    });
  

});