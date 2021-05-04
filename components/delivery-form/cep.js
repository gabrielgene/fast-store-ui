import React from 'react';
import { useDebounce } from 'use-debounce';

import getLocationByCep from '~/services/getLocationByCep';
import Input from '~/components/input';
import If from '~/components/if';

export default function Cep({ handleChange, deliveryInfo, setDeliveryInfo }) {
  const [debouncedValue] = useDebounce(deliveryInfo.cep, 600);

  React.useEffect(() => {
    if (!!debouncedValue) {
      getLocationByCep(debouncedValue)
        .then((r) =>
          setDeliveryInfo({
            ...r,
            complement: deliveryInfo.complement,
            number: deliveryInfo.number,
          })
        )
        .catch((err) => {
          setDeliveryInfo({
            cep: deliveryInfo.cep,
            complement: deliveryInfo.complement,
            number: deliveryInfo.number,
          });
        });
    }
  }, [debouncedValue]);

  return (
    <>
      <Input
        label="CEP"
        name="cep"
        type="number"
        value={deliveryInfo.cep || ''}
        onChange={handleChange}
      />
      <If condition={!!debouncedValue}>
        <Input
          label="Endereço"
          name="street"
          onChange={handleChange}
          value={deliveryInfo.street || ''}
        />
        <Input
          label="Bairro"
          name="neighborhood"
          onChange={handleChange}
          value={deliveryInfo.neighborhood || ''}
        />
        <Input
          name="state"
          label="Estado"
          onChange={handleChange}
          value={deliveryInfo.state || ''}
        />
        <Input
          name="city"
          label="Cidade"
          onChange={handleChange}
          value={deliveryInfo.city || ''}
        />
        <Input
          name="complement"
          label="Complemento"
          onChange={handleChange}
          value={deliveryInfo.complement || ''}
        />
        <Input
          name="number"
          label="Número"
          onChange={handleChange}
          value={deliveryInfo.number || ''}
        />
      </If>
    </>
  );
}
