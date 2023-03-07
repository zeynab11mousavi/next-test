import Head from "next/head";

import Image from "next/image";
import qualityAndFoodSafety from "../../assets/qualityAndFoodSafety/qualityAndFoodSafety";
const QualityAndFoodSafety = () => {
  return (
    <div className="w-9/12 mx-auto my-8 md:mt-48 text-[#7D2F2F]">
      <Head>
        <title>AHT | Quality and food safety</title>
      </Head>
      <h3 className="text-lg md:text-2xl justify-between md:mx-8 my-6 text-[#660100]">
        QUALITY & FOOD SAFETY
      </h3>
      <div className="w-full md:flex items-center my-4 md:mb-16">
        <p className="md:w-7/12 text-justify mx-auto">
          Investments in manpower, training, quality culture, research and
          development, plant, and equipment over the last 5 years has already
          resulted in a substantial increase in sales and the elimination of
          quality issues. Now AHT is the leader in supplying the FIRST CLASS
          quality of dried fruit & nuts to the globe. Our wide variety of Laser
          Sorter, X-Ray Scanner, Metal detector and Hand-Picked products meet
          the highest quality standards which help us to offer excellent
          services to our international clients all around the world. We focus
          on QUALITY, SAFETY, LEGALITY, and INTEGRITY. Customer satisfaction is
          the key to success. Following tractability rules and comprehensive
          implemented tractability system, presence of knowledge-based quality
          experts let us claim that all AHT products are traceable from farm to
          fork.
        </p>
        <Image
          className=" h-64 mx-auto"
          src={qualityAndFoodSafety.one}
          alt="aht facility"
        />
      </div>

      <div className="w-full md:flex justify-between items-center my-4 md:my-16">
        <Image
          className=" h-64 mx-auto"
          src={qualityAndFoodSafety.two}
          alt="aht facility"
        />
        <p className="md:w-7/12 mx-auto text-justify">
          Future quality actions and trend analysis of corrective and preventive
          actions besides the several risks assessment on the process are all
          the basis of continuous improvement and our quality assurance
          department concerns. HACCP system and GFSI standards widely used
          amongst our existing suppliers. Our commitment to attaining the
          highest quality standards exemplified in our achievement of IFS, FSSC
          22000, SEDEX, KOSHER, and HALAL, ISO 9001:2008, ISO 22000:2005 & HACCP
          certificates. With this in mind, our approach to Quality Assurance is
          always proactive. Suppliers are chosen carefully via many inspections
          and audits, meanwhile maintaining a regular and strong Supplier
          Relationship Management in the supply chain is a must. Verification
          and validation of the entire process and implemented system by
          Internal audit, third party audit, lab test analysis by ISO17025
          accredited laboratory and considering the newest Scientific and
          technical developments had helped us to be a pioneer.
        </p>
      </div>
      <div className="w-full md:flex justify-between items-center my-4 md:my-16">
        <p className="md:w-7/12 mx-auto text-justify">
          It’s important to us that we adequately address the needs of our
          clients and therefore, we must demonstrate our diligent compliance
          with legislation and good practice. This we achieve in the following
          ways: We are IFS, FSSC 22000, SEDEX, KOSHER and HALAL, ISO 9001:2008,
          ISO 22000:2005 & HACCP Certified by accredited certification bodies.
          Clients can be confident that every move is undertaken and audited as
          per the highest standards and regulations. We supply to an agreed
          signed specification which includes a reference to food safety
          legislation, combined if necessary with certificates of conformity to
          the agreed specification. Our supplies in conformance with
          specifications are backed up by production documentation that is both
          accurate and meaningful. If any doubt still remains please feel free
          to contact our QA department on: qa@aht.ir , qa@ahtfoods.com
        </p>
        <Image
          className=" h-64 mx-auto"
          src={qualityAndFoodSafety.three}
          alt="aht facility"
        />
      </div>

      <div className="w-full md:flex items-center my-4 md:my-16">
        <Image
          className=" md:w-3/12 mx-auto"
          src={qualityAndFoodSafety.four}
          alt="aht facility"
        />
        <p className="md:w-7/12 mx-auto text-justify">
          At AHT Sahra Ruby Co. we believe that success depends on the supply of
          high-quality products that meet and exceed customer and consumer
          expectations of our brand products. Fundamental to this is the
          responsibility to ensure the quality and food safety of all the
          products we manufacture and export. For meeting this aim, improving
          the quality of Product and safety practices can strengthen production
          process, improve staff performance, and accelerate attainment of
          Sustainability Development Goals. AHT organization has a duty to
          inform all personnel’s prior to the effective date of new or revised
          policies, procedures and methods. Failure to do so may cause a staff
          member to follow an outdated policy, procedures or methods. To protect
          the organization from any non-conformities, production documents are
          reviewed regularly during each working shift startup.
        </p>
      </div>
      <div className="w-full md:flex items-center my-4 md:my-16">
        <p className="md:w-7/12 mx-auto text-justify">
          We are monitoring critical control points, related standards,
          procedures and methods to effectively manage food safety risks
          associated with changes in products, processes and technologies.
          <br />
          All AHT Sahra Ruby Co. operations are committed to continuous
          improvement, which is measured, evaluated and validated for
          effectiveness through internal and external audits.
          <br />
          AHT company is at the forefront of food inspection technology, and our
          product inspection devices can be adapted for the screening of all
          kinds of dried fruits. . Our X-ray inspection system can find defects
          in products no matter what type of packaging is used for final
          product.
        </p>
        <Image
          className=" h-64 mx-auto ml-2"
          src={qualityAndFoodSafety.five}
          alt="aht facility"
        />
      </div>
    </div>
  );
};

export default QualityAndFoodSafety;
