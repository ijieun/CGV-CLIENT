import styled from 'styled-components';
import fontWeight from './fontWeight';

/* Title1_SB_16 */
const Title1SB16 = styled.h2`
	${fontWeight.SemiBold}
	font-size: 1.6rem;
	letter-spacing: -0.05rem;
`;

/* Title2_SB_15 */
const Title2SB15 = styled.h2`
	${fontWeight.SemiBold}
	font-size: 1.5rem;
	line-height: 130%;
	letter-spacing: -0.05rem;
`;

/* Title3_SB_14 */
const Title3SB14 = styled.h2`
	${fontWeight.SemiBold}
	font-size: 1.4rem;
	line-height: 175%; /* 24.5px */
	letter-spacing: -0.03rem;
`;

/* Title4_M_16 */
const Title4M16 = styled.h2`
	${fontWeight.Medium}
	font-size: 1.6rem;
	letter-spacing: -0.05rem;
`;

/* Title5_M_15 */
const Title5M15 = styled.h2`
	${fontWeight.Medium}
	font-size: 1.6rem;
	letter-spacing: 0.05rem;
`;

/* Title6_B_18 */
const Title6B18 = styled.h2`
	${fontWeight.Bold}
	font-size: 1.8rem;
`;

/* Title7_B_13 */
const Title7B13 = styled.h2`
	${fontWeight.Bold}
	font-size: 1.3rem;
	letter-spacing: -0.05rem;
`;

/* Title8_B_15 */
const Title8B15 = styled.h2`
	${fontWeight.Bold}
	font-size: 1.5rem;
	line-height: 175%; /* 26.25px */
	letter-spacing: -0.05rem;
`;

/* Title9_B_14 */
const Title9B14 = styled.h2`
	${fontWeight.Bold}
	font-size: 1.4rem;
	line-height: 150%; /* 21px */
`;

/* Title10_B_19 */
const Title10B19 = styled.h2`
	${fontWeight.Bold}
	font-size: 1.9rem;
`;

/* Title11_R_15 */
const Title11R15 = styled.h2`
	${fontWeight.Regular}
	font-size: 1.5rem;
	line-height: 130%; /* 19.5px */
	letter-spacing: -0.05rem;
`;

const TitleTypo = {
	Title1SB16,
	Title2SB15,
	Title3SB14,
	Title4M16,
	Title5M15,
	Title6B18,
	Title7B13,
	Title8B15,
	Title9B14,
	Title10B19,
	Title11R15,
};

export default TitleTypo;
