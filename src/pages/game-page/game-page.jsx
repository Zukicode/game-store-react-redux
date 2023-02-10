import React from 'react';

// Redux
import { useSelector } from 'react-redux';

//Components
import { GameCover } from '../../components/game-cover';
import { GameGenre } from '../../components/game-genre';
import { GameBuy } from '../../components/game-buy';

//Style
import './game-page.scss';

export const GamePage = () => {
	const game = useSelector(state => state.games.currentGame);
	return (
		<div className='game-page'>
			<h1 className='game-page__title'>{game.title}</h1>
			<div className='game-page__content'>
				<div className='game-page__left'>
					<iframe
						width='90%'
						height='400px'
						src={game.video}
						title='YouTube Video Player'
						frameborder='0'
					></iframe>
				</div>

				<div className='game-page__right'>
					<GameCover image={game.image} />
					<p>{game.description}</p>
					<p className='secondary-text'>Популярні мітки цього продукта:</p>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
					<div className='game-page__buy-game'>
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	);
};
