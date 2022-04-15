import {setjop} from '../js/main.js';
 $(document).ready(function () {
  $("#search-clear").on('click', function () {
    $("#search-contantl").empty();
    setjop();
  });
});

function searchf(search, searchbartags) {
  if($(searchbartags).length){
    $( search ).removeClass("hidden");
  }else{
    $( search ).addClass("hidden");
  }
}
export{searchf};