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


2) Copy `.rrssb-buttons` unordered list to desired location(s):

```html
<!-- Buttons start here. Copy this ul to your document. -->
<ul class="rrssb-buttons clearfix">
    <li class="rrssb-email">
        <a href="mailto:?subject=Check%20out%20how%20ridiculously%20responsive%20these%20social%20buttons%20are&amp;body=http%3A%2F%2Fkurtnoble.com%2Flabs%2Frrssb%2Findex.html">
            <span class="rrssb-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z"/></svg>
            </span>
            <span class="rrssb-text">email</span>
        </a>
    </li>
    <li class="rrssb-facebook">
        <a href="https://www.facebook.com/sharer/sharer.php?u=http://kurtnoble.com/labs/rrssb/index.html" class="popup">
            <span class="rrssb-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M27.825 4.783c0-2.427-2.182-4.608-4.608-4.608H4.783C2.36.175.175 2.357.175 4.783v18.434c0 2.427 2.18 4.608 4.608 4.608H14V17.38h-3.38v-4.61H14v-1.794c0-3.09 2.335-5.885 5.192-5.885h3.718V9.7h-3.726c-.408 0-.884.49-.884 1.235v1.836h4.61v4.61H18.3v10.445h4.916c2.422 0 4.608-2.188 4.608-4.608V4.783z"/></svg>
            </span>
            <span class="rrssb-text">facebook</span>
        </a>
    </li>
    <li class="rrssb-twitter">
        <a href="http://twitter.com/home?status=Ridiculously%20Responsive%20Social%20Sharing%20Buttons%20by%20@seagoat%20and%20@dbox%20http://kurtnoble.com/labs/rrssb" class="popup">
            <span class="rrssb-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z"/></svg>
            </span>
            <span class="rrssb-text">twitter</span>
        </a>
    </li>
</ul>
<!-- Buttons end here -->
```


- Only copy the `li`s of the buttons you want (index.html has examples of all available types).

- Adding a class of `popup` to the anchor tag for each share button will make the share dialog open in a popup, rather than a new window. (Good for Facebook, Twitter, Google Plus, etc.)
- Buttons will automatically flow to the size of the ul `rrssb-buttons`. If fixed sized buttons are needed, nest `rrssb-buttons` in a fixed-width container.
- Each sharing URL requires various parameters that allow you to pass through messaging in the sharing dialog. A useful tool for URI escaping any messaging that needs to pass through the share URL can be found [**here**](http://meyerweb.com/eric/tools/dencoder/).
- Optionally, all share meta and links can be configured in `rrssb.js`


3) Link to javascript files at the bottom of your document before the closing body tag for best results. (jQuery CDN, [**jQuery fallback**](http://css-tricks.com/snippets/jquery/fallback-for-cdn-hosted-jquery/), and `rrssb.min.js`):

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.1.10.2.min.js"><\/script>')</script>
<script src="js/rrssb.min.js"></script>
```


#### Other install options:

| Service							| Link |
| :---------------------------------	| :------- |
| [**Bower**](http://bower.io)	| `bower search rrssb` |
| Rails * 							| [**Rails Setup by @rimkashox**](http://www.simplehacks.com/web-dev/how-to-use-rrssb-with-rails/) |
| Wordpress * 						| [**Wordpress plugin by @aarreedd**](http://wordpress.org/plugins/ridiculously-responsive-social-sharing-buttons/) |
| Drupal *							| [**Drupal Install Instructions**](https://drupal.org/project/rrssb) |
| CDN * 								| [**OSSCDN by MaxCDN**](http://osscdn.com/#/rrssb) |

<small>* Managed by 3rd parties. Please contact project hosts for support.</small>

### Support

Currently tested between [**140px**](https://www.dropbox.com/s/2k6lcebg2887ge3/Screenshot%202014-02-18%2009.45.45.png) and [**15,465px**](https://www.dropbox.com/s/1juq03011lixk3r/Screenshot%202014-02-18%2009.43.57.png) on current versions of Chrome 33, Safari 7.0.2, Firefox 27, Opera 20, and IE9+.

Requires [**SVG**](http://caniuse.com/svg)


### Version Notes
| Version | Note | Issue | Backwards compatible?
| :---	| :------- | :------- | :------- |
| 1.7.6 | Fixed an issue where icon hit areas were breaking out of containers | [(#94)](https://github.com/kni-labs/rrssb/issues/94) | &#x2713;
| 1.7.5 | Flexible Large Format icons text-size based on sibling count. Switched to MIT license. | [(#18)](https://github.com/kni-labs/rrssb/issues/18) | &#x2713;
| 1.7.2 | Better calc detection & fallback /via @IanCaunce | [(#89)](https://github.com/kni-labs/rrssb/pull/89) | &#x2713;
| 1.7 | Javascript Meta attributes as variables /via @aicarlson | [(#47)](https://github.com/kni-labs/rrssb/issues/47) | &#x2713;
| 1.6.5 | Namespace CSS classes - Legacy HTML will be incompatible until class names updated.| [(#42)](https://github.com/kni-labs/rrssb/issues/42) | &#x2715;


### Contributing

Thanks for helping! Please use [**dev branch**](https://github.com/kni-labs/rrssb/tree/dev) for all pull requests.

*Note: You will need to install Bourbon using *`gem install bourbon`*, and then *`bourbon install`* to contribute to this project.*


#### Using Gulp

First install Gulp globally using `npm install -g gulp` and then use `npm install` to install the dependencies for this project.

*Note: On mac you may need to use *`sudo`* before the commands, depending on your directory ownership.*

Once all dependencies are installed, use the `gulp` command to create a local server at `localhost:3000` (by default) and watch for file changes.

*Note: You can access the local server on any device connected to the same network as the device running the server by visiting *`{YOUR_LOCAL_IP_ADDRESS}:3000`*. For example if your local IP address is *`192.168.0.1`*, visit *`192.168.0.1:3000`* from another device connected to the same network to view the pages on the server (they will auto-update as well).*


### About

RRSSB is a [**KNI Labs freebie**](http://kurtnoble.com/) crafted by [**@dbox**](http://www.twitter.com/dbox) and [**@joshuatuscan**](http://www.twitter.com/joshuatuscan).
