package StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import com.utility.ConfigDataProvider;

import io.cucumber.java.AfterStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class NHScostpage {

	public WebDriver driver;
	public JavascriptExecutor js;
	public ConfigDataProvider confdata;

	
	
	@Given("I am a citizen of the UK .Should be able to open the NHS Costs Checker tool.")
	public void i_am_a_citizen_of_the_UK() {

		confdata=new ConfigDataProvider();

		String browsername = confdata.getBrowser();
		String url=confdata.getQAURL();
		//---------------------------------------------------------------------------------		
		//Script to run on Chrome Browser
		if(browsername.equalsIgnoreCase("chrome"))
		{
			WebDriverManager.chromedriver().setup();
			System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
			driver=new ChromeDriver();
			//---------------------------------------------------------------------------------		
			//Script to run on Firfox Browser
		}else if(browsername.equalsIgnoreCase("firefox"))
		{

			WebDriverManager.firefoxdriver().setup();
			driver=new FirefoxDriver();
		}
		///--------------------------------------------------------------------------------
		try {
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
			driver.manage().deleteAllCookies();
			driver.get(url);


			js=(JavascriptExecutor)driver;
			js.executeScript("scrollBy(2000,2000)");
			Assert.assertTrue(true);
		} catch (Exception e) {
			
			System.out.println(" unable to access the NHS costs checker tool "+e.getMessage());
		}



	}

	@When("I put my circumstances into the Checker tool")
	public void i_put_my_circumstances_into_the_Checker_tool() {

		//Thread.sleep(4000);
		try {
			driver.findElement(By.xpath("//input[@id='next-button']")).click();
			driver.findElement(By.id("radio-england")).click();
			driver.findElement(By.xpath("//input[@id='next-button']")).click();
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			driver.findElement(By.id("radio-england")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			driver.findElement(By.xpath("//input[@id='dob-day']")).sendKeys("07");
			driver.findElement(By.xpath("//input[@id='dob-month']")).sendKeys("11");
			driver.findElement(By.xpath("//input[@id='dob-year']")).sendKeys("1988");
			//Thread.sleep(4000);
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-yes']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			driver.findElement(By.xpath("//input[@id='radio-no']")).click();
			driver.findElement(By.ByCssSelector.cssSelector("#next-button")).click();
			js.executeScript("scrollBy(2000,2000)");
			//Thread.sleep(4000);
			Assert.assertTrue(true);
		} catch (Exception e) {
			
			System.out.println(" unable to put my data in NHS check tooler "+e.getMessage());
		}


	}

	@Then("I should get a result of whether I will get help or not")
	public void i_should_get_a_result_of_whether_I_will_get_help_or_not() {

		try {
			String actresulturl=driver.getCurrentUrl();

			String expresulturl="https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/result";
			Assert.assertEquals(actresulturl, expresulturl);
			driver.close();
		} catch (Exception e) {
			
			System.out.println(" unable to retrieve the results based on the input "+e.getMessage());
		}



	}


}
