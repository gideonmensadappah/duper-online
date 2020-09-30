import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
type StyleProps = {
  primary?: boolean;
};
const Icon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${(props: StyleProps) => (props.primary ? "#2F80ED" : "#979797")};
`;

export default Icon;
