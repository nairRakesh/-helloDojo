require([
    "dojo",
    "dojo/dom",
    "dijit/registry",
    "dijit/Dialog",
    "dojo/topic",
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/loginView.html",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRectList",
    "dojox/mobile/ListItem",
    "dojox/mobile/TextBox",
    "dojox/mobile/Button",
    "dojo/domReady!"
], function (dojo, dom, registry, Dialog, topic, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {

    var myDialog = new Dialog({
        title: "alert",
        style: "width: 80%;text-align: center;margin: auto;padding: 20px;border: 3px solid #888;"

    });

    function doLogin() {

        var Name = localStorage.getItem("name");
        var Word = localStorage.getItem("password");
        var tName = dojo.byId("userId").value;
        var tWord = dojo.byId("pword").value;

        if (tName === Name && tWord === Word) {
            
            topic.publish("moveToSettingsView", 1);
            myDialog.set("content", "<b>!!!WELCOME!!!</b>");
            myDialog.show();
        } else {
            myDialog.set("content", "Kindly Signup for logging in !!!");
            myDialog.show();
        }
    }

    function LoginTo() {

        var tName = dojo.byId("userId").value;
        var tWord = dojo.byId("pword").value;
        if (tName === "") {
            myDialog.set("content", "Kindly enter a valid username!");
            myDialog.show();
        } else if (tWord === "") {
            myDialog.set("content", "Kindly enter a valid password!");
            myDialog.show();
        } else {
            doLogin();
            dojo.byId("userId").value = "";
            dojo.byId("pword").value = "";
        }
    }

    function moveToSignup() {
        topic.publish("moveToSignup", 1);
    }


    return declare("LoginViewAMD", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        btnClickWelcomeTo: LoginTo,
        btnClickToggleLoginSignup: moveToSignup,
        templateString: template
    });


});