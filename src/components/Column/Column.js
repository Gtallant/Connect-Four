import React from 'react';
import './Column.scss';
import Space from '../Space';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.selectColumn = this.selectColumn.bind(this);
    this.state = {
      tokenCount: 0,
    }
  }

  selectColumn() {
    const {
      index,
      currentPlayer,
      playerColors,
      placeToken,
      endTurn,
    } = this.props;
    const { tokenCount } = this.state;
    if (tokenCount < 6 ) {
      placeToken(index, tokenCount, playerColors[currentPlayer]);
      this.setState(prevState => ({
        tokenCount: prevState.tokenCount + 1,
      }));
      endTurn();
    }
  }

  render() {
    const { 
      columnData,
     } = this.props;
    return (
      <div onClick={this.selectColumn} className="column">
        {columnData.slice(0).reverse().map((val, i) => (
          <Space 
            key={i}
            value={val}
          />
        ))}
      </div>
    );
  }
}

export default Column;
