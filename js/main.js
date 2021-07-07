


// window.addEventListener('DOMContentLoaded', ()=>{
//     //setTimeout(() => {


//       $(document).ready(function ()
//       {


//       /*--------------NAVBAR-------------*/

//       let lastScrollTop=0;
//       let nav=document.getElementById("MyNavbar");
//       window.addEventListener("scroll",function(){
//          var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
         
//          if(scrollTop>lastScrollTop)
//          {
//             nav.style.top="-80px";
         
//          }
//          else
//          {
//             nav.style.top="0px";
//             nav.setAttribute("style","background:rgba(255,255,255,0.9) !important;")
         
//          }
         
//          lastScrollTop=scrollTop;
//       })
//    });
//       /*--------------NAVBAR-------------*/
      
//       console.log("dom loaded");
//       const navElements = document.querySelectorAll('.nav-link');
//       console.log(document.querySelectorAll('.nav-link'));
//       navElements.forEach(element=>{
//       let hrefLink = element.id.replace('nav','');
//       element.href = `/#${hrefLink}`;
//       });
//     //}, 3000); 
//     //-@ problem is here  

//       //$('.nav-link').pageNav({'scroll_shift':( $('nav').outerHeight() - 70)});
//       //$('.all-coursebtn').pageNav({'scroll_shift':( $('nav').outerHeight() -120)}); 
//       //$('.v-cource').pageNav({'scroll_shift':( $('nav').outerHeight() -100)}); 
  

// });


//COURSE HEADER ITEMS CHANGE
let courseUl=document.querySelector("#courseh-ul");
let courseli=document.querySelectorAll(".courseh-link");
courseli.forEach(el=>
{
	el.addEventListener("click",function(e)
	{
		courseUl.querySelector(".courseh-active").classList.remove("courseh-active");
		el.classList.add("courseh-active");	
	
 		e.preventDefault();
	});
 
});

var conInp=document.getElementsByClassName("ConInp");
var spanInp=document.getElementsByClassName("ConSpan");
for (let i=0;i<conInp.length ;i++){
  conInp[i].addEventListener("focus", function ChangeSpan()
  	{
  		spanInp[i].classList.add("focusInput");
  		spanInp[i].setAttribute("style","color:#ff568c !important");
  	});
  conInp[i].addEventListener("focusout",function NormalSpan(e)
  	{
  		if(e.target.value=="")
{
spanInp[i].classList.remove("focusInput");
spanInp[i].setAttribute("style","color:#333 !important")
}
else
{
	spanInp[i].classList.add("focusInput");
}
  	});
}

  /*-----------MODAL--------------*/

  (function() {
      'use strict';
      window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');
  }, false);
  });
}, false);
  })()
// const currentLocation=location.href;
// console.log(currentLocation);
// const courseItem=document.querySelectorAll(".courseh-link");
// for (var i = 0; i < courseItem.length; i++) {
// 	if(courseItem[i].href===currentLocation)
// 	{
// 		courseItem[i].className="courseh-active";
// 	}
	
// }