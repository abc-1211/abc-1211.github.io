var dateEle = document.querySelector("#currentDay");
var calendarEle = document.querySelector(".calendar");


//set the time
setInterval(function(){
    time = moment().format('MMMM Do YYYY, h:mm:ss a');
    dateEle.textContent = time;
    hourNow = moment().format('HH');
    minutes = moment().format('mm');
    second = moment().format('ss');
    if ((minutes === 0)&&(hourNow > 8)&&(hourNow < 18)){
        updateColor();
    }
    else if ((hourNow === 23)&&(minutes === 59)&&(second === 59)){
        newDay();
    }
}, 1000);

//set the calendar
for (var i = 0; i < 24; i++){
    var row = document.createElement("div");
    var hour = document.createElement("div");
    var fillin = document.createElement("div");
    var fillinEle = document.createElement("textarea");
    var clickBtn = document.createElement("button");
    var emptyLine = document.createElement("br");
    if ((i > 8)&&(i < 18)){
        row.setAttribute("class", ("light center row row-"+ (i - 9 )));
        hour.setAttribute("class", "v-cen col-sm-2");
        fillin.setAttribute("class", "left col-sm-8");
        fillinEle.setAttribute("class", "white input");
        fillinEle.setAttribute("rows", "2");
        fillinEle.setAttribute("cols", "80");
        clickBtn.setAttribute("class", "Btn col-sm-2");
        clickBtn.setAttribute("id", (i - 9));
        calendarEle.appendChild(row);
        row.appendChild(hour);
        row.appendChild(fillin);
        fillin.appendChild(fillinEle);
        row.appendChild(clickBtn);
        calendarEle.appendChild(emptyLine);
        hour.textContent = i + ":00";
        clickBtn.textContent = "Save"
        
    }
}

function updateColor(){
    hourTime = moment().format('HH');
        for (hourTime; hourTime> -1; hourTime--){
            if ((hourTime > 8)&&(hourTime < 18)){
                var getRow = document.querySelector(".row-" + (hourTime - 9));
                getRow.classList.remove("light");
                getRow.classList.add("dim");
            }
        }
}

function newDay(){
    for (i = 0; i <25; i++){
        if ((i > 8)&&(i < 18)){
            var getRow = document.querySelector(".row-" + (i - 9));
            getRow.classList.remove("dim"); 
            getRow.classList.add("light");
        }
    }
}

updateColor();

//Content
var inputEl = document.querySelector(".input");
var saveBtn = document.querySelector(".Btn");

saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    Btnid = this.id;
    saveItem(Btnid);
})

function saveItem(id){
    var input = inputEl.value;
    localStorage.setItem(id, JSON.stringify(input));
}

function loadToDo(){
    var id = Object.entries(localStorage);
    console.log(id);
    
}

loadToDo();