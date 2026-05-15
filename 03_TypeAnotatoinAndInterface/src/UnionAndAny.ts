// union helps us to assign more than one data types to a variable either predefined or custom , generally denoted by '|' symbol
let followers : number | string = '1M';

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending';
// apiRequestStatus = "ABC"; // here it will warn you to assign one of above types;
apiRequestStatus = 'success';

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle';


// another use of avoiding "any" in typescript using union

let orders = ['1','2','3'];
let currentOrder:string | undefined;

for(let order of orders){
     if(order==='1'){
          currentOrder = order;
     }
}
console.log(currentOrder);