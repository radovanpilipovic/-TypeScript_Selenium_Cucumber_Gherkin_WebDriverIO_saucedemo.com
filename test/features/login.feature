Feature: Login functionality 

    Scenario Outline: User is able to login successfully
        When user tries to login with valid username "<username>" and valid pasword "<password>"
        Then user is logged in

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
    
    Scenario: User is not able to login with invalid username and invalid password
        When user tries to login with invalid username and invalid password
        Then user is not logged in

    Scenario: User is not able to login with invalid username and valid password
        When user tries to login with invalid username and valid password
        Then user is not logged in

    Scenario: User is not able to login with empty username and valid password
        When user tries to login with empty username and valid password
        Then user is not logged in

    Scenario: User is not able to login with valid password and invalid password
        When user tries to login with valid username and invalid password
        Then user is not logged in

    Scenario: User is not able to login with valid password and empty password
        When user tries to login with valid username and empty password
        Then user is not logged in

    Scenario: User is not able to login with empty username and password fields
        When user tries to login with empty username and password fields
        Then user is not logged in