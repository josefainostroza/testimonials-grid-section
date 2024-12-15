import { CARDINFO } from "../../constants/cardInfo";
import {ImgUser, StyledCardContainer, StyledContainer, Styledh1, Styledname, Styledtext, Styledtexts, Styledverified} from './cardsContainer.styles'

// RAFCE
const CardsContainer = () => {
	return (
		<>
        {CARDINFO.map(cardInfo=>{
           return (
            <StyledContainer>
            <StyledCardContainer key={cardInfo.id} $color={cardInfo.color}>
               
                <div>
             <ImgUser src={cardInfo.img} /> 
            <Styledname $colortitle={cardInfo.colortitle}>{cardInfo.name}</Styledname>
            <Styledverified $colortext={cardInfo.colortext}>{cardInfo.verified}</Styledverified>
                </div>
                <Styledtexts>
            <Styledh1 $colortitle={cardInfo.colortitle}>{cardInfo.title} </Styledh1>
            <Styledtext $colortext={cardInfo.colortext}>{cardInfo.text}</Styledtext>
                </Styledtexts>
            </StyledCardContainer>
            </StyledContainer>
           ) 
        })}
        </>
	);
};

export default CardsContainer;