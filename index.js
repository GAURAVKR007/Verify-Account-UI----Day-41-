const codes = document.querySelectorAll('.code')

codes[0].focus()

var executing = true

var fill  = false

codes.forEach((code,idx)=>{
    code.addEventListener('keydown',(e)=>{
       
            if(fill === false){
                if(e.key >= 0 && e.key <= 9 && idx>0){
                    executing = false
                    fill = true
                    codes[idx].value = ''
                    codes[0].focus()
                    setTimeout(()=> codes[1].focus() , 10)
                    console.log(1);
                    console.log(fill);
                    console.log("idx = "+idx);
                }
            } else if(e.key >= 0 && e.key <= 9) {
        if(idx === 0){
            fill = true
        }

        codes[idx].value = ''
        if(idx<=5){
            setTimeout(()=> codes[idx + 1].focus() , 10)
            console.log(2);
        }
        console.log(fill);
        console.log("idx = "+idx);
        
    }else {
        if(e.key === 'Backspace') {
            // if(idx>=1){
            setTimeout(()=> codes[idx - 1].focus(),10)
            console.log(3);
            // }
            console.log(fill);
            console.log("idx = "+idx);
        }
    }
 
        
    })
})