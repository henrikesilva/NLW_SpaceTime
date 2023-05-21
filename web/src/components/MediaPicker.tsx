'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    // <> Funciona como uma DIV invisivel
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible w-0 h-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video object-cover w-full rounded-lg"
        />
      )}
    </> //
  )
}
