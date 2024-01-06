(function(){

    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.row')
    let Reset = document.querySelector('.reset')
    let equal = document.querySelector('.equal')
    let Delete = document.querySelector(".del")
    
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
           if(screen.value==="0" || screen.value==="Please Enter" || screen.value==="Syntax Error" || screen.value==="Infinity" ){
            screen.value=""
           }
            let value = e.target.dataset.num;
            screen.value +=value;
            console.log("value  :" +value)
        })
    });

    Reset.addEventListener("click",function(e){
      
        screen.value=e.target.dataset.num;

       
    })

    equal.addEventListener("click",function(){
        
        if(screen.value===""  || screen.value==="Syntax Error" || screen.value==="Infinity"  ) {
            screen.value="Please Enter";
            
        }else{
            try {
                var ans=eval(screen.value)
                console.log(ans)
                screen.value=ans
            } catch (error) {
                
                screen.value="Syntax Error"
                // console.log("")

            }
           
        }
    })

    Delete.addEventListener("click",function(e){
        let removeone = screen.value;

       
            if(screen.value==="Syntax Error" || screen.value==="Infinity" ){
            // console.log("please enter")
            screen.value=""
           }else{
               screen.value= removeone.slice(0,-1)

           }
    })


})();