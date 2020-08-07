$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(() => {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: false
      };
      console.log(newBurger);
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
          location.reload();
        }
      );
    });
  });