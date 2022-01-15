$(".remove").on('click', function(){
const confirmation = confirm('Are you sure you want to delete this row?')

if(confirmation){
  deleteItems();
} else {
  return false;
}
  }
)