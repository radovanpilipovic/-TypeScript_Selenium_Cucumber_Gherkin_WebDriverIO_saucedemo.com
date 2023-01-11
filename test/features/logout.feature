Feature: log out functionality 
    
    Scenario: user is able to log out from aplication
        Given standard_user logged in
        When user log out from aplication
        Then user is logged out