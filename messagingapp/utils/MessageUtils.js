import PropTypes from "prop-types";
export const MessageShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["text", "image", "location"]),
  text: PropTypes.string,
  uri: PropTypes.string,
  coordinates: PropTypes.shope({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })
});