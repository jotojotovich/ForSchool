/************************************/
/* javascript & jQuery verification */
/************************************/

// alert("js is here");

//$(document).ready(function(){alert("jQuery")});

/* jQuery */ // этот фрагмент работает только на странице .html 

// window.onload = function loadWindow()
// {
//      alert("js is here");
// }
/* ********************************************************end verification*************************************************** */
	$("#news").click(function()
     {
     $("#primaryContent").load("news1.html");
     }
     )
	//$.ajaxSetup({cache: false});


	$("#photo").click(function()
     {
     $("#videoContent1").load("listmodal.html");
     }
     )
	//$.ajaxSetup({cache: false});


	$("#videoContent1").click(function()
     {
     $("#video1").load("listmodal.html");
     }
     )
	//$.ajaxSetup({cache: false});

/* end jQuery */



/* */
$("#video").click(function(){
$("#videoContent2")
  .animate({height: "hide"}, 300)
  .text("Новый текст")
  .animate({height: "show"}, 300);
});
/* */

var always = true; // attention! global variable
var never = false; // attention! global variable
function chance(a,b,c)
{
     if (a+b>=always)
     {
          alert("return now will working") // attention! after 
          return alert("Возможно");
     }
     else
     {
          alert("Не возможно");
     }
     c=a+b;
     // document.write("a is: "+a+" b is: "+b);
          alert("a="+a+" b="+b+" c="+c);
}