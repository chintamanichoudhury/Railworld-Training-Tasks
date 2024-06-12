document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('faqs').addEventListener('change',(e)=>{
        const selectedPage=e.target.value;
        if(selectedPage!== location.href){
            location.href=selectedPage;
        }
    })
})