+(function($) {
  'use strict';
  $.fn.rrssb = function(options) {

    // Empty selected element
    this.empty();

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
    options.pageName === undefined ? options.pageName = document.title : null;
    options.pageDescription === undefined ? options.pageDescription = docDetails.description : null;
    options.emailSubject === undefined ? options.emailSubject = options.pageName : null;
    options.emailBody === undefined ? options.emailBody = "Check out this page: " + options.pageDescription + " - " + options.url : null;
    if (options.twitterStatus === undefined) {
      var twitterTitle = options.pageName.substring(0, 115);
      options.twitterStatus = twitterTitle + " - " + options.url;
    }
    options.googleplusStatus === undefined ? options.googleplusStatus = options.pageName + " - " + options.url : null;
    options.githubLink === undefined ? options.githubLink = "https://github.com/" : null;
    options.tumblrName === undefined ? options.tumblrName = options.pageName : null;
    options.linkedinTitle === undefined ? options.linkedinTitle = options.pageName : null;
    options.linkedinSummary === undefined ? options.linkedinSummary = options.pageDescription : null;
    options.redditTitle === undefined ? options.redditTitle = options.pageName : null;
    options.redditText === undefined ? options.redditText = options.pageDescription : null;
    options.hackernewsTitle === undefined ? options.hackernewsTitle = options.pageName : null;
    options.hackernewsText === undefined ? options.hackernewsText = options.pageDescription : null;
    options.youtubeUrl === undefined ? options.youtubeUrl = "https://www.youtube.com" : null;
    options.pinterestMedia === undefined ? options.pinterestMedia = "" : null;
    options.pinterestDescription === undefined ? options.pinterestDescription = options.pageDescription : null;

    var shareCounts = {};

    var rrssbContainer = this;
    rrssbContainer.addClass("clearfix");

    if (options.showCount) {
      rrssbContainer.append("<div class='rrssb-count'><div class='rrssb-number'></div><div class='rrssb-shares'>shares</div></div>");
    }
    var rrssbNumber = rrssbContainer.find(".rrssb-number");

    rrssbContainer.append("<ul class='rrssb-buttons'></ul>");
    var rrssbButtons = rrssbContainer.find(".rrssb-buttons");

    if (options.showCount) {
      rrssbButtons.addClass("rrssb-withcount");
    }

    var buttons = createButtons(options.socialNetworks, shareCounts, rrssbNumber);

    rrssbButtons.append(buttons);

    addIcons(rrssbButtons);

  };

  function createButtons(socialNetworks, shareCounts, rrssbNumber) {
    var buttons = "";
    if (socialNetworks instanceof Array) {
      if (socialNetworks.length > 0) {

        for (var i = 0; i < socialNetworks.length; i++) {
          try {
            buttons += buttonCreators[socialNetworks[i]](shareCounts, rrssbNumber);
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

  buttonCreators.email = function () {
    var button = $("<li class='rrssb-email'></li>");

    var emailUrl = "mailto:?subject=" + encodeURI(options.emailSubject) + '&amp;body="' + encodeURI(options.emailBody);

    button.append("<a href='" + emailUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>email</span>");

    return button[0].outerHTML;
  };

  buttonCreators.facebook = function (shareCounts, rrssbNumber) {
    var button = $("<li class='rrssb-facebook'></li>");

    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(options.url);

    button.append("<a href='" + facebookUrl + "' class='popup'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>facebook</span>");

    if (options.showCount) {
      $.ajax({
        url: "http://graph.facebook.com/?id=" + options.url,
        dataType: "jsonp",
        success: function(data) {
          shareCounts.facebook = data.shares;
          updateCount(shareCounts, rrssbNumber);
        },
        error: function() {
          console.error("[RRSSB]: There was an error getting share count data from Facebook. It may not be included in the count.");
        }
      });
    }

    return button[0].outerHTML;
  };

  buttonCreators.tumblr = function () {
    var button = $("<li class='rrssb-tumblr'></li>");

    var tumblrUrl = "http://tumblr.com/share/link?url=" + encodeURI(options.url) + "&name=" + encodeURI(options.tumblrName);

    button.append("<a href='" + tumblrUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>tumblr</span>");

    return button[0].outerHTML;
  };

  buttonCreators.linkedin = function (shareCounts, rrssbNumber) {
    var button = $("<li class='rrssb-linkedin'></li>");

    var linkedinUrl = "http://www.linkedin.com/shareArticle?mini=true&amp;url=" + encodeURI(options.url) + "&amp;title=" + encodeURI(options.linkedinTitle) + "&amp;summary=" + encodeURI(options.linkedinSummary);

    button.append("<a href='" + linkedinUrl + "' class='popup'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>linkedin</span>");

    if (options.showCount) {
      $.ajax({
        url: "http://www.linkedin.com/countserv/count/share?url=" + options.url,
        dataType: "jsonp",
        success: function(data) {
          shareCounts.linkedin = data.shares;
          updateCount(shareCounts, rrssbNumber);
        },
        error: function() {
          console.error("[RRSSB]: There was an error getting share count data from LinkedIn. It may not be included in the count.");
        }
      });
    }

    return button[0].outerHTML;
  };

  buttonCreators.twitter = function (shareCounts, rrssbNumber) {
    var button = $("<li class='rrssb-twitter'></li>");

    var twitterUrl = "http://twitter.com/home?status=" + encodeURI(options.twitterStatus);

    button.append("<a href='" + twitterUrl + "' class='popup'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>twitter</span>");

    if (options.showCount) {
      $.ajax({
        url: "http://cdn.api.twitter.com/1/urls/count.json?url=" + options.url,
        dataType: "jsonp",
        success: function(data) {
          shareCounts.twitter = data.count;
          updateCount(shareCounts, rrssbNumber);
        },
        error: function() {
          console.error("[RRSSB]: There was an error getting share count data from Twitter. It may not be included in the count.");
        }
      });
    }

    return button[0].outerHTML;
  };

  buttonCreators.reddit = function () {
    var button = $("<li class='rrssb-reddit'></li>");

    var redditUrl = "http://www.reddit.com/submit?url=" + encodeURI(options.url) + "&title=" + encodeURI(options.redditTitle) + "&text=" + encodeURI(options.redditText);

    button.append("<a href='" + redditUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>reddit</span>");

    return button[0].outerHTML;
  };

  buttonCreators.hackernews = function () {
    var button = $("<li class='rrssb-hackernews'></li>");

    var hackernewsUrl = "https://news.ycombinator.com/submitlink?u=" + encodeURI(options.url) + "&t=" + encodeURI(options.hackernewsTitle) + "&text=" + encodeURI(options.hackernewsText);

    button.append("<a href='" + hackernewsUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>hackernews</span>");

    return button[0].outerHTML;
  };

  buttonCreators.googleplus = function () {
    var button = $("<li class='rrssb-googleplus'></li>");

    var googleplusUrl = "https://plus.google.com/share?url=" + encodeURI(options.googleplusStatus);

    button.append("<a href='" + googleplusUrl + "' class='popup'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>google+</span>");

    return button[0].outerHTML;
  };

  buttonCreators.youtube = function () {
    var button = $("<li class='rrssb-youtube'></li>");

    button.append("<a href='" + options.youtubeUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>youtube</span>");

    return button[0].outerHTML;
  };

  buttonCreators.pinterest = function (shareCounts, rrssbNumber) {
    var button = $("<li class='rrssb-pinterest'></li>");

    var pinterestUrl = "http://pinterest.com/pin/create/button/?url=" + encodeURI(options.url) + "&amp;media=" + encodeURI(options.pinterestMedia) + "&amp;description=" + encodeURI(options.pinterestDescription);

    button.append("<a href='" + pinterestUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>pinterest</span>");

    if (options.showCount) {
      $.ajax({
        url: "http://api.pinterest.com/v1/urls/count.json?url=" + options.url,
        dataType: "jsonp",
        success: function(data) {
          shareCounts.pinterest = data.count;
          updateCount(shareCounts, rrssbNumber);
        },
        error: function() {
          console.error("[RRSSB]: There was an error getting share count data from Pinterest. It may not be included in the count.");
        }
      });
    }

    return button[0].outerHTML;
  };

  buttonCreators.pocket = function () {
    var button = $("<li class='rrssb-pocket'></li>");

    var pocketUrl = "https://getpocket.com/save?url=" + encodeURI(options.url);

    button.append("<a href='" + pocketUrl + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>pocket</span>");

    return button[0].outerHTML;
  };

  buttonCreators.github = function () {
    var button = $("<li class='rrssb-github'></li>");

    button.append("<a href='" + encodeURI(options.githubLink) + "'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>github</span>");

    return button[0].outerHTML;
  };

  buttonCreators.vk = function () {
    var button = $("<li class='rrssb-vk'></li>");

    var vkUrl = "http://vk.com/share.php?url=" + encodeURI(options.url);

    button.append("<a href='" + vkUrl + "' class='popup'></a>");

    var link = button.find("a");

    link.append("<span class='rrssb-icon'></span>");
    link.append("<span class='rrssb-text'>vk</span>");

    return button[0].outerHTML;
  };

  function addIcons(rrssbButtons) {
    var buttons = rrssbButtons.find("li");

    for (var i = 0; i < buttons.length; i++) {
      var socialNetwork = $(buttons[i]).prop("class").replace("rrssb-", "");
      var iconContainer = $(buttons[i]).find(".rrssb-icon");
      getIcon(socialNetwork, iconContainer);
    }
  }

  function getIcon(socialNetwork, iconContainer) {
    $.ajax({
      url: options.iconsLocation + socialNetwork + ".min.svg",
      contentType: "text/plain",
      success: function (data) {
        iconContainer.html($(data).children()[0].outerHTML);
      }
    });
  }

  function updateCount(counts, rrssbNumber) {
    var count = 0;
    for (var key in counts) {
      if (counts.hasOwnProperty(key)) {
        if (!isNaN(parseInt(counts[key]))) {
          count += counts[key];
        }
      }
    }
    if (count < 1000000 && count >= 1000) {
      if (count < 1100) {
        count = 1;
      } else {
        count = (count/1000).toFixed(1);
      }
      count += "K";
      count.replace(/\.0$/, "");
    } else if (count >= 1000000) {
      if (count < 1100000) {
        count = 1;
      } else {
        count = (count/1000000).toFixed(1);
      }
      count += "M";
    }
    rrssbNumber.text(count);
  }

} (jQuery));
