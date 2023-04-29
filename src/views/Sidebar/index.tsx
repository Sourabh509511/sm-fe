import React from 'react';
import { SIDEBAR_CONTENT } from 'Constant';
import * as Styles from './styles';

const Sidebar = () => {
    return (
        <Styles.Wrapper className="justify-center">
            {SIDEBAR_CONTENT.map(content => (
                <div>{content}</div>
            ))}
        </Styles.Wrapper>
    );
};

export default Sidebar;
