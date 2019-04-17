import React from 'react';
import style from './css/Rating.less';

class Rating extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.ratingContainer}>Rate this book</div>
    )
  }
}

export default Rating;
