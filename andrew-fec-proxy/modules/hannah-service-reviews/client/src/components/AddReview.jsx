import React from 'react';
import StarRatings from 'react-star-ratings';
import $ from 'jquery';
import style from '../sample.less';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
      myReview: '',
      userId: 101, // our demo assumes a user is logged in, thus the user's id will always be 101
    };
    this.ratingHandler = this.ratingHandler.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.postReview = this.postReview.bind(this);
    this.reviewHandler = this.reviewHandler.bind(this);
  }

  ratingHandler(rating) {
    this.setState({
      selectedRating: rating
    });
  }

  reviewHandler(event) {
    this.setState({
      myReview: event.target.value,
    });
  }

  async postReview(event) {
    event.preventDefault();

    const { myReview, selectedRating, userId } = this.state;
    const { id, onUpdate } = this.props;

    await $.post(`/books/${id}/reviews`, {
      review: myReview,
      rating: selectedRating,
      user_id: userId
    });

    await onUpdate(myReview);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      review: '',
      rating: 0
    });
  }

  render() {
    const { selectedRating } = this.state;
    return (
      <div>
        <div className={style.reviewSearch}>
          <textarea
            className={style.text}
            name="review"
            rows="12"
            cols="85"
            onChange={this.reviewHandler}
            placeholder="Type your review here"
          />
          <button
            type="submit"
            className={style.submit}
            onClick={this.postReview}
          >
            Post review
          </button>
          <span className={style.star}>
            <StarRatings
              name="rating"
              onChange={this.ratingHandler}
              changeRating={this.ratingHandler}
              isSelectable={true}
              rating={selectedRating}
              starRatedColor="#FF7F50"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="0px"
              starHoverColor="#FF7F50"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default AddReview;
