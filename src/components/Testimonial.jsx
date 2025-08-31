import Card from "./Card";
export default function Testimonial() {
  const carData = [
    {
      name: "Emily R.",
      title: "Marketing Director",
      description:
        " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      img: "/image-emily.jpg",
    },
    {
      name: "Thomas S.",
      title: "Chief Operating Officer",
      description:
        "Sunnyside&apos;s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      img: "/image-thomas.jpg",
    },
    {
      name: "Jennie F.",
      title: "Business Owner",
      description:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      img: "/image-jennie.jpg",
    },
  ];

  const TestimonialElements = carData.map((item, index) => (
    <Card item={item} key={index} />
  ));
  return (
    <>
      <section className="testimonials">
        <h4>Client Testimonials</h4>
        <div className="testimonials-wrapper">{TestimonialElements}</div>
      </section>
    </>
  );
}
