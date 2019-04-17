import React from 'react';
import $ from 'jquery';
import style from '../sample.less';

class ReviewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewId: 0,
      likes: this.props.likes
    };
    this.likeHandler = this.likeHandler.bind(this);
    this.saveLike = this.saveLike.bind(this);
  }

  async likeHandler() {
    let currentLikes = this.state.likes + 1;
    await this.setState({
      reviewId: this.props.reviewId,
      likes: currentLikes
    });
    await this.saveLike(this.props.reviewId);
  }

  saveLike(id) {
    $.ajax({
      url: `/books/${this.props.id}/reviews`,
      type: 'PUT',
      data: { reviewId: id },
      success: () => { this.props.getAllReviews(); },
    });
  }

  render() {
    return (
      <div>
        <span className={style.likes}>{this.state.likes} likes</span>
        <span> · </span>
        <span>
          <button
            type="submit"
            className={style.likeButton}
            onClick={this.likeHandler}
          >
          Like
          </button>
        </span>
      </div>
    );
  }
}

export default ReviewActivity;
