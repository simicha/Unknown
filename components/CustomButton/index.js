import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { defaultProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

// class CustomButton extends Component {

//   static propTypes = {
//     label: propTypes.string,
//     action: propTypes.func
//   }

//   render() {
//       const { label, action } = this.props;
//       return(
//           <TouchableOpacity style={styles.btn} onPress={action}>
//               <Text style={styles.btnTxt}>{label}</Text>
//           </TouchableOpacity>
//       )
//   }
// }

function CustomButton(props) {
    const { label, action } = props;
    return(
        <TouchableOpacity style={styles.btn} onPress={action}>
            <Text style={styles.btnTxt}>{label}</Text>
        </TouchableOpacity>
    )
}

CustomButton.defaultProps = {
  label: 'Button',
  action: () => null
}

CustomButton.propTypes = {
  label: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
}

const styles = StyleSheet.create({
    btn: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#026873'
    },
    btnTxt: {
      fontSize: 25,
      color: '#04BF8A'
    }
});

export default CustomButton;