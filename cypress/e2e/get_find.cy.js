it('get', () => {
    cy.visit('https://docs.gauge.org/getting_started/view-a-report.html?os=macos&language=javascript&ide=vscode')
    cy.get('body > div:nth-child(2) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1)').click()
});

it('find', () => {
    cy.visit('https://docs.gauge.org/getting_started/view-a-report.html?os=macos&language=javascript&ide=vscode')
    cy.get('#left-sidebar').find('ul:first').find('li:first').click();
});