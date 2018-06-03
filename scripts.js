function renderDate(){
    var mydate = new Date();

    var daym = mydate.getDate();
    var myClock = document.getElementById("dateDisplay");
    myClock.textContent = ""+daym  ;

}
function renderMonth(){
    var mydate1 = new Date();

    var month = mydate1.getMonth();
    var montharray = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
    var myClock1 = document.getElementById("monthDisplay");
    myClock1.textContent = ""+montharray[month] ;

}
function renderYear(){
    var mydate2 = new Date();

    var year = mydate2.getYear();
    if(year<1000)
    {
        year +=1900
    }
    var myClock2 = document.getElementById("yearDisplay");
    myClock2.textContent = ""+year  ;

}
function renderDay(){
    var mydate3 = new Date();

    var day = mydate3.getDay();
    var dayarray = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
    var myClock3 = document.getElementById("dayDisplay");
    myClock3.textContent = " "+dayarray[day] ;

}

var completesvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

var todo = []; 

function addItemToDo()
{

    var text = prompt("Enter the task");

   if(text && i<9)
   {
    todo[i] = text;
    i++;
    
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completesvg;

    //for complete item
    complete.addEventListener('click',completeItem);

    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.appendChild(item);

    saveToDo();
   }
   else if(i==9)
   {
    alert("Limit Reached (limit =9)");
    
   }
  

}
function completeItem()
{
    var item = this.parentNode.parentNode;
    
    var parent = item.parentNode;
    var id = parent.id;

   //alert(id+" done ");
    var target = (id== 'todo')? document.getElementById('completed'):document.getElementById('todo');
    parent.removechild(item);
    target.appendChild(item);
    
}

function saveToDo(){
    var str = JSON.stringify(todo)
    localStorage.setItem("todo",str);
   //for(var i=9;i>=0;i--)
   // console.log(todo[i]);
}

var i=0;
function getTodos()
{
    var str = localStorage.getItem("todo")
    todo = JSON.parse(str);
    if(!todo)
    {
        todo = [];
        //console.log("new called");

    }
    
    while(todo[i])
    {
        //console.log(i+":::"+todo[i]);

        var list = document.getElementById('todo');

        var item = document.createElement('li');
        item.innerText = todo[i];
    
        var buttons = document.createElement('div');
        buttons.classList.add('buttons');
    
        var complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completesvg;

        buttons.appendChild(complete);
        item.appendChild(buttons);
    
        list.appendChild(item);

        i++;
    }
   
}