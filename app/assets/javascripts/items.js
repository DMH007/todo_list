# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
  $(".check").click(function(e) {
    var item_id = $(this).parents('li').attr('id');
    done = $(this).hasClass('done') ? 1 : 0
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/items/" + item_id,
      data: { _method:'PUT', item: { done: done } },
      }).done(function(data) {
        if(done) {
          $("#" + item_id + " a.done").text('Not done').removeClass('done').addClass('not_done');
          $("#" + item_id + " .item").wrapInner("<del>");
        }
        else {
          $("#" + item_id + " a.not_done").text('Done').removeClass('not_done').addClass('done');
          $("#" + item_id + " .item").html(function(i, h) {
            return h.replace("<del>", "");
          });
        }
    });
    e.preventDefault();
  });
});