let f = function()
{
  this.a = 1;
  this.b = 2;  
};

let o = new f(); //Currently, a = 1 and b = 2

f.prototype.b = 3;
f.prototype.c = 4;