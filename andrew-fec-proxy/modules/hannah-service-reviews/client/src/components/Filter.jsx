import React from 'react';
import Tooltip from './Tooltip.jsx';
import style from '../sample.less'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.timeout = null;
  }

  hideTooltip() {
    this.timeout = setTimeout(() => {
      this.setState({ displayTooltip: false });
    }, 500);
  }

  showTooltip() {
    clearTimeout(this.timeout);
    this.setState({ displayTooltip: true });
  }

  render() {
    const { onSelectRating, reviews, ratings } = this.props;
    const { displayTooltip } = this.state;
    return (
      <div>
        <a className={style.filterLink} onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>Filter</a>
        <Tooltip
          onSelectRating={onSelectRating}
          interactive
          reviews={reviews}
          display={displayTooltip}
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          ratings={ratings}
          five={this.props.five}
          four={this.props.four}
          three={this.props.three}
          two={this.props.two}
          one={this.props.one}
          all={this.props.all}
        />
      </div>
    );
  }
}

export default Filter;
