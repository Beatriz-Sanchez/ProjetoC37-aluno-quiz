class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    // escreva aqui o código para ocultar os elementos da questão (procure o nome da função na classe Question)

    // escreva o código aqui para mudar a cor de fundo

    // escreva o código para exibir um texto indicando o resultado do Quiz

    // chame a função estática getContestantInfo() aqui (ela foi criada na classe Contestant)

    /* Se allContestants (todos os competidores) não for indefinido
    - aparece um texto avisando que o competidor que acertou será destacado em verde
    - o nome de cada jogador e sua resposta são escritos na tela
    - o nome do jogador que acertar é destacado em verde 
    ** Caso tenha dificuldade com a última tarefa, olhe as dicas na página do projeto */
    
  }

}
