import CodeEditor from '@/components/displayFormet/CodeEditor';
import ItemBox from '../components/ItemBox'
export default async function Home() {
  const Items = ["Common", "Header", "Footer", "Banner", "Contact", "List", "Box", "Blog", "Button", "Section", "Card", "Carousal", "Input", "Dashboard", "Error", "Faq", "Feature", "Gallery", "Login", "Paigination", "Pricing", "Profile", "Review", "ShopingCart", "Team", "Testimonial", "Weather"];


  return (
    <>
      <section className='my-12'>
        <div className="container">
        <h2 className="text-4xl mb-10 text-center">All About Tailwind Components</h2>

          <div className="grid grid-cols-5 gap-5">
            {Items.map((ele) => (
              <ItemBox key={ele} title={ele} />
            ))}
          </div>  

        </div>
      </section>
    </>
  );
}
