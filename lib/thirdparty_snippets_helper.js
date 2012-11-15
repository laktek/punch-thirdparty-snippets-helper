/*
 * punch-thirdparty-snippets-helper
 * https://github.com/laktek/punch-thirdparty-snippets-helper
 *
 * Copyright (c) 2012
 * Licensed under the MIT license.
 */

var _ = require("underscore");
var helper_utils = require("punch").Utils.Helper;

var ga = {
	property_id: "",
	async: true
};

var disqus = {
	shortname: ""
};

var tweet_button = {
	via: "",
	count: "none",
	size: "medium"
}

var web_fonts = {};

var tag_helpers = {

	google_analytics_snippet: function() {
		return "<script type='text/javascript'>" +
					 "  var _gaq = _gaq || [];" +
					 "  _gaq.push(['_setAccount', '" + ga.property_id + "']);" +
					 "  _gaq.push(['_trackPageview']);" +
					 " " +
					 "  (function() {" +
					 "    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = " + ga.async + ";" +
					 "    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';" +
					 "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);" +
					 "  })();" +
					 "</script>";
	},

	web_font_loader_snippet: function() {
		return "<script src=\"http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\"></script>" +
					 "<script>" +
					 "  WebFont.load(" +
					 JSON.stringify( web_fonts ) +
					 "  );" +
					 "</script>";
	},

	disqus_snippet: function() {
		return "<div id=\"disqus_thread\"></div>" +
        	 "<script type=\"text/javascript\">" +
           "  var disqus_shortname = '" + disqus.shortname + "';" +
           "  (function() {" +
           "   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;" +
           "   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';" +
           "    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);" +
           "  })();" +
        	 "</script>"
					 "<noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>" +
        	 "<a href=\"http://disqus.com\" class=\"dsq-brlink\">comments powered by <span class=\"logo-disqus\">Disqus</span></a>";
	},

	"tweet_snippet": function() {
		return "<a href=\"http://twitter.com/share\" class=\"twitter-share-button\" data-count=\"" + tweet_button.count + "\" data-size=\"" + tweet_button.size + "\" data-via=\"" + tweet_button.via + "\">Tweet</a><script type=\"text/javascript\" src=\"http://platform.twitter.com/widgets.js\"></script>";
	}

};

module.exports = {

	setup: function(config) {
		var snippets_config = config.thirdparty_snippets;
		ga = _.extend(ga, snippets_config.google_analytics);
		disqus = _.extend(disqus, snippets_config.disqus);
		tweet_button = _.extend(tweet_button, snippets_config.tweet_button);
		web_fonts = snippets_config.web_fonts;
	},

	directAccess: function(){
		return { "tag_helpers": tag_helpers, "options": {} };
	},

	get: function(basepath, file_extension, options, callback){
		var self = this;

		return callback(null, { "tag": tag_helpers }, {});
	}

};
