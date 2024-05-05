document.addEventListener('DOMContentLoaded', function(){

    let options = document.querySelectorAll('.option');
    let btn = document.getElementById('submit');

    btn.addEventListener('click', submitListener);

    function submitListener(){
        document.getElementById("success").classList.remove("hidden");
    }

    function ratingListener(evt){
        btn.removeAttribute('disabled');   
        document.querySelector('#rating').innerHTML = evt.currentTarget.rating;
    }

    options.forEach((option) => {
        option.addEventListener('click', ratingListener);
        option.rating = option.dataset.rating;
    })
})