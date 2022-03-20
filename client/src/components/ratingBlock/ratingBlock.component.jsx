import React, { useState, useEffect } from 'react';
import { __getAnonymousUserId } from '../../utils';

import { RatingContainer, StarWrapper, StarIcon } from './ratingBlock.styles';

const RatingBlock = ({ id, type }) => {
  const userId = __getAnonymousUserId();

  const wording = {
    review: {
      start: 'šią apžvalgą',
      end: 'Apžvalgos',
    },
    recipe: {
      start: 'šį receptą',
      end: 'Recepto',
    },
  };

  const [reviewRating, setReviewRating] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/rating/${id}?user_id=${userId}`).then((res) => res.json());
        setReviewRating(result);
      } catch (error) {
        setReviewRating(0);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/rating/avg/${id}`).then((res) => res.json());
        setAvgRating(result);
      } catch (error) {
        setAvgRating(0);
      }
    };

    fetchData();
  }, [id, reviewRating]);

  const printIndex = (score) => {
    fetch('/api/rating', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId: id, rating: score, author: userId }),
    }).then(() => {
      setReviewRating(score);
    });
  };

  return (
    <RatingContainer>
      <p>Kaip įvertintum {wording[type].start}?</p>
      <StarWrapper>
        {[5, 4, 3, 2, 1].map((item) => (
          <StarIcon key={item} reviewrating={reviewRating} index={item} onClick={() => printIndex(item)} />
        ))}
      </StarWrapper>
      <p>
        {wording[type].end} įvertinimas: {avgRating < 1 ? 'neįvertinta' : avgRating}
      </p>
    </RatingContainer>
  );
};

export default RatingBlock;
