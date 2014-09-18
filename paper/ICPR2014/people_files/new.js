 var browser;
 var b_version;
 var version;
 var browserType=0;
 browser=navigator.appName;
 b_version=navigator.appVersion;
 version = parseFloat(b_version);
 if(browser.indexOf("Microsoft Internet Explorer")!=-1||
	browser.indexOf("Microsoft")!=-1)
	browserType = 1;
 else if(browser.indexOf("Netscape")!=-1)
	browserType = 2;