function countM(){
        var countM = document.querySelectorAll('.route-cartype-places-left')

        if(countM[2] !== undefined){
            var c2 = countM[2].innerHTML
            var c3 = c2.replace(/[^0-9\.]+/g, "")
            //console.log(countM[2].innerHTML)

            if(c3 > '25'){
                console.log('места есть!')
                push()
                audio.play();
                audio.play();

            }else{
                console.log('мест нет')
            }
        }else{ console.log('мест нет 2')}
}


