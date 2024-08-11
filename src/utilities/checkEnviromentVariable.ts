export default function checkEnvironmentVariable(
  value: string | undefined,
  name: string
) {
  if (!value) {
    throw new Error(`${name} não está definido nas variáveis de ambiente`)
  }

  // console.log('[ACCESS TO ENV VARIABLE]: ', name, value)
  return value
}
