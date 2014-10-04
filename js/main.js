function bgwhite()
{
	document.getElementsByTagName("body")[0].style.backgroundColor="#eee";
	document.getElementsByTagName("body")[0].style.color="#333";
	document.getElementById("art1").style.color="#333";
}
//********************************************************

function bgblack()
{
	document.getElementsByTagName("body")[0].style.backgroundColor="#333";
	document.getElementsByTagName("body")[0].style.color="#ccc";
	document.getElementById("art1").style.color="#ccc";
}
//********************************************************

function tab()
{
	document.write('<br><table><tr><td></td></tr></table>');
}

/***************************************************/
var text = "Нажмите кнопку \"Заменить\" или \"Заменить все \" " ;

/****************************************************/

function ABC ()
{
var a = 123;
return a;
}

/*******************************************************/

/*************** OK *************************/

function OpenWord()
{
                 
 				var mylink = document.getElementById("MyLink");
                mylink.setAttribute("href", "../ReadinessPlan.docx");
                mylink.click();

}

/******************************************/
function bgwhiteone()
{
	if (window.confirm('Поменять цвет фона?')==true)
		{
	bgwhite();
	window.alert('Обновите страницу для возвращения к стандартному фону');
		}
	else
	bgblack();
}




