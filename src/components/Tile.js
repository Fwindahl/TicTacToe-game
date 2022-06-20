import React from 'react';

/**
 *
 */
const Tile = ({ chooseSquare, player, players }) => {
	return (
		<div
			className={player ? 'square' : players == 'X' ? 'squareX square' : 'squareO square'}
			onClick={chooseSquare}
		>
			<div>
				{player === 'X' ? (
					<img src="/assets/icon-x.svg" />
				) : player === 'O' ? (
					<img src="/assets/icon-o.svg" />
				) : null}
			</div>
		</div>
	);
};

export default Tile;
