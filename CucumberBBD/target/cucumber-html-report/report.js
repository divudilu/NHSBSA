$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/UKTestTicket.feature");
formatter.feature({
  "name": "NHS costs Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "NHS costs checker tool scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a citizen of the UK .Should be able to open the NHS Costs Checker tool.",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.NHScostpage.i_am_a_citizen_of_the_UK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my circumstances into the Checker tool",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.NHScostpage.i_put_my_circumstances_into_the_Checker_tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.NHScostpage.i_should_get_a_result_of_whether_I_will_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
});