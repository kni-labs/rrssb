# Ridiculously Responsive Social Sharing Buttons

[<img align="right" src="media/rrssb-preview.png" width="359" height="auto"/>](http://kurtnoble.com/labs/rrssb/) Love them or hate them social sharing buttons appear to be with us for a while. It seemed like [we](http://www.kurtnoble.com) were constantly making custom buttons for every single project, so we decided to create a super flexible system that would work in any container.

RRSSB is built with [**SASS**](http://sass-lang.com/), so you can easily customize it by tweaking a few variables. SVGs allow for tiny file size and retina support. Add or remove icons as you see fit &mdash; the rest will fill in automagically in the container.

### Demo

> [**View the demo here**](http://kurtnoble.com/labs/rrssb/)

### Usage

1) Link to the css file in header:

```html
<link rel="stylesheet" href="css/rrssb.css" />
```


2) Copy `.rrssb-buttons` unordered list to desired location(s):

```html
 <ul class="rrssb-buttons clearfix">
 	<li class="email"> ... </li>
 	<li class="facebook"> ... </li>
 	...
 	<li class="googleplus"> ...</li>
 </ul>
```

- Buttons will automatically flow to the size of the ul `rrssb-buttons`. If specifically sized buttons are needed, nest `rrssb-buttons` in a fixed-width container.
- Only copy the `li`s of the buttons you want. 
- Adding a class of `popup` to the anchor tag for each share button will make the share dialog open in a popup, rather than a new window. (Good for Facebook, Twitter, Google Plus, etc.)
- Each sharing URL requires various parameters that allow you to pass through messaging in the sharing dialog. A useful tool for URI escaping any messaging that needs to pass through the share URL can be found [**here**](http://meyerweb.com/eric/tools/dencoder/).


3) Link to the .js file at the bottom of your page:

```html
<script src="js/rrssb.min.js"></script>
```


#### Other install options:

| Service							| Link |
| :---------------------------------	| :------- |
| With [**Bower**](http://bower.io)	| `bower search rrssb` |
| In Rails 							| [**Rails Setup by @rimkashox**](http://www.simplehacks.com/web-dev/how-to-use-rrssb-with-rails/) |
| In Wordpress 						| [**Wordpress plugin by @aarreedd**](http://wordpress.org/plugins/ridiculously-responsive-social-sharing-buttons/) |
| CDN: 								| [**OSSCDN by MaxCDN**](http://osscdn.com/#/rrssb) |

### Support

Currently tested between [**140px**](https://www.dropbox.com/s/2k6lcebg2887ge3/Screenshot%202014-02-18%2009.45.45.png) and [**15,465px**](https://www.dropbox.com/s/1juq03011lixk3r/Screenshot%202014-02-18%2009.43.57.png) on current versions of Chrome 33, Safari 7.0.2, Firefox 27, Opera 20, and IE9+. 

Requires `calc` and SVG support.

### About

RRSSB is a [**KNI Labs freebie**](http://kurtnoble.com/) crafted by [**@dbox**](http://www.twitter.com/dbox) and [**@seagoat**](http://www.twitter.com/seagoat).

This content is released under the [**Creative Commons Attribution-ShareAlike 4.0 International**](http://creativecommons.org/licenses/by-sa/4.0/legalcode) license.
