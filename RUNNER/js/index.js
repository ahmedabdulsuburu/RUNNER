function changeImage(){
    var image = document.getElementById('myImage');
if(image.src.match("bulbon")) {
    image.src="pic_bulboff.gif";
}else{
    image.src="pic_bulbon.gif";
}
}

let  lastname;
var  firstname;
lastname = "Ahmed ";
firstname = "Abdul Suburu";
let name = lastname + firstname;
let sent = "my name is " + name;
alert(sent); 

let r = 10;
r += 5;
console.log(r);

let R = 5*7+3/2-3; 
console.log(R);

let s = 20;
s -= 5; 
console.log(s) 

let text = "what is your";
text += "name";;
console.log(text)

let x = 5
x += "5"
console.log(x)

function product(a,b){
    return a*b}
    
let g = product (4,7)
    console.log (g)

    const person = {
        firstname:"suburu",
        lastname:"ahmed",
        age :20,
        eyecolor:"brown",
        fullname : function () {

            return this.lastname + " " + this.firstname;
        }
    };
    console.log(person["firstname"] + " "  + person.lastname  +  " is " + person.age + " year old " + " and has an eye color of " + person["eyecolor"])
    
    console.log(person.fullname())
