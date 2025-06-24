import MenuBarLayoutLeft from './MenubarLayout/MenubarLayoutLeft';
import MenuBarLayoutRight from './MenubarLayout/MenuBarLayoutRight';

const Menubar = () => {
  return (
    <div className="w-[33%]">
      <div className="flex gap-x-[117px] items-center">
        <MenuBarLayoutLeft></MenuBarLayoutLeft>
        <MenuBarLayoutRight></MenuBarLayoutRight>
      </div>
    </div>
  );
};

export default Menubar;
