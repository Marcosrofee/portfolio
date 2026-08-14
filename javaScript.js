 const themeButton = document.querySelector("#themeButton");
 const body = document.querySelector("body");
 const greeting = document.querySelector("#greeting");


     function changeTheme(){
         body.classList.toggle("light");
       
        if(body.classList.contains("right")){
            themeButton.textContent ="Modo escuro";
        } else{
            themeButton.textContent ="Modo claro";
        }
     }
     themeButton.addEventListener("click", changeTheme)  
    
     const currentHour = new Date().getHours();
     if(currentHour < 12){
         greeting.textContent = "Bom dia, Marcos ☀️";
        }else if(currentHour < 18){
            greeting.textContent = "Boa tarde, Marcos 🌤️"
        }  else{
            greeting.textContent = " Boa noite  Marcos! 🌙"; 
        }

 const contactForm = document.querySelector("#contactForm");
 const nameInput = document.querySelector("#name");
 const emailInput = document.querySelector("#email");
 const messageInput = document.querySelector("#message");
 const formMessage = document.querySelector("#formMessage");
   
 const nameError = document.querySelector("#nameError");
 const emailError = document.querySelector("#emailError");
 const messageError = document.querySelector("#messageError");
   
     function clearErrors() {
         nameError.textContent = "";
         emailError.textContent = "";
         messageError.textContent = "";
    }
     contactForm.addEventListener("submit", function (event) {

         event.preventDefault();

     clearErrors();

     const name = nameInput.value.trim();
     const email = emailInput.value.trim();
     const message = messageInput.value.trim();

     let hasError = false;

     if (name === "") {
         nameError.textContent = "Nome é obrigatório.";
             hasError = true;
    }
     if (email === "") {
         emailError.textContent = "E-mail é obrigatório.";
              hasError = true;
    } else if (!email.includes("@")) {
         emailError.textContent = "Digite um e-mail válido.";
             hasError = true;
    }
     if (message === "") {
         messageError.textContent = "Mensagem é obrigatória.";
             hasError = true;
    } else if (message.length < 10) {
         messageError.textContent = 
             "A mensagem deve ter pelo menos 10 caracteres.";
                  hasError = true;
    }
     if (hasError) {
         formMessage.textContent = "";
        
     return;

    }

     formMessage.textContent =
         "Mensagem enviada com sucesso! 🚀";

      contactForm.reset();

});