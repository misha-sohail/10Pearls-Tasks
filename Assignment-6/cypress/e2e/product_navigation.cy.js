import InventoryPage from './pages/InventoryPage'

const inventoryPage = new InventoryPage()

describe('Product Navigation and Validation', () => {
  it('should login and navigate to product page', () => {
    cy.login('standard_user', 'secret_sauce') // Used the custom command
    inventoryPage.verifyOnInventoryPage()
    inventoryPage.verifyProductVisible('Sauce Labs Backpack')
    inventoryPage.openProduct('Sauce Labs Backpack')
    inventoryPage.verifyProductDetails('Sauce Labs Backpack')
  })
})
