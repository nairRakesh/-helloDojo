require([
    "dojo",
    "dijit/registry",
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/settingsView.html",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRectList",
    "dojox/mobile/ListItem",
    "dojox/mobile/Switch",
    "dojo/domReady!"
], function (dojo, registry, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {


    return declare("SettingsViewAMD", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template
    });
});