import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Card, Button, Text} from "tabler-react";

export default function MyCard() {
  let appcode = "sc90"
  return (
    
    <Card >
      <Text size='lg' center={true} >{appcode}</Text>
    </Card>
  );
  
}