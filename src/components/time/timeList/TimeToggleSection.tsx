import styled from 'styled-components';
import Typo from '../../../styles/typo/typo';
import TimeToggleButton from './TimeToggleButton';

function TimeToggleSection() {
	return (
		<TimeToggleSectionContainer>
			<TimeToggleSectionWrapper>
				<Typo.Title.Title2SB15>강남</Typo.Title.Title2SB15>
				<Place>내 위치로부터 320m</Place>
			</TimeToggleSectionWrapper>
			<TimeToggleButton />
		</TimeToggleSectionContainer>
	);
}

export default TimeToggleSection;

const TimeToggleSectionContainer = styled.div`
	display: flex;
	padding: 0.6rem 0;

	background-color: ${({ theme }) => theme.GreyScale.LG2};
`;
const Place = styled(Typo.Body.Body3M14)`
	width: 11.2rem;
	height: 2rem;

	color: ${({ theme }) => theme.GreyScale.MG};
`;

const TimeToggleSectionWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	margin: 0 18rem 0 1rem;
`;
