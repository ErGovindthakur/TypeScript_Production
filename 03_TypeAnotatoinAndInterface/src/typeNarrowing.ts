function chai(kind:string | number){
     if(typeof kind === 'string'){
          return `making ${kind} chai`
     }
     return `chai order #${kind}`;
}

function serverChai(msg?:string){
     if(msg){
          return `serving ${msg}`;
     }
     return 'serving default masala chai';
}

function orderChai(size: "small" | "medium" | "large" | number){
     if(size === 'small'){
          return "small cutting chai..."
     }
     if(size === 'medium' || size==='large'){
          return "make extra chai";
     }

     return `chai order #${size}`
}


class kulhadChai{
     serve(){
          return "serving kulhad chai"
     }
}
class cuttingChai{
     serve(){
          return "serving cutting chai"
     }
}

function serve(chai: kulhadChai | cuttingChai){
     if(chai instanceof kulhadChai){
          return chai.serve()
     }
}

// defining custom types
type chaiOrder = {
     type:string,
     sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
     return(
          typeof obj === "object" && obj !== null && 
          typeof obj.type === "string" &&
          typeof obj.sugar === "number"
     )
}

function serveOrder(item:chaiOrder){
     if(isChaiOrder(item)){
          return `serving ${item.type} chai with ${item.sugar}`;
     }
     return `Serving custom chai : ${item}`
}

// custom type with diff verities

type MasalaChai = {type:"masala"; spiceLevel:number};
type GingerChai = {type:"ginger"; amount:number};
type ElaichiChai = {type:"elaichi",aroma:number};

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:chai){
     switch(order.type){
          case "masala":
               return "Masala chai";
          case "ginger":
               return "Ginger chai";
          case "elaichi":
               return "Elaichi chai"
          default:
               return "Another default chai";
     }
}