import { map } from "nanostores";

interface MenuState {
  isOpen: boolean;
  activeIndex?: number;
}

export const menuState = map<MenuState>({
  isOpen: false,
  activeIndex: undefined,
});
