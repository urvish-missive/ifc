import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-pine bg-weave px-5 text-center text-cream">
      <Container>
        <p className="eyebrow text-marigold">404</p>
        <h1 className="mt-4 text-display !text-cream">This page wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-sage-mist/80">
          The link may be old or mistyped. Let’s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary" size="lg" showArrow>
            Back home
          </Button>
          <Button to="/how-it-works" variant="ghostDark" size="lg">
            How 1FC works
          </Button>
        </div>
      </Container>
    </section>
  )
}
