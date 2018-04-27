import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

/**
 * ATOM: The `<SmallArticleListing>` atom creates an abridged article listing.
 * Usually used for related articles.
 *
 */
const SmallArticleListing = ({
  id,
  className,
  slug,
  title,
  imageFiles,
  imageText,
  excerpt,
}) => (
  <Link
    id={id}
    className={`small-article-listing ${className}`}
    to={`/${slug}/`}
  >
    {imageFiles && <Img sizes={imageFiles} alt={imageText} />}
    <h4>{title}</h4>
    <p>{excerpt}</p>
  </Link>
);

SmallArticleListing.propTypes = {
  /** The  */
  slug: PropTypes.string.isRequired,
  /** The  */
  imageFiles: PropTypes.shape.isRequired,
  /** The  */
  imageText: PropTypes.string.isRequired,
  /** The  */
  title: PropTypes.string.isRequired,
  /** The  */
  excerpt: PropTypes.string,
  /** The  */
  className: PropTypes.string,
  /** The  */
  id: PropTypes.string,
};

SmallArticleListing.defaultProps = {
  excerpt: null,
  className: null,
  id: null,
};

export default SmallArticleListing;
