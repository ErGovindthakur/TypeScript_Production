enum cupSize{
     SMALL,
     MEDIUM,
     LARGE
};

const size = cupSize.LARGE;

enum status{
     PENDING=100,
     SERVED, // 101
     CANCELED // 102
};

enum chaiType{
     MASALA="masala",
     GINGER="ginger"
};

function makeChai(type:chaiType){
     console.log(`making ${type}`)
}
makeChai(chaiType.MASALA);

const enum sugars{
     LOW=1,
     MEDIUM=2,
     HIGH=3
};
const s = sugars.HIGH;

let t : [string,number] = ["chai",10];
t.push("extra"); // this is unexpected behavior , due to js array

