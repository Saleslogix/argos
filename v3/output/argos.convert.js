Ext.data.JsonP.argos_convert({"tagname":"class","name":"argos.convert","extends":null,"mixins":[],"alternateClassNames":["convert"],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos.convert","code_type":"dojo_define","members":{"cfg":[],"property":[],"method":[{"name":"isDate","tagname":"method","owner":"argos.convert","meta":{},"id":"method-isDate"},{"name":"isDateString","tagname":"method","owner":"argos.convert","meta":{},"id":"method-isDateString"},{"name":"toBoolean","tagname":"method","owner":"argos.convert","meta":{},"id":"method-toBoolean"},{"name":"toDateFromString","tagname":"method","owner":"argos.convert","meta":{},"id":"method-toDateFromString"},{"name":"toIsoStringFromDate","tagname":"method","owner":"argos.convert","meta":{},"id":"method-toIsoStringFromDate"},{"name":"toJsonStringFromDate","tagname":"method","owner":"argos.convert","meta":{},"id":"method-toJsonStringFromDate"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"convert.js","href":"convert.html#argos-convert"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>convert</div><h4>Files</h4><div class='dependency'><a href='source/convert.html#argos-convert' target='_blank'>convert.js</a></div></pre><div class='doc-contents'><p>Convert provides a number of type transformation functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-isDate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-isDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-isDate' class='name expandable'>isDate</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>Determines if the value is a javascript Date object. ...</div><div class='long'><p>Determines if the value is a javascript Date object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isDateString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-isDateString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-isDateString' class='name expandable'>isDateString</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>Takes a string and checks to see if it is an ISO formatted date or a JSON-string date\n\nISO Date: '2012-08-28' or '201...</div><div class='long'><p>Takes a string and checks to see if it is an ISO formatted date or a JSON-string date</p>\n\n<p>ISO Date: <code>'2012-08-28'</code> or <code>'2012-05-28T08:30:00Z'</code>\nJSON-string: <code>'/Date(1346189868885)/'</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>String to be checked to see if it's a date.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if it matches ISO or JSON formats, false if not a string or doesn't match.</p>\n</div></li></ul></div></div></div><div id='method-toBoolean' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-toBoolean' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-toBoolean' class='name expandable'>toBoolean</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>Takes a string and checks to see if it is true or T, else returns false ...</div><div class='long'><p>Takes a string and checks to see if it is <code>true</code> or <code>T</code>, else returns false</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>String bool value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if string is <code>true</code> or <code>T</code>.</p>\n</div></li></ul></div></div></div><div id='method-toDateFromString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-toDateFromString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-toDateFromString' class='name expandable'>toDateFromString</a>( <span class='pre'>value</span> ) : Date</div><div class='description'><div class='short'>Takes a string and tests it to see if its an ISO 8601 string or a JSON-string. ...</div><div class='long'><p>Takes a string and tests it to see if its an ISO 8601 string or a JSON-string.\nIf a match is found it is parsed into a Date object and returned, else the original value is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>String in the ISO 8601 format <code>'2012-08-28T08:30:00Z'</code> or JSON-string format <code>'/Date(milliseconds)/'</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>Date object from string or original object if not convertable.</p>\n</div></li></ul></div></div></div><div id='method-toIsoStringFromDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-toIsoStringFromDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-toIsoStringFromDate' class='name expandable'>toIsoStringFromDate</a>( <span class='pre'>value</span> ) : String</div><div class='description'><div class='short'>Takes a Date object and converts it to a ISO 8601 formatted string\n\nAdapted from: https://developer.mozilla.org/en/Ja...</div><div class='long'><p>Takes a Date object and converts it to a ISO 8601 formatted string</p>\n\n<p>Adapted from: https://developer.mozilla.org/en/JavaScript/Reference/global_objects/date</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Date<div class='sub-desc'><p>Date to be formatted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>ISO 8601 formatted date string</p>\n</div></li></ul></div></div></div><div id='method-toJsonStringFromDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.convert'>argos.convert</span><br/><a href='source/convert.html#argos-convert-method-toJsonStringFromDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.convert-method-toJsonStringFromDate' class='name expandable'>toJsonStringFromDate</a>( <span class='pre'>value</span> ) : String</div><div class='description'><div class='short'>Takes a Date object and returns it in JSON-string format: '/Date(milliseconds)/' ...</div><div class='long'><p>Takes a Date object and returns it in JSON-string format: <code>'/Date(milliseconds)/'</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Date<div class='sub-desc'><p>Date to stringify</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>JSON string: <code>'/Date(milliseconds)/'</code></p>\n</div></li></ul></div></div></div></div></div></div></div>"});