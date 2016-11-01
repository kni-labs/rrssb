# Ridiculously Responsive Social Sharing Buttons
[![Join the chat at https://gitter.im/kni-labs/rrssb](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kni-labs/rrssb?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) ![](https://img.shields.io/bower/v/rrssb.svg?style=flat) [![](https://img.shields.io/npm/v/rrssb.svg?style=flat)](https://www.npmjs.com/package/rrssb)<br/><br/> <a href="http://rrssb.ml/"><img align="right" src="http://rrssb.ml/media/rrssb-preview.png" width="359" height="auto"/></a> Love them or hate them, social sharing buttons appear to be with us for a while. It seemed like [**we**](http://www.kurtnoble.com) were constantly making custom buttons for every single project, so we decided to create a super flexible system that would work in any container.

RRSSB is built with [**SASS**](http://sass-lang.com/), so you can easily customize it by tweaking a few variables. SVGs allow for tiny file size and retina support. Add or remove icons as you see fit -- the rest will fill in automagically in the container.

<img src="http://rrssb.ml/media/rrssb-preview.gif" width="100%" height="auto"/>

## Demo
> [**View the demo here**](http://rrssb.ml/)

## Usage
1) Copy css to your document or link to the css file in header:

```html
<link rel="stylesheet" href="css/rrssb.css" />
```

2) Copy `.rrssb-buttons` unordered list to desired location(s):

```html
<!-- Buttons start here. Copy this ul to your document. -->
<ul class="rrssb-buttons clearfix">
  <li class="rrssb-email">
    <!-- Replace subject with your message using URL Encoding: http://meyerweb.com/eric/tools/dencoder/ -->
    <a href="mailto:?Subject=your%20subject">
      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z"/></svg></span>
      <span class="rrssb-text">email</span>
    </a>
  </li>
  <li class="rrssb-facebook">
    <!--  Replace with your URL. For best results, make sure you page has the proper FB Open Graph tags in header: https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/ -->
    <a href="https://www.facebook.com/sharer/sharer.php?u=http://your-url-here" class="popup">
      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>
      <span class="rrssb-text">facebook</span>
    </a>
  </li>
  <li class="rrssb-twitter">
    <!-- Replace href with your Meta and URL information  -->
    <a href="https://twitter.com/intent/tweet?text=http://rrssb.ml"
    class="popup">
      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>
      <span class="rrssb-text">twitter</span>
    </a>
  </li>
</ul>
<!-- Buttons end here -->
```

- Only copy the `<li>`s of the buttons you want (index.html has examples of all available types).
- Adding a class of `popup` to the anchor tag for each share button will make the share dialog open in a popup, rather than a new window. (Good for Facebook, Twitter, Google Plus, etc.)
- Buttons will automatically flow to the size of the ul `rrssb-buttons`. If fixed sized buttons are needed, nest `rrssb-buttons` in a fixed-width container.
- Each sharing URL requires various parameters that allow you to pass through messaging in the sharing dialog. A useful tool for URI escaping any messaging that needs to pass through the share URL can be found [**here**](http://meyerweb.com/eric/tools/dencoder/).
- Alternatively, all share metadata and links can be configured [using Javascript](#javascript)

3) Copy `rrssb.min.js` to your document or link to javascript files at the bottom of your page (before the closing body tag for best results - jQuery CDN, [**jQuery fallback**](http://css-tricks.com/snippets/jquery/fallback-for-cdn-hosted-jquery/), and `rrssb.min.js`):

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery.1.10.2.min.js"><\/script>')</script>
<script src="js/rrssb.min.js"></script>
```

<a name="javascript"></a>

**Optional: Configure URL and share text with javascript:**<br/> Instead of editing each `href` by hand, you can call some Javascript to set the URLs on each social button automatically.

Note: to support users who have disabled Javascript, you still need to edit the `href`s by hand.

Paste the following before the closing body tag, after the scripts you added in the last section:

```html
<script type="text/javascript">

jQuery(document).ready(function ($) {

  $('.rrssb-buttons').rrssb({
    // required:
    title: 'This is the email subject and/or tweet text',
    url: 'http://rrssb.ml/',

    // optional:
    description: 'Longer description used with some providers',
    emailBody: 'Usually email body is just the description + url, but you can customize it if you want'
  });
});
</script>
```

## Other install options:

Service     | Link
:---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
npm         | `npm install rrssb`
bower       | `bower install rrssb`
Wordpress * | [**https://wordpress.org/plugins/rrssb/**](https://wordpress.org/plugins/rrssb/)<br>[**https://wordpress.org/plugins/wpsso-rrssb/**](https://wordpress.org/plugins/wpsso-rrssb/)<br>[**https://wordpress.org/plugins/rrssb-for-wp/**](https://wordpress.org/plugins/rrssb-for-wp/)
Drupal *    | [**Drupal Install Instructions**](https://drupal.org/project/rrssb)
CDN *       | [**CDN by jsDelivr**](https://www.jsdelivr.com/?query=rrssb)

<small>* Managed by 3rd parties. Please contact project hosts for support.</small>

## Support
Currently tested between [**140px**](https://www.dropbox.com/s/2k6lcebg2887ge3/Screenshot%202014-02-18%2009.45.45.png) and [**15,465px**](https://www.dropbox.com/s/1juq03011lixk3r/Screenshot%202014-02-18%2009.43.57.png) on current versions of Chrome 33, Safari 7.0.2, Firefox 27, Opera 20, and IE9+.

Requires [**SVG**](http://caniuse.com/svg)

## Contributing
Thanks for helping! Pull requests are welcomed.

### Build setup:
- Make sure [gulp](http://gulpjs.com/) is installed globally: `npm install -g gulp` (May require `sudo`.)
- run `npm install` to install the dependencies for this project.
- run `gulp` to create a local server at `localhost:3000` and watch for file changes.

## About
RRSSB is a [**KNI Labs freebie**](http://kurtnoble.com/) crafted by [**@dbox**](http://www.twitter.com/dbox) and [**@joshuatuscan**](http://www.twitter.com/joshuatuscan).
