import React from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableHighlight, Alert, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import ColorList from './ColorList';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
  }

  handleSubmit(event) {
    this.props.getQuote();
    this.props.getColor();
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.props.isModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <ColorList></ColorList>
        </Modal>

        <TouchableHighlight
          onPress={() => {this.props.setModalVisible(true)}}
          style={[styles.square, {backgroundColor: this.props.color}]}>
          <Text style={styles.quote}>{this.props.quote}</Text>
        </TouchableHighlight>
        <Button
          onPress={this.handleSubmit}
          title='Get Quote'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 300,
    height: 300,
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 50
  },
  quote: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
});

const mapStateToProps = (state) => {
  return {
    quote: state.quote.quote,
    color: state.quote.color,
    isModalVisible: state.quote.isModalVisible
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getQuote: actions.getQuote,
    getColor: actions.getColor,
    setModalVisible: actions.setModalVisible
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
