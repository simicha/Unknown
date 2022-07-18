import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';

class ActionsButtons extends PureComponent {

  render() {
      const { label, action } = this.props;
      return(
        <Fragment>
          <TouchableOpacity style={styles.btn} onPress={action}>
              <Text style={styles.btnTxt}>{label}</Text>
          </TouchableOpacity>
        </Fragment>
      )
  }
}

// function ActionsButtons(props) {
//     const { label, action } = props;
//     return(
//         <TouchableOpacity style={styles.btn} onPress={action}>
//             <Text style={styles.btnTxt}>{label}</Text>
//         </TouchableOpacity>
//     )
// }

ActionsButtons.defaultProps = {
  label: 'Button',
  action: () => null
}

ActionsButtons.propTypes = {
  label: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    textAlign: 'center',
    padding: 15,
    width: '100%',
    height: 50,
    borderRadius: 15,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgb(1, 89, 88)'
  },
});

export default ActionsButtons;