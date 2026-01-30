import React, { useState } from 'react';
import { Upload, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [dragActive, setDragActive] = useState(false);

  // স্যাম্পল ইমেজের ডেটা
  const sampleImages = [
    { id: 1, label: 'Portrait', color: 'bg-blue-100' },
    { id: 2, label: 'Product', color: 'bg-green-100' },
    { id: 3, label: 'Nature', color: 'bg-purple-100' }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
        Upload your image to remove BG
      </h1>

      <div className="w-full max-w-2xl px-4">
        {/* Upload Area */}
        <label 
          htmlFor="file-upload"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          className={`relative group flex flex-col items-center justify-center w-full h-64 md:h-80 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 
            ${dragActive ? 'border-cyan-400 bg-cyan-50' : 'border-gray-900 hover:border-cyan-400 hover:text-cyan-500'}`}
        >
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            accept="image/*" 
          />
          
          <div className="flex flex-col items-center gap-4">
            <div className={`p-4 rounded-full transition-colors duration-300 ${dragActive ? 'bg-cyan-100' : 'bg-gray-100'}`}>
              <Upload size={44} className={dragActive ? 'text-cyan-500' : 'text-gray-700'} />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Drag and drop your image</h4>
              <p className="text-sm text-gray-500">PNG, JPG, JPEG, up to 10MB</p>
            </div>
          </div>
        </label>

        {/* OR Separator */}
        <div className="flex items-center my-8 w-full gap-4">
          <div className="h-[2px] flex-grow bg-black opacity-100"></div>
          <p className="text-gray-500 whitespace-nowrap italic">Not have images?</p>
          <div className="h-[2px] flex-grow bg-black opacity-100"></div>
        </div>

        {/* Sample Images Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {sampleImages.map((img) => (
            <button 
              key={img.id}
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <div className={`w-full aspect-square rounded-xl ${img.color} flex items-center justify-center border-2 border-transparent group-hover:border-cyan-400 transition-all overflow-hidden shadow-sm`}>
                <ImageIcon className="text-gray-400" size={32} />
              </div>
              <span className="text-xs font-medium text-gray-600">{img.label}</span>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <CheckCircle2 size={14} />
          <span>No image? Try one of these samples</span>
        </div>
      </div>
    </div>
  );
}

