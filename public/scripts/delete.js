$(function() {
  $(".deletebtn").on("click", function (event) {
    let response = prompt("Why do you want to delete?");
    if(response !== null){
      if(response.length < 1){
        alert("Please enter comments")
      } else {
        const id = $(this).attr("id");
        event.preventDefault();
        $(this).closest("tr").remove();
        $.ajax({
          url: `/delete/${id}`,
          type: "GET",
          success: function(data){
    console.log(data.items);
          },
          error: function(err){
            console.log(err)
          }
        })
      }
    }
    
  });
})


