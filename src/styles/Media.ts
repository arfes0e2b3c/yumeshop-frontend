import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export const mb = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: 767px) {
    ${css(first, ...interpolations)}
  }
`;

export const tb = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 768px) and (max-width: 1151px) {
    ${css(first, ...interpolations)}
  }
`;
export const pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 1152px) {
    ${css(first, ...interpolations)}
  }
`;
