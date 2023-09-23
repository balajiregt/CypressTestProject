@smoke
Feature: Appointment Handling at CURA Healthcare

  Background:
    Given I visit the CURA Healthcare site
    Then I click on the Make Appointment button
    Then I login with username "John Doe" and password "ThisIsNotAPassword"
  
  
  Scenario: Dropdown selection at CURA Healthcare
    When I select the facility by name "Seoul CURA Healthcare Center"
    Then I select the facility by index 1

  Scenario: Check hospital readmission option
    When I check the hospital readmission

  Scenario: Uncheck hospital readmission option
    When I uncheck the hospital readmission
