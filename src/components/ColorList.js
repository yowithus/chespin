import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

const numColumns = 3;

class ColorList extends React.Component {
  constructor() {
    super();
    this.handleSelectColor = this.handleSelectColor.bind(this);
  }

  componentDidMount = () => {
    this.props.getColors();
  }

  handleSelectColor(event, color) {
    this.props.setColor(color);
    this.props.setModalVisible(false);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.colors}
          renderItem={({item}) => (
            <TouchableHighlight
              style={[styles.color, {backgroundColor: item}]}
              onPress={e => this.handleSelectColor(e, item)}
            >
              <Text>{item}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    height: Dimensions.get('window').width / numColumns
  },
});

const mapStateToProps = (state) => {
  return {
    colors: state.color.colors
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getColors: actions.getColors,
    setColor: actions.setColor,
    setModalVisible: actions.setModalVisible
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);
