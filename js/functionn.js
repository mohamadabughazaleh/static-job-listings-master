function gettagehtml(tag, tagclass = "tag ") {
    return `<span id="n" class="${tagclass}">
      ${tag}
  </span>`;
  }
//////////////////////////////////////////////////////////  
  function getclosetagehtml(tag) {
    return `<span  class="teveryag">
      ${tag}
  </span>`;
  }
/////////////////////////////////////////////////////////
  function getallsearch(tagevalue, searchcontent) {
    let searchcontentl = Array.from(searchcontent.children)
      .map((node) => node.innerHTML && node.innerHTML.trim())
      .filter((tge) => !!tge);
    if (searchcontentl.includes(tagevalue)) {
      searchcontentl = searchcontentl.filter((tag) => tag !== tagevalue);
    } else {
      searchcontentl = [...searchcontentl, tagevalue];
    }
    return searchcontentl;
  }
  //////////////////////////////////////////////////////
////////////////////////////////////////////////////////
   function tgggle (event ,classs){
    
$(document).ready(function(){

    $(event).on('click',function(){
    if($(event).hasClass("tag")){
      $(this).toggleClass(classs)
      return;
    } 
    }); 
                        
  });   
  
   }
 
   ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////  
  export {gettagehtml ,getclosetagehtml,getallsearch ,tgggle };
////////////////////////////////////////////////////////////
