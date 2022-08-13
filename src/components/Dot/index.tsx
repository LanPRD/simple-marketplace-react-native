import { DotContent } from "./styles";

interface DotProps {
  color: string;
}

export function Dot({ color }: DotProps) {
  return <DotContent color={color} style={{ elevation: 3 }}></DotContent>;
}
