export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = 'input[placeholder="Search in Daraz"]';
    this.searchButton = 'a.search-box__button--1oH7';
  }

  async navigate() {
    await this.page.goto('https://www.daraz.pk/', { waitUntil: 'networkidle' });
    // Optional cookie/banner popup
    try {
      await this.page.click('#banner-accept', { timeout: 4000 });
    } catch {}
    await this.page.waitForSelector(this.searchBox, { timeout: 30000 });
  }

  async searchProduct(keyword) {
    console.log('Searching for:', keyword);
    await this.page.fill(this.searchBox, keyword);
    await this.page.click(this.searchButton);
    await this.page.waitForLoadState('networkidle');
    console.log('Search results loaded successfully.');
  }
}
