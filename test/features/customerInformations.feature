Feature: Customer form fields functionality

    Scenario: User is able to pass customer information page
        Given standard_user logged in
        When user fill in all customer informations fields
        Then user go to next page

    Scenario Outline: User is not able to pass customer information page
        Given standard_user logged in
        When user leave empty firstName "<firstName>" or lastName "<lastName>" or postalCode "<postalCode>" field
        Then an error message is displayed

        Examples:
            | firstName | lastName | postalCode |
            |           |          |            |
            | example   |          |            |
            |           | example  |            |
            | example   | example  |            |
            |           | example  | example    |
            |           |          | example    |