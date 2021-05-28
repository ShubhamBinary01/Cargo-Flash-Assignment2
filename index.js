$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    async: false,
    type: "GET",
    dataType: "json",
    contentType: "application/json charset=utf-8",
    cache: false,
    success: function (result) {
      for (let i = 0; i < result.length; i++) {
        $(".format").append("<tr>");
        $(".id").append(`<th scope= "row">` + result[i].id + "</th>");
        $(".name").append("<td>" + result[i].name + "</td>");
        $(".username").append("<td>" + result[i].username + "</td>");
        $(".email").append("<td>" + result[i].email + "</td>");
        $(".address").append(
          "<td>" +
            result[i].address.street + " " +
            result[i].address.city +
            "</td></tr>"
        );
      }
    },
  });
});
