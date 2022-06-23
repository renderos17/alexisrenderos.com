import styled from "styled-components";
import {
  DarkText,
  FullyTransparent,
  HalfShadow,
  LightText,
  SaffronYellow,
} from "../utils/colors";

export type JuiceboxHeaderProps = {
  title: string;
};

export const JuiceboxHeaderTitle = styled.h2`
  font-size: min(max(1.5em, 6vw), 2.5em);
  font-weight: 700;
  margin: 0.5em 0.75em;
  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.3em 0.175em 0.3em;
  box-shadow: 8px 10px 1px 0 ${HalfShadow};
  width: fit-content;
`;

export const JuiceboxOption = styled.a`
  font-size: 2em;
  font-weight: 500;
  margin: 0.5em;
  text-align: right;
  color: ${LightText};
  background: ${FullyTransparent};
  text-decoration-color: ${FullyTransparent};
  width: max-content;
`;

const JuiceboxHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 0;
  width: 100%;
  max-width: 1400px;
  border-radius: 0.75rem;
`;

const JuiceboxTitleWrapper = styled.div`
  align-items: flex-start;
  width: 100%;
`;

const JuiceboxOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto;
  width: max-content;
`;

export const JuiceboxHeaderMobile = ({ title }: JuiceboxHeaderProps) => (
  <JuiceboxHeaderWrapper>
    <JuiceboxTitleWrapper>
      <JuiceboxHeaderTitle>{title}</JuiceboxHeaderTitle>
    </JuiceboxTitleWrapper>
    <JuiceboxOptionsWrapper>
      {/*<JuiceboxOption>☰</JuiceboxOption>*/}
    </JuiceboxOptionsWrapper>
  </JuiceboxHeaderWrapper>
);