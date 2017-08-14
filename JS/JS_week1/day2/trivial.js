let Question = function(title, choices, correctAns) {
  this.choices = choices;
  this.title = title;
  this.correctAns = correctAns;
}

Question.prototype.print = function() {
  let question = 'Question: ' + this.title + '\n';
  question += this.choices.join('\n');
  return question;
}

let Player = function(name) {
  this.name = name;
  this.answers = [];
}

Player.prototype.addAnswer = function(answer) {
  this.answers.push(answer);
}

Player.prototype.ratio = function() {
  let numCorrectAnswers = this.answers.filter(function(answer) { return answer; }).length;
  return numCorrectAnswers + '/' + this.answers.length;
}

Player.prototype.score = function() {
  let numCorrectAnswers = this.answers.filter(function(answer) { return answer; }).length;
  return numCorrectAnswers / this.answers.length;
}

let Trivial = function() {
  this.currentPlayerIndex = 0;
  this.currentQuestionIndex = 0;
  this.players = [];
  this.questions = [];
}

Trivial.prototype.addQuestion = function(question) {
  this.questions.push(question);
}

Trivial.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Trivial.prototype.askQuestion = function() {
  let currentQuestion = this.questions[this.currentQuestionIndex];
  let currentPlayer = this.players[this.currentPlayerIndex];
  let answer = prompt(this.printQuestion(currentQuestion, currentPlayer));
  currentPlayer.addAnswer(answer === currentQuestion.correctAns);
};

Trivial.prototype.nextPlayer = function() {
  this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length
}

Trivial.prototype.nextQuestion = function() {
  this.currentQuestionIndex += 1;
}

Trivial.prototype.play = function() {
  this.askQuestion();
  this.nextQuestion();
  this.nextPlayer();
  if (this.currentQuestionIndex < this.questions.length) {
    this.play();
  } else {
    console.log('Trivial finished!');
    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      console.log(player.name + ' score is: ' + player.ratio());
    }
    if (this.winners().length === 1) {
      console.log('The winner is: ' + this.winners()[0].name);
    } else {
      let winnerNames = this.winners().reduce(function(acc, winner, index, winners) {
        if (index === winners.length - 1) {
          return acc + ' and ' + winner.name;
        }
        if (index === 0) {
          return winner.name;
        }
        return acc + ', ' + winner.name;
      }, '');
      console.log('That was a tie between ' + winnerNames);
    }
  }
}

Trivial.prototype.printQuestion = function(question, player) {
  let questionStr = 'Player to anser: ' + player.name + '\n';
  questionStr += question.print();
  return questionStr;
}

Trivial.prototype.winners = function() {
  let winners = [];
  for (let i = 0; i < this.players.length; i++) {
    let player = this.players[i];
    if (!winners.length) {
      winners.push(player);
      continue;
    }
    if (player.score() > winners[0].score()) {
      winners = [player];
    } else if (player.score() === winners[0].score()) {
      winners.push(player);
    }
  }

  return winners;
}

let trivial = new Trivial();

trivial.addQuestion(new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A'));
trivial.addQuestion(new Question('Capital of Italy', ['A - Paris', 'B - Rome'], 'B'));
trivial.addQuestion(new Question('Capital of Lithuania', ['A - Riga', 'B - Vilnius'], 'B'));
trivial.addQuestion(new Question('Capital of Latvia', ['A - Riga', 'B - Vilnius'], 'A'));

trivial.addPlayer(new Player('Miller'));
trivial.addPlayer(new Player('Hemingway'));

trivial.play();
