import { GridList, GridListTile } from 'material-ui/GridList';

import React from 'react';
import _ from 'ramda';
import axios from 'axios';

class Collections extends React.Component {
  state = {
    isLoading: true,
    collections: []
  };

  constructor(props) {
    super(props);
  }

  transformData = _.flip(_.assoc('collections'))({ isLoading: false });

  displayResults = _.compose(this.transformData, _.prop('artObjects'), _.prop('data'));

  componentDidMount = (this.retrieveCollections = () =>
    axios
      .get(`https://www.rijksmuseum.nl/api/en/collection?key=${'zMC0M8gL'}&format=json`)
      .then(this.displayResults)
      .then(this.setState.bind(this)));

  collectionImage = _.compose(_.prop('url'), _.prop('webImage'));

  render() {
    const { isLoading, collections } = this.state;
    return (
      <div>
        <h1>Collections</h1>
        {!isLoading ? (
          <GridList cellHeight={160} cols={3}>
            {_.map(
              collection => (
                <GridListTile key={this.collectionImage(collection)}>
                  <img src={this.collectionImage(collection)} alt={_.prop('title', collection)} />
                </GridListTile>
              ),
              collections
            )}
          </GridList>
        ) : (
          <h1>I'm loading the lists</h1>
        )}
      </div>
    );
  }
}

export default Collections;
