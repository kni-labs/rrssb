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

    console.log(options);

    var rrssbContainer = this;
    rrssbContainer.addClass("clearfix");

    var rrssbButtons = createButtons(options.socialNetworks);

    console.log(rrssbButtons);

  };

  function createButtons(socialNetworks) {
    if (socialNetworks instanceof Array) {
      if (socialNetworks.length > 0) {

        var buttons = "";
        for (var i = 0; i < socialNetworks.length; i++) {

        }

      } else {
        console.error("[RRSSB]: The socialNetworks property cannot be empty.");
      }
    } else {
      console.error("[RRSSB]: The socialNetworks property in the options should be an array.");
    }
  }

  function facebookButton() {

  }

} (jQuery));
