import { PanelRightOpen } from 'lucide-react';
import NoteTextArea from './NoteTextArea';

export default function Home() {
  return (
    <main className='flex h-svh'>
      <div className='border-r p-1 py-3 md:block md:w-[20%]'>
        <PanelRightOpen strokeWidth={1} size={18} />
      </div>
      <NoteTextArea />
    </main>
  );
}
