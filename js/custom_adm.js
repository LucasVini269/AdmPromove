//inicio dropdown navbar
let notification = document.querySelector(".notification"); // o querySelector atribui a "let" para a classe ".notification"//
let avatar = document.querySelector(".avatar");

dropMenu(avatar);
dropMenu(notification);

function dropMenu(selector) { // o nome da funcao é dropmenu e recebe os valores do parametro "selector" //
    //console.log(selector);// selector aqui é dropMenu, que por sua vez é avatar e notification //
    selector.addEventListener("click", () => { // aqui o parametro (selector) aguardar um evento (addEventListener) que é o "click" (clique do mouse) //
        fechar(selector); 
        let dropdownMenu = selector.querySelector(".dropdown-menu"); // fez a classe ".dropdown-menu" virar uma variável //
        //verdadeiro ? verdadeiro : segundo;//
        dropdownMenu.classList.contains("active") ? dropdownMenu.classList.remove("active") : dropdownMenu.classList.add("active"); // "contains" significa que vai verificar se contém algo e "classList" é porque vai verificar se contém dentro de uma classe, pois é ".dropdown-menu" //
        //verifica se a classe ".dropdown-menu"   //se possui o atributo, ele o remove//    //se nao possuir o atributo,
       //contém o atributo "active"//                                                      // adiciona-o novamente//                                                                            
    });
}

function fechar(selector){
    if(selector.classList.value == "notification"){
    let dropdownMenu = document.querySelector(".avatar .dropdown-menu");
    dropdownMenu.classList.remove("active");
    }
    if(selector.classList.value == "avatar"){
    let dropdownMenu = document.querySelector(".notification .dropdown-menu");
    dropdownMenu.classList.remove("active");
    }
    }
