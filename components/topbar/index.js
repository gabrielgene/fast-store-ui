import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import MUIListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MUIList from '@material-ui/core/List';
import MUIBadge from '@material-ui/core/Badge';

import Icon from '~/components/icon';
import If from '~/components/if';
import { Text18 } from '~/components/text';

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Badge = styled(MUIBadge)`
  .MuiBadge-badge {
    background-color: #a5e4d9;
    color: #333333;
  }
`;

const ListItem = styled(MUIListItem)`
  padding: 20px 24px;
  width: 250px;
  border-bottom: 1px solid #c4c4c4;
`;

export default function Topbar({ back, test }) {
  const [open, setOpen] = React.useState(false);
  const [amout, setAmout] = React.useState('');
  const [logged, setLogged] = React.useState(false);
  const cart = useCart();
  const { totalItems } = cart;
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
    setOpen(false);
  };

  React.useEffect(() => {
    setAmout(totalItems);
    const jwt = Cookies.get('jwt');
    if (jwt) {
      setLogged(true);
    }
  }, [totalItems]);


  return (
    <>
      <Wrapper>
        {back ? (
          <IconButton
            style={{ padding: 3 }}
            onClick={() => router.back()}
            aria-label="back"
          >
            <ArrowBackIosIcon />
          </IconButton>
        ) : (
          <Icon name="menu" onClick={() => setOpen(true)} />
        )}
        <Text18
          style={{ fontFamily: 'Limelight' }}
          onClick={() => router.push('/')}
        >
          BEANDARE
        </Text18>
        <Badge badgeContent={amout} color="primary">
          <Icon name="bag" onClick={() => router.push('/carrinho')} />
        </Badge>
        <Drawer
          style={{ zIndex: 1000 }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <MUIList>
            <ListItem button onClick={() => handleNavigate('/')}>
              <Text18>Produtos</Text18>
            </ListItem>
            <ListItem button onClick={() => handleNavigate('/carrinho')}>
              <Text18>Carrinho</Text18>
            </ListItem>
            <If condition={logged}>
              <ListItem button onClick={() => handleNavigate('/meus-pedidos')}>
                <Text18>Meus Pedidos</Text18>
              </ListItem>
            </If>
            <If condition={!logged}>
              <ListItem button onClick={() => handleNavigate('/entrar')}>
                <Text18>Entrar</Text18>
              </ListItem>
            </If>
          </MUIList>
        </Drawer>
      </Wrapper>
      <div style={{ marginTop: 62 }} />
    </>
  );
}
