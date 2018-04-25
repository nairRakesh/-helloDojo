require([
    "dojo",
    "dojox/mobile/parser",
    "dojo/on",
    "dijit/registry",
    "dojox/mobile/compat",
    "dojox/mobile/View",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRectList",
    "dojox/mobile/RoundRectCategory",
    "dojox/mobile/ListItem",
    "dojox/mobile/Switch",
    "dojox/mobile/TextBox",
    "dojox/mobile/Button",
    "dojo/domReady!"
], function (dojo, parser, on, registry) {

    function moveTo() {
        var currentView = registry.byId("settingsView");
        currentView.performTransition("generalView",-1);
    }

    //on(dojo.byId("carrierList"),"click",moveTo);
});