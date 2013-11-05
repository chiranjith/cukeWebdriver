$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mphasis/automation/cukesDriver/Login.feature");
formatter.feature({
  "id": "a-valid-user-should-have-access-to-amazon",
  "description": "",
  "name": "A valid user should have access to Amazon",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 18942829216,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.35.0\u0027, revision: \u00278df0c6bedf70ff9f22c647788f9fe9c8d22210e2\u0027, time: \u00272013-08-17 12:46:41\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.6.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.mphasis.automation.ApplicationInterface.DriverFunctions.navigateToUrl(DriverFunctions.java:54)\r\n\tat com.mphasis.automation.cukesDriver.setUpAndTearDown.StartBrowser(setUpAndTearDown.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:119)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:101)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\r\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connection to http://127.0.0.1:7055 refused\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:190)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:151)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:125)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:640)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:479)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.execute(AbstractHttpClient.java:906)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:337)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:133)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\t... 46 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\r\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:351)\r\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:213)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:200)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:366)\r\n\tat java.net.Socket.connect(Socket.java:529)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:127)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\t... 56 more\r\n"
});
formatter.scenario({
  "id": "a-valid-user-should-have-access-to-amazon;a-valid-user-logging-into-amazon-should-be-granted-access",
  "description": "",
  "name": "A valid user logging into amazon should be granted access",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "a valid user",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user enters credentials and click submit",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "User is logged in",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "loginStepdefs.a_valid_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.user_enters_credentials_and_click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.User_is_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22989,
  "status": "passed"
});
formatter.before({
  "duration": 1054246664,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.35.0\u0027, revision: \u00278df0c6bedf70ff9f22c647788f9fe9c8d22210e2\u0027, time: \u00272013-08-17 12:46:41\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.6.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.mphasis.automation.ApplicationInterface.DriverFunctions.navigateToUrl(DriverFunctions.java:54)\r\n\tat com.mphasis.automation.cukesDriver.setUpAndTearDown.StartBrowser(setUpAndTearDown.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:119)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:101)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\r\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connection to http://127.0.0.1:7055 refused\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:190)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:151)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:125)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:640)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:479)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.execute(AbstractHttpClient.java:906)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:133)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\t... 46 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\r\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:351)\r\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:213)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:200)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:366)\r\n\tat java.net.Socket.connect(Socket.java:529)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:127)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\t... 56 more\r\n"
});
formatter.scenario({
  "id": "a-valid-user-should-have-access-to-amazon;an-invalid-user-into-amazon-should-not-be-granted-access",
  "description": "",
  "name": "An invalid user into amazon should not be granted access",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "an invalid user abcdefghi@abcdefghi.com",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "user enters credentials and click submit",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "User is shown There was a problem with your request.There was an error with your E-Mail/Password combination. Please try again.",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "loginStepdefs.an_invalid_user_abcdefghi_abcdefghi_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.user_enters_credentials_and_click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.User_is_shown_There_was_a_problem_with_your_request_There_was_an_error_with_your_E_Mail_Password_combination_Please_try_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13547,
  "status": "passed"
});
formatter.uri("com/mphasis/automation/cukesDriver/Search.feature");
formatter.feature({
  "id": "user-should-be-able-to-search-for-items",
  "description": "",
  "name": "User should be able to search for Items",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1002032885,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.35.0\u0027, revision: \u00278df0c6bedf70ff9f22c647788f9fe9c8d22210e2\u0027, time: \u00272013-08-17 12:46:41\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.6.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.mphasis.automation.ApplicationInterface.DriverFunctions.navigateToUrl(DriverFunctions.java:54)\r\n\tat com.mphasis.automation.cukesDriver.setUpAndTearDown.StartBrowser(setUpAndTearDown.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:119)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:101)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\r\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connection to http://127.0.0.1:7055 refused\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:190)\r\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:151)\r\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:125)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:640)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:479)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.execute(AbstractHttpClient.java:906)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:319)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:298)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:133)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:367)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\t... 46 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\r\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:351)\r\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:213)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:200)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:366)\r\n\tat java.net.Socket.connect(Socket.java:529)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:127)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\t... 56 more\r\n"
});
formatter.scenario({
  "id": "user-should-be-able-to-search-for-items;search-for-a-popular-item-returns-more-than-1-results",
  "description": "",
  "name": "Search for a popular item returns more than 1 results",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "a valid user",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user enters credentials and click submit",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "user searches for \"GPS\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "more than one result is shown",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "loginStepdefs.a_valid_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.user_enters_credentials_and_click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GPS",
      "offset": 19
    }
  ],
  "location": "loginStepdefs.user_searches_for_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.more_than_one_result_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13958,
  "status": "passed"
});
});