	(function($) {
		
		var repos = [],
			username = 'zenorocha';
		
		$.getJSON('https://api.github.com/users/' + username + '/repos', function(result){
	    	
			$.each(result, function(i, field) {
	    		if (field.language != null)
	    			repos.push(field);
			});

			repos.sort(function(a, b) {
				
				var langA = a.language, 
					langB = b.language;

			 	if (langA < langB)
			  		return -1;
			 	if (langA > langB)
			  		return 1;

			});

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
		
	})(jQuery);