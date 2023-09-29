import { DropdownArrow } from "../assets";
import { Dropdown, Menu, Badge } from "antd";

const dropdownData = [
  {
    key: "1",
    label: (
      <span className='text-[16px] h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Applied
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          1745
        </Badge>
      </span>
    ),
  },
  {
    key: "2",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Shortlisted
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          453
        </Badge>
      </span>
    ),
  },
  {
    key: "3",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Technical Interview
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          123
        </Badge>
      </span>
    ),
  },
  {
    key: "4",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Opportunity Browsing
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          243
        </Badge>
      </span>
    ),
  },
  {
    key: "5",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Video Interview I
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          25
        </Badge>
      </span>
    ),
  },
  {
    key: "6",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Video Interview II
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          25
        </Badge>
      </span>
    ),
  },
  {
    key: "7",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Video Interview III
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          25
        </Badge>
      </span>
    ),
  },
  {
    key: "8",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Offer
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          25
        </Badge>
      </span>
    ),
  },
  {
    key: "9",
    label: (
      <span className='text-[16px]  h-[72px] font-Poppins text-[#0B0B0B] flex items-center justify-between font-normal'>
        Withdrawn
        <Badge className='bg-gray-100 px-2  rounded-[16px]' color='#F8F8F8'>
          25
        </Badge>
      </span>
    ),
  },
];

const CustomDropdown = () => {
  const menu = (
    <Menu>
      {dropdownData.map((item) => (
        <Menu.Item
          className='hover:bg-blue-400 hover:text-white'
          key={item.key}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        style={{ borderRadius: "16px 16px 0px 6px" }}
        className='w-[321px] mb-[1em] h-10 px-4 py-2 bg-white shadow justify-between items-center inline-flex cursor-pointer'
      >
        <div className='justify-start items-center gap-2 flex'>
          <div className='text-[#1D4ED8] text-base text-[16px] font-medium font-Poppins leading-snug'>
            Opportunity Browsing
          </div>
        </div>
        <div className='w-6 h-6 relative'>
          <img src={DropdownArrow} alt='dropdown' />
        </div>
      </div>
    </Dropdown>
  );
};

export default CustomDropdown;
