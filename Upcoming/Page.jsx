// app/page.js - Main page component in Next.js (using app router)
import Card from '@/components/Card';

export default function Home() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="upcoming">
        <h2 className="text-center text-[clamp(2rem,8vw,4.5rem)] italic m-5">Upcoming</h2>
        <div className="w-full h-[2px] bg-black mb-8"></div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 p-5 max-w-7xl mx-auto">
          <Card
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhZa1WolPSUAKTC1Ng-W1ZrLuK8EstduO5Ex9J4uHRBbJXMgAJY7Mkmg&s=10"
            title="image location tracker"
            category="image"
            description="quisque ancillae neque pharetra conclusionemque vulputate latine molestiae ferri possit tation et"
            buttonText="Let's Try"
          />
          <Card
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhZa1WolPSUAKTC1Ng-W1ZrLuK8EstduO5Ex9J4uHRBbJXMgAJY7Mkmg&s=10"
            title="image location tracker"
            category="image"
            description="quisque ancillae neque pharetra conclusionemque vulputate latine molestiae ferri possit tation et"
            buttonText="Let's Try"
          />
          <Card
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhZa1WolPSUAKTC1Ng-W1ZrLuK8EstduO5Ex9J4uHRBbJXMgAJY7Mkmg&s=10"
            title="image location tracker"
            category="image"
            description="quisque ancillae neque pharetra conclusionemque vulputate latine molestiae ferri possit tation et"
            buttonText="Coming soon"
          />
        </div>
      </div>
    </section>
  );
}
