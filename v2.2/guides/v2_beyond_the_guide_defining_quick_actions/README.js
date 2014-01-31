Ext.data.JsonP.v2_beyond_the_guide_defining_quick_actions({"guide":"<h1>Defining Quick Actions</h1>\n\n<p>Quick Actions are special row objects in a Detail view that instead of display a label and read-only text it has: icon, header, description and upon clicking performs an action. This is very similar to toolbar items but is placed in Detail View itself.</p>\n\n<h2>Adding a Simple Quick Action</h2>\n\n<p>Let's add a simple quick action that opens the Account Address in a Google Maps window. If you have completed Advanced Detail: Value/OnCreate then you will need to adjust the following options rather than add them.</p>\n\n<p>1. Open <code>argos-template/src/Views/Account/Detail.js</code> and in <code>querySelect</code> add the property <code>Address/FullAddress</code>.</p>\n\n<p>2. In <code>createLayout()</code> add a new section to the layout with the following:</p>\n\n<pre><code>            return this.layout || (this.layout = [{\n                title: this.actionsText,\n                list: true,\n                cls: 'action-list',\n                name: 'QuickActionsSection',\n                children: []\n            },{\n</code></pre>\n\n<p>3. We have a new property <code>list</code>, if this is set to true it uses the \"list\" versions of the HTML markup where it uses <code>&lt;li&gt;</code> instead of <code>&lt;div&gt;</code> for the container. The corresponding Detail View properties are: <code>actionTemplate</code> for list and <code>actionPropertyTemplate</code> for non-lists.</p>\n\n<p>4. Add a new row object in our new section <code>children</code> with the following (if you already have a <code>Account/$key</code> row, move it up into this section with the following properties):</p>\n\n<pre><code>{\n    name: 'ViewAddressAction',\n    property: 'Address/FullAddress',\n    label: this.viewAddressText,\n    icon: 'content/images/icons/srch_24.png',\n    action: this.viewAddress\n}\n</code></pre>\n\n<p>5. Now define the function <code>viewAddress()</code> it gets passed the entry and the value. It should open a new window pointing to google maps using the provided value:</p>\n\n<pre><code>viewAddress: function(entry, value) {\n   var url = string.substitute(\"http://maps.google.com/maps?q=${0}\", [value]);\n   window.open(url);\n},\n</code></pre>\n\n<p>6. Lastly, add the strings for localization:</p>\n\n<pre><code>actionsText: 'Quick Actions',\nviewAddressText: 'View address',\n</code></pre>\n\n<p>7. Save and run your App. Your Account Detail views now have a Quick Action that opens up google maps for the accounts address.</p>\n\n<p>We've added a simple Quick Action that uses the basic properties - just remember that all row objects support the same base set of properties so you can use things like: provider, cls, enabled/disabled, renderer etc to further enhance the usability of the action.</p>\n","title":"Detail Actions"});