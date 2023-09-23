function navigateAndInteractWithNewOrigin(originURL) {
    cy.origin(originURL, () => {
        cy.visit('/')
    });
}

export { navigateAndInteractWithNewOrigin };