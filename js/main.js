App = Ember.Application.create();

App.Router.map(function() {
  this.resource('work');
  this.resource('resume');
  this.resource('about');
  this.resource('contact');
});

App.IndexView = Ember.View.extend({
  templateName: '_index',
  didInsertElement: function() {
    $('.fade').fadeIn(2000);
    $("#me img").fadeIn(2000);

    $( "#me img" )
      .mouseenter(function() {
    $( "#me img" ).addClass( "tossing" );
    })
      .mouseleave(function() {
    $( "#me img" ).removeClass( "tossing" );
    });
  },
});

App.AboutView = Ember.View.extend({
  templateName: '_about',
  didInsertElement: function() {
    $('.fade').fadeIn(2000);
  },
});

App.ContactView = Ember.View.extend({
  templateName: '_contact',
  didInsertElement: function() {
    // $('.phone').fadeIn(1500);
    // $('.contact').fadeIn(1500);
    // $('.fi-mail').hover( function() {
    //     $('#social-1' ).fadeTo("fast", 1);
    //   }, function() {
    //     $( '#social-1' ).fadeTo("fast", 0);
    //     }
    // );
    // $('.fi-social-github').hover( function() {
    //     $('#social-2' ).fadeTo("fast", 1);
    //   }, function() {
    //     $( '#social-2' ).fadeTo("fast", 0);
    //     }
    // );
    // $('.fi-social-twitter').hover( function() {
    //     $('#social-3' ).fadeTo("fast", 1);
    //   }, function() {
    //     $( '#social-3' ).fadeTo("fast", 0);
    //     }
    // );
    // $('.fi-social-instagram').hover( function() {
    //     $('#social-4' ).fadeTo("fast", 1);
    //   }, function() {
    //     $( '#social-4' ).fadeTo("fast", 0);
    //     }
    // );
  }
});

App.WorkView = Ember.View.extend({
  templateName: '_work',
  didInsertElement: function() {
    $('#photo1-container p').fadeIn(1000);
    $('#photo2-container p').fadeIn(1000);
    $('.link').hover( function() {
        $( this ).addClass( "color" );
      }, function() {
        $( this ).removeClass( "color" );
      }
    );
  },
});


$(function () {
  $(document).foundation();
  $(window).resize(function(){
    $('.off-canvas-wrap,#main-nav,.exit-off-canvas').height($(this).height());
  });
  $(".off-canvas-list a").on("click.toggleCanvas", function(){
    $(".exit-off-canvas").click();
  });
});





