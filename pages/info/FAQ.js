import Head from "next/head";
import Link from "next/link";

const FQA = () => {
  return (
    <div className="w-8/12 mx-auto my-8 md:mt-48 text-gray-800 ">
      <Head>
        <title>AHT | FQA</title>
      </Head>
      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">Why AHT?</p>
        <p>
          AHT is one of the oldest, well-trusted and diverse dried fruit and
          nuts manufacturer and exporter. Proud to announce we are the leading
          company in the private label/retail industry, allow our customers to
          design their desired packaging based on the market demand, rules and
          regulation. Senior management commitment always focused on
          sustainability, quality culture, and transparency. As we are a Sedex
          member below four items always take place beside the business:
          <ul>
            <li>Environment</li>
            <li>Business ethics</li>
            <li>Health and safety</li>
            <li>Labour right</li>
          </ul>
          According to the most updated standards and rules with the best
          high-tech equipment and machinery, we design safety, quality and
          legality into our products and manufacturing processes. We guarantee
          AFLATOXIN-FREE and PESTICIDE RESIDUES-FREE products. AHT is IFS, FSSC
          22000, KOSHER, HALAL certified, SEDEX member but we are not going to
          stop here. Meanwhile, major investments and efforts made to announce
          that we already have organic certificate for Dates and Dates products
          and good news about the obtaining new organic certificates for other
          products are on the way. More than an exporter, we will be your
          consultant. We place our customers above everything else as we realize
          that every business is unique and therefore every client has
          individual requirements.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">Where are you located?</p>
        <p>
          AHT&apos;s head office is in Tehran-Iran, we can supply our loyal
          customers from our worldwide offices as well. we have our marketing
          team in 5 continents offering 24/7 online customer services.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">What are your opening hours?</p>
        <p>
          SAT –THU 8:00-18:00 IRST (GMT+3:30) Friday is the weekend in Iran, but
          we are always online on whatsapp: +989121112867, +98 912 386 5564
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">How do we contact you?</p>
        <p>
          We prefer all communications by e-mail to export@ahtfoods.com ,
          info@ahtfoods.com,where your messages will route to the appropriate
          department. Of course, you may also use a telephone or fax to connect
          us.
          <ul>
            <li>Iran Office :</li>
            <li>20 Mohri St., North Valiasr Ave.,Tehran 1966783661, Iran</li>
            <li>(+98 21) 26217316-9 (+98 21) 26217320</li>
            <li> info@aht.ir</li>
            <li> info@ahtfoods.com</li>
          </ul>
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8"> How long are prices valid?</p>
        <p>
          Prices vary based on quantity, payment, and shipping terms. Therefore
          prices quoted based on requests. All prices are subject to our final
          confirmation unless otherwise mentioned in the quotation. Mostly all
          prices are valid for three calendar days.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">How can we place orders?</p>
        <p>
          It is better to place an order by email our professional marketing
          team will get back at due course.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">
          What are your minimum order quantities?
        </p>
        <p>
          We do our best to deliver the goods at the lowest possible price to
          our customers.it is better to check the minimum order quantity with
          our sales experts case by case.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">What are your shipping terms?</p>
        <p>
          Normal shipment is “by sea”. Shipment by air, couriers, post parcel
          can also be arranged upon request.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">
          How fast can you make shipments? How fast can we receive goods?
        </p>
        <p>
          Transit period depends on a wide variety of factors – such as order
          type, quantity, number of mixed products in one shipment, shipping
          mode, or delays at customs at destination. Normally Shipments can be
          made within 2-3weeks from date of receipt of order.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">
          What quality guarantees are offered by you?
        </p>
        <p>
          AHT is IFS, FSSC 22000, KOSHER, HALAL, ISO 9001:2008, ISO 22000: 2005,
          HACCP Certified and SEDEX member. We use a wide variety of brand new
          technology and machinery in our production line, While our valued
          customers&apos; feedback has always been effective in our success.
        </p>
      </div>

      <div className="text-[#7D2F2F]">
        <p className="text-2xl my-1 mt-8">
          Will I receive options/advices to help me choose the product (s) I
          want?
        </p>
        <p>
          Yes, definitely. By consulting with our export expertise, we’re happy
          to discuss and present available options based on different factors
          such as your local market demands and delivery methods. Once you’ve
          shortlisted the products you’re interested in, we will arrange samples
          for you to test and verify particularity of product .
        </p>
      </div>
      <p className="text-[#7D2F2F]">
        Didn’t find your doubts clarified here? Fill up this{" "}
        <Link
          href={`/info/question-form`}
          className="text-[#660100] font-semibold"
        >
          Form
        </Link>{" "}
        for immediate response.
      </p>
    </div>
  );
};

export default FQA;
