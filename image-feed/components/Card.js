import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import AuthorRow from "./AuthorRow";

export default class Card extends React.Component {
  state = {
    loading: true
  };

  handleLoad = () => {
    this.setState({
      loading: false
    });
  };

  static defaultProps = {
    linkText: "",
    onPressLinkText: () => {}
  };

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"} />
          )}
          <Image
            style={StyleSheet.absoluteFill}
            source={image}
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)"
  }
});
