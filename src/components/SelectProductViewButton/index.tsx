import { ReactNode } from "react";
import { ContentButton, TextProducView } from "./styles";

export interface ComponentProps {
  bgColor?: string;
  color?: string;
  children: ReactNode;
}

export function SelectProductViewButton({ bgColor, color, children }: ComponentProps) {
  return (
    <ContentButton bgColor={bgColor}>
      <TextProducView color={color}>{children}</TextProducView>
    </ContentButton>
  );
}
