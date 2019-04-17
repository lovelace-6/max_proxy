import React from 'react';
import style from '../sample.less';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (e.target.innerHTML[0] === 'a') {
      this.props.onSelectRating(e.target.innerHTML[0]);
    } else {
      const rating = Number(e.target.innerHTML[0]);
      this.props.onSelectRating(rating);
    }
  }

  render() {
    return (
      <div>
        {this.props.display ?
          (
            <div className={style.arrow}>
              <div
                className={style.toolTipBox}
                onMouseLeave={this.props.onMouseLeave}
                onMouseEnter={this.props.onMouseEnter}>
                <span>
                  <a className={style.all} onClick={this.clickHandler}>all ({this.props.all})</a>
                  <span> | </span>
                  <a className={style.rating} onClick={this.clickHandler}>5 stars ({this.props.five})</a>
                  <span> | </span>
                  <a className={style.rating}  onClick={this.clickHandler}>4 stars ({this.props.four})</a>
                  <span> | </span>
                  <a className={style.rating}  onClick={this.clickHandler}>3 stars ({this.props.three})</a>
                  <span> | </span>
                  <a className={style.rating}  onClick={this.clickHandler}>2 stars ({this.props.two})</a>
                  <span> | </span>
                  <a className={style.rating}  onClick={this.clickHandler}>1 star ({this.props.one})</a>
                </span>
              </div>
            </div>
          ) : (null)
        }
      </div>
    );
  }
}

export default Tooltip;
