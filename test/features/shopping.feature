Feature: Shopping functionality

    Scenario: User is able to successfully buy one item
        Given standard_user logged in
        When user buy one item
        Then the purchase has been made

    Scenario: User is able to successfully buy two items
        Given standard_user logged in
        When user buy two items
        Then the purchase has been made

    Scenario: User is able to add and remove items from cart
        Given standard_user logged in
        When user add and remove item from home page
        Then item is removed
        When user add and remove item from item page
        Then item is removed
        When user add from item page and remove item from cart page
        Then item is removed

    Scenario: Total amount of ordered items is correct
        Given standard_user logged in
        When user order two items
        Then total amount is correct