jQuery(function () {
  console.log("jQuery READY");

  $("#container").append("<h1>Welcome</h1>");

  var div1 = $("<h2></h2>").text("DIV - 1");
  div1.css("background-color", "yellow");

  var isHide = false;

  var button = $("<button>Click</button>");
  button.addClass("btn btn-danger btn-lg my-3");
  button.on("click", () => {
    if (isHide) {
      div1.show();
      isHide = false;
    } else {
      div1.hide();
      isHide = true;
    }
  });

  $("#container").append(button);
  $("#container").append(div1);


  var div2 = $("<h2></h2>").text("DIV - 2");
  div2.css("background-color", "yellow");

  var isHide = false;

  var button = $("<button>Click</button>");
  button.addClass("btn btn-primary btn-lg my-3");
  button.on("click", () => {
    if (isHide) {
      div2.show();
      isHide = false;
    } else {
      div2.hide();
      isHide = true;
    }
  });

  $("#container").append(button);
  $("#container").append(div2);

  var div3 = $("<h2></h2>").text("Show my name");
  div3.on("click", function () {
    $(this).text("Nguyen Thi Yen");
  });
  $("#container").append(div3);

  $("#calculate").on("click", () => {
    var a = $("#input1").val();
    var b = $("#input2").val();
    var c = Number(a) + Number(b);
    $("#sum").val(c);
  });
});
    