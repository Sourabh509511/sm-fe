export const MEDIA_SIZES = Object.freeze({
  small: '576px',
  medium: '767px',
  large: '992px',
  extraLarge: '1200px',
  mobilePotrait: '480px',
});

export const device = Object.freeze({
  smallViewport: `@media only screen and (max-width: ${MEDIA_SIZES.small})`,
  mediumViewport: `@media only screen and (max-width: ${MEDIA_SIZES.medium})`,
  largeViewport: `@media only screen and (max-width: ${MEDIA_SIZES.large})`,
  extraLargeViewport: `@media only screen and (max-width: ${MEDIA_SIZES.extraLarge})`,
  mobilePotraitViewport: `@media only screen and (max-width: ${MEDIA_SIZES.mobilePotrait})`,
});
