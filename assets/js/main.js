jQuery(document).ready(function($) {

  function printMembers() {
    $.getJSON(
      './members.json', function(data) {
        var members = data.members.sort(() => Math.random() - 0.5);
        // add profile for each member
        if ( members ) {
          $.each(members, function(i, m) {
          // compose member profile
          var member = '\
            <div class="member">\
            <h2 class="first-name">' + m.name + '</h2>\
            </div>\
          ';
          // print member profile
          $('#members').append(member);
        });
      }
    });
  }

  function createShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));
    var title = encodeURIComponent($("meta[property='og:title']").attr("content"));

    $(".social-share").css('cursor','pointer');
    
    $(".social-share.email").on("click", function() {
      url = "mailto:" + $(this).html() + "?subject=Contact request from " + window.location.href;
      window.location.href = url;
    });
  }

  printMembers();
  createShareLinks();
});
