Ext.data.JsonP.upgrading_v12_to_v20({"guide":"<h1>Upgrading 1.2 to 2.0</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-1'>Steps to Convert</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-2'>AMD Script Loading</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-3'>Ext to Dojo Functions</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-4'>Folder Re-structure</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-5'>Properties Renamed</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-6'>Function Changes</a></li>\n<li><a href='#!/guide/upgrading_v12_to_v20-section-7'>Additional Properties</a></li>\n</ol>\n</div>\n\n<p>With the release of SLX Mobile 2.0 there have been many major changes in how the application works. This was done not only to align with SLX Web\nbut to also bring faster performance, newer features and a more customize-able environment. These changes include:</p>\n\n<ul>\n<li>AMD script loading;</li>\n<li>Removed the Ext framework and replaced it with Dojo 1.7.1;</li>\n<li>Minor folder restructuring;</li>\n<li>Properties and Functions renamed to be more descriptive; and</li>\n<li>Additional properties and functions to enhance customizing.</li>\n</ul>\n\n\n<h2 id='upgrading_v12_to_v20-section-1'>Steps to Convert</h2>\n\n<ol>\n<li>Change all modules (files) to use AMD loading.</li>\n<li>Change all Ext calls to Dojo equivalents.</li>\n<li>Verify that all modules names are fixed to reflect the new folder structure.</li>\n<li>Verify that any property name changes do not effect your views or customization's.</li>\n<li>Verify that the changed function names/removal do not effect your views or customization's.</li>\n<li>Consider the newly added properties and methods to enhance existing customization's.</li>\n</ol>\n\n\n<h2 id='upgrading_v12_to_v20-section-2'>AMD Script Loading</h2>\n\n<p>AMD stands for Asynchronous Module Definition which means that instead of declaring globals in every script file you use\nthe <code>define()</code> function to setup a module. In the definition you also declare what dependencies (requires) that module needs.\nThe AMD loader will load all files asynch, then define each module in the correct order passing in references to each dependency.</p>\n\n<p>What this means for upgrading is that you go from:</p>\n\n<h4>Ext:</h4>\n\n<pre><code>Ext.namespace(\"Mobile.SalesLogix.Calendar\");\n(function() {\n    Mobile.SalesLogix.Calendar.MonthView = Ext.extend(<a href=\"#!/api/Sage.Platform.Mobile.List\" rel=\"Sage.Platform.Mobile.List\" class=\"docClass\">Sage.Platform.Mobile.List</a>, {\n        // define view\n    });\n});\n</code></pre>\n\n<h4>To Dojo AMD:</h4>\n\n<pre><code>define('Mobile/SalesLogix/Views/Calendar/MonthView', [\n    'dojo/_base/declare',\n    'dojo/_base/array',\n    'dojo/string',\n    'dojo/query',\n    'dojo/dom-attr',\n    'dojo/dom-class',\n    'dojo/dom-construct',\n    'Mobile/SalesLogix/Format',\n    'Sage/Platform/Mobile/ErrorManager',\n    'Sage/Platform/Mobile/Convert',\n    'Sage/Platform/Mobile/List'\n], function(\n    declare,\n    array,\n    string,\n    query,\n    domAttr,\n    domClass,\n    domConstruct,\n    format,\n    ErrorManager,\n    convert,\n    List\n) {\n\n    return declare('Mobile.SalesLogix.Views.Calendar.MonthView', [List], {\n        // define view\n    });\n});\n</code></pre>\n\n<p>While this does seem to be a lot of extra code the gains far outweigh the additional keystrokes. We now can see what other modules the <code>MonthView</code> requires, we also know the path name and no longer have to memorize global variable names.</p>\n\n<p>To break down the define statement we have:</p>\n\n<pre><code>define('Path/To/My/Script',\n    [dependencies],\nfunction(references), {\n\n    /*private space*/\n\n    return declare('My.Module.Name', [Inheritances], {\n        /* definition */\n    });\n});\n</code></pre>\n\n<h5>Path/To/My/Script</h5>\n\n<p>This is the path to the script minus the extension. In the <code>index</code> file you can setup shortcuts (namespaces) and in this case <code>Mobile/SalesLogix</code> links to <code>argos-saleslogix/src</code>, so the final path for Month View is:\n<code>argos-saleslogix/src/Views/Calendar/MonthView.js</code>, which translates to: <code>Mobile.SalesLogix.Views.Calendar.MonthView</code>.</p>\n\n<h5>[dependencies]</h5>\n\n<p>This is an array of other script paths that this module needs to run, again using the shortcuts defined in the <code>index</code> file.</p>\n\n<h5>function(references)</h5>\n\n<p>This function will recieve an instance of each dependency required. The reason each dependency and reference is on its own line in the code\nabove is to quickly make sure there is a one-for-one match as it needs to go in the same order.</p>\n\n<h5>/<em>private space/</em></h5>\n\n<p>The code inside here will only be ran once when defined, the returned object will be what actually defines the module meaning anything before the return space is private unless exposed in your returned object.</p>\n\n<h5>declare()</h5>\n\n<p>This is the dojo equivalent of Ext&#8217;s <code>Ext.extend</code>, as it sets up a constructor (factory) to be later used with the new keyword to create instances.</p>\n\n<h5>'My.Module.Name'</h5>\n\n<p>The name of the module, for our purposes this will match the path used to eliminate confusion.</p>\n\n<h5>[Inheritances]</h5>\n\n<p>An array of objects that this new module should inherit from - in Dojo terms these are called <code>mixins</code>.</p>\n\n<h3>Notes</h3>\n\n<p>As seen in the first example you will no longer reference global variables as you have a local variable instance as a reference. Notice in the old Ext code we had:</p>\n\n<p><code><a href=\"#!/api/Sage.Platform.Mobile.List\" rel=\"Sage.Platform.Mobile.List\" class=\"docClass\">Sage.Platform.Mobile.List</a></code></p>\n\n<p>and now we pull it in as a dependency: <code>Sage/Platform/Mobile/List</code>, get passed a reference: <code>function(,,, List)</code> and then use the List variable:</p>\n\n<p><code>declare('Mobile.SalesLogix.Views.Calendar.MonthView', [List], ...</code></p>\n\n<p>This happens for all globals like <code>Mobile.SalesLogix.Format</code> or <code><a href=\"#!/api/Sage.Platform.Mobile.Convert\" rel=\"Sage.Platform.Mobile.Convert\" class=\"docClass\">Sage.Platform.Mobile.Convert</a></code> - you will see them pulled in and used in code as <code>format</code> and <code>convert</code>.</p>\n\n<p>Naming the references is completely up to the person creating the module but the standard used by SLX Mobile, and in general Dojo, is that constructors (factories) are initial case and everything else is lowercase.</p>\n\n<p>When viewing the Dojo documentation you will want to look for the <code>Dojo 1.7+</code> example which will show you the path to add as a dependency and the suggested reference name.</p>\n\n<h2 id='upgrading_v12_to_v20-section-3'>Ext to Dojo Functions</h2>\n\n<p>Ext has been removed completely, all references to <code>Ext.*</code> and any of it's extended functions such as String.format will need to be replaced with Dojo 1.7.1 equivalents. The following is a short list of typical Ext code used in SLX Mobile and it's Dojo translation:</p>\n\n<p>Ext: <code>Ext.namespace('my.object')</code> <br/>\nDojo: No longer required when defining views. For singletons, require \"dojo/_base/lang\" and use <code>lang.setObject('my.object', {})</code></p>\n\n<p>Ext: <code>Ext.extend()</code> <br/>\nDojo: Require \"dojo/_base/declare\" and use <code>declare()</code></p>\n\n<p>Ext: <code>Object.superclass.function.apply(this, arguments)</code> <br/>\nDojo: <code>this.inherited(arguments)</code>. Where <code>this</code> is in the \"child\" of the inherited object context.</p>\n\n<p>Ext: <code>Ext.override(object, {})</code> <br/>\nDojo: Require \"dojo/_base/lang\" and use <code>lang.extend(object, {})</code></p>\n\n<p>Ext: <code>String.format('format', arg1, arg2)</code>. Where <code>{0}</code> = arg1 <br/>\nDojo: Require \"dojo/string\" and use <code>string.substitute('format', [arg1, arg2])</code>. Where <code>${0}</code> = arg1</p>\n\n<p>Ext: <code>function.createDelegate(scope, [arg1, arg2], bool appendArgs)</code> <br/>\nDojo: <code>function.bindDelegate(scope, arg1, arg2)</code></p>\n\n<p>Ext: <code>Object.on('event', handler, scope)</code> <br/>\nDojo: <code>this.connect(object, 'event', handler)</code>. Where <code>this</code> is in a View context</p>\n\n<p>Ext: <code>Ext.each(myArray, function(item){}, scope)</code> <br/>\nDojo: Require \"dojo/_base/array\" and use <code>array.forEach(myArray, function(item){}, scope)</code></p>\n\n<p>Ext: <code>this.el</code>. Where <code>this</code> is in a View context <br/>\nDojo: <code>this.domNode</code>. Where <code>this</code> is in a View context</p>\n\n<p>Ext: <code>attachmentPoints: { name : selector }</code> <br/>\nDojo: In the actual HTML markup add the attribute: <code>data-dojo-attach-point=\"name\"</code>.</p>\n\n<h2 id='upgrading_v12_to_v20-section-4'>Folder Re-structure</h2>\n\n<p>With the move to AMD the folder structure has been re-organized and since all module names are based off their physical path the object names themselves have changed.</p>\n\n<p>Folder Name Changes: <br/>\n<code>argos-sdk/src/Controls</code> to <code>argos-sdk/src/Fields</code> <br/>\n<code>argos-saleslogix/src/views</code> to <code>argos-saleslogix/src/Views</code></p>\n\n<p>What this means for your code is if you are referencing <code>Account.Detail</code> like so: <br/>\n<code>Mobile.SalesLogix.Accout.Detail</code> <br/>\nit is now: <br/>\n<code>Mobile.SalesLogix.Views.Account.Detail</code></p>\n\n<p>The same goes for Controls which are now Fields: <br/>\n<code>Sage.Platform.Mobile.Controls.BooleanField</code> <br/>\nto: <br/>\n<code><a href=\"#!/api/Sage.Platform.Mobile.Fields.BooleanField\" rel=\"Sage.Platform.Mobile.Fields.BooleanField\" class=\"docClass\">Sage.Platform.Mobile.Fields.BooleanField</a></code></p>\n\n<p>The following modules have been moved from <code>argos-sdk/src/Controls</code> to <code>argos-saleslogix/src/Fields</code>:</p>\n\n<ul>\n<li>AddressField</li>\n<li>NameField</li>\n<li>PicklistField</li>\n</ul>\n\n\n<p>With their name change correspondingly: <br/>\n<code>SalesLogix.Platform.Mobile.Controls.AddressField</code> <br/>\nto: <br/>\n<code>Mobile.SalesLogix.Fields.AddressField</code></p>\n\n<h2 id='upgrading_v12_to_v20-section-5'>Properties Renamed</h2>\n\n<p>To better describe several properties they have been renamed to a more intuitive name.</p>\n\n<p>1.2: View.viewTemplate  <br/>\n2.0: <a href=\"#!/api/Sage.Platform.Mobile.View-property-widgetTemplate\" rel=\"Sage.Platform.Mobile.View-property-widgetTemplate\" class=\"docClass\">View.widgetTemplate</a> <br/>\nNotes: Simple rename now that all Views are Dojo Dijits</p>\n\n<p>1.2: <a href=\"#!/api/Sage.Platform.Mobile.List-property-itemTemplate\" rel=\"Sage.Platform.Mobile.List-property-itemTemplate\" class=\"docClass\">List.itemTemplate</a> <br/>\n2.0: <a href=\"#!/api/Sage.Platform.Mobile.List-property-rowTemplate\" rel=\"Sage.Platform.Mobile.List-property-rowTemplate\" class=\"docClass\">List.rowTemplate</a> <br/>\nNotes: This is the <code>&lt;li&gt;</code> markup for describing the rows structure, not normally changed.</p>\n\n<p>1.2: List.contentTemplate <br/>\n2.0: <a href=\"#!/api/Sage.Platform.Mobile.List-property-itemTemplate\" rel=\"Sage.Platform.Mobile.List-property-itemTemplate\" class=\"docClass\">List.itemTemplate</a> <br/>\nNotes: This template sets up the markup for an item within a row (within rowTemplate). This template is overriden every view to be tailored to its entity.</p>\n\n<p>1.2: Detail/Edit createLayout children fields. <code>name</code> is used for SData binding <br/>\n2.0: Detail/Edit createLayout children fields. <code>name</code> is now the unique identifer, <code>property</code> is for SData binding <br/>\nNotes: This is backward compatible, if <code>property</code> does not exist it will use <code>name</code> for identification and SData binding</p>\n\n<h2 id='upgrading_v12_to_v20-section-6'>Function Changes</h2>\n\n<p>1.2: View.setTitle(value) <br/>\n2.0: View.set('title', value) <br/>\nNotes: The function has been removed and replaced with normal get/set.</p>\n\n<p>1.2: View.isActive() <br/>\n2.0: <a href=\"#!/api/Sage.Platform.Mobile.Application-method-isViewActive\" rel=\"Sage.Platform.Mobile.Application-method-isViewActive\" class=\"docClass\">App.isViewActive</a>(view) <br/>\nNotes: Views no longer have the function it is globally available in the App namespace.</p>\n\n<p>1.2: App.getActiveView() <br/>\n2.0: <a href=\"#!/api/Sage.Platform.Mobile.Application-method-getPrimaryActiveView\" rel=\"Sage.Platform.Mobile.Application-method-getPrimaryActiveView\" class=\"docClass\">App.getPrimaryActiveView</a>() <br/>\nNotes: Renamed</p>\n\n<h2 id='upgrading_v12_to_v20-section-7'>Additional Properties</h2>\n\n<h3>Detail/Edit createLayout</h3>\n\n<p>All objects within layout now have a <code>name</code> property as a unique identifier. This includes sections, quick actions, fields, controls and related views.\nThe purpose of this so in <code>registerCustomization</code> the <code>at: function(row)</code> part can now use <code>row.name</code> to target any piece of the layout.</p>\n\n<h3>Hash Tag Customization</h3>\n\n<p>Hash Tags now use the same customization engine as detail/edit views, enabling ease of modifying, inserting or removing hash tags.</p>\n\n<pre><code>this.registerCustomization('list/hashTagQueries', 'opportunity_list', {\n    at: true, // insert anywhere (hash tag queries are not ordered)\n    type: 'insert',\n    value: {\n        tag: 'g500k',\n        query: 'SalesPotential gt \"500000\"'\n    }\n});\n\nthis.registerCustomization('list/hashTagQueries', 'history_list', {\n    // hashes are identified by their key property\n    at: function(hash) { return hash['key'] === 'phonecall'; },\n    type: 'modify',\n    value: {\n        query: 'Type eq \"atMobileCall\"'\n    }\n});\n</code></pre>\n\n<h3>Toolbar Customization</h3>\n\n<p>Toolbars now use the same customization engine as detail/edit views (and hash tags). No longer need to override <code>createToolLayout()</code>.</p>\n\n<pre><code>this.registerCustomization('detail/tools', 'account_detail', {\nat: function(tool){ return tool.id === 'edit'; },\ntype: 'insert',\nwhere: 'after',\nvalue: {\n    id: 'customButton',\n    icon: 'content/images/icons/Hello_World_24.png',\n    action: 'showHelloWorld'\n}\n});\n</code></pre>\n\n<h3>Multiple Insert Customizations</h3>\n\n<p>Before the registerCustomization engine would only insert one value at a time, causing multiple calls to insert items at the same place. Now you\nmay pass an array for the <code>value</code> key and it will insert each object sequentially at that point. Note this only works when <code>type</code> is <code>insert</code>.</p>\n\n<pre><code>this.registerCustomization('detail/tools', 'account_detail', {\n    at: function(tool){ return tool.id === 'edit'; },\n    type: 'insert',\n    where: 'after',\n    value: [{\n        id: 'b1',\n        icon: 'content/images/icons/b1.png',\n        action: 'b1Function'\n    }, {\n        id: 'b2',\n        icon: 'content/images/icons/b2.png',\n        action: 'b2Function'\n    }]\n});\n// results in a toolbar with: [Edit][B1][B2]\n</code></pre>\n\n<h3>View Security</h3>\n\n<p>Now that secured actions is available via SData in SalesLogix 8.0+ each individual view now has a <code>security</code> property that can be set to a string defining the secured action required.</p>\n\n<p>When a user logs in the security is stored in:</p>\n\n<p><code>App.context.userSecurity</code></p>\n\n<p>as a hash table with each key as the action and the value as true. If a key does not exist in that list it is assumed the user does not have the security permissions to access that view.</p>\n\n<h4>Example:</h4>\n\n<p>Ticket List may be defined as:</p>\n\n<pre><code>define('...Ticket.List', [], function() { return declare('...Ticket.List', [], {\n    security: 'Entities/Ticket/View'\n}); });\n</code></pre>\n\n<p>Say, a user named Lee has the following actions:</p>\n\n<pre><code>App.context.userSecurity = {\n    Entities/Account/View: true,\n    Entities/Contact/View: true,\n    Entities/Opportunity/View: true\n}\n</code></pre>\n\n<p>while user called Barb has these:</p>\n\n<pre><code>App.context.userSecurity = {\n    Entities/Account/View: true,\n    Entities/Ticket/View: true,\n    Entities/Opportunity/View: true\n}\n</code></pre>\n\n<p>When Lee logs in, his Home page will NOT have Tickets and he will not be able to navigate to Tickets in anyway. Even if Account Detail has a \"related Tickets\" shortcut it will not function.\nWhereas Barb will have it on her Home page (but not Contacts).</p>\n\n<p>For SalesLogix 7.5.4 and below since it does not reply with a users secured actions it will set the <code>userSecurity</code> to <code>null</code> and grant full access just as\nbefore.</p>\n","title":"Upgrading 1.2 to 2.0"});