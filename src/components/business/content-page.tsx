import { getContentPage } from '@/server/actions/content-page'

export default async function ContentPage() {
  try {
    const data = await getContentPage()
    if (data) {
      return (
        <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
          <h1>Content Page</h1>
          <pre className="bg-slate-800 text-slate-50 p-10 rounded-lg mt-10 text-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )
    }
    return <h1>Nada a ser exibido</h1>
  } catch (error: any) {
    return (
      <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
        <h1>Content Page</h1>
        <pre className="bg-slate-800 text-slate-50 p-10 rounded-lg mt-10 text-wrap">
          {JSON.stringify(error.message, null, 2)}
        </pre>
      </div>
    )
  }
}
