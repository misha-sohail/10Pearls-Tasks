class InventoryPage {
  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html')
  }

  verifyProductVisible(productName) {
    cy.contains('.inventory_item_name', productName).should('exist')
  }

  openProduct(productName) {
    cy.contains('.inventory_item_name', productName).click()
  }

  verifyProductDetails(productName) {
    cy.get('.inventory_details_name').should('contain', productName)
    cy.get('.inventory_details_price').should('be.visible')
  }
}

export default InventoryPage
