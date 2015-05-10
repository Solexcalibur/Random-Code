//fetching HTML Elements in variables by ID
var idFetcher = document.getElementById("form_sample");
 
var createform = document.createElement('form'); // Creating New Element form
 createform.setAttribute("action", ""); // Setting action Attribute on form
 createform.setAttribute("method", "post"); // Setting method Attribute on form
 idFetcher.appendChild(createform);
 
var heading = document.createElement('h2'); // Heading of form
 heading.innerHTML = "Enter Name Below Please ";
 createform.appendChild(heading);
 
var line = document.createElement('hr'); //giving horizontal row after heading
 createform.appendChild(line);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
 
var namelabel = document.createElement('label'); // Create Label for name field
 namelabel.innerHTML = "Your Name : "; // Set Field Labels
 createform.appendChild(namelabel);
 
var inputelement = document.createElement('input'); // Creating input field for name
 inputelement.setAttribute("type", "text");
 inputelement.setAttribute("name", "dname");
 createform.appendChild(inputelement);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
