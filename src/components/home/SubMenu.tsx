import styled from 'styled-components';
import homeImages from '../../assets/home/images';
import Typo from '../../styles/typo/typo';

function SubMenu() {
	return (
		<SubMenuContainer>
			<SubMenuWrapper>
				<SubMenuBtnBox>
					<SubMenuBtnImg src={homeImages.subMenu.myCgv} alt="my cgv" />
					<Typo.Body.Body6B13>MY CGV</Typo.Body.Body6B13>
				</SubMenuBtnBox>
				<SubMenuBtnBox>
					<SubMenuBtnImg src={homeImages.subMenu.photoPlay} alt="photo play" />
					<Typo.Body.Body6B13>포토플레이</Typo.Body.Body6B13>
				</SubMenuBtnBox>
				<SubMenuBtnBox>
					<SubMenuBtnImg src={homeImages.subMenu.discount} alt="discount info" />
					<Typo.Body.Body6B13>할인정보</Typo.Body.Body6B13>
				</SubMenuBtnBox>
				<SubMenuBtnBox>
					<SubMenuBtnImg src={homeImages.subMenu.store} alt="cgv store" />
					<Typo.Body.Body6B13>CGV스토어</Typo.Body.Body6B13>
				</SubMenuBtnBox>
			</SubMenuWrapper>
		</SubMenuContainer>
	);
}
const SubMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 12rem;
`;
const SubMenuWrapper = styled.div`
	display: flex;
	gap: 2.4rem;
	width: fit-content;
`;
const SubMenuBtnBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	align-items: center;
`;
const SubMenuBtnImg = styled.img`
	width: 6rem;
	height: 6rem;
`;
export default SubMenu;
