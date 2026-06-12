import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage
    src={`${basePath || ''}${src}`}
    unoptimized={typeof src === 'string' && src.endsWith('.gif')}
    {...rest}
  />
)

export default Image
