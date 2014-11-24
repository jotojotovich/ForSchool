
document.write("hello, i'm js");
function test(addTable)
{
	for (i=0; i<20; i++)
		{
			i=i^2;
			{
			document.write(i+"<br>");}
		}
	// document.write("test function");
}

var varTest = test();
document.write(varTest(1));
var N=document.write;
N("Arrange");
function f1(a,b,c)
{
 if (a>b) return c;
 else return c+8;
}

var g = f1;
alert('Значение f(2,3,2): '+ f(2,3,2) );
alert('Значение g(2,3,2): '+ g(2,3,2) );

// var newWindow, var currentWindow=1
// function makeNewWindow()
// {
// 	if (currentWindow==1)
// 			{
// 				newWindow=window.open("","","width='300',height='300'");
// 				//currentWindow="2";
// 			}
// 	// else if (currentWindow=="2")
// 	// 		{
// 	// 		newWindow.close();
// 	// 	    currentWindow="1";
// 	// 		}
// 		//newWindow=null;
// }

var newWindow, currentWindow=2;
function makeNewWindow()
{
	if (currentWindow==2)
	{
		
		newWindow=window.open("","","width=300,height=300");
		currentWindow=1;
		alert('SOS');
	}
	else if (currentWindow==1)
		{
		newWindow.close();
		//newWindow=null;
		currentWindow=2;
		}
}