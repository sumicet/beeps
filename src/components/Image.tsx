import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

/**
 * A `chakra-ui` `Image` component that extends `next.js`'s `Image`.
 */
export const Image = chakra(NextImage, {
    shouldForwardProp: prop =>
        ['width', 'height', 'src', 'alt', 'placeholder', 'blurDataURL', 'loader', 'fill'].includes(prop),
});
