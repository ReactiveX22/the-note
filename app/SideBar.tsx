'use client';
import { Button } from '@/components/ui/button';
import { PanelRightOpen } from 'lucide-react';

type SideBarProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ sidebar, setSidebar }: SideBarProps) => {
  return (
    <div className='flex justify-end px-2 py-3'>
      <Button
        variant='ghost'
        onClick={() => setSidebar(!sidebar)}
        size='icon'
        className='shrink-0'
      >
        <PanelRightOpen strokeWidth={1} size={18} />
      </Button>
    </div>
  );
};

export default SideBar;
