import React from 'react';

const TopRow = ({ player, restartGame }) => {
	return (
		<div className="top-row">
			<div className="img-container">
				<img className="smallImage" src="/assets/logo.svg"></img>
			</div>
			<div className="playerTurn">
				{player == 'X' ? (
					<img className="smallerImage" src="/assets/icon-x.svg" />
				) : player == 'O' ? (
					<img className="smallerImage" src="/assets/icon-o.svg" />
				) : null}
				TURN
			</div>
			<div className="restart">
				<button className="restart-button" onClick={restartGame}>
					<img src="/assets/icon-restart.svg"></img>
				</button>
			</div>
		</div>
	);
};

export default TopRow;
