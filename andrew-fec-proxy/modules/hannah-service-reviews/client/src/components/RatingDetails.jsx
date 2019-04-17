import React from 'react';
import StarRatings from 'react-star-ratings';
import style from '../sample.less'

const RatingDetails = (props) => {
  const { average, reviews} = props;
  return (
    <div>
      <div className={style.ratingDetailsBar}>
        <p className={style.ratingHeader}>COMMUNITY REVIEWS</p>
        <hr />
        <StarRatings rating={4} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="20px" starSpacing="0px" />
        <span> {average} </span>
        <a href="#" className={style.linkTag} href="#">Rating details</a>
        <span className={style.reviewCount}> • {reviews.length} ratings</span>
      </div>
    </div>
  );
};

export default RatingDetails;
