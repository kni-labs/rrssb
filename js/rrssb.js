+(function($) {
  'use strict';
  $.fn.rrssb = function(options) {

    // Get document details
    var docDetails = {};
    var metaTags = $("meta");
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === "description") {
        docDetails.description = metaTags[i].content;
      }
    }

    // Set defaults if options not set
    options.iconsLocation === undefined ? options.iconsLocation = "/images/rrssb/" : null;
    options.url === undefined ? options.url = window.location.href : null;
    options.emailBody === undefined ? options.emailBody = window.location.href : null;
    options.pageName === undefined ? options.pageName = document.title : null;
    options.pageDescription === undefined ? options.pageDescription = docDetails.description : null;
    if (options.twitterStatus === undefined) {
      var twitterTitle = options.pageName.substring(0, 115);
      options.twitterStatus = twitterTitle + " - " + options.url;
    }
    options.googlePlusStatus === undefined ? options.googlePlusStatus = options.pageName + " - " + options.url : null;
    options.githubLink === undefined ? options.githubLink = "https://github.com/" : null

    var rrssbContainer = this;
    rrssbContainer.addClass("clearfix");

    var rrssbButtons = createButtons(options.socialNetworks);

    console.log(rrssbButtons);

  };

  function createButtons(socialNetworks) {
    var buttons = "";
    if (socialNetworks instanceof Array) {
      if (socialNetworks.length > 0) {

        for (var i = 0; i < socialNetworks.length; i++) {
          try {
            buttons += buttonCreators[socialNetworks[i]]();
          }
          catch(TypeError) {
            console.error("[RRSSB]: " + socialNetworks[i] + " is not a valid social network.");
          }
        }

      } else {
        console.error("[RRSSB]: The socialNetworks property cannot be empty.");
      }
    } else {
      console.error("[RRSSB]: The socialNetworks property in the options should be an array.");
    }
    return buttons;
  }

  var buttonCreators = {};

  buttonCreators.facebook = function () {
    return "FACEBOOK BUTTON.";
  };

  buttonCreators.twitter = function () {
    return "TWITTER BUTTON.";
  };

  buttonCreators.googleplus = function () {
    return "GOOGLEPLUS BUTTON.";
  };

} (jQuery));
