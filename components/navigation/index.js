import styled from 'styled-components';
import { useRouter } from 'next/router';
import Icon from '~/components/icon';
import { Text10 } from '~/components/text';

const Wrapper = styled.div`
  padding: 8px 20px 20px 20px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 12px 12px 0px 0px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled(Text10)`
  ${(props) => props.active && `color: #db3022`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function IconLabel({ icon, label, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <IconWrapper onClick={handleClick}>
      <Icon icon={icon} active={active} />
      <Label active={active}>{label}</Label>
    </IconWrapper>
  );
}

export default function Navigation() {
  return (
    <Wrapper>
      <IconLabel icon="home" label="Inicio" href="/" />
      <IconLabel icon="bag" label="Carrinho" href="/carrinho" />
      <IconLabel icon="profile" label="Perfil" href="/perfil" />
    </Wrapper>
  );
}
