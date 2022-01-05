function validate(){
    var dados = document.getElementById('checagem').value

    if(dados == ''){
        document.getElementById('empty').className = 'failed'
    }
    if(dados.indexOf('@') == -1){
        document.getElementById('invalid').className = 'failed'
    }
    if(dados.indexOf('.com')==-1){
        document.getElementById('invalid').className = 'failed'
    }else{
        window.location.reload()
    }
}
