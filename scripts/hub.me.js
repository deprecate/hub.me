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
    var hubMe = 'hubMe',
        defaults = {
            username: 'github'
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

        var self = this,
        repos = [],
        thisRepo = this.options.username + '.github.com';

        $.getJSON('https://api.github.com/users/' + this.options.username + '/repos?callback=?', function (result) {
            
            $.each(result.data, function(i, field) {
                if (field.language != null)
                    repos.push(field);
            });

            repos = orderByLanguages(repos);

            $.each(repos, function(i, field) {
                
                if (i > 0) {
                    if (repos[i].language != repos[i-1].language) {
                        self.createCategory(repos[i].language);
                    }
                }
                else {
                    self.createCategory(repos[i].language);
                }

                if (repos[i].name != thisRepo) {
                    self.createRepo(repos[i]);
                }

            });

        });
    };

    Plugin.prototype.createCategory = function(catName) {

        var cat =   '<section>' +
                        '<h1>' + catName + '</h1>' +
                    '</section>';

        $(this.element).append(cat);

    };

    Plugin.prototype.createRepo = function(repo) {

        var repository =    '<article>' +
                                '<div>' +
                                    '<h2><a href="' + repo.html_url + '">' + repo.name + '</a></h2>' +
                                    '<p>' + repo.description + '</p>' +
                                    '<a href="' + repo.homepage + '">' + repo.homepage + '</a>' +
                                '</div>' +
                            '</article>'; 

        $(this.element).append(repository);

    };

    var orderByLanguages = function(repos) {
        
        return repos.sort(function(a, b) {
                
                var langA = a.language, 
                    langB = b.language;

                if (langA < langB)
                    return -1;
                if (langA > langB)
                    return 1;

            });
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