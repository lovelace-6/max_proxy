import React from 'react';
import style from './css/ToolTip.less';
import ShelfButton from '../components/ShelfButton.jsx';

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: 0,
      books: [],
      expand: false
    }
  }
  handleClick() {
    this.setState({
      expand: !this.state.expand
    })
  }
  render() {
    return (
      <div className={style.wrapper}>
      <div className={style.toolTipTail}>
      <div className={style.toolTipContainer}  onMouseEnter={() => {this.props.onMouseEnter(this.props.id)}} onMouseLeave={this.props.onMouseLeave}>
      <div className={style.title}>
      {this.props.title}
      </div>
      <div className={style.author}>
      by {this.props.author}
      </div>
      {
        this.state.expand ? (
          <div className={style.bookDescription}>
          {this.props.description}
          <div className={style.expandText} onClick={this.handleClick.bind(this)}>...less</div>
          </div>
        ) : (
          <div className={style.bookDescription}>
          {this.props.description.slice(0, 200)}
          <div className={style.expandText} onClick={this.handleClick.bind(this)}>...more</div>
          </div>
        )
      }

      <ShelfButton id={this.props.id} status={this.props.status} onUpdate={this.props.onUpdate} />
    </div>
    </div>
    </div>

    )
  }
}

export default ToolTip;
