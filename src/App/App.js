import './App.css';
import { useState } from 'react';
import Tile from '../components/Tile';
import EndGame from '../components/EndGame';
import TopRow from '../components/TopRow';
import BottomRow from '../components/BottomRow';

const emptyArr = ['', '', '', '', '', '', '', '', ''];
const wins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const App = () => {
	const [board, setBoard] = useState(emptyArr);
	const [player, setPlayer] = useState('X');
	const [gameFinished, setGameFinished] = useState(false);
	const [tie, setTie] = useState(false);
	const [roundWon, setRoundWon] = useState({ X: 0, O: 0, T: 0 });

	const isGameOver = () => {
		if (!gameFinished) {
			// X win check
			for (let i = 0; i < 8; i++) {
				if (board[wins[i][0]] === 'X' && board[wins[i][1]] === 'X' && board[wins[i][2]] === 'X') {
					setGameFinished(true);
					setRoundWon({ X: roundWon.X + 1, O: roundWon.O, T: roundWon.T });
					return;
				}
			}
			// O win check
			for (let i = 0; i < 8; i++) {
				if (board[wins[i][0]] === 'O' && board[wins[i][1]] === 'O' && board[wins[i][2]] === 'O') {
					setGameFinished(true);
					setRoundWon({ X: roundWon.X, O: roundWon.O + 1, T: roundWon.T });
					return;
				}
			}
			// Tie game check
			if (!board.includes('')) {
				setTie(true);
				setGameFinished(true);
				setRoundWon({ X: roundWon.X, O: roundWon.O, T: roundWon.T + 1 });
			}
		}
	};
	const nextRound = () => {
		setBoard(emptyArr);
		setGameFinished(false);
		setTie(false);
		setPlayer('X');
	};

	const restartGame = () => {
		setBoard(emptyArr);
		setGameFinished(false);
		setTie(false);
		setPlayer('X');
		setRoundWon({ X: 0, O: 0, T: 0 });
	};
	isGameOver();

	const chooseSquare = (square) => {
		if (gameFinished) return; //guard closet
		setBoard(
			board.map((value, index) => {
				if (index === square && value === '') {
					return player;
				}

				return value;
			})
		);
		player === 'X' ? setPlayer('O') : setPlayer('X');
	};

	const createBoard = () => {
		return board.map((tile, i) => (
			<Tile
				players={player}
				key={i}
				player={tile}
				chooseSquare={() => {
					chooseSquare(i);
				}}
			/>
		));
	};
	return (
		<div className="App">
			<TopRow player={player} restartGame={restartGame} />
			{gameFinished && <EndGame nextRound={nextRound} restartGame={restartGame} player={player} tie={tie} />}
			<div className="board">{createBoard()}</div>
			<BottomRow roundWon={roundWon} />
		</div>
	);
};

export default App;
