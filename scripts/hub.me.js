/*
 *  Project: Hub.me
 *  Description: An alternative and responsive gallery for your projects on Github
 *  URL: https://github.com/zenorocha/hub.me 
 *  Author: Zeno Rocha
 *  License: WTFPL - http://sam.zoy.org/wtfpl/COPYING
 */

// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
    
    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.
    
    // window and document are passed through as local variables rather than globals
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var hubMe = 'defaultHubMe',
        defaults = {
            propertyName: 'value',
            username: 'github',
            //sortBy: 'language' //popularity 
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or 
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = hubMe;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        this.getRepos();
    };

    Plugin.prototype.getRepos = function () {

    	var repos = [];

        $.getJSON('https://api.github.com/users/' + this._defaults.username + '/repos', function (result) {
			
			$.each(result, function(i, field) {
	    		if (field.language != null)
	    			repos.push(field);
			});

			repos = this.orderByLanguages(repos);

			$.each(repos, function(i, field) {
	    		
	    		if (i > 0) {
					if (repos[i].language != repos[i-1].language) {
		    			createCategory(repos[i].language);
		    		}	    			
	    		}
	    		else {
	    			createCategory(repos[i].language);
	    		}

	    		createRepo(repos[i]);

			});

        });
    };

    var orderByLanguages = function() {
    	return repos.sort(function(a, b) {
				
				var langA = a.language, 
					langB = b.language;

			 	if (langA < langB)
			  		return -1;
			 	if (langA > langB)
			  		return 1;

			});
    }

    	var createCategory = function(catName) {
			
			var cat = '<div class="category">' +
							'<h2>' + catName + '</h2>' +
					   '</div>';

			$('body').append(cat);

		}

		var createRepo = function(repo) {
			
			var repository = '<a href="' + repo.html_url + '" class="title">' +
								'<div>' +
									'<h1>' + repo.name + '</h1>' +
									'<p>' + repo.description + '</p>' +
									'<small>' + repo.homepage + '</small>' +
								'</div>' +
							'</a>';	

			$('body').append(repository);
			
		}

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn.hubMe = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + hubMe)) {
                $.data(this, 'plugin_' + hubMe, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window, document);