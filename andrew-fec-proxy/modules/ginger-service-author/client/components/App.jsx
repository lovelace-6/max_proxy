import React from 'react';
import Author from '../components/Author.jsx';
import style from './css/App.less';

class App extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Author bookId={this.props.match.params.id} />
      </div>
    );
  }
}

export default App;
