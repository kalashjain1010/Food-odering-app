import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <div>
     
        <Hero />
        <HomeMenu />
        <section className="text-center my-16" id="about">
          <SectionHeader sub={"Our story"} header={"About us"} />
          <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste
              quos suscipit tempora? Aperiam esse fugiat inventore laboriosam
              officiis quam rem!
            </p>
            <p>
              At consectetur delectus ducimus est facere iure molestias
              obcaecati quaerat vitae voluptate? Aspernatur dolor explicabo iste
              minus molestiae pariatur provident quibusdam saepe?
            </p>
            <p>
              Laborum molestias neque nulla obcaecati odio quia quod
              reprehenderit sit vitae voluptates? Eos, tenetur.
            </p>
          </div>
        </section>
        <section className="text-center my-8">
          <SectionHeader sub={"Don't hesitate"} header={"Contact us"} />
          <div className="mt-8">
            <a
              className="text-4xl underline text-gray-500"
              href="tel:+919754301892"
            >
              +91 9754301892
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
