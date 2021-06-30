import React from "react";

interface Props {
  name: string;
  status: "DONE" | "ONGOING";
}

export const Todo: React.FC<Props> = ({ name, status }) => {
  return (
    <li>
      {status === "DONE" ? "✓" : "◯"}
      {name}
    </li>
  );
};
