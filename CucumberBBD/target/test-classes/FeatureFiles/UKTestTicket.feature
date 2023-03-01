

Feature: NHS costs Page
  

 
  Scenario: NHS costs checker tool scenario
    Given I am a citizen of the UK .Should be able to open the NHS Costs Checker tool.
    When I put my circumstances into the Checker tool
		Then I should get a result of whether I will get help or not
   

 