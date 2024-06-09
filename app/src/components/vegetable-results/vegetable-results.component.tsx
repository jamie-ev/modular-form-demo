import Button from '@mui/material/Button';
import { VegetableFormData } from '../../config/vegetable-radio.config.ts';

export const VegetableResults = ({
  data,
  onUpdate,
}: {
  data: VegetableFormData;
  onUpdate: () => void;
}) => (
  <>
    {data.red && <p>Your favorite salad has {data.red} garnish.</p>}
    {data.green && <p>You love {data.green} in your smoothies.</p>}
    {data.yellow && <p>Your favorite stir fry has {data.yellow}.</p>}
    {!data.red && !data.green && !data.yellow && (
      <p>Nothing to say? Try again!</p>
    )}
    <Button variant="contained" onClick={onUpdate}>
      Update responses?
    </Button>
  </>
);
