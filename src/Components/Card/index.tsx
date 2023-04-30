import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import * as Styles from './styles';
import { FULL_URL } from 'config';

export enum UrlEnum {
    Category = 'category',
    Product = 'products',
}

interface ICardProps {
    id: string;
    image: string;
    name: string;
    height: number;
    width: number;
    imageHeight: string;
    imageWidth: string;
    type: UrlEnum;
    fontSize?: string;
    isEditIcon?: boolean;
    highlight?: boolean;
    onClick?(id: string): void;
    styles?: Record<string, string>;
    nameStyles?: Record<string, string>;
    children?: ReactNode;
}

const Card = ({
    id,
    image,
    name,
    height,
    width,
    imageHeight,
    imageWidth,
    type,
    fontSize,
    isEditIcon = false,
    highlight = false,
    onClick,
    styles = {},
    nameStyles = {},
    children,
}: ICardProps) => {
    return (
        <Styles.Wrapper
            className="align-center flex-column"
            height={height}
            width={width}
            isActive={highlight}
            onClick={() => (onClick ? onClick(id) : {})}
            style={styles}
        >
            <Styles.IconWrapper>
                {isEditIcon && (
                    <Link
                        target="_blank"
                        to={`${FULL_URL}admin/products/${type}/${id}`}
                    >
                        <FiEdit2 color="var(--base-green)" />
                    </Link>
                )}
            </Styles.IconWrapper>
            <img
                src={image}
                alt=""
                height={imageHeight}
                width={imageWidth}
                className="image"
            />
            <Styles.Name
                style={nameStyles}
                fontSize={fontSize}
                className="name"
            >
                {name}
            </Styles.Name>
            {children}
        </Styles.Wrapper>
    );
};

export default Card;
