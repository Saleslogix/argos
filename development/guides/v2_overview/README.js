Ext.data.JsonP.v2_overview({"guide":"<h1 id='v2_overview-section-overview'>Overview</h1>\n\n<h2 id='v2_overview-section-starting-files'>Starting Files</h2>\n\n<p>Using <code>argos-template</code> as a starting point provides the following files to get started:</p>\n\n<p><strong>index-dev.aspx</strong> <br/>\nDevelopment landing page. Pulls in CSS, libraries and initializes application. Use .html version for non-asp servers. All references and defaults are set to development versions.</p>\n\n<p><strong>index.aspx</strong> <br/>\nProduction landing page. This file will be used when application is built and deployed. Use .html version for non-asp servers.</p>\n\n<p><strong>src/Application.js</strong> <br/>\nApplication is the global object accessible anywhere using the <code>App</code> variable. It handles communication the underlying rendering library and handles topics like: navigation history, initializing views, global events. You may want to consider code that affects the entire app to be placed here: login, user info, session state, preference saving/loading etc.</p>\n\n<p><strong>src/ApplicationModule.js</strong> <br/>\nThis file is the \"load and register\" module. All views and any supporting modules will be put as dependencies and referenced in this module. It also handles registering the built in toolbars and loading any external customizations.</p>\n\n<p><strong>src/Views/Home.js</strong> <br/>\nThis is the built in Home page that is initially loaded and navigated to upon load. It is like a table of contents with links to the rest of your app.</p>\n\n<p><strong>src/Views/MainToolbar.js and FooterToolbar.js</strong> <br/>\nThese two modules are for establishing a base top and bottom toolbars that inject standard mobile buttons such as back, home, top of page, etc.</p>\n\n<p><strong>localization/en.js</strong> <br/>\nThis file sets up the culture configuration such as decimal places, digits, currency symbol, percent symbols.</p>\n\n<p><strong>localization/template/en.js</strong> <br/>\nThis file is empty as the app will be setup as english in default. When adding more locales their respective file within this folder will have overrides for all the strings and formatters in the application.</p>\n\n<p><strong>content/</strong> <br/>\nAll css and image files.</p>\n\n<p><strong>configuration/development.js and production.js</strong> <br/>\nThese two files contain the SData service setup information like URL, contract, and format type. <code>index-dev</code> uses development and <code>index</code> uses production.</p>\n\n<p><strong>build/release.jsb2</strong> <br/>\nThis file is the build description, any new files (or deletion of files) will need to be updated in this definition.</p>\n\n<p><strong>build/release.cmd and release.sh</strong> <br/>\nThese are the script options to run for this application such target folder, .net tool, java tool, what to xcopy etc.</p>\n","title":"File Overview"});