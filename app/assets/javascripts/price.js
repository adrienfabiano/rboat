   $( "#end" ).change(function() {
      var start = $("#start").val().split("/");

      var end = $("#end").val().split("/");

      var begin = new Date(start[2], start[1] - 1, start[0]);
      var endin = new Date(end[2], end[1] - 1, end[0]);
      var number = Math.round((endin - begin) * 1.15741e-8) + 1;

      if (isNaN(number)) {
        document.getElementById('days').innerHTML = 0;
    }  else {
        document.getElementById('days').innerHTML = number;
    }

      var price = parseInt()

      document.getElementById('price').innerHTML = number * price;
    });




   // Number(document.getElementById('boat_price').innerHTML)
