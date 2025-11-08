export class ProductPage {
  constructor(page) {
    this.page = page;
    this.freeShippingLabel = 'span:has-text("Free Shipping")';
    this.freeShippingAlt = 'span.pdp-product-brand__tail-label';
  }

  async verifyFreeShipping() {
    console.log('Checking for Free Shipping...');
    let visible = await this.page.isVisible(this.freeShippingLabel);
    if (!visible) {
      visible = await this.page.isVisible(this.freeShippingAlt);
    }
    console.log( visible ? '✅ Free Shipping available!' : '❌ Free Shipping not found.');
    return visible;
  }
}
