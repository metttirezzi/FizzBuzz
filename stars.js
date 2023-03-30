showStars(10);

function showStars(rows) { 
    for ( let row = 1 ; row <= rows ; row++ ){
        let pattern = '';
        for ( let i = 0 ; i < row ; i++)   // it is all about nested loop 
           pattern += '*';
        console.log(pattern);
    }
}

/* this is just output 
*
**
***
****
*****
******
*******
********
*********
**********
*/