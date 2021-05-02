import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import MUIListItem from '@material-ui/core/ListItem';
import MUIList from '@material-ui/core/List';
import MUIBadge from '@material-ui/core/Badge';

import Icon from '~/components/icon';
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
    background-color: #db3022;
  }
`;

const ListItem = styled(MUIListItem)`
  padding: 20px 24px;
  width: 250px;
  border-bottom: 1px solid #c4c4c4;
`;

export default function Topbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleNavigate = (route) => {
    router.push(route);
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Icon name="menu" onClick={() => setOpen(true)} />
        <Text18 onClick={() => router.push('/')}>Beandare</Text18>
        <Badge badgeContent={4} color="primary">
          <Icon name="bag" onClick={() => router.push('/sacola')} />
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
            <ListItem button onClick={() => handleNavigate('/Carrinho')}>
              <Text18>Carrinho</Text18>
            </ListItem>
            <ListItem button onClick={() => handleNavigate('/meus-pedidos')}>
              <Text18>Meus Pedidos</Text18>
            </ListItem>
            <ListItem button onClick={() => handleNavigate('/')}>
              <Text18>Entrar</Text18>
            </ListItem>
          </MUIList>
        </Drawer>
      </Wrapper>
      <div style={{ marginTop: 62 }} />
    </>
  );
}
