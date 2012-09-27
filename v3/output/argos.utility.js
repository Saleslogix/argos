Ext.data.JsonP.argos_utility({"tagname":"class","name":"argos.utility","extends":null,"mixins":[],"alternateClassNames":["utility"],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos.utility","code_type":"dojo_define","members":{"cfg":[],"property":[],"method":[{"name":"_clone","tagname":"method","owner":"argos.utility","meta":{"private":true},"id":"method-_clone"},{"name":"bindDelegate","tagname":"method","owner":"argos.utility","meta":{},"id":"method-bindDelegate"},{"name":"contains","tagname":"method","owner":"argos.utility","meta":{},"id":"method-contains"},{"name":"expand","tagname":"method","owner":"argos.utility","meta":{},"id":"method-expand"},{"name":"expandSafe","tagname":"method","owner":"argos.utility","meta":{},"id":"method-expandSafe"},{"name":"getValue","tagname":"method","owner":"argos.utility","meta":{},"id":"method-getValue"},{"name":"nameToPath","tagname":"method","owner":"argos.utility","meta":{},"id":"method-nameToPath"},{"name":"sanitizeForJson","tagname":"method","owner":"argos.utility","meta":{},"id":"method-sanitizeForJson"},{"name":"setValue","tagname":"method","owner":"argos.utility","meta":{},"id":"method-setValue"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"utility.js","href":"utility.html#argos-utility"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>utility</div><h4>Files</h4><div class='dependency'><a href='source/utility.html#argos-utility' target='_blank'>utility.js</a></div></pre><div class='doc-contents'><p>Utility provides functions that are more javascript enhancers than application related code.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_clone' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-_clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-_clone' class='name expandable'>_clone</a>( <span class='pre'>item</span> ) : Object/Array<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Clones a given object or array and returns it. ...</div><div class='long'><p>Clones a given object or array and returns it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object/Array<div class='sub-desc'><p>Object or Array to be cloned</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bindDelegate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-bindDelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-bindDelegate' class='name expandable'>bindDelegate</a>( <span class='pre'>scope</span> ) : Function</div><div class='description'><div class='short'>Similar to dojo.hitch, bindDelegate allows you to alter the meaning of this and pass\nadditional parameters. ...</div><div class='long'><p>Similar to dojo.hitch, bindDelegate allows you to alter the meaning of <code>this</code> and pass\nadditional parameters.</p>\n\n<p>This is a complicated subject but a brief overview is:</p>\n\n<pre><code>var foo = {\n    bar: function() { console.log(this, arguments); }\n};\n\nvar fizz = {\n    bang: foo.bar.bindDelegate(foo, 'bang');\n};\n\nfizz.bang('shoot');\n\n// console outputs: foo Object, ['shoot', 'bang']\n</code></pre>\n\n<p>The two differences between bindDelegate and dojo.hitch are:</p>\n\n<ol>\n<li><p>bindDelegate \"appends\" the arguments - which is why <code>bang</code> came after <code>shoot</code> in the arguments</p></li>\n<li><p>bindDelegate is applied directly to the Function prototype (no need to wrap).</p></li>\n</ol>\n\n\n<p>BindDelegate is important because it allows context changing between modules, as <code>this</code> within\na module should refer to the module itself - bindDelegate enables this dynamic shifting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The new <code>this</code> value in which to call the function, providing a new context.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>Altered function that when called alter the <code>this</code> context and append params.</p>\n</div></li></ul></div></div></div><div id='method-contains' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-contains' class='name expandable'>contains</a>( <span class='pre'>rootNode, testNode</span> ) : Boolean</div><div class='description'><div class='short'>Determines if the given testNode is a child (recursive) of the given rootNode. ...</div><div class='long'><p>Determines if the given testNode is a child (recursive) of the given rootNode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rootNode</span> : HTMLElement<div class='sub-desc'><p>Parent, or root, node to search</p>\n</div></li><li><span class='pre'>testNode</span> : HTMLElement<div class='sub-desc'><p>Node to search for within the rootNode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-expand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-expand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-expand' class='name expandable'>expand</a>( <span class='pre'>scope, expression</span> ) : Mixed</div><div class='description'><div class='short'>If given expression is a function it is called with the given scope and returned,\nelse the expression is just returned. ...</div><div class='long'><p>If given expression is a function it is called with the given scope and returned,\nelse the expression is just returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Scope to call the function in (<code>this</code> definition)</p>\n</div></li><li><span class='pre'>expression</span> : Mixed<div class='sub-desc'><p>Value to expand</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-expandSafe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-expandSafe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-expandSafe' class='name expandable'>expandSafe</a>( <span class='pre'>scope, expression</span> ) : Function/String/Number/Object</div><div class='description'><div class='short'>Similar to expand in that if the given expression is a function it is\ncalled with the given scope and the result retu...</div><div class='long'><p>Similar to <a href=\"#!/api/argos.utility-method-expand\" rel=\"argos.utility-method-expand\" class=\"docClass\">expand</a> in that if the given expression is a function it is\ncalled with the given scope and the result returned, else the expression itself is returned.</p>\n\n<p>The key difference is in the non-function cases the returned expression is cloned,\nproviding a copy of the expression instead of a pointer back to the original.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Scope to call the function in (<code>this</code> definition)</p>\n</div></li><li><span class='pre'>expression</span> : Function/String/Number/Object<div class='sub-desc'><p>Value to expand</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function/String/Number/Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-getValue' class='name expandable'>getValue</a>( <span class='pre'>o, name, [defaultValue]</span> ) : Mixed</div><div class='description'><div class='short'>Retrieves a value from a given object and a given property \"path\" of that object. ...</div><div class='long'><p>Retrieves a value from a given object and a given property \"path\" of that object. If the\nproperty is undefined, optionally return the provided defaultValue or null if no default is\nprovided.</p>\n\n<p>Example:</p>\n\n<pre><code>var myObj = { test: { case: 'one' } };\nutility.getValue(myObj, 'test.case', 'none');\n// returns 'one'\n\nvar myObj2 = { test: null };\nutility.getValue(myObj2, 'test.case', 'none');\n// returns 'none'\n</code></pre>\n\n<p>Similar to <a href=\"#!/api/argos.utility-method-setValue\" rel=\"argos.utility-method-setValue\" class=\"docClass\">setValue</a>, this provides the benefit of avoiding the accessing\nand undefined property error for long path names.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>Object in which to retrieve the value from</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Dot notation string of the property path</p>\n</div></li><li><span class='pre'>defaultValue</span> : Mixed (optional)<div class='sub-desc'><p>Fallback value if the property is undefined</p>\n<p>Defaults to: <code>null</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-nameToPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-nameToPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-nameToPath' class='name expandable'>nameToPath</a>( <span class='pre'>name</span> ) : String[]</div><div class='description'><div class='short'>Takes an javascript dot-notated string path and converts it into a reversed array separate parts:\n\n'test.case' =&gt; ...</div><div class='long'><p>Takes an javascript dot-notated string path and converts it into a reversed array separate parts:</p>\n\n<pre><code>'test.case' =&gt; ['case', 'test']\n'test[2]' =&gt; [2, 'test']\n'test.case[2].item.props[4]' =&gt; [4, 'props', 'item', 2, 'case', 'test']\n</code></pre>\n\n<p>Also features a small in-memory cache of names to paths for improved performance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Dot-notated string path to split</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>The name split into each javascript accessible part</p>\n</div></li></ul></div></div></div><div id='method-sanitizeForJson' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-sanitizeForJson' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-sanitizeForJson' class='name expandable'>sanitizeForJson</a>( <span class='pre'>obj</span> ) : Object</div><div class='description'><div class='short'>Sanitizes an Object so that JSON.stringify will work without errors by discarding non-stringable keys. ...</div><div class='long'><p>Sanitizes an Object so that JSON.stringify will work without errors by discarding non-stringable keys.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>Object to be cleansed of non-stringify friendly keys/values.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Object ready to be JSON.stringified.</p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.utility'>argos.utility</span><br/><a href='source/utility.html#argos-utility-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.utility-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>o, name, val</span> ) : Object</div><div class='description'><div class='short'>Given an object and a \"path\" to the its property, sets the provided value:\n\nExample:\n\nvar myObj = { test: { case: 'on...</div><div class='long'><p>Given an object and a \"path\" to the its property, sets the provided value:</p>\n\n<p>Example:</p>\n\n<pre><code>var myObj = { test: { case: 'one' } };\nutility.setValue(myObj, 'test.case', 'two');\n</code></pre>\n\n<p>That doesn't seem like much, but consider the case of not having the object made beforehand:</p>\n\n<pre><code>var myObj = {};\nutility.setValue(myObj, 'test.case', 'two');\n</code></pre>\n\n<p>You get the same result -- no more \"accessing undefined property\" errors.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>Object in which to look for a property.</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Dot-notated path name to the property of the passed object.</p>\n</div></li><li><span class='pre'>val</span> : Mixed<div class='sub-desc'><p>Value to set the property to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the object passed in (for chaining).</p>\n</div></li></ul></div></div></div></div></div></div></div>"});