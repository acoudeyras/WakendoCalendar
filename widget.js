WAF.define('KendoCalendar', ['waf-core/widget', 'kendoCore', 'kendoHelpers'], function(widget, $, helpers) {
	'use strict';
	
    var KendoCalendar = widget.create('KendoCalendar', {
    	
    	value: widget.property({
    		type: 'string'
    	}),
    	
        init: function() {
        	var self = this;
        	var $el = $(self.node);
        	$el.empty();
        	
        	$el.kendoCalendar({
        		change: function(event) {
        			valueChangeSubscriber.pause();
        			self.value(kendoWidget.value().toString());
        			valueChangeSubscriber.resume();
        		}
        	});
        	
        	var kendoWidget = $el.data("kendoCalendar");
        	
        	var valueChangeSubscriber = self.value.onChange(function(newValue) {
        		newValue = helpers.toDate(newValue);
        		kendoWidget.value(newValue);
        	});
        }
        
    });

    return KendoCalendar;

});

