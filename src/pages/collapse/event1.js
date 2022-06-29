import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
function PartyFreeday() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Time event
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          Viernes: 20 a 01:00
          </div>
        </Collapse>
      </>
    );
  }
  export default PartyFreeday;