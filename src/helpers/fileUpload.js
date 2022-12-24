export const fileUpload = async (file) => {
  if (!file) throw new Error('Debe especificar el archivo a subir')

  const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dcnlp5ojh/upload'

  const formData = new FormData()

  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {
    const resp = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    })
    if (!resp.ok) throw new Error('No se pudo subir la imagen')

    const cloudinaryResp = await resp.json()
    return cloudinaryResp.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
