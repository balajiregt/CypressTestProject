// cypress/support/calendarUtils.js

/**
 * Select a date from a calendar input
 * @param {string} selector - The CSS selector for the calendar input element
 * @param {string} date - The date to set in DD-MM-YYYY format
 */
export const selectDate = (selector, date) => {
    cy.get(selector).click()
    cy.get('#txt_visit_date').clear().type(date).blur()
};

/**
 * Navigate to next month in a calendar (assuming there's a next button)
 * @param {string} nextButtonSelector - The CSS selector for the next button in the calendar
 */
export const navigateToNextMonth = (nextButtonSelector) => {
    cy.get(nextButtonSelector).click();
};

/**
 * Navigate to previous month in a calendar (assuming there's a previous button)
 * @param {string} prevButtonSelector - The CSS selector for the previous button in the calendar
 */
export const navigateToPreviousMonth = (prevButtonSelector) => {
    cy.get(prevButtonSelector).click();
};

export const Page1Actions_dropdown = (CountryDropdownSelector, countryName ) => {
    cy.get(CountryDropdownSelector).select(countryName).click()
};

export const Page1Actions_textbox = (TextboxSelector, Sportsname ) => {
    cy.get(TextboxSelector).type(Sportsname)
};

export const Page1Actions_textValidate = (textSelector, assertString ) => {
    cy.get(textSelector).should('have.text', assertString)
};
