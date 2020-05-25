import React from 'react';
import { PropTypes } from 'prop-types';
import ENS from "ethjs-ens";
import HttpProvider from 'ethjs-provider-http';

const ens = new ENS({ provider: window.web3.currentProvider, network: 1 });
//web3 must be injected or fail :'( use infura

class EnsResolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lookup: props.lookup
    };
  }

  componentDidMount() {
    if (lookup.length && lookup[0] === '0' && lookup[1] === 'x') {
      this.fetchName(lookup);
    } else if (lookup.length) {
      this.fetchAddress(lookup);
    }
  }

  fetchAddress = (lookup) => {
    try {
      ens.reverse(lookup).then((address) => {
        this.setState({ lookup: address });
      });
    } catch (ex) {
      throw new Error('This is not an ENS name and not linked to any address ');
    }
  };

  fetchName = (lookup) => {
    try {
      const result = ens.reverse(lookup).then((name) => {
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
