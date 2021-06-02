function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_form = document.querySelector('#ano_nasc')
    var resultado = document.querySelector('#res')

    if(ano_form.value == 0 || ano_form.value > ano){
        alert('Dados incorretos. Favor verificar')
    } else {
        var sexo = document.getElementsByName('sex_type')
        var idade = ano - ano_form.value
        var genero = '';
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                imagem.setAttribute('src','./assets/baby-boy.png')
            }else if ( idade < 12){
                imagem.setAttribute('src','./assets/boy.png')
            }else if (idade < 30){
                imagem.setAttribute('src', './assets/young-boy.png')
            }else if(idade < 60){
                imagem.setAttribute('src','./assets/adult-boy.png')
            } else {
                imagem.setAttribute('src','./assets/old-boy.png')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 3){
                imagem.setAttribute('src','./assets/baby-girl.png')
            }else if ( idade < 12){
                imagem.setAttribute('src','./assets/girl.png')
            }else if (idade < 30){
                imagem.setAttribute('src', './assets/young-girl.png')
            }else if(idade < 60){
                imagem.setAttribute('src','./assets/adult-girl.png')
            } else{
                imagem.setAttribute('src','./assets/old-lady.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} de ${idade} ano(s)`
        resultado.appendChild(imagem)
    }
}