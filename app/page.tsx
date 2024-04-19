'use client';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Separator } from '@/components/ui/separator';
import { useEffect, useRef, useState } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import NoteTextArea from './NoteTextArea';
import SideBar from './SideBar';

export default function Home() {
  const refA = useRef<ImperativePanelHandle>(null);
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    if (refA.current) {
      if (sidebar) {
        refA.current.resize(15);
      } else {
        refA.current.resize(3);
      }
    }
  }, [sidebar]);

  return (
    <main className='flex h-svh'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel
          defaultSize={15}
          ref={refA}
          className='transition-width min-w-fit duration-500 ease-in-out'
        >
          <SideBar sidebar={sidebar} setSidebar={setSidebar} />
        </ResizablePanel>
        {/* <ResizableHandle withHandle /> */}
        <Separator orientation='vertical' />
        <ResizablePanel
          defaultSize={85}
          className='transition-width duration-500 ease-in-out'
        >
          <NoteTextArea />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
