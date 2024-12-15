import styled from 'styled-components';

const StyledContainer = styled.div`
padding: 71px 24px;

`;

const ImgUser = styled.img`
width:28px;

`;

const StyledCardContainer = styled.div`
background-color: ${props => props.$color};
display: flex;
flex-direction:column;
padding: 24px 32px;
border-radius: 8px;

`;

const Styledname = styled.p`
font-sinze: 13px;
color: ${color => color.$colortitle};
font-weight: 500;
`;

const Styledverified = styled.p`
font-sinze: 11px;
color: ${color => color.$colortext};
font-weight: 500;
`
const Styledtexts = styled.div`
display: flex;
flex-direction:column;
gap:40px;
`;
const Styledh1 = styled.h1`
font-sinze: 20px;
color: ${color => color.$colortitle};
font-weight: 600;
`
const Styledtext = styled.h2`
font-sinze: 13px;
color: ${color => color.$colortext};
font-weight: 500;
`
export { StyledContainer, StyledCardContainer,Styledname, Styledverified, Styledh1, Styledtext,Styledtexts,ImgUser};

