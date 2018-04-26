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
    "dojo/text!./templates/signupView.html",
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

    function saveAction() {

        var newName = dojo.byId("nameId").value;
        var newWord = dojo.byId("pword1").value;
        if (newName === "") {
            myDialog.set("content", "Kindly enter a valid username!");
            myDialog.show();
        } else if (newWord === "") {
            myDialog.set("content", "Kindly enter a valid password!");
            myDialog.show();
        } else {
            topic.publish("saveDetailsMoveBack", newName, newWord);
            dojo.byId("nameId").value = "";
            dojo.byId("pword1").value = "";
        }
    }

    function cancelAction() {

        topic.publish("cancelActionGoBack");

    }
    return declare("SignupViewAMD", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        btnClickSaveAction: saveAction,
        btnClickCancelAction: cancelAction,
        templateString: template
    });


});