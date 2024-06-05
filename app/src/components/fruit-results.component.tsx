import {FruitFormData} from "../config/fruit-radio.config.ts";
import Button from "@mui/material/Button";

export const FruitResults = ({ data, onUpdate }: { data: FruitFormData, onUpdate: () => void, }) => (
    <>
        {data.red && (
          <p>You're as sweet as a {data.red}.</p>
        )}
        {data.yellow && (
            <p>You make great {data.yellow} cookies.</p>
        )}
        {data.orange && (
            <p>You love {data.orange} popsicles!</p>
        )}
        {(!data.red && !data.yellow && !data.orange) && (
            <p>Nothing to say? Try again!</p>
        )}
        <Button variant="contained" onClick={onUpdate}>Update responses?</Button>
    </>
);