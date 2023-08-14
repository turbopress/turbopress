import { map } from "nanostores";

interface MobileMenuState {
  isOpen: boolean;
  activeIndex?: number;
}

export const mobileMenuState = map<MobileMenuState>({
  isOpen: false,
  activeIndex: undefined,
});
