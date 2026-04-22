const arrayOfNotes = [];

const add = function(text){
    arrayOfNotes.push({
        text,
        author: "Eoin"
    });
};

const list = function(){
    arrayOfNotes.forEach(item =>{
        console.log(item);
    });
};

const remove = function(index){
    arrayOfNotes.splice(index, 1);
};





