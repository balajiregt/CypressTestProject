Feature: Mouseover interaction on JavaScript page

  Scenario: Hover over a link on the JavaScript info page
    Given I visit the website "https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave"
    When I scroll the element "div[class='code-tabs code-tabs_result_on']:nth-of-type(1)" into view
    When I hover over the element "body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > article:nth-child(1) > div:nth-child(3) > div:nth-child(12) > div:nth-child(1) > div:nth-child(4) > a:nth-child(2)"
