import React, { useState } from 'react';
import { Upload, X, ImageIcon, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // স্যাম্পল ইমেজের ডেটা (এগুলো ক্লিক করলে প্রিভিউতে যাবে)
  // বাস্তবে এখানে ইমেজের URL থাকবে
  const sampleImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', label: 'Portrait' },
    { id: 2, url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400', label: 'Product' },
    { id: 3, url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', label: 'Object' }
  ];

  // ইমেজ ফাইল হ্যান্ডলার
  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const onFileChange = (e) => handleFile(e.target.files[0]);

  // স্যাম্পল ইমেজে ক্লিক করলে প্রিভিউ সেট করার ফাংশন
  const selectSample = (url) => {
    setImage(url);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center font-sans">
      
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-black px-4 leading-tight">
        Upload your image to <br className="hidden md:block" /> remove BG
      </h1>

      <div className="w-full max-w-2xl px-2">
        {!image ? (
          /* --- UPLOAD VIEW --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <label 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center w-full min-h-[18rem] md:h-[22rem] border-2 border-dashed rounded-[20px] cursor-pointer transition-all duration-300 gap-6 p-6
                ${dragActive ? 'border-cyan-400 bg-cyan-50' : 'border-black hover:border-cyan-400 hover:text-cyan-500'}`}
            >
              <input type="file" className="hidden" accept="image/*" onChange={onFileChange} />
              
              <div className="flex flex-col items-center gap-4">
                <div className={`p-5 rounded-full transition-colors ${dragActive ? 'bg-cyan-100' : 'bg-gray-100'}`}>
                   <Upload size={48} className={dragActive ? 'text-cyan-500' : 'text-black'} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-black uppercase tracking-tight">drag and drop your image</h4>
                  <p className="text-gray-500 text-sm">PNG, JPG, JPEG, up to 10MB</p>
                </div>
              </div>
            </label>

            {/* Separator Section */}
            <div className="flex items-center justify-between w-full my-10 px-2">
              <div className="w-[30%] h-[2px] bg-black"></div>
              <p className="text-gray-500 text-sm font-medium italic">Not have image's ?</p>
              <div className="w-[30%] h-[2px] bg-black"></div>
            </div>

            {/* Sample Images - Clicking these sets the image state */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {sampleImages.map((sample) => (
                <button 
                  key={sample.id} 
                  onClick={() => selectSample(sample.url)}
                  className="flex flex-col gap-2 group transition-transform active:scale-95"
                >
                  <div className="relative aspect-square bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center hover:border-cyan-400 transition-all overflow-hidden shadow-sm">
                     <img 
                        src={sample.url} 
                        alt={sample.label} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold group-hover:text-cyan-500 transition-colors">
                    {sample.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* --- PREVIEW VIEW --- */
          <div className="animate-in zoom-in-95 duration-300 flex flex-col items-center gap-6">
            <div className="relative w-full max-w-lg aspect-square md:aspect-video bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')] bg-gray-200 rounded-2xl border-2 border-black overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt="Preview" 
                className="w-full h-full object-contain p-2 drop-shadow-2xl" 
              />
              
              <button 
                onClick={() => setImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-red-500 hover:text-white text-black p-2 rounded-full transition-all shadow-lg active:scale-90"
                title="Remove image"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-4">
                <span className="bg-black/80 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm font-bold tracking-widest">
                  PREVIEW MODE
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <button className="flex-[2] py-4 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200">
                Remove Background <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setImage(null)}
                className="flex-1 py-4 border-2 border-black rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-95"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
          <CheckCircle2 size={12} className="text-green-500" />
          <span>No image? Try one of our samples</span>
        </div>
      </div>
    </div>
  );
}

              
