var xhr1 = new XMLHttpRequest();

xhr1.open("GET","http://localhost:4000/variables");
xhr1.addEventListener("load",function(e)
  {
  var d = xhr1.responseText;
  window.parsed = JSON.parse(d);
  });
xhr1.send();


var frontpage = document.querySelector('#frontpage');

var elements = function(name,img,num)
{
  this.name = name,
  this.link = "/"+name,
  this.image = img
  this.size = "50px",
  this.order = num,

}


var what_salary =    new elements('What is your salary?','http://images.clipartpanda.com/money-stack-clip-art-money-03.jpg',1);
var where_live =     new elements("Where do you live?", 'http://images.clipartpanda.com/shareholder-clipart-wpid-house-clip-art12.gif',2);
var where_job_loc =  new elements('Where is your job located?', 'http://www.clker.com/cliparts/z/0/n/q/w/7/applications-office-md.png',3);
var which_industry = new elements('Which industry do you work in or are most involved with?', 'http://images.vector-images.com/clp/193062/clp247558.jpg',4);
var what_job_title = new elements('What is your job title?',5);
var gender =         new elements('What is your gender?',6);
var age =            new elements('What is your age?',7);
var race_ethnic =    new elements('What is your race or ethnicity?',8);
