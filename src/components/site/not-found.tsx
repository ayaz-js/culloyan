import { useEffect } from 'react'

export function NotFound() {
  useEffect(() => {
    document.title = 'Ошибка 404'
  }, [])

  return (
    <main
      className="fixed inset-0 overflow-auto bg-white px-4 py-8 text-center text-black"
      style={{ fontFamily: 'Times New Roman, Times, serif' }}
    >
      <h1 className="text-[2em] font-bold">Ошибка 404</h1>
      <hr className="my-2 border-t border-[#ccc]" />
      <p>Страница не найдена</p>
    </main>
  )
}
