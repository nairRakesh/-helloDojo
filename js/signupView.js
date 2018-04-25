require([
    "dojo",
    "dojo/dom",
    "dijit/registry",
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
], function (dojo, dom, registry, topic, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {


    function saveAction() {

        var newName = dojo.byId("nameId").value;
        var newWord = dojo.byId("pword1").value;

        topic.publish("saveDetailsMoveBack", newName, newWord);
        dojo.byId("nameId").value = "";
        dojo.byId("pword1").value = "";
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