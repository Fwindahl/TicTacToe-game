import React from 'react';

const EndGame = ({ restartGame, player, tie, nextRound }) => {
	return (
		<div className="end-pop-up">
			<div className="popup-container">
				<span className="win-text">
					{tie ? 'ROUND TIED' : player === 'O' ? 'PLAYER 1 WINS!' : 'PLAYER 2 WINS!'}
				</span>
				<div className="won-round">
					{tie ? (
						''
					) : player === 'X' ? (
						<img className="img-won" src="/assets/icon-o.svg" alt="O" />
					) : (
						<img className="img-won" src="/assets/icon-x.svg" alt="X" />
					)}
					{tie ? 'NO ONE TAKES THE ROUND' : 'TAKES THE ROUND'}
				</div>
				<div className="btn-container">
					<button className="Q-btn" onClick={restartGame}>
						QUIT
					</button>
					<button onClick={nextRound} className="round-btn">
						NEXT ROUND
					</button>
				</div>
			</div>
		</div>
	);
};

export default EndGame;
