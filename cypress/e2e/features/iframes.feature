Feature: Interacting with an iframe on Iframe Tester

  Scenario: Searching for "Cypress" within the LambdaTest Blog inside the iframe
    Given I visit the Iframe Tester with LambdaTest Blog
    When I type "Cypress" into the search box inside the iframe
    Then The search should be initiated for "Cypress"
