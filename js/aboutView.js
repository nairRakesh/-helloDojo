require([
    "dojo",
    "dijit/registry",
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/aboutView.html",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRectCategory",
    "dojox/mobile/RoundRectList",
    "dojox/mobile/ListItem",
    "dojo/domReady!"
], function (dojo, registry, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {


    return declare("AboutViewAMD", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template
    });
});