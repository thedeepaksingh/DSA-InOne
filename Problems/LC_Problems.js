(function(){
    let __run_problem = "LC9_Fn";

    (function LC9_Fn(){
        var isPalindrome = (...param) =>{
            const {num_check} = param;
            if(num_check === 0) return num_check;

            // main logic here
            for(let digits in num_check){
                console.log(digits);
            }

        }

        if(__run_problem === "LC9_Fn") isPalindrome();
    })();
})()