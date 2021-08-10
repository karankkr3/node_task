var Prompt_Box = /** @class */ (function () {
    function Prompt_Box() {
    }
    Prompt_Box.prototype.show = function () {
        // var arrid = [];
        // var arrName = [];
        // var arrMark = [];
        var i = 1;
        do {
            //   var promptValue = prompt('Enter 1)id 2)Name 3)marks', '');
            // var id: string;
            // var name: string;
            var id = prompt('Enter id: ');
            var name = prompt('Enter name: ');
            var marks = prompt('Enter marks: ');
            var choice = prompt('You want to continue? ');
            var Sdata = [id, name, marks];
            localStorage.setItem("StudentsId" + i, JSON.stringify(Sdata));
            // arrid.push(id);
            // arrName.push(name);
            // arrMark.push(marks);
            // localStorage.setItem("id" + i, arrid);
            var data = document.getElementById('allData');
            var idField = document.createElement('div');
            idField.setAttribute('id', 'Id' + i);
            idField.setAttribute('style', 'color:#0026ff');
            data.appendChild(idField);
            var nameField = document.createElement('div');
            nameField.setAttribute('id', 'Name' + i);
            nameField.setAttribute('style', 'color:#0026ff');
            data.appendChild(nameField);
            var marksField = document.createElement('div');
            marksField.setAttribute('id', 'Marks' + i);
            marksField.setAttribute('style', 'color:#0026ff');
            data.appendChild(marksField);
            //   const term3 = document.createElement('dp');
            //   term3.setAttribute('id','Id'+ i++);
            //   var ids = document.createElement("div");
            //   ids.setAttribute("id","Id"+i+1);
            //   var names = document.createElement("div");
            //   names.setAttribute("id","Name"+i+1);
            //   var markss = document.createElement("div");
            //   markss.setAttribute("id","Marks"+i+1);
            document.getElementById('Id' + i).innerHTML = "Id: " + id;
            document.getElementById('Name' + i).innerHTML = "Name: " + name;
            document.getElementById('Marks' + i).innerHTML = "Marks: " + marks;
            i++;
        } while (choice == 'yes');
        // console.log(arrid);
        // console.log(arrName);
        // console.log(arrMark);
        // localStorage.setItem(JSON.stringify(arrid),"StudentsId");
        // localStorage.setItem(JSON.stringify(arrName),"StudentsName");
        // localStorage.setItem(JSON.stringify(arrMark),"StudentsMarks");
        //   if (promptValue != null) {  
        //    document.getElementById("Status").innerHTML = "Id ->" + promptValue;  
        //   } else  
        //   {  
        //    document.getElementById("Status").innerText = "You cancel Prompt Box";  
        //   }  
    };
    return Prompt_Box;
}());
window.onload = function () {
    var bttn = document.getElementById("Button1");
    bttn.onclick = function () {
        console.log('enter in click function');
        var obj = new Prompt_Box();
        obj.show();
    };
};
