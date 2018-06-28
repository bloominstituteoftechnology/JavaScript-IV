function Parent(){

}

Parent.prototype.swap = function(){
    console.log("SWAP");
    
}

function Child(){

}

const par = new Parent();
const child = new Child();
child.swap = par.swap.bind(this);
child.swap();