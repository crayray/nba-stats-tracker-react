import React from "react";

const session = {
  logged_in: 1,
  team_click: 1
};

export const SessionContext = React.createContext(session);

