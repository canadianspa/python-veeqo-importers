import React from "react";
import "./CalendarPage.css";

import { FormGroup, Label, Input, Button } from "reactstrap";
import { Select, MultiSelect } from "../Shared";

function InitialView({ formState, onFormChange, calendars, toggleView }) {
  const { orderUrl, calendar, attendees } = formState;

  return (
    <div className="event-form">
      <FormGroup>
        <Label>Veeqo Order URL</Label>
        <Input
          name="orderUrl"
          type="text"
          value={orderUrl}
          onChange={onFormChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Select Calendar</Label>
        <Select
          name="calendar"
          options={calendars}
          objectTitleKey="summary"
          value={calendar.summary}
          onChange={onFormChange}
          useObjects={true}
          style={{ marginBottom: "10px", width: "250px" }}
        />
      </FormGroup>
      <FormGroup>
        <Label>Attendees</Label>
        <MultiSelect name="attendees" options={attendees} onChange={onFormChange} />
      </FormGroup>
      <Button onClick={toggleView}>Next</Button>
    </div>
  );
}

export default InitialView;
