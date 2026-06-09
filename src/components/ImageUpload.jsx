import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function ImageUpload({ image, onImageChange }) {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      // Create a mock URL for preview
      const previewUrl = URL.createObjectURL(file)
      onImageChange(previewUrl)
    }
  }, [onImageChange])
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  })

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 mb-2">Deal Image</label>
      
      {image ? (
        <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-200 bg-slate-50 group">
          <img src={image} alt="Preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              type="button"
              onClick={() => onImageChange('')}
              className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-600 flex items-center gap-2 transition-colors shadow-sm"
            >
              <X size={16} /> Remove Image
            </button>
          </div>
        </div>
      ) : (
        <div 
          {...getRootProps()} 
          className={cn(
            "border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-200 aspect-video",
            isDragActive ? "border-primary-500 bg-primary-50" : "border-slate-300 hover:border-slate-400 hover:bg-slate-50 bg-white"
          )}
        >
          <input {...getInputProps()} />
          <div className="p-4 bg-slate-100 rounded-full mb-4 text-slate-500 group-hover:text-primary-600">
            <UploadCloud size={32} />
          </div>
          <p className="text-slate-700 font-medium mb-1">
            {isDragActive ? "Drop the image here" : "Click to upload or drag and drop"}
          </p>
          <p className="text-slate-500 text-xs">
            SVG, PNG, JPG or WEBP (max. 800x400px)
          </p>
        </div>
      )}
    </div>
  )
}
