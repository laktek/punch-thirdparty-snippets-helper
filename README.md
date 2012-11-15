# Punch Third Party Snippets Helper

Collection of third party snippets (Google Analytics, Disqus, Tweet Button & Web Font Loader), you can easily add to your [Punch](http://laktek.github.com/punch) templates.

## How to Use 

* Install the package

	`npm install punch-thirdparty-snippets-helper`

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"helpers": {
				"thirdparty_snippets_helper": "punch-thirdparty-snippets-helper"
			}

		}

* You must then define the configurations for the snippets you wish to use as follows:

		"thirdparty_snippets": {

			"google_analytics": {
				"property_id": "UA-XXXXXX-X"	
			},

			"disqus": {
				"shortname": "username"	
			},

			"twitter": {
				"user": "screename"
			},

			"web_fonts": {
				"google": {
					"families": ['Droid Sans', 'Droid Serif']
				}
			},
		}

Here is a full list of options available for each snippet:

**Google Analytics**

* protertyId (required) - The property ID for the site you want to track ([Learn More](http://support.google.com/analytics/bin/answer.py?hl=en&answer=1032385))
* async - Whether to load the script in asynchronous mode, which will start tracking the events immediately without blocking the page rendering (default: true)

**Disqus**

* shortname (required) - Shortname provided for your discuss account.

**Tweet Button**

* via - Screen name of the user to attribute the Tweet to
* count - Count box position values: none, horizontal, vertical (default: none)
* size - The size of the rendered button values: medium, large (default: medium) 

**WebFont Loader**

You must provide the configuration of fonts to load as defined in the [WebFont Loader](https://github.com/typekit/webfontloader) library

For example to use Google Fonts:

		"web_fonts": {
			"google": {
				"families": ['Droid Sans', 'Droid Serif']
			}
		}

or Typekit:

		"web_fonts": {
			typekit: {
				id: 'xxxxxx'
			}
		}

## License

Copyright (c) 2012   
Licensed under the MIT license.
