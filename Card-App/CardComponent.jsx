import React, { useState } from 'react';
import './CardComponent.css';

// ✅ Import your local images
import naruto from './images/naruto.jpg';
import onepiece from './images/onepiece.jpg';
import bleach from './images/bleach.jpg';
import aot from './images/aot.jpg';
import deathnote from './images/deathnote.jpg';
import fma from './images/fma.jpg';
import dbz from './images/dbz.jpg';
import mha from './images/mha.jpg';
import demonslayer from './images/demonslayer.jpg';
import jujutsu from './images/jujutsu.jpg';
import tokyoghoul from './images/tokyoghoul.jpg';
import blackclover from './images/blackclover.jpg';
import fairytail from './images/fairytail.jpg';
import sao from './images/sao.jpg';
import hxh from './images/hxh.jpg';
import codegeass from './images/codegeass.jpg';
import steinsgate from './images/steinsgate.jpg';
import mobpsycho from './images/mobpsycho.jpg';
import chainsawman from './images/chainsawman.jpg';
import vinlandsaga from './images/vinlandsaga.jpg';

function CardComponent() {
  const cards = [
    {
      title: 'Naruto',
      description: <a href='https://en.wikipedia.org/wiki/Naruto' target="_blank">Naruto</a>,
      image: naruto,
    },
    {
      title: 'One Piece',
      description: <a href='https://en.wikipedia.org/wiki/One_Piece' target="_blank">One Piece</a>,
      image: onepiece,
    },
    {
      title: 'Bleach',
      description: <a href='https://en.wikipedia.org/wiki/Bleach_(TV_series)' target="_blank">Bleach</a>,
      image: bleach,
    },
    {
      title: 'Attack on Titan',
      description: <a href='https://en.wikipedia.org/wiki/Attack_on_Titan' target="_blank">Attack on Titan</a>,
      image: aot,
    },
    {
      title: 'Death Note',
      description: <a href='https://en.wikipedia.org/wiki/Death_Note' target="_blank">Death Note</a>,
      image: deathnote,
    },
    {
      title: 'Fullmetal Alchemist: Brotherhood',
      description: <a href='https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood' target="_blank">Fullmetal Alchemist</a>,
      image: fma,
    },
    {
      title: 'Dragon Ball Z',
      description: <a href='https://en.wikipedia.org/wiki/Dragon_Ball_Z' target="_blank">Dragon Ball Z</a>,
      image: dbz,
    },
    {
      title: 'My Hero Academia',
      description: <a href='https://en.wikipedia.org/wiki/My_Hero_Academia' target="_blank">My Hero Academia</a>,
      image: mha,
    },
    {
      title: 'Demon Slayer',
      description: <a href='https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba' target="_blank">Demon Slayer</a>,
      image: demonslayer,
    },
    {
      title: 'Jujutsu Kaisen',
      description: <a href='https://en.wikipedia.org/wiki/Jujutsu_Kaisen' target="_blank">Jujutsu Kaisen</a>,
      image: jujutsu,
    },
    {
      title: 'Tokyo Ghoul',
      description: <a href='https://en.wikipedia.org/wiki/Tokyo_Ghoul' target="_blank">Tokyo Ghoul</a>,
      image: tokyoghoul,
    },
    {
      title: 'Black Clover',
      description: <a href='https://en.wikipedia.org/wiki/Black_Clover' target="_blank">Black Clover</a>,
      image: blackclover,
    },
    {
      title: 'Fairy Tail',
      description: <a href='https://en.wikipedia.org/wiki/Fairy_Tail' target="_blank">Fairy Tail</a>,
      image: fairytail,
    },
    {
      title: 'Sword Art Online',
      description: <a href='https://en.wikipedia.org/wiki/Sword_Art_Online' target="_blank">Sword Art Online</a>,
      image: sao,
    },
    {
      title: 'Hunter x Hunter',
      description: <a href='https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter' target="_blank">Hunter x Hunter</a>,
      image: hxh,
    },
    {
      title: 'Code Geass',
      description: <a href='https://en.wikipedia.org/wiki/Code_Geass' target="_blank">Code Geass</a>,
      image: codegeass,
    },
    {
      title: 'Steins;Gate',
      description: <a href='https://en.wikipedia.org/wiki/Steins;Gate' target="_blank">Steins;Gate</a>,
      image: steinsgate,
    },
    {
      title: 'Mob Psycho 100',
      description: <a href='https://en.wikipedia.org/wiki/Mob_Psycho_100' target="_blank">Mob Psycho 100</a>,
      image: mobpsycho,
    },
    {
      title: 'Chainsaw Man',
      description: <a href='https://en.wikipedia.org/wiki/Chainsaw_Man' target="_blank">Chainsaw Man</a>,
      image: chainsawman,
    },
    {
      title: 'Vinland Saga',
      description: <a href='https://en.wikipedia.org/wiki/Vinland_Saga_(manga)' target="_blank">Vinland Saga</a>,
      image: vinlandsaga,
    }
  ];

  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          className={`card ${flipped[index] ? 'flipped' : ''}`}
          key={index}
          onClick={() => handleFlip(index)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={card.image} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
            </div>
            <div className="card-back">
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
