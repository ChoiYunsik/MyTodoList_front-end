import styled, { css } from "styled-components"

const variantCSS = {
    blue : css`
        background-color: ${({theme})=>theme.PALETTE.background["skyBlue"]};
    `
}

const shapeCSS = {

    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    big: css`
        border-radius: 30px;
    `,
    round: css`
        border-radius: 50%;
    `
}


const sizeCSS = {

    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,

    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 16px 0;
`,
}

const colorCSS = {
    white: css`
        color: #fff;
    `,
    black: css`
        color : #131313;
    `
}

const Input = styled.input`

    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    ${({color}) => colorCSS[color]}
    padding: 0 16px;
    border: none;
   
`
export default Input;