import React from 'react'

const Image = ({ className,src,width,height,alt,onClick}) => {
  return (
    <img
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
    />
  )
}

Image.defaultProps = {
  offset: 800,
  addClass: '',
  alt: 'Groww',
  handleBrokenImage: null,
  onClick: () => { }
};

export default Image;