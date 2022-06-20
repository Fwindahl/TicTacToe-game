import React from 'react';

const BottomRow = ({ roundWon }) => {
	return (
		<div className="bottom-row">
			<div className="stats" style={{ background: '#31C3BD' }}>
				<p className="score-name" style={{ fontSize: '13px' }}>
					X (P1)
				</p>
				<span className="counter">{roundWon.X}</span>
			</div>
			<div className="stats" style={{ background: '#A8BFC9' }}>
				<p className="score-name" style={{ fontSize: '13px' }}>
					Tie
				</p>
				<span className="counter">{roundWon.T}</span>
			</div>
			<div className="stats" style={{ background: '#F2B137' }}>
				<p className="score-name" style={{ fontSize: '13px' }}>
					O (P2)
				</p>
				<span className="counter">{roundWon.O}</span>
			</div>
		</div>
	);
};

export default BottomRow;
