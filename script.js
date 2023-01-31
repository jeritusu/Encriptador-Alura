const textArea = document.querySelector(".text-area1");
const textArea2 = document.querySelector(".text-area2");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    textArea2.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptada;
}