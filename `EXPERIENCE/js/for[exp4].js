document.write("hello, i'\m javascript");
var mass1 = new Array();
var mass2 = new Array();
mass1[0]=1; mass2[0]="red";
mass1[1]=2; mass2[1]="red";
mass1[2]=3; mass2[2]="yellow";
mass1[3]=4; mass2[3]="red";
//function f()
{
for (var i = 1; i <= 100; i++)
        {
          i=i*3;
          if(i==30)
          document.write(i'<br>');
          else document.write(i'<br>')
        }
}
//document.write(document.forms.data.elements.length);
document.write("длина[кол-во элементов] массива1 = "+mass1.length+"<br>");
document.write("длина[кол-во элементов] массива2 = "+mass2.length+"<br>");

if (mass1.length==mass2.length){
  document.write("массивы равны между собой"+"<br><br><br>");
}
else {
  document.write("массивы различны"+"<br>");
}

for (var i=0; i<=10; i++)
  {
    if (mass2[i]=="red"){
    document.write("element " + "["+ i + "]" + " ");
    document.write(mass1[i]+"<br>");
    }
    else if (mass2[i]!="red");
    {document.write("яблоко не спелое"+"<br />");}
    //if (mass2[i]=="red"&mass2[i]==yellow") {break};
    
    
  }

  
  function f()
{
var s='';
while (s.length<6)
{
 s=prompt('Введите строку длины не менее 6:','');
}
alert('Ваша строка: ' + s + ' имеет символов: ' +s.length + '. Спасибо!');
}1