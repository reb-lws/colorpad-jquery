$(document).ready(function() {
  $("button").click(function() {
    $("<div/>").addClass("color-pad")
               .appendTo(".container");
  });
});