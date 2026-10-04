      let playerMove

      let result = '';

      let computerMove = '';

      let randomNumber

      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */
      
      function playGame(playerMove) {
          pickComputerMove();

      document.querySelectorAll('.move-button').forEach(button => {
      button.classList.remove('win', 'lose', 'tie');
      });
      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
          document.getElementById('scissors').classList.add('lose');
        } else if (computerMove === 'paper') {
          result = 'You win.';
          document.getElementById('scissors').classList.add('win');
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
          document.getElementById('scissors').classList.add('tie');
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
          document.getElementById('paper').classList.add('win');
        } else if (computerMove === 'paper') {
          result = 'Tie.';
          document.getElementById('paper').classList.add('tie');
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
          document.getElementById('paper').classList.add('lose');
        }
        
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
          document.getElementById('rock').classList.add('tie');
        } else if (computerMove === 'paper') {
          result = 'You lose.';
          document.getElementById('rock').classList.add('lose');
        } else if (computerMove === 'scissors') {
          result = 'You win.';
          document.getElementById('rock').classList.add('win');
        }
      }
        
      if (result === 'You win.') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }

      // ***
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `      You
      <img src="images/${playerMove}-emoji.png" alt="Player Move Hand Emoji" class="move-icon">
      <img src="images/${computerMove}-emoji.png" alt="Computer Move Hand Emoji" class="move-icon">
      Computer`;

      }
      // ***
      function pickComputerMove() {
        randomNumber = Math.random();

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
    };

      function updateScoreElement() {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} <br> <br> Rounds Played: ${score.wins + score.ties + score.losses}`;
    }

    updateScoreElement();
