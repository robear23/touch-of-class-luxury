import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function ImageUpload({ images = [], onImageChange }) {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const newUrls = acceptedFiles.map(file => URL.createObjectURL(file))
      const combined = [...images, ...newUrls].slice(0, 5) // max 5 images
      onImageChange(combined)
    }
  }, [images, onImageChange])
  
  const removeImage = (indexToRemove) => {
    onImageChange(images.filter((_, idx) => idx !== indexToRemove))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 5
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-slate-700">Deal Images</label>
        <span className="text-xs text-slate-500">{images.length} / 5</span>
      </div>
      
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden aspect-video border border-slate-200 bg-slate-50 group">
              <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors shadow-sm"
                  title="Remove image"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {images.length < 5 && (
        <div 
          {...getRootProps()} 
          className={cn(
            "border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-200",
            images.length === 0 ? "aspect-video p-8" : "py-8",
            isDragActive ? "border-primary-500 bg-primary-50" : "border-slate-300 hover:border-slate-400 hover:bg-slate-50 bg-white"
          )}
        >
          <input {...getInputProps()} />
          <div className="p-3 bg-slate-100 rounded-full mb-3 text-slate-500 group-hover:text-primary-600">
            <UploadCloud size={28} />
          </div>
          <p className="text-slate-700 font-medium mb-1 text-sm">
            {isDragActive ? "Drop images here" : "Click to upload or drag and drop"}
          </p>
          <p className="text-slate-500 text-xs">
            SVG, PNG, JPG or WEBP (max 5 files)
          </p>
        </div>
      )}
    </div>
  )
}
