'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function ImageDialog({ imgUrl }: { imgUrl?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="inline-block w-full cursor-zoom-in">
          <Image
            src={imgUrl || '/placeholder.svg'}
            alt="Image"
            width={1920}
            height={1080}
            priority
            className={'h-full w-full object-contain'}
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="min-h-screen max-w-full min-w-screen cursor-zoom-out border-0 bg-transparent p-0 shadow-none"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        <DialogHeader className={'sr-only'}>
          <DialogTitle>Image Preview for field renderer</DialogTitle>
        </DialogHeader>
        <Image
          src={imgUrl || '/placeholder.svg'}
          alt="Image"
          width={1920}
          height={1080}
          className="h-full w-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
