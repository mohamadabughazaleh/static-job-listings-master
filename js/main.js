import jobListings from './json.js';
import {searchf} from './jquery.js'
import {gettagehtml ,getclosetagehtml ,getallsearch  ,tgggle } from './functionn.js';
 function getjoplistinghtml(data, filtertags = []) {
  const job_tage = " ###jobtage###";
  let jopListingHtml =`
    <div class="jop-item">
    <div class="jop-colume jops-left">
        <img src="${data.logo}" class="jop-img" alt=${data.company}>
      <div class="jop-info">
        <span class="jop-company">${data.company}<span class=${data.new ?"spanone":""}>${data.new? "NEW!" :""}</span><span class=${data.featured?"spantow":""}>${data.featured ?"FEATURED":""}</span></span>
        <span class="jop-title">${data.position}</span>
        <ul class="jops-detalis">
          <li class="jop-di-item">${data.postedAt}</li>
          <li class="jop-di-item">${data.contract}</li>
          <li class="jop-di-item">${data.location}</li>
        </ul>
      </div>
    </div>
    <div class="jop-colume jops-right">
    ${job_tage}
    </div>
    </div>
    `;
  const tagesarry = [data.role,data.level,...(data.languages || []),...(data.tools || []),];
  const pass =!filtertags.length || filtertags.some((tag) => tagesarry.includes(tag));

  if (!pass) {
    return "";
  }

  const tagstring = tagesarry.reduce((acc, currenttag) => {
    return acc + gettagehtml(currenttag);
  }, "");
  return jopListingHtml.replace(job_tage, tagstring);
}
  export function setjop(filtertags) {
  const jobListingshtml = jobListings.reduce((acc, currentlisting) => {
    return acc + getjoplistinghtml(currentlisting, filtertags);
  }, "");
  document.getElementById("jobs").innerHTML = jobListingshtml;
}
window.addEventListener("click", (event) => {
   const totel = event.target;
  const searchcontent = document.getElementById("search-contantl");

   const tagclasses = ["tag", "close-tag"];
   console.log(totel);
   if (!tagclasses.some((cooo) => totel.classList.contains(cooo))) {
     return;
   }
   const tagevalue = totel.innerHTML.trim();
     console.log(tagevalue);
   let searchbartags = getallsearch(tagevalue, searchcontent);
   const search = document.getElementById("search");
   searchf(search, searchcontent);
   searchcontent.innerHTML = searchbartags.reduce((acc, currenttag) => {
    return acc + gettagehtml(currenttag, "close-tag");
   }, "");
   setjop(searchbartags);
 });
setjop();
