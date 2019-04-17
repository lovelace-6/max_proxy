import React from 'react';
import style from './css/ShelfButton.less';
import ShelfList from '../components/ShelfList.jsx';
import Rating from '../components/Rating.jsx';
import StarRatingComponent from 'react-star-rating-component';

class ShelfButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      shelf: this.props.status
    }
  }
  toggleList() {
    this.setState({
      showList: !this.state.showList
    })
  }
  shelfSelect(val) {
    this.setState({
      shelf: val
    })
    this.props.onUpdate();
  }
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.mainButton}>
          {this.state.shelf}
        </div>
        <div className={style.dropDownButton} onClick={this.toggleList.bind(this)}>
        </div>
        <Rating />
        <StarRatingComponent
          name="rating"
          starColor="#fd4900"
        />
        {
          this.state.showList ? (
            <ShelfList id={this.props.id} toggleList={this.toggleList.bind(this)} shelfSelect={this.shelfSelect.bind(this)} />
          ) : (
            null
          )
        }
      </div>
    )
  }
}

export default ShelfButton;
