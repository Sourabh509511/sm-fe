// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { MEDIA_SIZES } from 'media';

export const useResponsiveHook = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: `(min-width: ${MEDIA_SIZES.extraLarge})`,
    });

    // const isBigScreen = useMediaQuery({ query: `(min-width: 1824px)` });
    const isTablet = useMediaQuery({
        query: `(min-width: ${MEDIA_SIZES.large})`,
    });
    const isMedium = useMediaQuery({
        query: `(min-width: ${MEDIA_SIZES.medium})`,
    });
    const isMobile = useMediaQuery({
        query: `(min-width: ${MEDIA_SIZES.small})`,
    });
    // const isRetina = useMediaQuery({ query: `(min-resolution: 2dppx)` });

    return {
        isDesktopOrLaptop,
        isTablet,
        isMobile,
        isMedium,
    };
};
