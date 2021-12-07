/* eslint-disable */
import { Button } from 'carbon-components-react';

export function Button1(props: any) {
  return (
    <>
      <Button
        style={{
          marginTop: '50px',
          margin: '30px',
          borderRadius: '10px',
          fontSize: '20px',
          padding: '40px',
          backgroundColor: '#98AFC7'
        }}>
        {props.icon} {props.title}
      </Button>
    </>
  );
}
