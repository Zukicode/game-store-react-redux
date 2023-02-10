import React from 'react';

//Component
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenre } from '../game-genre';

//Style
import './game-item.scss';

//Redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from './../../redux/games/reducer';

export const GameItem = game => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`)
	};

	return (
		<div className='game-item' onClick={handleClick}>
			<GameCover image={game.image} />
			<div className='game-item__detalies'>
				<span className='game-item__title'>{game.title}</span>
				<div className='game-item__genres'>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
				</div>
				<div className='game-item__buy'>
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};
