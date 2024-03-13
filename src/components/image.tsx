import React from 'react';

import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';

type ImageProps = {
  alt?: string;
  src: string;
};

type CombinedProps = ImageProps & BoxProps;

export function Image({ alt, src, ...other }: CombinedProps) {
  return (
    <Box {...other}>
      <ImageStyle src={src} loading="lazy" alt={alt} />
    </Box>
  );
}
const ImageStyle = styled('img')({
  borderRadius: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
