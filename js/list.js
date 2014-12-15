//alert("list.js");
// function sayHelloFirst(a,b,c)
//     {
//       document.write(a);
// 				}
// 				sayHelloFirst("John","Paul","Jeorg")
// 				sayHelloFirst("Jimmy","Robert","Bonzo")
// 				// ************************************************

// 				if (confirm("Are you sure?"))
// 					location.href="http://ya.ru";

					//var sun1=getElementById(sun1)




							if (!document.images)
							{
								alert("Img is not here");
							}
							else {alert("OK. Ваш браузер поддерживает вывод изображений. Мы проверили!")}

								var ya="<a href='http//:ya.ru'>ya.ru</a>"
							 document.write(ya);

							 function reWrite()
							 {
							 	var newContent = "<html><head><title>A new Doc</title></head>";
							 	newContent += "<body><h1>this document is brand new</h1>";
							 	newContent += "Click the back button to see original";
							 	newContent +="</body></html>";
							 	document.write(newContent);
							 	document.close();
							 }
							 var dateForNews = new Date();
							 // var futureDate = dateForNews.valueOf()+2;
							 var futureDate = dateForNews++;
		      

		      // Открыть окно с самой последней новостью
		      function openLastNews(){
							 var newWindow = window.open("http://school35-vorkuta.ru/the-news/332-action-clean-talk.html",
							 "","status,height=380,width=630,resizable=no,toolbar=yes,scrollbars=yes");
							 newWindow.focus();
							 newWindow.document.write("<h1 style='color: #ccc; text-align: center; background: #333;'>Привет всем!</h1><BR>Есть свежие новости! Читай раздел."+"<br><br>");
							 newWindow.document.write(dateForNews.toLocaleString()+"<br>");
							 newWindow.document.write(futureDate);
							 }



					 /****************************************************/

					 /*
Определяем функцию
					 */
       function showMsg(msg)
       {
       	alert("The button sent: " + msg);
       	document.write(msg);
       }
       /*
Использование document.write в другом окне
       */
       var newWindow; //глобальная переменная
       function makeNewWindow()
       {
       	newWindow = window.open("","","status,height=200,width=300");
       }
       function subWrite()
       {
				       if (newWindow.closed)// если кто-то закрыл окно, снова его открыть, вызвав функцию
				       {
				       makeNewWindow();
				       }

		       newWindow.focus();// вывод на передний план
		       //вызов содержимого для нового окна
		       var newContent = "<html><head><title>A new doc</title></head>";
		       newContent += "<body bgcolor='coral'><h1>This doc is brand new</h1>"
		       newContent += "</body></html>";
		       //Запись HTML в новый документ окна
		       newWindow.document.write(newContent);
		       newWindow.document.close();// Закрытие потока
      }
       
       confirm("Вы уверены?");
       prompt("Hello, do you know me?");       
       console.log(2*5);




