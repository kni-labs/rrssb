# Ridiculously Responsive Social Sharing Buttons

[<img align="right" src="media/rrssb-preview.png" width="359" height="auto"/>](http://kurtnoble.com/labs/rrssb/) Love them or hate them, social sharing buttons appear to be with us for a while. It seemed like [**we**](http://www.kurtnoble.com) were constantly making custom buttons for every single project, so we decided to create a super flexible system that would work in any container.

RRSSB is built with [**SASS**](http://sass-lang.com/), so you can easily customize it by tweaking a few variables. SVGs allow for tiny file size and retina support. Add or remove icons as you see fit &mdash; the rest will fill in automagically in the container.

<img src="media/rrssb-preview.gif" width="100%" height="auto"/>

### Demo

> [**View the demo here**](http://kurtnoble.com/labs/rrssb/)

### Usage

1) Link to the css file in header:

```html
<link rel="stylesheet" href="css/rrssb.css" />
```

2) Create an empty div to place the buttons in:

```html
<div class="rrssb-container"></div>
```

You can add a fallback inside the div so that non-JS users will see something rather than nothing.

e.g.

```html
<div class="rrssb-container">
  <!-- Fallback goes in here -->
  <p>This text will show for non-JS users.</p>
</div>
```

- Buttons will automatically flow to the size of the div (in this case `.rrssb-container`). If fixed sized buttons are needed, make the `.rrssb-container` a fixed-width container.

e.g.

```css
.rrssb-container {
  width: 500px;
}
```

3) Call the jQuery function on the div that you created (options are discussed below):

```javascript
$(".rrssb-container").rrssb(options);
```

4) Link to javascript files at the bottom of your document before the closing body tag for best results. (jQuery CDN, [**jQuery fallback**](http://css-tricks.com/snippets/jquery/fallback-for-cdn-hosted-jquery/), and `rrssb.min.js`):

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.1.10.2.min.js"><\/script>')</script>
<script src="js/rrssb.min.js"></script>
```

5) Move the .min.svg files to `/images/rrssb/` or a folder of your choosing (be sure to set it in the options).

### Options

Should you desire to modify the default settings, here are is a list of available options (the values for each option are the defaults):

```javascript
var options = {
  socialNetworks:       ["email", "facebook", "tumblr", "linkedin", "twitter", "reddit", "hackernews", "googleplus", "youtube", "pinterest", "pocket", "github", "vk"], // This is a list of all available social networks. The order you specify them is the order they appear
  showCount:            true, // Should the plugin show the share count?
  iconsLocation:        "/images/rrssb/", // The directory where the SVG icons are placed
  url:                  "", // By default uses the page URL
  pageName:             "", // By default uses the page name
  pageDescription:      "", // By default uses the page meta description
  emailSubject:         "", // By default uses the page name
  emailBody:            "", // By default uses "Check out this page: " plus the page meta description and URL
  twitterStatus:        "", // By default this uses the first 115 characters of the page name plus the URL. Don't worry about URL length, they are all shortened by Twitter. Use this to set a custom Twitter status (This overrides other Twitter options).
  googlePlusStatus:     "", // By default uses the page name and URL
  githubLink:           "", // By default uses "https://github.com/"
  tumblrName:           "", // By default uses the page name
  linkedinTitle:        "", // By default uses the page name
  linkedinSummary:      "", // By default uses the page description
  redditTitle:          "", // By default uses the page name
  redditText:           "", // By default uses the page description
  hackernewsTitle:      "", // By default uses the page name
  hackernewsText:       "", // By default uses the page description
  youtubeUrl:           "", // By default uses the page name
  pinterestMedia:       "", // By default is not set
  pinterestDescription: "", // By default uses the page description
}
```

> NOTE: Don't just copy all the options with empty strings as the empty string will be used as the option value.

### Other install options:

| Service							| Link |
| :---------------------------------	| :------- |
| [**Bower**](http://bower.io)	| `bower install rrssb` |
| Rails * 							| [**Rails Setup by @rimkashox**](http://www.simplehacks.com/web-dev/how-to-use-rrssb-with-rails/) |
| Wordpress * 						| [**Wordpress plugin by @aarreedd**](http://wordpress.org/plugins/ridiculously-responsive-social-sharing-buttons/) |
| Drupal *							| [**Drupal Install Instructions**](https://drupal.org/project/rrssb) |
| CDN * 								| [**OSSCDN by MaxCDN**](http://osscdn.com/#/rrssb) |

<small>* Managed by 3rd parties. Please contact project hosts for support.</small>

### Support

Currently tested between [**140px**](https://www.dropbox.com/s/2k6lcebg2887ge3/Screenshot%202014-02-18%2009.45.45.png) and [**15,465px**](https://www.dropbox.com/s/1juq03011lixk3r/Screenshot%202014-02-18%2009.43.57.png) on current versions of Chrome 33, Safari 7.0.2, Firefox 27, Opera 20, and IE9+.

Requires [**SVG**](http://caniuse.com/svg)


### Version Notes
| Version | Note | Issue(s) | Backwards compatible?
| :---	| :------- | :------- | :-------: |
| 1.8.0 | Shiny new gulp/browser-sync dev environment /via @connorwyatt, updated Facebook icon, fixed TypeError: $ in js /via @QWp6t . | [(#93)](https://github.com/kni-labs/rrssb/issues/93), [(#97)](https://github.com/kni-labs/rrssb/issues/97) | &#x2713;
| 1.7.6 | Fixed an issue where icon hit areas were breaking out of containers | [(#94)](https://github.com/kni-labs/rrssb/issues/94) | &#x2713;
| 1.7.5 | Flexible Large Format icons text-size based on sibling count. Switched to MIT license. | [(#18)](https://github.com/kni-labs/rrssb/issues/18) | &#x2713;
| 1.7.2 | Better calc detection & fallback /via @IanCaunce | [(#89)](https://github.com/kni-labs/rrssb/pull/89) | &#x2713;
| 1.7 | Javascript Meta attributes as variables /via @aicarlson | [(#47)](https://github.com/kni-labs/rrssb/issues/47) | &#x2713;
| 1.6.5 | Namespace CSS classes - Legacy HTML will be incompatible until class names updated.| [(#42)](https://github.com/kni-labs/rrssb/issues/42) | &#x2715;


### Contributing

Thanks for helping! Please use [**dev branch**](https://github.com/kni-labs/rrssb/tree/dev) for all pull requests.


##### Setup:

- Make sure [gulp](http://gulpjs.com/) is installed globally: `npm install -g gulp` (May require `sudo`.)
- run `npm install` to install the dependencies for this project.
- run `gulp` to create a local server at `localhost:3000` and watch for file changes.


### About

RRSSB is a [**KNI Labs freebie**](http://kurtnoble.com/) crafted by [**@dbox**](http://www.twitter.com/dbox) and [**@joshuatuscan**](http://www.twitter.com/joshuatuscan).
