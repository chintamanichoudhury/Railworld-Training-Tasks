document.addEventListener('DOMContentLoaded',()=>{
    let currentIndex = 0;
    const images=document.querySelectorAll('.slide');
    const totalImages=images.length;

    function NextImg(){
        images[currentIndex].classList.remove('active');
        currentIndex=(currentIndex+1)%totalImages;
        images[currentIndex].classList.add('active');
    }
    setInterval(NextImg,2000)
})