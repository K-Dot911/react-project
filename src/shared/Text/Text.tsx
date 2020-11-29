import React from 'react';
import styles from './text.css';
import classNames from "classnames";

export enum EColors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    grey99 = 'grey99',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey66 = 'grey66',
    greyF4 = 'greyF4',
    white = 'white'
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColors;
    bold? : boolean;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        color = EColors.black,
        children,
        size,
        bold = false,
        mobileSize,
        tabletSize,
        desktopSize
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`m${tabletSize}`]]: tabletSize},
        {[styles[`m${desktopSize}`]]: desktopSize},
        styles[color],
        {[styles.bold]: bold}
    );

    return (
        <As className = {classes}>
            {children}
        </As>
    );
}
