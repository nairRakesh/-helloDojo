require([
    "dojo/topic",
    "dijit/registry"

], function (topic, registry) {
    topic.subscribe("moveToSettingsView", function (dir) {
        var presentView = registry.byId("loginView");
        presentView.performTransition("settingsView", dir ? dir : -1, "slide");
    });
    topic.subscribe("moveToSignup", function (dir) {
        var currentView = registry.byId("loginView");
        currentView.performTransition("signupView", dir ? dir : -1, "slide");
    });
    topic.subscribe("saveDetailsMoveBack", function (newName, newWord) {

        localStorage.setItem("name", newName);
        localStorage.setItem("password", newWord);
        var change = registry.byId("signupView");
        change.performTransition("loginView", -1, "slide");
    });
    topic.subscribe("cancelActionGoBack", function () {
        var change = registry.byId("signupView");
        change.performTransition("loginView", -1, "slide");
    });


});

