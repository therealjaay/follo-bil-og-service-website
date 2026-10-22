import { Button } from '../components/Button'
import { useSeo } from '../lib/useSeo'

export function NotFound() {
  useSeo({ title: 'Siden finnes ikke', description: 'Siden du lette etter finnes ikke.', path: '/404' })
  return (
    <section className="container-x py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Denne siden finnes ikke</h1>
      <p className="mt-4 text-lg text-ink-600">Men bilen din fortjener fortsatt god service.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button to="/">Til forsiden</Button>
        <Button to="/bestill-time" variant="ghost">
          Bestill time
        </Button>
      </div>
    </section>
  )
}
