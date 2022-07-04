function takeValue(){
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var iname = document.getElementById("iname").value;
    var sem = document.getElementById("sem").value;
    var phone = document.getElementById("phone").value;
    var subName1 = document.getElementById("subName1").value;
    var subName2 = document.getElementById("subName2").value;
    var subName3 = document.getElementById("subName3").value;
    var subName4 = document.getElementById("subName4").value;
    var tm1 = document.getElementById("tm1").value;
    var tm2 = document.getElementById("tm2").value;
    var tm3 = document.getElementById("tm3").value;
    var tm4 = document.getElementById("tm4").value;
            
    if(document.getElementById('om1').value <= tm1){
    var om1 = document.getElementById("om1").value;
}
else{alert('Value cannot exceed Total Marks') }

if(document.getElementById('om2').value <= tm2){
    var om2 = document.getElementById("om2").value;}
    else{alert('Value cannot exceed Total Marks')}

if(document.getElementById('om3').value <= tm3){
    var om3 = document.getElementById("om3").value;}
    else{alert('Value cannot exceed Total Marks')}

if(document.getElementById('om4').value <= tm4){
    var om4 = document.getElementById("om4").value;
    }
    else{alert('Value cannot exceed Total Marks')}
    
    document.write("YOUR INFO--<br>"+"Name: "+name+"<br>");
    document.write("Father's Name: "+fname+"<br>");
    document.write("Institution: "+iname+"<br>");
    document.write("Semester: "+sem+"<br>");
    document.write("Contact Info: "+phone+"<br>");
    
    document.write('<table border="1">');
    
    document.write('<thead>');
    document.write('<th>'+'Subject'+'</th>');
    document.write('<th>'+'Total Marks'+'</th>');
    document.write('<th>'+'Obtained Marks'+'</th>');
    document.write('</thead>');
    
    document.write('<tbody>');
    
    document.write('<tr>');
    document.write('<td>'+subName1+'</td>');
    document.write('<td>'+tm1+'</td>');
    document.write('<td>'+om1+'</td>');
    document.write('</tr>');
    
    document.write('<tr>');
    document.write('<td>'+subName2+'</td>');
    document.write('<td>'+tm2+'</td>');
    document.write('<td>'+om2+'</td>');
    document.write('</tr>');
    
    document.write('<tr>');
    document.write('<td>'+subName3+'</td>');
    document.write('<td>'+tm3+'</td>');
    document.write('<td>'+om3+'</td>');
    document.write('</tr>');
    
    document.write('<tr>');
    document.write('<td>'+subName4+'</td>');
    document.write('<td>'+tm4+'</td>');
    document.write('<td>'+om4+'</td>');
    document.write('</tr>');
    
    document.write('</tbody>');
    document.write('</table>');	
}