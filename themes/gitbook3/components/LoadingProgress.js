export default function LoadingProgress() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div className="h-full bg-blue-500 animate-pulse"></div>
    </div>
  )
}