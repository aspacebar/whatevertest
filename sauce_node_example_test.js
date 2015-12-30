var client = require('webdriverio').remote({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    desiredCapabilities: {
        browserName: 'chrome'
    }
});
 
client
    .init()
    .url('http://google.com')
    .getTitle().then(console.log).then(console.log("SauceOnDemandSessionID="+YOUR_SESSION_ID+" job-name="+YOUR_JOB_NAME))
    .end();
