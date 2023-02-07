import React from 'react';
import { Button } from './styles';

export default function Button({children}) {
 return (
   <div>
        <Button>{children}</Button>
   </div>
 );
}