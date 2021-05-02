import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useCart } from 'react-use-cart';
import { floatToPrice } from '~/utils/price';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import TextField from '@material-ui/core/TextField';

import { CREATE_USER_PAYMENT, CREATE_ORDER } from '~/apollo/mutations';

import Topbar from '~/components/topbar';
import { Text34, Text14, Text18 } from '~/components/text';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Cart() {
  const cart = useCart();
  const { items, cartTotal } = cart;
  const [createUserPayment, { data }] = useMutation(CREATE_USER_PAYMENT);
  const [createOrder, order] = useMutation(CREATE_ORDER);

  // React.useEffect(() => {
  //   if (data) {
  //     const { register, createPayment } = data;
  //     createOrder({
  //       variables: {
  //         user: register.user.id,
  //         products: items.map((i) => i.id),
  //         payment: createPayment.payment.id,
  //         value: cartTotal,
  //         status: 'PENDING',
  //       },
  //     });
  //   }
  // }, [data]);

  // const handleSubmit = () => {
  //   createUserPayment({
  //     variables: {
  //       username: 'client13',
  //       email: 'client13@gmail.com',
  //       password: '1234',
  //       externalReference: '1234',
  //       status: 'PENDING',
  //     },
  //   });
  // };

  return (
    <>
      <Topbar />
      <Wrapper>
        <Text34 style={{ marginBottom: 24 }}>Finalizar compra</Text34>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <TextField
                style={{ marginBottom: 24 }}
                id="outlined-basic"
                fullWidth
                label="Nome"
                variant="outlined"
              />
              <TextField
                style={{ marginBottom: 24 }}
                id="outlined-basic"
                fullWidth
                label="E-mail"
                variant="outlined"
              />
              <TextField
                style={{ marginBottom: 24 }}
                id="outlined-basic"
                fullWidth
                label="Senha"
                variant="outlined"
              />
              <TextField
                style={{ marginBottom: 24 }}
                id="outlined-basic"
                fullWidth
                label="Telefone"
                variant="outlined"
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Price>
          <Text14 style={{ color: '#9B9B9B' }}>Valor total:</Text14>
          <Text18>{floatToPrice(cartTotal)}</Text18>
        </Price>
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Finalizar no whatsapp" onClick={() => {}} />
        </Fixed>
      </div>
    </>
  );
}
