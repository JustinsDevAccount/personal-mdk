/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    //"links_path" : "links.txt",
    
    "links_path" : ["links/personal.txt","links/dev.txt","links/rmotr.txt"],
    //\_added support for mulitple links pages
    //  tried using JS to parse all the files in the links directory but that's not possible in JS
    //  tried using JS + php but this will require that a local server to be running (for PHP to work)
    //     so, getting the user to input manually in the setting is best.

    "title":{
	"add_symbol": "&#9830;",
	"default":"JP's Start Page"
    },
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Trebuchet MS",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
    },
    
    "icons": {
	"showIcons": false
    },

    "clock": {
	"IsMilitary": true
    },

    "weather": {
	"show": false,
	"geolocate": false,
	"default_loco": "Hong Kong, Hong Kong",
	"link":"http://wttr.in"
	//\ optional link for weather to a 3rd party app
    },
    
	
    "background": {
	"source":{
	    "baseUrl": "https://source.unsplash.com/collection/",
	    "dayColId":"407887",
	    "nightColId":"407877",
	    "dawnColId": "407882",
	    "duskColId": "407878"
	},
	"daily": true
	//\_ should background picture in each collection be only updated once per day?
    },
	
    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
			["http://google.com/search", "q","Google"],
		    ["http://images.google.com/search", "q","Google Image"],
		    ["http://google.com/maps", "q", "Google Map"],
		    ["http://google.com/news", "q", "Google News"],
		    ["http://youtube.com/results", "search_query", "YouTube"],
		    ["http://soundcloud.com/search/sounds", "q", "Sound Cloud"],
		    ["http://bing.com/search", "q", "Bing"],
		    ["http://github.com/search", "q", "Github"],
		    ["http://wolframalpha.com/input/", "i", "Wolfram Alpha"]
		    ],
	"focusSearch": true,
	//\_ should the search box be selected on load?
	"showQuotes": false,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
		  "You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "the Universe is in us. ~ Neil DeGrasse Tyson",
		  "What you seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
