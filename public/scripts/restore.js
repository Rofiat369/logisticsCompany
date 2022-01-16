$(function() {
  $(".restorebtn").on("click", function (event) {
    const id = $(this).attr("id")
    console.log("bubu");
    $(this).closest("tr").remove();
    $.ajax({
      url: `/restore/${id}`,
      type: "GET",
      success: function(data){
console.log(data.items);
      },
      error: function(err){
        console.log(err)
      }
    })
  });
})