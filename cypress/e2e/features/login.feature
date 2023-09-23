@smoke
Feature: Login functionality

  Scenario: Successful login
    Given I visit the login page
    When I type in valid credentials 
    Then I should see the dashboard