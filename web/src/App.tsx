import { Button } from "./components/ui/Button"

export const App = () => {
  return (
    <main className="bg-gray-200 w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full px-3">
        <div className="bg-white p-6 rounded-lg w-full max-w-[380px]">
          <h2 className="text-lg font-bold">Novo link</h2>
          <Button variant="icon" icon="copy">
            Label
          </Button>
        </div>
      </div>
    </main>
  )
}
