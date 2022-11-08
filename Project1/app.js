
$( () => {
    const $openBtn = $('#openmodal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const openModal = () => {
        $modal.css('display', 'block');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    $openBtn.on('click', openModal);

    $closeBtn.on('click', closeModal);
    
    let numOfImages = $('.carousel-images').children().length - 1
    let currentImgIndex = 0;
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', none)
        currentImgIndex++ 
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block') 
       
       

           $('.previous').on('click', () => {
           
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
            if(currentImgIndex > 0) {
                currentImgIndex --
              } else {
                currentImgIndex = numOfImages
              }
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

            
            
            })
    })

       });

