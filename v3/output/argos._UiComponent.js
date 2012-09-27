Ext.data.JsonP.argos__UiComponent({"tagname":"class","name":"argos._UiComponent","extends":"_Component","mixins":[],"alternateClassNames":["_UiComponent"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos._UiComponent","members":{"cfg":[],"property":[{"name":"$","tagname":"property","owner":"argos._Component","meta":{"private":false},"id":"property-S-"},{"name":"_componentContext","tagname":"property","owner":"argos._Component","meta":{},"id":"property-_componentContext"},{"name":"_componentInfo","tagname":"property","owner":"argos._Component","meta":{},"id":"property-_componentInfo"},{"name":"_componentOwner","tagname":"property","owner":"argos._Component","meta":{"private":true},"id":"property-_componentOwner"},{"name":"_componentRoot","tagname":"property","owner":"argos._Component","meta":{"private":true},"id":"property-_componentRoot"},{"name":"_components","tagname":"property","owner":"argos._Component","meta":{"private":true},"id":"property-_components"},{"name":"components","tagname":"property","owner":"argos._Component","meta":{"private":false},"id":"property-components"}],"method":[{"name":"constructor","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-constructor"},{"name":"_attachComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_attachComponent"},{"name":"_attachUiComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_attachUiComponent"},{"name":"_createComponent","tagname":"method","owner":"argos._Component","meta":{"private":true},"id":"method-_createComponent"},{"name":"_createComponents","tagname":"method","owner":"argos._Component","meta":{"private":true},"id":"method-_createComponents"},{"name":"_destroyChildComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_destroyChildComponent"},{"name":"_detachComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_detachComponent"},{"name":"_detachUiComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_detachUiComponent"},{"name":"_instantiateComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_instantiateComponent"},{"name":"_preCreateComponents","tagname":"method","owner":"argos._Component","meta":{"private":true},"id":"method-_preCreateComponents"},{"name":"_startupChildComponent","tagname":"method","owner":"argos._UiComponent","meta":{"private":true},"id":"method-_startupChildComponent"},{"name":"addComponent","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-addComponent"},{"name":"destroy","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-destroy"},{"name":"getComponentName","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-getComponentName"},{"name":"getComponentOwner","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-getComponentOwner"},{"name":"getComponentRoot","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-getComponentRoot"},{"name":"getComponentValue","tagname":"method","owner":"argos._Component","meta":{"chainable":true},"id":"method-getComponentValue"},{"name":"getComponents","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-getComponents"},{"name":"initComponents","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-initComponents"},{"name":"onCreate","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-onCreate"},{"name":"onDestroy","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-onDestroy"},{"name":"onStartup","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-onStartup"},{"name":"postscript","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-postscript"},{"name":"removeComponent","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-removeComponent"},{"name":"startup","tagname":"method","owner":"argos._Component","meta":{"private":false},"id":"method-startup"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":41,"files":[{"filename":"_UiComponent.js","href":"_UiComponent.html#argos-_UiComponent"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["argos._Component"],"subclasses":["argos.CalendarWidget","argos.Layout","argos.Pane","argos.ScrollContainer","argos.Toolbar","argos.View","argos.DomContentComponent","argos.Control"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_UiComponent</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/argos._Component' rel='argos._Component' class='docClass'>argos._Component</a><div class='subclass '><strong>argos._UiComponent</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/argos.CalendarWidget' rel='argos.CalendarWidget' class='docClass'>argos.CalendarWidget</a></div><div class='dependency'><a href='#!/api/argos.Control' rel='argos.Control' class='docClass'>argos.Control</a></div><div class='dependency'><a href='#!/api/argos.DomContentComponent' rel='argos.DomContentComponent' class='docClass'>argos.DomContentComponent</a></div><div class='dependency'><a href='#!/api/argos.Layout' rel='argos.Layout' class='docClass'>argos.Layout</a></div><div class='dependency'><a href='#!/api/argos.Pane' rel='argos.Pane' class='docClass'>argos.Pane</a></div><div class='dependency'><a href='#!/api/argos.ScrollContainer' rel='argos.ScrollContainer' class='docClass'>argos.ScrollContainer</a></div><div class='dependency'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='docClass'>argos.Toolbar</a></div><div class='dependency'><a href='#!/api/argos.View' rel='argos.View' class='docClass'>argos.View</a></div><h4>Files</h4><div class='dependency'><a href='source/_UiComponent.html#argos-_UiComponent' target='_blank'>_UiComponent.js</a></div></pre><div class='doc-contents'><p>_UiComponent</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-S-' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-S-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-S-' class='name not-expandable'>$</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_componentContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-_componentContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-_componentContext' class='name not-expandable'>_componentContext</a><span> : Object</span></div><div class='description'><div class='short'><p>Contains information about how, and where, all child components were attached.</p>\n</div><div class='long'><p>Contains information about how, and where, all child components were attached.</p>\n</div></div></div><div id='property-_componentInfo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-_componentInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-_componentInfo' class='name not-expandable'>_componentInfo</a><span> : Object</span></div><div class='description'><div class='short'><p>Contains information about <code>this</code> component.</p>\n</div><div class='long'><p>Contains information about <code>this</code> component.</p>\n</div></div></div><div id='property-_componentOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-_componentOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-_componentOwner' class='name not-expandable'>_componentOwner</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_componentRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-_componentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-_componentRoot' class='name not-expandable'>_componentRoot</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_components' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-_components' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-_components' class='name not-expandable'>_components</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-components' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-property-components' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-property-components' class='name not-expandable'>components</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/argos._Component-method-constructor' class='name expandable'>argos._UiComponent</a>( <span class='pre'>props</span> ) : <a href=\"#!/api/argos._Component\" rel=\"argos._Component\" class=\"docClass\">argos._Component</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/argos._Component\" rel=\"argos._Component\" class=\"docClass\">argos._Component</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_attachComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_attachComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_attachComponent' class='name expandable'>_attachComponent</a>( <span class='pre'>definition, instance, root, owner</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Attaches a child component into the component heirarchy. ...</div><div class='long'><p>Attaches a child component into the component heirarchy.  The reason the top-down approach is used, instead of\na component attaching itself to the heirarchy, is due to the need to support \"components\" that\nare not true components, in that they do not inherit from <code>_Component</code>.  The primary use case for this is\nfor widgets, so that they may be used as child components, without extra code.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos._Component-method-_attachComponent' rel='argos._Component-method-_attachComponent' class='docClass'>argos._Component._attachComponent</a></p></div></div></div><div id='method-_attachUiComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_attachUiComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_attachUiComponent' class='name expandable'>_attachUiComponent</a>( <span class='pre'>instance, context, position</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_createComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-_createComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-_createComponent' class='name expandable'>_createComponent</a>( <span class='pre'>definition, root, owner</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_createComponents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-_createComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-_createComponents' class='name expandable'>_createComponents</a>( <span class='pre'>definitions, root, owner</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definitions</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_destroyChildComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_destroyChildComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_destroyChildComponent' class='name expandable'>_destroyChildComponent</a>( <span class='pre'>instance</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos._Component-method-_destroyChildComponent' rel='argos._Component-method-_destroyChildComponent' class='docClass'>argos._Component._destroyChildComponent</a></p></div></div></div><div id='method-_detachComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_detachComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_detachComponent' class='name expandable'>_detachComponent</a>( <span class='pre'>instance, context, root, owner</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos._Component-method-_detachComponent' rel='argos._Component-method-_detachComponent' class='docClass'>argos._Component._detachComponent</a></p></div></div></div><div id='method-_detachUiComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_detachUiComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_detachUiComponent' class='name expandable'>_detachUiComponent</a>( <span class='pre'>instance, context</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_instantiateComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_instantiateComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_instantiateComponent' class='name expandable'>_instantiateComponent</a>( <span class='pre'>definition, root, owner</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>owner</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos._Component-method-_instantiateComponent' rel='argos._Component-method-_instantiateComponent' class='docClass'>argos._Component._instantiateComponent</a></p></div></div></div><div id='method-_preCreateComponents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-_preCreateComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-_preCreateComponents' class='name expandable'>_preCreateComponents</a>( <span class='pre'>definitions</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definitions</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_startupChildComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._UiComponent'>argos._UiComponent</span><br/><a href='source/_UiComponent.html#argos-_UiComponent-method-_startupChildComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._UiComponent-method-_startupChildComponent' class='name expandable'>_startupChildComponent</a>( <span class='pre'>instance</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos._Component-method-_startupChildComponent' rel='argos._Component-method-_startupChildComponent' class='docClass'>argos._Component._startupChildComponent</a></p></div></div></div><div id='method-addComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-addComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-addComponent' class='name expandable'>addComponent</a>( <span class='pre'>name, instance</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getComponentName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-getComponentName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-getComponentName' class='name expandable'>getComponentName</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getComponentOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-getComponentOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-getComponentOwner' class='name expandable'>getComponentOwner</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getComponentRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-getComponentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-getComponentRoot' class='name expandable'>getComponentRoot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getComponentValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-getComponentValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-getComponentValue' class='name expandable'>getComponentValue</a>( <span class='pre'></span> ) : *<strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>The value used when a component is being attached to an instance. ...</div><div class='long'><p>The value used when a component is being attached to an instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-getComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-getComponents' class='name expandable'>getComponents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initComponents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-initComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-initComponents' class='name expandable'>initComponents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onCreate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-onCreate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-onCreate' class='name expandable'>onCreate</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onDestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onStartup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-onStartup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-onStartup' class='name expandable'>onStartup</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-postscript' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-postscript' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-postscript' class='name expandable'>postscript</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-removeComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-removeComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-removeComponent' class='name expandable'>removeComponent</a>( <span class='pre'>instance</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Component' rel='argos._Component' class='defined-in docClass'>argos._Component</a><br/><a href='source/_Component.html#argos-_Component-method-startup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Component-method-startup' class='name expandable'>startup</a>( <span class='pre'></span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});