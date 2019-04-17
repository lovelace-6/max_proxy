import React from 'react';
import style from './css/Books.less';
import ToolTip from '../components/ToolTip.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks = this.getBooks.bind(this);
    this.displayToolTip = this.displayToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
    this.toolTipTimeout = null;
    this.state = {
      books: [],
      bookId: null
    }
  }
  getBooks() {
    console.log('running!')
    fetch(`/books/${this.props.bookId}/authors/${this.props.authorId}/titles`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          books: data
        });
      });
  }
  componentDidMount() {
    this.getBooks()
  }
  displayToolTip(id) {
    clearTimeout(this.toolTipTimeout)
    this.setState({
      bookId: id
    })
  }
  hideToolTip() {
    this.toolTipTimeout = setTimeout(() => {
      this.setState({
        bookId: null
      })
    }, 500)
  }
  render() {
    return (
      <div>
        {this.state.books.map(item => (
          <div className={style.bookContainer} key={item.id}>
            <img className={style.bookCover} key={item.id} onMouseEnter={() => { this.displayToolTip(item.id); }} onMouseLeave={this.hideToolTip} src={item.cover} alt="bookCover"/>
            {this.state.bookId === item.id
            && <ToolTip {...item} onUpdate={this.getBooks} author={this.props.author} onMouseEnter={this.displayToolTip} onMouseLeave={this.hideToolTip} />
            }
          </div>
        ))}
      </div>
    )
  }
}

export default Books;
