let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let history = document.getElementById('history');

// console.log(buttons);

buttons.map( button => {
    button.addEventListener('click',(e) =>{
    // console.log('clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.inner);
    
    switch( e.target.innerText){
        case 'c':
            display.innerText = ' ';
            history.innerText = ' ';
            break;

        case '←':
            if(display.innerText){
               display.innerText = display.innerText.slice(0, -1);
            }
               break;

        case '=':
            if(display.innerText == 'ERROR!?!?'){ display.innerText = ' '}else{
            try{
                history.innerText = display.innerText;
                let equals = Function("return " + display.innerText);
                display.innerText = equals();
                console

            } catch {
                display.innerText = 'ERROR!?!?';
            }}
            break;
 

        default:
            if(display.innerText == 'ERROR!?!?'){ display.innerText = ' '}
            else{
            display.innerText += e.target.innerText};
    }

    });
});