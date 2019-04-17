import React from 'react';
import StarRatings from 'react-star-ratings';
import ReviewActivity from './ReviewActivity.jsx'
import style from '../sample.less';

const EachReview = (props) => {
  const {
    userId,
    users,
    rating,
    date,
    review,
    reviews,
    reviewId,
    likes,
    id
  } = props;

  return (
    <div>
      {users.map((user, index) => {
        if (user.id === userId) {
          return (
            <div key={index}>
              <a href="#" className={style.image}>
                <img src={user.avatar} alt="" />
              </a>
              <div className={style.userDetails}>
                <a href="#" className={style.user}>
                  {user.username}
                </a>
                <span> rated it </span>
                <StarRatings
                  rating={rating}
                  starRatedColor="#FF7F50"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0px"
                  z-index={-1}
                />
                <span className={style.float}>{date}</span>
                <div className={style.reviewContent}>
                  <p>{review}</p>
                </div>
                <ReviewActivity
                  id={id}
                  reviews={reviews}
                  reviewId={reviewId}
                  likes={likes}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EachReview;
