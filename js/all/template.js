/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* XYZ Control (TODO: bitly link to soho xi docs)
*/

// NOTE:  There are AMD Blocks available

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  //NOTE: Just this part will show up in SoHo Xi Builds.

  $.fn.pluginname = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'pluginName',
        defaults = {
          propertyName: 'defaultValue'
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Template(element, settings) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Plugin Methods
    Template.prototype = {
      init: function() {
        //Do other init (change/normalize settings, load externals, etc)
        return this
          .build()
          .handleEvents();
      },

      // Add markup to the control
      build: function() {
        return this;
      },

      // Sets up event handlers for this control and its sub-elements
      handleEvents: function() {
        var self = this;

        this.element.on('updated.' + pluginName, function() {
          self.updated();
        });

        return this;
      },

      // Example Method
      someMethod: function() {
        //do something with this.settings not settings.
      },

      //Handle Updating Settings
      updated: function() {
        return this
          .teardown()
          .init();
      },

      // Simple Teardown - remove events & rebuildable markup.
      teardown: function() {
        this.element.off('updated.' + pluginName);
        return this;
      },

      // Teardown - Remove added markup and events
      destroy: function() {
        this.teardown();
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, instance.settings, options);
        instance.updated();
      } else {
        instance = $.data(this, pluginName, new Template(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
