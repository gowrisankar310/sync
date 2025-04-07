'use client';

import { useRef } from 'react';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

// Import CSS
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-react-image-editor/styles/material.css';

export default function SyncImageEditor({ 
  imageSrc, 
  onSave 
}: {
  imageSrc: string;
  onSave: (editedImage: string) => void;
}) {
  const editorRef = useRef<ImageEditorComponent>(null);

  const toolbar = [
    'Annotate', 'Text', 'Pen', 'Line', 'Rectangle', 'Ellipse', 'Arrow',
    'Path', 'Crop', 'RotateLeft', 'RotateRight', 'ZoomIn', 'ZoomOut',
    'Pan', 'Reset', 'Save'
  ];

  const handleToolbarClick = (args: any) => {
    if (args.item.text === 'Save') {
      editorRef.current?.export('PNG').then((data: string) => {
        onSave(data);
      });
    }
  };

  return (
    <div className="h-[600px] w-full">
      <ImageEditorComponent
        ref={editorRef}
        toolbar={toolbar}
        toolbarclick={handleToolbarClick}
        created={() => {
          if (editorRef.current && imageSrc) {
            editorRef.current.open(imageSrc);
          }
        }}
      />
    </div>
  );
}