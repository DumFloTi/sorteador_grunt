document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAlt = Math.random() * numeroMax;
        numeroAlt = Math.floor(numeroAlt + 1);

        document.getElementById('numero-sorteado').innerText = numeroAlt;
        document.querySelector('.resultado').style.display = 'block';
    })
})