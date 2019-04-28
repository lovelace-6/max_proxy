import React from 'react';
import style from './css/Author.less';
import Books from '../components/Books.jsx';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
console.log('author line 14')
    fetch(`/books/${this.props.bookId}/authors/title`)
      .then(res => res.json())
      .then((title) => {

        return fetch(`/books/${this.props.bookId}/authors/${title[0].author_id}`)
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.state.authors.push(data)
        this.setState({
          authors:this.state.authors
        })
      //   this.setState({
      //     authors: ['hi']
      // });
    });
console.log('line 28')
  }

  render() {
    return (
      <div className={style.container}>
        {this.state.authors.map(item => (
          <div key={item.id}>
            <h1 className={style.about}>
              About
              {' '}
              {item.name}
            </h1>
            <div className={style.header}>
              <img className={style.image} src={item.profile_pic} alt="author" />
              <div>
                <div className={style.name}>
                  {item.name}
                </div>
                <div className={style.followers}>
                  {item.followers.toLocaleString()}
                  {' '}
                  {'followers'}
                </div>
                <div className={style.button}>
              Follow Author
                </div>
              </div>
            </div>
            <div className={style.details}>
              {item.details}
            </div>
            <div className={style.about}>
            books by
              {' '}
              {item.name}
            </div>
            <Books bookId={this.props.bookId} authorId={item.id} author={item.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default Author;
