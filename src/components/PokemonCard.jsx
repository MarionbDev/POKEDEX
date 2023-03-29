import PropTypes from "prop-types";

function MyImage({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>{"???"}</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

MyImage.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default MyImage;
