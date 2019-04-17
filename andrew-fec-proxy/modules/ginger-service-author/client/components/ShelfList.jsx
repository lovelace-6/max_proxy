import React from 'react';
import style from './css/ShelfList.less';
import $ from 'jquery';
import Rating from '../components/Rating.jsx';
import ShelfButton from '../components/ShelfButton.jsx';

class ShelfList extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.toggleList();
    let text = e.target.textContent;
    $.ajax({
      type: 'POST',
      url: '/books/:id/authors/status',
      data: {status: text, id: this.props.id},
      context: this,
      success: console.log('updated')
    }).done(() => {
      this.props.shelfSelect(text);
    });
  }
  render() {
    return (
      <div className={style.dropDownContainer}>
      <div className={style.dropDownList}>
      <li onClick={this.handleClick.bind(this)}>
        Read
      </li>
      <li onClick={this.handleClick.bind(this)}>
        Currently Reading
      </li>
      <li onClick={this.handleClick.bind(this)}>
        Want to Read
      </li>
      <li>
        currently-reading-again
      </li>
    </div>
    </div>
    )
  }
}

export default ShelfList;
