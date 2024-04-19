'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const NoteTextArea = () => {
  return (
    <div className='flex grow flex-col gap-3 p-3 align-middle md:mx-48'>
      <p className='flex place-content-center text-xs text-muted-foreground'>
        Untitled
      </p>

      <Input
        className='border-none text-2xl font-bold text-neutral-300 focus-visible:ring-0 md:text-4xl'
        autoFocus
        placeholder='Title'
      />
      <Textarea
        className='h-[70%] resize-none border-none text-neutral-300 focus-visible:ring-0 md:text-lg'
        placeholder='Write your thoughts here...'
      />
    </div>
  );
};

export default NoteTextArea;
