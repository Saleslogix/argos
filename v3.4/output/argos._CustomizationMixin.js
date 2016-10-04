Ext.data.JsonP.argos__CustomizationMixin({"tagname":"class","name":"argos._CustomizationMixin","autodetected":{},"files":[{"filename":"_CustomizationMixin.js","href":"_CustomizationMixin.html#argos-_CustomizationMixin"}],"alternateClassNames":["_CustomizationMixin"],"members":[],"aliases":{},"id":"class-argos._CustomizationMixin","short_doc":"Customization Mixin is a general purpose Customization Engine. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["argos.View"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_CustomizationMixin</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/argos.View' rel='argos.View' class='docClass'>argos.View</a></div><h4>Files</h4><div class='dependency'><a href='source/_CustomizationMixin.html#argos-_CustomizationMixin' target='_blank'>_CustomizationMixin.js</a></div></pre><div class='doc-contents'><p>Customization Mixin is a general purpose Customization Engine. It takes a customization object and\na layout object and applies the customization defined to the layout.</p>\n\n<p>A customization object has the following properties:</p>\n\n<ul>\n<li><code>at</code>: <code>function(item)</code> - passes the current item in the list, the function should return true if this is the item being modified (or is at where you want to insert something).</li>\n<li><code>at</code>: <code>{Number}</code> - May optionally define the index of the item instead of a function.</li>\n<li><code>type</code>: <code>{String}</code> - enum of <code>insert</code>, <code>modify</code>, <code>replace</code> or <code>remove</code> that indicates the type of customization.</li>\n<li><code>where</code>: <code>{String}</code> - enum of <code>before</code> or <code>after</code> only needed when type is <code>insert</code>.</li>\n<li><code>value</code>: <code>{Object}</code> - the entire object to create (insert or replace) or the values to overwrite (modify), not needed for remove.</li>\n<li><code>value</code>: <code>{Object[]}</code> - if inserting you may pass an array of items to create.</li>\n</ul>\n\n</div><div class='members'></div></div>","meta":{}});