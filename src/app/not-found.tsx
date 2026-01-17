export default function notFound() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8'>
      <h1 className='text-6xl font-extrabold mb-4'>404</h1>
      <p className='text-lg mb-6'>찾을 수 없는 페이지예요.</p>
      <a href='/' className='px-4 py-2 rounded-md border border-gray-200 hover:shadow-md transition'>
        홈으로 돌아가기
      </a>
    </main>
  );
}
