Ext.data.JsonP.v2_beyond_the_guide_list_search({"guide":"<h1 id='v2_beyond_the_guide_list_search-section-how-list-search-works'>How List Search Works</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_beyond_the_guide_list_search-section-hiding-search'>Hiding Search</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_list_search-section-manipulating-the-expression'>Manipulating the Expression</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_list_search-section-view-to-search-widget-relationship'>View to Search Widget Relationship</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_list_search-section-search-widget'>Search Widget</a></li>\n</ol>\n</div>\n\n<p>By default all List views have a built in search bar that lets the user search for more records. This topic will first cover hiding/showing the bar and then into the specifics of what happens when a user types in a query and presses search.</p>\n\n<h2 id='v2_beyond_the_guide_list_search-section-hiding-search'>Hiding Search</h2>\n\n<p>Since the default is to show a search we will turn it off in a view then turn it back on. We will use the Account List view made in <a href=\"#!/guide/v2_template_guide\">Argos-Template Guide</a>.</p>\n\n<p>1. Open <code>argos-template/src/Views/Account/List.js</code>.</p>\n\n<p>2. Add the property <code>hideSearch</code> (around where id and querySelect are) and set it to <code>true</code>:</p>\n\n<pre><code>    hideSearch: true,\n</code></pre>\n\n<p>3. Save, open your app and navigate to the Account List view -- no more Search bar! You could also accomplish the same feat by setting the property <code>enableSearch</code> to <code>false</code>, but that means it not even add a search widget to your view. HideSearch adds/removes a CSS class that changes the display so it is technically still there as you may want to show it at a later time.</p>\n\n<p>4. Go back and either remove <code>hideSearch</code> or set it to false. Save your app and go ahead and check that it now shows up.</p>\n\n<h2 id='v2_beyond_the_guide_list_search-section-manipulating-the-expression'>Manipulating the Expression</h2>\n\n<p>When a search is performed it does a new SData request using the text from the user as the <code>where=</code> clause of the current entity url. Typically you want to insert the text into some sort of expression for the server to process.</p>\n\n<p>1. Open <code>argos-template/src/Views/Account/List.js</code>.</p>\n\n<p>2. Add a new function named <code>formatSearchQuery</code>. It is passed the text the user typed in and should return the final modified where expression:</p>\n\n<pre><code>formatSearchQuery: function(searchText) {\n    return searchText;\n},\n</code></pre>\n\n<p>3. Be aware that there is a helper function <a href=\"#!/api/argos.List-method-escapeSearchQuery\" rel=\"argos.List-method-escapeSearchQuery\" class=\"docClass\">escapeSearchQuery</a> that takes a double quoute <code>\"</code> and makes into a double double quoute <code>\"\"</code>.</p>\n\n<p>4. Example HQL expression for AccountName:</p>\n\n<pre><code>formatSearchQuery: function(searchQuery) {\n    return string.substitute('AccountName like \"${0}%\"', [this.escapeSearchQuery(searchQuery)]);\n}\n</code></pre>\n\n<h2 id='v2_beyond_the_guide_list_search-section-view-to-search-widget-relationship'>View to Search Widget Relationship</h2>\n\n<p>Each List View has a property named <code>searchWidget</code> and it is set to an instance of a dijit widget that implements: widgetTemplate, onSearchExpression, and configure.</p>\n\n<p>1. Open <code>argos-sdk/src/List.js</code> and scroll down to the <code>postCreate()</code> function. A large block of it is within <code>if (this.enableSearch) {}</code> everything in there is creating an instance, hooking it up and placing it into the List views DOM. In particular look at these lines:</p>\n\n<pre><code>                this.searchWidget = this.searchWidget || new searchWidgetCtor({\n                    'class': 'list-search',\n                    'owner': this,\n                    'onSearchExpression': lang.hitch(this, this._onSearchExpression)\n                });\n                this.searchWidget.placeAt(this.searchNode, 'replace');\n</code></pre>\n\n<p>2. The key here is that when the search widget fires its <code>onSearchExpression</code> the List Views <code>_onSearchExpression</code> also fires and will receive the same arguments. Meaning the search widget itself handles everything until the very end then calls <code>onSearchExpression</code> which we know is being listed to. Scroll down to <code>_onSearchExpression</code> and you will find:</p>\n\n<pre><code>        _onSearchExpression: function(expression) {\n\n            this.clear(false);\n            this.queryText = '';\n            this.query = expression;\n\n            this.requestData();\n        },\n</code></pre>\n\n<p>3. Which takes the result (<code>expression</code> being passed in), clears the view empties any pre-existing queryText, sets <code>this.query</code> to the result and calls <code>requestData()</code> which starts the request-handle success-render feed process.</p>\n\n<p>4. The last part that the List View does is in the <code>startup()</code> function which runs when the application is being initialized:</p>\n\n<pre><code>            if (this.searchWidget)\n                this.searchWidget.configure({\n                    'hashTagQueries': this._createCustomizedLayout(this.createHashTagQueryLayout(), 'hashTagQueries'),\n                    'formatSearchQuery': lang.hitch(this, this.formatSearchQuery)\n                });\n</code></pre>\n\n<p>5. This is where the <code>configure()</code> comes into play, it passes in the views hashtags and format search function so that this views instance of the search widget is now \"configured\" for this view.</p>\n\n<h2 id='v2_beyond_the_guide_list_search-section-search-widget'>Search Widget</h2>\n\n<p>The final piece is the search widget itself, the one provided out of the box is located at <code>argos-sdk/src/SearchWidget.js</code> and has a processor for hashtags and using the configured formatter for the remaining text.</p>\n\n<p>1. Open up <code>argos-sdk/src/SearchWidget.js</code> and let's go through the interesting properties:</p>\n\n<p><code>widgetTemplate</code> - Simplate that describes the markup. This markup will be placed at the top of the list view (look for the searchNode in the List Views widgetTemplate.</p>\n\n<p><code>searchText</code> - Watermark text placed inside the search box and also the text inside the search button.</p>\n\n<p>2. The flow of the search widget goes:</p>\n\n<ul>\n<li> User clicks Search button, onClick fires which is attached to <code>search()</code></li>\n<li> Search is called, determines if there are hashtags or custom tags and calls their respective handlers</li>\n<li> calls <code>onSearchExpression()</code> with the result of the handler</li>\n<li> (which is being listened to by the View, saves the result and calls requestData())</li>\n</ul>\n\n\n<h3 id='v2_beyond_the_guide_list_search-section-result'>Result</h3>\n\n<p>Use the hideSearch property to show/hide the search bar. Each List View uses a Search Widget which is definable and acts upon the resulting expression in <code>_onSearchExpression()</code>. The view uses the expression to make an entirely new data call and processes the results. The search widget is entirely self contained with its own markup, events, etc needing only to implement a few details to be configured for each view.</p>\n","title":"Searching"});