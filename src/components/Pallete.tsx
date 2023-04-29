import React from "react";

interface ColorProps {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface PalleteProps {
  color: ColorProps;
}

const Pallete = ({ color }: PalleteProps) => {
  return (
    <div className="flex">
      <div style={{ backgroundColor: color[100], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[200], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[300], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[400], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[500], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[600], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[700], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[800], width: 64, height: 64 }}></div>
      <div style={{ backgroundColor: color[900], width: 64, height: 64 }}></div>
    </div>
  );
};

export default Pallete;
