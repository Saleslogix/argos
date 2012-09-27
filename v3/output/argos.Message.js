Ext.data.JsonP.argos_Message({"tagname":"class","name":"argos.Message","extends":null,"mixins":[],"alternateClassNames":["Message"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos.Message","code_type":"dojo_define","members":{"cfg":[],"property":[{"name":"channels","tagname":"property","owner":"argos.Message","meta":{"private":false},"id":"property-channels"},{"name":"queues","tagname":"property","owner":"argos.Message","meta":{"private":false},"id":"property-queues"}],"method":[{"name":"claim","tagname":"method","owner":"argos.Message","meta":{"private":false},"id":"method-claim"},{"name":"discard","tagname":"method","owner":"argos.Message","meta":{"private":false},"id":"method-discard"},{"name":"revoke","tagname":"method","owner":"argos.Message","meta":{"private":false},"id":"method-revoke"},{"name":"send","tagname":"method","owner":"argos.Message","meta":{"private":false},"id":"method-send"},{"name":"sendOrIgnore","tagname":"method","owner":"argos.Message","meta":{"private":false},"id":"method-sendOrIgnore"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"Message.js","href":"Message.html#argos-Message"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Message</div><h4>Files</h4><div class='dependency'><a href='source/Message.html#argos-Message' target='_blank'>Message.js</a></div></pre><div class='doc-contents'><p>Message service</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-channels' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-property-channels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-property-channels' class='name not-expandable'>channels</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-queues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-property-queues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-property-queues' class='name not-expandable'>queues</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-claim' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-method-claim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-method-claim' class='name expandable'>claim</a>( <span class='pre'>channel, target</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-discard' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-method-discard' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-method-discard' class='name expandable'>discard</a>( <span class='pre'>channel</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-revoke' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-method-revoke' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-method-revoke' class='name expandable'>revoke</a>( <span class='pre'>channel</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-method-send' class='name expandable'>send</a>( <span class='pre'>channel, message</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendOrIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Message'>argos.Message</span><br/><a href='source/Message.html#argos-Message-method-sendOrIgnore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Message-method-sendOrIgnore' class='name expandable'>sendOrIgnore</a>( <span class='pre'>channel, message, arg0</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>channel</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>arg0</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});