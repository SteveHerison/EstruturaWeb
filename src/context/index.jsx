import { useContext } from "react";
import { UserContext } from "./Context";

export const useUser = () => useContext(UserContext);
