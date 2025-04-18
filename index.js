function toggleMenu() {
    const menu = document.querySelector('.button_menu');
    menu.classList.toggle('active'); // Toggle the 'active' class
}

function disappear() {
    document.querySelector('main').style.filter = 'none';
    const img = document.querySelector('.conteiner_perfil');
    if (img) {
        img.style.display = 'none'; 
    }
}
function mudarConteudo(conteudo) {
    const conteudoSection = document.querySelector('.conteudo');
    let content = ``

    switch (conteudo) {
        case 'Dados pessoais':
            content =  `
            <h2>Dados Pessoais</h2> 
            <p>Ola meu nome é Bruno José Clemes, tenho 27 anos e sou natural de Araranguá , Santa catarina.</p>
            <p>Estou em busca de novas oportunidades que me permitam aplicar minhas habilidades em um ambiente dinâmico e colaborativo.</p>
            <p>Sou uma pessoa comunicativa, dedicada e proativa, sempre em busca de aprendizado e crescimento.</p>
            <p>Acredito que minha capacidade de trabalhar em equipe e minha disposição para enfrentar desafios podem agregar valor a uma empresa.</p>
            <hr>
            `;
            break;

 
        case 'Formação acadêmica':
            content = `
            <h2>Formação Acadêmica</h2> 
            <p>Sou formado em  Técnico Em Análise E Desenvolvimento De Sistemas, na Universidade do Extremo Sul Catarinense - 2022 - 2024. </p>
            <hr>
            `;
            break;


        case 'Experiência profissional':
            content = `
            <h2>Experiência Profissional</h2> <p> Atualmente trabalho na empresa Giassi supermercados LTDA meu primeiro emprego , atuo como repositor de centro de loja.</p>  
            <p> Ingressei em 10/12/2014 e estou la até o momento. </p> 
            <hr>
            `;
            break;


        case 'Habilidades e competências':
            content = `
            <h2>Habilidades e Competências</h2> 

            <b>Formação Lógica De Programação</b> 
            <p>Digital Innovation One - 41 horas - Concluído em 02/2024.<p>
            <hr>

            <b>Formação JavaScript Developer</b>
            <p>Digital Innovation One - 39 horas - Concluído em 06/2024.</p>
            <hr>

            <b>Formação CSS Web Developer</b>
            <p>Digital Innovation One - 43 horas - Concluído em 02/2024<p>
            <hr>

            <b>Formação HTML Web Developer<b/>
            <p>Digital Innovation One - 21 horas - Concluído em 07/2023</p>
            <hr>

            <b>Bootcamp Potência Tech Angular Developer - Power By iFood</b>
            <p>Digital Innovation One - 75 horas - Concluído em 05/2023.</p>
            <hr>
            
            <b>Nano Couser Design Gráfico</b>
            <p>FIAP - 140 horas - Concluído em 02/2022.</p>
            <hr>

            <b>Formação React Developer</b>
            <p>Digital Innovation One - 34 horas - Concluído em 12/2024</p>
            <hr>

            `;
            break;

        case 'Objetivo profissional':
            content = `
            <h2>Objetivo Profissional</h2> 
            
            <p>"Como um aspirante a programador, meu objetivo é iniciar minha carreira em desenvolvimento de software. 
            <p>Estou entusiasmado para contribuir em projetos desafiadores que me permitam aprender e crescer profissionalmente.<p>
            <p>Busco uma posição em uma equipe colaborativa onde possa desenvolver soluções inovadoras e aprimorar minhas habilidades técnicas.
            `;
            break;

        case 'Onde me achar':
            content = `<h2>Onde Me Achar</h2>

                <section class="social">

                        <div class="instagram">
                        
                        
                            <img id= "instagram" src="./assets/fotos/icons8-instagram-144.png"/>

                            <a href='https://www.instagram.com/bruno_clemes/'><button>Instagram</button></a>
                        
                        </div>

                        <div class="facebook">
                        
                        
                            <img id= "facebook" src="./assets/fotos/icons8-facebook-novo-144.png"/>

                            <a href='https://www.facebook.com/bruno.joseclemes?locale=pt_BR'><button>Facebook</button>

                        </div>

                            <div class="linkdin">
                        
                        
                            <img id= "linkdin" src="assets/fotos/icons8-linkedin-48.png"/>

                            <a href='https://www.linkedin.com/in/bruno-jos%C3%A9-clemes/'> <button>linkdin</button>

                        </div>


                        <div class="facebook">
                        
                        
                            <img id= "photo_menu" src="assets/fotos/icons8-github-64.png"/>

                            <a href='https://github.com/BrunoClemes'> <button>Instagram</button>


                        </div>

                    </section>

                   
               
            
            `;
            break;

        default:
            content = '<h1>Seja bem-vindo!</h1>';
    }

    function toggleMenu() {
        const menu = document.querySelector('.button_menu');
        console.log('Menu toggled'); // Check if this logs when you click
        menu.classList.toggle('active');
    }
    conteudoSection.innerHTML = content;
}
