Feature: reset functionality
    
    Scenario: User is able to reset application state - clear basket icon
        Given standard_user logged in
        When user add item and reset application state
        Then item is removed
    @skip
    #  When the user resets the application, the item is still selected in the intentory list
    Scenario: User is able to reset application state - item not selected
        Given standard_user logged in
        When user add item and reset application state
        Then item is not selected
