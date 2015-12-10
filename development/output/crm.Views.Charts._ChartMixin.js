Ext.data.JsonP.crm_Views_Charts__ChartMixin({"tagname":"class","name":"crm.Views.Charts._ChartMixin","autodetected":{},"files":[{"filename":"_ChartMixin.js","href":"_ChartMixin.html#crm-Views-Charts-_ChartMixin"}],"mixins":["argos._PullToRefreshMixin"],"requires":["argos._PullToRefreshMixin"],"members":[{"name":"RENDER_DELAY","tagname":"property","owner":"crm.Views.Charts._ChartMixin","id":"property-RENDER_DELAY","meta":{}},{"name":"enablePullToRefresh","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-enablePullToRefresh","meta":{}},{"name":"loadingFont","tagname":"property","owner":"crm.Views.Charts._ChartMixin","id":"property-loadingFont","meta":{}},{"name":"loadingText","tagname":"property","owner":"crm.Views.Charts._ChartMixin","id":"property-loadingText","meta":{}},{"name":"parent","tagname":"property","owner":"crm.Views.Charts._ChartMixin","id":"property-parent","meta":{}},{"name":"pullRefreshBanner","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshBanner","meta":{}},{"name":"pullRefreshBannerTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshBannerTemplate","meta":{}},{"name":"pullRefreshTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshTemplate","meta":{}},{"name":"pullRefreshText","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshText","meta":{}},{"name":"pullReleaseTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullReleaseTemplate","meta":{}},{"name":"pullReleaseText","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullReleaseText","meta":{}},{"name":"scrollerNode","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-scrollerNode","meta":{}},{"name":"widgetTemplate","tagname":"property","owner":"crm.Views.Charts._ChartMixin","id":"property-widgetTemplate","meta":{}},{"name":"createStore","tagname":"method","owner":"crm.Views.Charts._ChartMixin","id":"method-createStore","meta":{}},{"name":"getSearchExpressionHeight","tagname":"method","owner":"crm.Views.Charts._ChartMixin","id":"method-getSearchExpressionHeight","meta":{"deprecated":{"text":"<p>Charts in 3.3 no longer use the search expression node.</p>\n","version":"3.3"}}},{"name":"initPullToRefresh","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-initPullToRefresh","meta":{}},{"name":"onLegendClick","tagname":"method","owner":"crm.Views.Charts._ChartMixin","id":"method-onLegendClick","meta":{}},{"name":"onPullToRefreshCancel","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-onPullToRefreshCancel","meta":{}},{"name":"onPullToRefreshComplete","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-onPullToRefreshComplete","meta":{}},{"name":"requestData","tagname":"method","owner":"crm.Views.Charts._ChartMixin","id":"method-requestData","meta":{}},{"name":"shouldStartPullToRefresh","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-shouldStartPullToRefresh","meta":{}},{"name":"showLegend","tagname":"method","owner":"crm.Views.Charts._ChartMixin","id":"method-showLegend","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-crm.Views.Charts._ChartMixin","component":false,"superclasses":[],"subclasses":[],"mixedInto":["crm.Views.Charts.GenericBar","crm.Views.Charts.GenericLine","crm.Views.Charts.GenericPie"],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='docClass'>argos._PullToRefreshMixin</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='docClass'>argos._PullToRefreshMixin</a></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/crm.Views.Charts.GenericBar' rel='crm.Views.Charts.GenericBar' class='docClass'>crm.Views.Charts.GenericBar</a></div><div class='dependency'><a href='#!/api/crm.Views.Charts.GenericLine' rel='crm.Views.Charts.GenericLine' class='docClass'>crm.Views.Charts.GenericLine</a></div><div class='dependency'><a href='#!/api/crm.Views.Charts.GenericPie' rel='crm.Views.Charts.GenericPie' class='docClass'>crm.Views.Charts.GenericPie</a></div><h4>Files</h4><div class='dependency'><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin' target='_blank'>_ChartMixin.js</a></div></pre><div class='doc-contents'><p>Base mixin for creating chart views.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-RENDER_DELAY' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-property-RENDER_DELAY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-property-RENDER_DELAY' class='name expandable'>RENDER_DELAY</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Number The re-render delay in milliseconds when the user changes device orientation.</p>\n</div><div class='long'><p>Number The re-render delay in milliseconds when the user changes device orientation.</p>\n</div></div></div><div id='property-enablePullToRefresh' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-enablePullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-enablePullToRefresh' class='name expandable'>enablePullToRefresh</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>If true, will enable the user to drag down and refresh the list. ...</div><div class='long'><p>If true, will enable the user to drag down and refresh the list. Default is true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-loadingFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-property-loadingFont' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-property-loadingFont' class='name expandable'>loadingFont</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The loading text font style ...</div><div class='long'><p>The loading text font style</p>\n<p>Defaults to: <code>'#000'</code></p></div></div></div><div id='property-loadingText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-property-loadingText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-property-loadingText' class='name expandable'>loadingText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Loading message ...</div><div class='long'><p>Loading message</p>\n<p>Defaults to: <code>'loading...'</code></p></div></div></div><div id='property-parent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-property-parent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-property-parent' class='name expandable'>parent</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the metric widget that opened this view.</p>\n</div><div class='long'><p>Reference to the metric widget that opened this view.</p>\n</div></div></div><div id='property-pullRefreshBanner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshBanner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshBanner' class='name expandable'>pullRefreshBanner</a> : DOMNode<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshBannerTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshBannerTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshBannerTemplate' class='name expandable'>pullRefreshBannerTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshTemplate' class='name expandable'>pullRefreshTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshText' class='name expandable'>pullRefreshText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Text to indicate a pull to refresh</p>\n</div><div class='long'><p>Text to indicate a pull to refresh</p>\n</div></div></div><div id='property-pullReleaseTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullReleaseTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullReleaseTemplate' class='name expandable'>pullReleaseTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullReleaseText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullReleaseText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullReleaseText' class='name expandable'>pullReleaseText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Text to indicate the user should release to cause the refresh</p>\n</div><div class='long'><p>Text to indicate the user should release to cause the refresh</p>\n</div></div></div><div id='property-scrollerNode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-scrollerNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-scrollerNode' class='name expandable'>scrollerNode</a> : DOMNode<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-property-widgetTemplate' class='name expandable'>widgetTemplate</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Overrides View widgetTemplate</p>\n</div><div class='long'><p>Overrides View widgetTemplate</p>\n<p>Overrides: <a href=\"#!/api/argos.View-property-widgetTemplate\" rel=\"argos.View-property-widgetTemplate\" class=\"docClass\">argos.View.widgetTemplate</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createStore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-method-createStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-method-createStore' class='name expandable'>createStore</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a store that is consumed by requestData. ...</div><div class='long'><p>Return a store that is consumed by requestData.</p>\n        <p>Available since: <b>3.3</b></p>\n</div></div></div><div id='method-getSearchExpressionHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-method-getSearchExpressionHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-method-getSearchExpressionHeight' class='name expandable'>getSearchExpressionHeight</a>( <span class='pre'></span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> since 3.3</p>\n        <p>Charts in 3.3 no longer use the search expression node.</p>\n\n        </div>\n</div></div></div><div id='method-initPullToRefresh' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-initPullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-initPullToRefresh' class='name expandable'>initPullToRefresh</a>( <span class='pre'>scrollerNode</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollerNode</span> : DOMNode<div class='sub-desc'><p>The node that scrollers and should be pulled on to refresh.</p>\n</div></li></ul></div></div></div><div id='method-onLegendClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-method-onLegendClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-method-onLegendClick' class='name expandable'>onLegendClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles click events for the legend node. ...</div><div class='long'><p>Handles click events for the legend node. Handles opening the tooltips on the chart\nwhen the item in the legend is clicked. The current legend format is as follows:\n@example\n   <code>&lt;div class=\"legend\" data-dojo-attach-point=\"legendNode\"&gt;\n       &lt;ul class=\"doughnut-legend\"&gt;\n           &lt;li data-segment=\"0\"&gt;&lt;span style=\"background-color: someColor\"&gt;&lt;/span&gt;\n               Tooltip Label\n           &lt;/li&gt;\n       &lt;/ul&gt;\n   &lt;/div&gt;</code></p>\n        <p>Available since: <b>3.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-onPullToRefreshCancel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-onPullToRefreshCancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-onPullToRefreshCancel' class='name expandable'>onPullToRefreshCancel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the pull to refresh is canceled. ...</div><div class='long'><p>Fires when the pull to refresh is canceled.</p>\n</div></div></div><div id='method-onPullToRefreshComplete' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-onPullToRefreshComplete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-onPullToRefreshComplete' class='name expandable'>onPullToRefreshComplete</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the pull to refresh is successful. ...</div><div class='long'><p>Fires when the pull to refresh is successful.</p>\n</div></div></div><div id='method-requestData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-method-requestData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-method-requestData' class='name expandable'>requestData</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Overrides _ListBase requestData to re-render the chart on pull to refresh. ...</div><div class='long'><p>Overrides _ListBase requestData to re-render the chart on pull to refresh.</p>\n        <p>Available since: <b>3.3</b></p>\n</div></div></div><div id='method-shouldStartPullToRefresh' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._PullToRefreshMixin' rel='argos._PullToRefreshMixin' class='defined-in docClass'>argos._PullToRefreshMixin</a><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-shouldStartPullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-shouldStartPullToRefresh' class='name expandable'>shouldStartPullToRefresh</a>( <span class='pre'>scrollerNode</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Derived class must implement this to determine when pull to refresh should start. ...</div><div class='long'><p>Derived class must implement this to determine when pull to refresh should start. This is called when onTouchStart is fired.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollerNode</span> : DOMNode<div class='sub-desc'><p>Reference to the scoller node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showLegend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.Views.Charts._ChartMixin'>crm.Views.Charts._ChartMixin</span><br/><a href='source/_ChartMixin.html#crm-Views-Charts-_ChartMixin-method-showLegend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.Views.Charts._ChartMixin-method-showLegend' class='name expandable'>showLegend</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Render a legend from the chart into the legendNode attach point. ...</div><div class='long'><p>Render a legend from the chart into the legendNode attach point.</p>\n        <p>Available since: <b>3.3</b></p>\n</div></div></div></div></div></div></div>","meta":{}});