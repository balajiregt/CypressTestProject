Feature: Hoverable multilevel dropdowns

  Scenario: Hover over menu item and select Kafka
    Given I visit "https://www.vinsguru.com/selenium-webdriver-automating-hoverable-multilevel-dropdowns/"
    When I hover over the menu item "menu-item-3594"
    When I click on the link containing "Kafka"
    Then I should be able to click on the current category ".cat-item.cat-item-50.current-cat"
