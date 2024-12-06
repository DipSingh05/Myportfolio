// @flow strict
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './CertificateCard';
import { certificate } from '../PortfolioData';



function Certificate() {

  return (
    <div id='certificates' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
        <h1 className="text-center text-4xl text-primary font-semibold">
        CERTIFICATES
      </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          certificate.slice(0,4).map((cer) => (
            
            <BlogCard 

            key={cer.cover_image} 
            cover_image = {cer.cover_image}
            name = {cer.name}
            issuedate = {cer.issuedate}
            issueby = {cer.issueby}
            issuerimg = {cer.issuerimg}
            platform = {cer.platform}
            description= {cer.description}
            marks = {cer.marks}
            url = {cer.link}
            />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <a
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default Certificate;