---
title: TDD [Test Driven Development) - minha visão sobre o assunto
author: Alan
date: 2022-02-20
tags: ['produtividade', 'carreira','design patterns', 'testes', 'tdd']
---

<!-- Introduction to my blog post -->

TDD [Test Driven Development) é um paradigma de desenvolvimento de software que visa otimizar o processo de desenvolvimento de software. Resumindo: desenvolver orientado por testes.

### E como isso funciona?

O TDD tem um passo a passo a ser seguido, sendo ele um ciclo de repetição:

<img src="https://marsner.com/wp-content/uploads/test-driven-development-TDD.png" style="display:flex;margin:auto;" alt="tdd-cycle">
<span style="display:flex;justify-content:center;margin-bottom:2rem;">Fonte: <a href="https://marsner.com" target="_blank" rel="noopener noreferrer">&nbsp;marsner.com</a>
</span>

**1.** __Escreva um teste que inicialmente não vai passar__ - Vamos supor que você é um desenvolvedor frontend e precisa implementar uma nova página de login. Você recebe uma documentação com os Use Cases e um protótipo dessa página.

Normalmente, sem o TDD, a maioria dos desenvolvedores leem a documentação (ás vezes nem isso rs) e começam o desenvolvimento, visando alcançar o que foi solicitado, e assim que concluído, fazem os testes do que foi desenvolvido, verificando se os Use Cases estão funcionando de acordo com a documentação, e isso é muito falho (cenários podem passar em branco nesse de-para de código e documentação).

Com o TDD, esse processo é invertido, ou seja, tudo começa pelo teste. Aqui você pega um Use Case e faz o teste, quando executar, ele vai quebrar - o desenvolvimento não foi realizado ainda.

**2.** __Faça o seu teste passar__ - Essa é a hora de botar a mão na massa. Usando o seu teste como guia, você irá desenvolver o código, visando a simplicidade.

**3.** __Refatore o seu código__ - Esse é um passo que vejo muitos desenvolvedores ignorando, ou não dando a devida atenção no TDD, e ao cometer esse erro, o TDD perde o seu sentido.

Neste passo, devemos refatorar nosso código produzido no passo anterior, aplicando conceitos, design patterns e boas práticas de desenvolvimento, visando uma aplicação mais robusta, escalável e de fácil manutenção. É aqui que se encontra a aplicação do [Clean Code](https://garywoodfine.com/what-is-clean-code/).

Após o passo 3, você volta ao passo 1, agora partindo do próximo Use Case e assim sucessivamente.


### Minha experiência com TDD

#### Conhecendo os testes unitários e a sua importância


Estou no mercado de desenvolvimento desde meados de 2016, e como um desenvolvedor frontend, nas empresas em que passei, não havia o hábito em fazer testes unitários no frontend. Isso até hoje [2022) é uma cultura muito forte no Brasil - infelizmente -, mas vejo o cenário sendo mudado aos poucos. Com isso, acabei "indo na onda" e demorei um tempo para conhecer mais sobre testes unitários e seus benefícios.

No processo de aprendizado e aplicação de testes unitários no meu dia a dia (certamente, sem o uso do TDD), comecei a entender o quão melhorava a eficácia do meu código, e o teste em si se tornava meu aliado, meu braço direito, me ajudando a entregar um código com mais qualidade e com menor probabilidade de entregar um problema em ambiente produtivo.


#### Como os testes unitários podem ser ainda melhor no meu dia a dia?


Comecei a me perguntar se isso era o suficiente, ou poderia ser ainda melhor... Lembro como se fosse hoje, que nos dias de estudos, de meetup ou eventos de tecnologia, escutava muito se falar de um tal de TDD, que até então eu desconhecia.

Um dia, participei de um evento do ABC - São Paulo, chamado [ABCDev](https://abcdevelopers.org/) em que uma das paletras na qual eu assisti, falava exatamente sobre TDD. Então minha cabeça simplesmente "explodiu" rs. Achei muito interessante a príncipio, mas dúvidas surgiam, principalmente sobre a demora de entregar determinada feature, com toda essa "burocrácia" de testes.

Após tentar colocar o TDD em prática, errando bastante (sim, errando - eu era um dos dev's que estava pulando a parte de refatoração do código de maneira adequada, e não só isso, saia do ciclo pelo meu vício de desenvolvimento NÃO orientado por testes, aplicava o TDD em tarefas gigantes, sem seguir os Use Cases e em cenários que não faziam sentido), e então percebi que algo estava errado, e comecei a estudar mais sobre o assunto, ao invés de sair aplicando um termo que conhecia superficialmente.

Encontrei muito conteúdo valioso (vou deixar no final da publicação algumas referências) sobre o assunto, e onde eu estava errando afinal. Um dos conteúdos que mais me ajudou nisso, foi sem sombra de dúvidas os [cursos](https://rmanguinho.github.io/) do [Rodrigo Manguinho](https://www.linkedin.com/in/rmanguinho), que explica como aplicar o TDD de forma eficiente.

#### Benefícios ao aplicar o TDD


* Melhor design de programa e maior qualidade de código
* Documentação detalhada do projeto
* TDD reduz o tempo necessário para o desenvolvimento do projeto
* Manutenção do código é mais fácil
* Solução confiável
* Economicamente melhor a longo prazo


#### Afinal, o TDD faz sentido?


Claramente, faz muito sentido. É importante ressaltar que não é um paradigma tão simples quanto parece de ser aplicado da melhor forma. Para aplicar o TDD, você deve estar ciente do ciclo dele e ter o conhecimento das melhoras práticas de desenvolvimento. Se você não conhece o Clean Code, do criador Uncle Bob, aconselho dar prioridade nesse conhecimento, e posteriormente juntar o TDD ao Clean Code.

Deixarei para vocês, uma frase do [livro](https://www.amazon.com.br/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=asc_df_0321146530/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=3024373226955168733&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-448095042394&psc=1) Test-Driven Development: By Example, feito por ninguém menos que o criador do TDD, Kent Beck, que resume toda a percepção que eu tenho hoje sobre o assunto:


> "If you're happy slamming some code together that more or less works and you're happy never looking at the
>  result again, TDD is not for you. TDD rests on a charmingly naïve geekoid assumption that if you write
> better  code, you'll be more successful. TDD helps you to pay attention to the right issues at the right time
> so you  can make your designs cleaner, you can refine your designs as you learn."
> ― Kent Beck, Test-Driven Development: By Example

### Referências

* [Livro Test-Driven Development: By Example - Kent Beck](https://www.amazon.com.br/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=asc_df_0321146530/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=8450874180526180247&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-448095042394&psc=1)
* [Blog Marsner](https://marsner.com/blog/why-test-driven-development-tdd/)
* [BrowserStack](https://www.browserstack.com/guide/what-is-test-driven-development)
* [DevMedia](https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533)
