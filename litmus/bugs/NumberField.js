import { NumberField } from 'cx/widgets';

export default (
   <cx>
      <NumberField
         value-bind="percent"
         label="Percent"
         format="p;0;4"
         scale={0.01}
         reactOn="change"
      />
   </cx>
);