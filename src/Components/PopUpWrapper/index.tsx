import React, { ReactNode } from 'react';
import * as Styles from './styles';

const PopupWrapper = ({ children }: { children: ReactNode }) => (
    <Styles.Wrapper>{children}</Styles.Wrapper>
);

export default PopupWrapper;
