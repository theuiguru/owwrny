/*SUNY Old Westbury Web Radio JavaScript || Created By Chris Thomas*/
var L_LAUNCHSAP_TEXT = "Launch stand-alone Windows Media Player";
var g_bNetscape = ( -1 != navigator.appName.indexOf( "Netscape" ) );

if ( navigator.appName == "Netscape" )
{
	//This next line ensures that any plugins just installed are updated in the Browser without quitting the browser.
	navigator.plugins.refresh();
	//We don't need the APPLET within IE *NOTE: If you do not need to script events, you can safely remove the next two lines!*
	document.write("\x3C" + "applet MAYSCRIPT Code=NPDS.npDSEvtObsProxy.class");
	document.writeln("width=5 height=5 name=appObs\x3E \x3C/applet\x3E");
}
if(!g_bNetscape)
{
	document.writeln("<input type=\"button\" id=\"cmdStandAlone\" value=\"" + L_LAUNCHSAP_TEXT + "\" 	disabled="true">");
}
if(g_bNetscape)
{
	document.writeln("<APPLET mayscript code=WMPNS.WMP name=WMP1 width=200 height=200 MAYSCRIPT >");
}

/*HTML5 features
document.createElement('header');
document.createElement('section');
document.createElement('aside');
document.createElement('footer');*/