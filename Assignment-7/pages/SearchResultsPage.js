export class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.brandCheckbox = 'input[businessvalue="philips"]';
    this.productItems = 'a[title*="Philips"]';
    this.minPriceInput = 'input[placeholder="Min"]';
    this.maxPriceInput = 'input[placeholder="Max"]';
    this.applyPriceButton = 'button:has-text("OK")';
  }

  async applyBrandFilter() {
    console.log('Applying Philips brand filter...');
    await this.page.waitForSelector(this.brandCheckbox, { timeout: 30000 });
    await this.page.locator(this.brandCheckbox).scrollIntoViewIfNeeded();
    await this.page.click(this.brandCheckbox);
    await this.page.waitForLoadState('networkidle');
  }

  async applyPriceFilter() {
    console.log('Applying Price Filter 500-5000...');
    await this.page.waitForSelector(this.minPriceInput, { timeout: 20000 });
    await this.page.fill(this.minPriceInput, '500');
    await this.page.fill(this.maxPriceInput, '5000');
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
    console.log('Price filter applied successfully.');
  }

  async countProducts() {
    console.log('Counting filtered products...');
    await this.page.waitForSelector(this.productItems, { timeout: 30000 });
    const count = await this.page.locator(this.productItems).count();
    console.log(`Products found: ${count}`);
    return count;
  }

  async openFirstProduct() {
    console.log('Opening first product...');
    await this.page.locator(this.productItems).first().click();
    await this.page.waitForLoadState('domcontentloaded');
    console.log('Product page opened.');
  }
}
