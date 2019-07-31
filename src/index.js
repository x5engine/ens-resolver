import React from 'react';
import { PropTypes } from 'prop-types';
import { ethers } from 'ethers';

class EnsResolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: ethers.getDefaultProvider(),
      lookup: props.lookup
    };
  }

  componentDidMount() {
    const { lookup } = this.state;
    if (lookup.length && lookup[0] === '0' && lookup[1] === 'x') {
      this.fetchName(lookup);
    } else if (lookup.length) {
      this.fetchAddress(lookup);
    }
  }

  fetchAddress = (lookup) => {
    const { provider } = this.state;
    try {
      provider.resolveName(lookup).then((address) => {
        this.setState({ lookup: address });
      });
    } catch (ex) {
      throw new Error('This is not an ENS name and not linked to any address ');
    }
  };

  fetchName = (lookup) => {
    const { provider } = this.state;
    try {
      provider.lookupAddress(lookup).then((name) => {
        this.setState({ lookup: name });
      });
    } catch (ex) {
      throw new Error('Address has no ens name associated to it.');
    }
  };

  render() {
    const { lookup } = this.state;
    return <>{lookup}</>;
  }
}

EnsResolver.propTypes = {
  lookup: PropTypes.string.isRequired
};

export default EnsResolver;
