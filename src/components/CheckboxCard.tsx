import { Card, Tag, Avatar, Checkbox, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { card_data } from "../data/card-data";

const CheckboxCard = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Card className='w-auto h-auto lg:p-4 bg-white'>
      <section className=' w-full  -ml-[2em] h-auto'>
        {card_data.map(({ name, city, bachelor, candidate, tags }) => (
          <div className='flex items-center max-md:w-full max-sm:w-full lg:w-[56.3vw] gap-4 px-4 py-4 h-auto border-b border-slate-200'>
            <Space className='flex gap-8'>
              <Checkbox className='w-4 h-4' onChange={onChange} />

              <Avatar className='bg-indigo-50  w-14 h-14 rounded-full flex justify-center items-center'>
                <div className='text-blue-100 text-xl font-semibold font-Poppins'>
                  AS
                </div>
              </Avatar>
            </Space>
            <div className='flex-grow flex flex-col justify-start items-start space-y-2'>
              <div className='text-black text-sm font-semibold font-Poppins'>
                {name}
              </div>
              <div className='text-black text-xs font-medium font-Poppins'>
                {city}
              </div>
              <div className='text-black text-xs font-light font-Poppins'>
                {bachelor}
              </div>
              <div className='flex justify-start items-start space-x-2 -ml-[0.5em]'>
                <Tag className='text-xs border-none text-[#1D4ED8] font-normal font-Poppins'>
                  {candidate}
                </Tag>
                <Tag className='text-xs border-none font-normal text-[#1D4ED8] font-Poppins'>
                  {candidate}
                </Tag>
              </div>
              <div className='flex justify-start items-start space-x-2 -ml-[0.2em]'>
                {tags.map(({ tag1, tag2, tag3 }) => (
                  <>
                    <div className='px-2.5 py-0.5 bg-[#F3FAFC] rounded-2xl flex justify-center items-center space-x-1'>
                      <div className='text-cyan-700 text-xs font-medium font-Poppins'>
                        {tag1}
                      </div>
                    </div>
                    <div className='px-2.5 py-0.5 bg-[#F3FAFC] rounded-2xl flex justify-center items-center space-x-1'>
                      <div className='text-cyan-700 text-xs font-medium font-Poppins'>
                        {tag2}
                      </div>
                    </div>
                    <div className='px-2.5 py-0.5 bg-[#F3FAFC] rounded-2xl flex justify-center items-center space-x-1'>
                      <div className='text-cyan-700 text-xs font-medium font-Poppins'>
                        {tag3}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Card>
  );
};

export default CheckboxCard;
