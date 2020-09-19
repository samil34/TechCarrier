import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Animated, Keyboard, StyleSheet, TextInput ,Image} from 'react-native';

import { StackActions } from '@react-navigation/native';

import { connect } from 'react-redux';
import { signOut } from '../../redux/actions'


const SignOut = (props) => {

  useEffect(() => {
    props.signOut()
  }, []);

    return (
        <>
        </>
    )
}

const styles = StyleSheet.create({
    input: { height: '20%', },

    inputView: {

        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 25,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    }

});

const mapStateToProps = ({ authResponse }) => {
  const { loading, user } = authResponse;
  return { loading, user };
};

export default connect(mapStateToProps, { signOut })(SignOut);
