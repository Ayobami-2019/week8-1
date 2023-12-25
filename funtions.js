function inputCheck(input){
    const result= input%2 ? "this is an odd number" : "this is an even number";
    console.log(result);
    };
    
    inputCheck(20);
    
    function fullName(){
    const firstName= prompt ("Enter your first name");
    const surname= prompt ("Enter your Surname");
    const greeting= "Hello, " + surname +' ' + firstName;
    console.log (greeting);
    };
    fullName();
    
    function sumAll(x,y){
    var sum = 0;
    for(let i = x;i<=y;i++){
       sum = sum + i;
    }
    console.log(sum)
    }
    
    sumAll(1,10);